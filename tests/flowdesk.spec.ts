import { expect, test } from "@playwright/test";
test("Dashboard 展示 KPI 并进入最近流程编辑器", async ({ page }) => {
  await page.goto("/");
  await expect(
    page.getByRole("heading", { name: "流程运营总览" }),
  ).toBeVisible();
  await expect(page.getByTestId("kpi-流程总数")).toHaveText("12");
  await expect(page.getByTestId("kpi-异常实例")).toHaveText("22");
  await page.getByTestId("recent-workflow").first().click();
  await expect(page.getByTestId("flow-canvas")).toBeVisible();
});
test("编辑、校验、修复条件并预览分支", async ({ page }) => {
  await page.goto("/workflows/wf-1/edit");
  await page.getByTestId("canvas-node-approval").click();
  await expect(page.getByTestId("config-panel")).toContainText("审批设置");
  await page.getByTestId("approver-source").selectOption({ label: "固定角色" });
  await page.getByTestId("save-node-config").click();
  await page.getByRole("button", { name: "保存草稿" }).click();
  await expect(page.getByRole("status")).toContainText("草稿已保存");
  await page.getByTestId("run-validation").click();
  await expect(page.getByTestId("canvas-node-condition")).toHaveClass(
    /node-error/,
  );
  await expect(page.getByTestId("problem-panel")).toContainText(
    "条件分支规则未配置",
  );
  const before = Number(
    (await page.getByTestId("error-count").textContent())?.match(/\d+/)?.[0],
  );
  await page.getByTestId("canvas-node-condition").click();
  await page.getByTestId("condition-rule").selectOption("amount");
  await page.getByTestId("save-node-config").click();
  await page.getByTestId("run-validation").click();
  await expect
    .poll(async () =>
      Number(
        (await page.getByTestId("error-count").textContent())?.match(
          /\d+/,
        )?.[0],
      ),
    )
    .toBeLessThan(before);
  await page.getByRole("button", { name: "预览" }).click();
  await page.getByTestId("preview-amount").fill("8000");
  await expect(page.getByTestId("branch-result")).toContainText("高额分支");
});
test("发布后 Dashboard 与流程列表同步", async ({ page }) => {
  await page.goto("/workflows/wf-1/edit");
  await page.getByRole("button", { name: "发布", exact: true }).click();
  await expect(page.getByRole("status")).toContainText("流程发布成功");
  await page.getByRole("link", { name: "流程管理" }).click();
  await expect(page.getByTestId("workflow-wf-1")).toContainText("已发布");
  await expect(page.getByTestId("workflow-wf-1")).toContainText("V2");
  await page.getByRole("link", { name: "总览" }).click();
  await expect(page.getByTestId("recent-workflow").first()).toBeVisible();
});
test("运行监控显示异常实例时间线和当前节点高亮", async ({ page }) => {
  await page.goto("/monitor");
  await page.getByTestId("instance-INS-2026-0001").click();
  await expect(page.getByTestId("instance-detail")).toContainText("异常");
  await expect(page.getByTestId("execution-timeline")).toContainText(
    "当前停留",
  );
  await expect(page.locator(".runtime-current")).toBeVisible();
});
test("版本比较并恢复历史版本", async ({ page }) => {
  await page.goto("/workflows/wf-2/versions");
  await expect(page.getByTestId("version-compare")).toContainText("新增节点");
  await expect(page.getByTestId("version-compare")).toContainText("高额通知");
  await page.getByTestId("restore-v1").click();
  await expect(page.getByTestId("flow-canvas")).toBeVisible();
  await expect(page.getByRole("status")).toContainText("已恢复版本 V1");
  await expect(page.getByTestId("canvas-node-notify")).toHaveCount(0);
});
test("搜索无结果展示空状态", async ({ page }) => {
  await page.goto("/workflows");
  await page.getByLabel("搜索流程").fill("绝对不存在的流程");
  await expect(page.getByText("没有匹配的流程")).toBeVisible();
});

test("1440px 关键页面无横向溢出且控制台无错误", async ({ page }, testInfo) => {
  const errors: string[] = [];
  page.on("console", (message) => {
    if (message.type() === "error") errors.push(message.text());
  });
  for (const path of ["/", "/workflows", "/workflows/wf-1/edit", "/monitor"]) {
    await page.goto(path);
    await page.waitForLoadState("networkidle");
    expect(
      await page.evaluate(() => document.documentElement.scrollWidth),
    ).toBeLessThanOrEqual(1440);
  }
  await page.goto("/");
  await page.screenshot({
    path: testInfo.outputPath("dashboard-1440.png"),
    fullPage: true,
  });
  expect(errors).toEqual([]);
});
