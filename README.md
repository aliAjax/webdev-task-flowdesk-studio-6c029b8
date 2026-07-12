# FlowDesk Studio

FlowDesk Studio 是纯前端企业级低代码流程编排与审批监控演示平台。项目使用
React、TypeScript、Vite、React Flow 和 Zustand；所有业务数据来自仓库内的
`mock-data/`，不需要后端、真实登录或外部 API。

## 运行环境

项目使用以下固定工具链：

- Node.js `22.22.3`
- npm `10.9.8`
- `package-lock.json` lockfile v3

Node 版本同时记录在 `.nvmrc` 和 `package.json#engines`，npm 版本记录在
`package.json#packageManager`。使用 nvm 时可执行：

```bash
nvm install
nvm use
node --version
npm --version
```

预期输出分别为 `v22.22.3` 和 `10.9.8`。

## 安装与启动

必须使用 lockfile 安装固定依赖：

```bash
npm ci
npm run dev
```

打开终端实际输出的本地地址，默认是 `http://localhost:5173`。应用只要求
现代桌面浏览器，主要验收视口为 1440 x 900。

项目不需要额外 mock 服务。Vite 会直接打包并加载仓库内的 `mock-data/`。

## 构建

```bash
npm run build
```

该命令先执行 TypeScript 项目构建检查，再生成 `dist/` 生产文件。

## Playwright 安装与测试

首次运行时安装仓库指定 Playwright 版本对应的 Chromium：

```bash
npm run test:install
```

运行全部功能测试和页面截图测试：

```bash
npm test
```

打开 Playwright UI 调试测试：

```bash
npm run test:ui
```

Playwright 会独占启动当前项目的 `http://127.0.0.1:4173`。配置禁止复用已经
存在的 4173 服务；如果端口被其他进程占用，测试会明确失败，避免误测其他
项目。

测试输出统一写入：

```text
artifacts/playwright/              失败截图、trace 和测试附件
artifacts/playwright-results.json  JSON 测试报告
```

测试覆盖 Dashboard KPI、Dashboard 到编辑器导航、审批配置、画布与问题面板
双层校验反馈、Condition 修复、动态表单分支、发布联动、异常实例详情、版本
比较、版本恢复、空搜索结果、1440 px 溢出和浏览器 console error。

## 页面截图输出

执行以下命令，在 1440 x 900 Chromium 视口下重新生成六个主要页面截图：

```bash
npm run screenshots
```

输出文件：

```text
artifacts/screenshots/01-dashboard.png
artifacts/screenshots/02-workflows.png
artifacts/screenshots/03-workflow-editor.png
artifacts/screenshots/04-form-preview.png
artifacts/screenshots/05-runtime-monitor.png
artifacts/screenshots/06-version-history.png
```

Workflows 和 Runtime Monitor 使用全页截图以覆盖长列表；Workflow Editor 使用
固定 1440 x 900 视口截图，避免其 `100vh` 三栏布局在全页截图时被重排。

根目录 `screenshots/` 保存任务当前视觉基线，`artifacts/screenshots/` 保存由
当前代码和 Playwright 可重复生成的评测证据。

## Browser 与 MCP 验证路径

`metadata.json` 中的 `Browser` 表示交付验收需要浏览器观察。推荐使用 Codex
内置 Browser/MCP；它不是应用运行依赖，也不需要个人登录态。

人工验证步骤：

1. 执行 `npm ci && npm run dev`。
2. 使用内置 Browser 打开终端输出的本地地址，并设置 1440 x 900 视口。
3. 依次检查 `/`、`/workflows`、`/workflows/wf-1/edit`、
   `/workflows/wf-1/preview`、`/monitor` 和
   `/workflows/wf-2/versions`。
4. 按 `target_states.md` 的完整验收链路执行编辑、校验、预览、发布、监控、
   版本比较和恢复。
5. 检查 DOM 可定位状态、页面重叠与溢出，以及 console error 和 page error。
6. 将最终测试、trace 和截图统一保存在 `artifacts/` 或 `submission/`。

Browser/MCP 仅访问本地应用，不需要读取浏览器账号、cookie 或登录信息。

## 执行轨迹

[`sota-run.jsonl`](./sota-run.jsonl) 是原始执行事件流，包含会话元数据、消息、
工具调用、工具返回、补丁事件和 token 统计，是轨迹数据的权威来源。

[`trajectory.md`](./trajectory.md) 是由该 JSONL 机械转换得到的可读版本，按原始
时间顺序整理用户需求、助手回复、59 次工具调用及其结果、补丁摘要和任务完成
信息。文件开头记录了源 JSONL 的 SHA-256，可使用以下命令复核：

```bash
shasum -a 256 sota-run.jsonl
```

没有公开摘要的加密推理事件不会被推测或还原；增量 token 事件会汇总为最终
统计。需要审计完整原始字段时，应以 `sota-run.jsonl` 为准。

## 功能

- Dashboard：KPI、最近编辑、发布检查和异常实例。
- 流程管理：搜索、状态/业务域筛选、排序、新建、复制和归档。
- 流程编辑器：节点库、React Flow 画布、拖放、选择、连线、删除、配置、
  保存、校验、发布和问题面板。
- 表单预览：根据 Form 节点动态生成表单，金额输入实时改变 Condition 分支。
- 运行监控：80 条实例、状态筛选、执行时间线和当前节点高亮。
- 版本历史：版本结构与配置比较、发布说明和恢复历史草稿。

`mock-data/` 包含 12 个流程、80 条实例（22 条异常或超时）、8 个用户、
6 个角色、5 个业务域及多种边界数据。同一浏览器会话内的编辑、发布和恢复
通过全局 store 联动；刷新页面后恢复初始 mock 数据。

## 目录

```text
src/components/       通用布局和状态组件
src/pages/            产品页面与核心编辑器
src/store/            全局状态及业务操作
src/types/            TypeScript 类型出口
mock-data/            结构化本地业务数据
tests/                Playwright 功能与截图测试
screenshots/          当前视觉基线
artifacts/            可重新生成的评测产物
rubric.json           Rubric 验收标准
target_states.md      可观察目标状态
sota-run.jsonl        原始执行事件流
trajectory.md         可读执行轨迹
```

## 已知限制

- 所有数据仅保存在内存中，刷新页面会恢复初始 mock 数据。
- Webhook、通知、工单和系统记录均为本地模拟，不会调用真实服务。
- 附件是本地占位交互，不会上传文件。
- 只验收现代桌面浏览器和 1440 px 主视口，不提供移动端 App 或桌面客户端。
- 项目不包含真实身份认证、权限系统、后端数据库或跨会话持久化。
