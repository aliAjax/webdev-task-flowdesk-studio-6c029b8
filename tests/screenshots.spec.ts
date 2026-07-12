import { mkdir } from "node:fs/promises";
import path from "node:path";
import { expect, test, type Locator, type Page } from "@playwright/test";

const screenshotDirectory = path.join(
  process.cwd(),
  "artifacts",
  "screenshots",
);

type ScreenshotTarget = {
  file: string;
  fullPage: boolean;
  name: string;
  ready: (page: Page) => Locator;
  route: string;
};

const targets: ScreenshotTarget[] = [
  {
    name: "Dashboard",
    route: "/",
    file: "01-dashboard.png",
    fullPage: true,
    ready: (page) =>
      page.getByRole("heading", { name: "流程运营总览", exact: true }),
  },
  {
    name: "Workflows",
    route: "/workflows",
    file: "02-workflows.png",
    fullPage: true,
    ready: (page) =>
      page.getByRole("heading", { name: "流程管理", exact: true }),
  },
  {
    name: "Workflow Editor",
    route: "/workflows/wf-1/edit",
    file: "03-workflow-editor.png",
    fullPage: false,
    ready: (page) => page.getByTestId("canvas-node-end"),
  },
  {
    name: "Form Preview",
    route: "/workflows/wf-1/preview",
    file: "04-form-preview.png",
    fullPage: true,
    ready: (page) =>
      page.getByRole("heading", { name: "差旅费用审批", exact: true }),
  },
  {
    name: "Runtime Monitor",
    route: "/monitor",
    file: "05-runtime-monitor.png",
    fullPage: true,
    ready: (page) => page.getByTestId("instance-INS-2026-0001"),
  },
  {
    name: "Version History",
    route: "/workflows/wf-2/versions",
    file: "06-version-history.png",
    fullPage: true,
    ready: (page) => page.getByTestId("version-compare"),
  },
];

test.beforeAll(async () => {
  await mkdir(screenshotDirectory, { recursive: true });
});

for (const target of targets) {
  test(`生成 ${target.name} 页面截图`, async ({ page }) => {
    await page.goto(target.route);
    await expect(target.ready(page)).toBeVisible();
    await page.screenshot({
      path: path.join(screenshotDirectory, target.file),
      fullPage: target.fullPage,
    });
  });
}
