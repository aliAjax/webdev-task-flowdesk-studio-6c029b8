# Execution Trajectory

> Generated mechanically from `sota-run.jsonl`. The source JSONL remains the authoritative record.

## Session Overview

- Source: `sota-run.jsonl`
- Source SHA-256: `cbd24bc90a83e7a0515e2b673fe6abd5eaeb366f13dba430d58aaa3bc80f93ce`
- Session ID: `019f55d3-11b8-7962-aa67-3ec82dc49a3a`
- Turn ID: `019f55d4-4674-7df3-b8ca-719e336f1f9b`
- Original working directory: `/root/hutubo/flowdesk-studio`
- Originator: `codex-tui`
- CLI version: `0.144.1`
- Model provider: `openai`
- Started: `2026-07-12T10:16:42.872Z`
- Completed: `2026-07-12T11:06:08.353Z`
- Duration: `2965.482 seconds`
- Time to first token: `2288 ms`
- Source events: `253`
- Tool calls: `59`
- Total tokens: `2853049`
- Input tokens: `2824795`
- Cached input tokens: `2682880`
- Output tokens: `28254`

## Rendering Notes

- User and assistant messages are retained verbatim.
- Tool calls and tool outputs are retained verbatim and ordered by timestamp.
- Patch completion events retain status, stdout, stderr, and changed file paths; full patch bodies already appear in their originating tool calls.
- 37 encrypted reasoning events had empty public summaries and are intentionally not reconstructed.
- 60 incremental token-count events are collapsed into the final totals above.
- Repeated system/developer bootstrap payloads, world state, and turn context are omitted from the timeline.

## Timeline

### 1. Task Started

- Timestamp: `2026-07-12T10:16:42.872Z`
- Turn: `019f55d4-4674-7df3-b8ca-719e336f1f9b`
- Context window: `353400`
- Collaboration mode: `default`

### 2. User Message

- Timestamp: `2026-07-12T10:16:42.901Z`

`````markdown
请从 0 到 1 创建一个仅在 Web 浏览器中运行的高难度前端项目：FlowDesk Studio，一个企业级低代码流程编排与审批监控平台。

项目必须是纯前端 Web 应用，可在本地浏览器中打开和操作。不需要后端服务、不需要真实登录、不需要外部 API、不需要移动端 App、不需要桌面客户端。所有数据使用本地 mock 数据。

技术要求：
- 使用 React + TypeScript + Vite。
- 推荐使用 React Flow 或同类成熟库实现流程画布，不要手写底层拖拽/连线引擎。
- 使用本地 mock 数据驱动页面。
- 不允许依赖外部 API、远程服务、真实登录态或不可复现资源。
- 项目需要能通过 `npm install && npm run dev` 启动。
- 必须提供 Playwright 测试与浏览器验证路径。
- 必须提供清晰 README。

产品目标：
构建一个 Web 端企业流程编排平台。用户可以在浏览器中查看流程列表、编辑流程图、配置节点、运行校验、预览表单、查看流程实例、比较版本，并完成一次从编辑到发布再到监控的完整链路。

页面要求：

1. Dashboard
- 展示流程总数、已发布流程数、草稿流程数、异常实例数、平均审批耗时。
- 展示最近编辑流程、待处理发布检查、异常流程实例。
- 点击最近流程可进入流程编辑器。
- Dashboard 的数据需要随流程发布、实例状态变化而更新。

2. Workflows
- 展示流程列表，包含名称、业务域、状态、版本号、最近编辑人、更新时间、异常实例数。
- 支持搜索、状态筛选、业务域筛选、排序。
- 支持新建流程、复制流程、归档流程。
- 点击流程进入编辑器，并保留当前流程上下文。

3. Workflow Editor
编辑器是本项目核心，必须包含：
- 左侧节点组件面板。
- 中间流程画布。
- 右侧节点配置面板。
- 顶部工具栏：保存草稿、运行校验、预览、发布、版本历史。
- 底部问题面板：展示流程配置错误和警告。

流程画布至少支持：
- Start 开始节点
- Form 表单填写节点
- Approval 审批节点
- Condition 条件分支节点
- Automation 自动化节点
- Notify 通知节点
- End 结束节点

编辑器交互要求：
- 支持选择节点、拖动节点、连接节点、删除节点。
- 选中节点时，右侧配置面板展示对应配置项。
- 节点状态需要展示：未配置、配置中、校验通过、校验失败。
- 运行校验时，需要在画布节点和底部问题面板同时标记错误。
- Condition 节点至少支持两个分支。
- 不允许出现孤立的必经节点。
- 画布中的节点、连线、错误标记和当前选中态需要可被浏览器观察和 Playwright 定位。

节点配置要求：
- Form 节点可配置字段：文本、数字、金额、日期、下拉、附件。
- Approval 节点可配置审批人来源：直属主管、固定角色、指定成员、表单字段。
- Condition 节点可配置规则：金额大于某值、部门等于某值、附件是否为空。
- Automation 节点可配置本地 mock 动作，例如创建工单、发送 Webhook、写入系统记录，但不需要真实调用外部服务。
- Notify 节点可配置通知对象、模板和触发时机。
- 配置面板需要处理保存状态、错误状态和字段校验。

4. Form Preview
- 根据当前流程中的 Form 节点动态生成表单预览。
- 支持填写表单并展示字段校验。
- 表单字段变化需要影响 Condition 分支模拟结果。
- 需要支持长文本、必填字段、金额格式、附件占位、空选项等边界状态。

5. Runtime Monitor
- 展示流程实例列表。
- 每个实例包含申请人、业务域、当前节点、状态、提交时间、耗时、风险等级。
- 支持筛选异常、超时、进行中、已完成实例。
- 点击实例后展示详情。
- 详情中展示执行时间线，并在流程图上高亮当前节点。

6. Version History
- 展示同一流程的多个版本。
- 支持比较两个版本。
- 对比内容包括新增节点、删除节点、配置变化、连线变化、发布说明。
- 支持恢复历史版本为草稿。
- 恢复后需要回到 Workflow Editor，并显示恢复成功状态和恢复后的节点结构。

视觉要求：
- 整体风格应像专业企业级 SaaS 工具，不是营销页。
- 信息密度高，但层级清晰。
- 编辑器需要稳定三栏布局：节点库、画布、配置面板。
- 画布、节点、连线、配置表单、问题面板、版本对比都需要清晰可辨。
- 避免单一蓝紫色或纯暗色主题。
- 不允许页面元素明显重叠、按钮文字溢出、面板互相遮挡。
- 关键状态需要包含 hover、focus、selected、disabled、loading、empty、error、success。
- 只要求在现代桌面 Web 浏览器中可用，优先适配 1440px 宽度。
- 在浏览器实际打开后，主要页面不能出现明显布局抖动、文字溢出或控制台错误。

数据要求：
- 在项目中提供 `mock-data/` 文件夹。
- 至少包含：
  - 12 个流程
  - 每个流程至少 1 个版本
  - 至少 3 个流程包含 8 个以上节点
  - 80 条流程实例
  - 20 条异常或超时实例
  - 8 个用户
  - 6 个角色
  - 5 个业务域
- 数据必须结构化，不允许在组件中硬编码大量业务数据。
- 需要包含边界情况：
  - 空流程
  - 孤立节点
  - 缺少结束节点
  - 条件分支未配置
  - 审批人为空
  - 字段校验失败
  - 超长流程名称
  - 超长审批说明
  - 无异常实例
  - 无搜索结果

工程要求：
- 需要有全局状态管理，保证流程列表、编辑器、表单预览、运行监控和版本历史之间联动。
- 路由需要支持 Dashboard、Workflows、Workflow Editor、Form Preview、Runtime Monitor、Version History。
- 至少拆分为合理的 components、hooks、services、types、stores。
- 所有核心数据结构必须有 TypeScript 类型。
- 不允许把全部逻辑堆在一个文件里。
- 需要处理 loading、empty、error、success 四类状态。
- 浏览器控制台不应有明显错误。

完整交互链路：
必须实现以下链路：
1. 从 Dashboard 点击一个最近编辑流程，进入 Workflow Editor。
2. 在编辑器中选中一个 Approval 节点，右侧配置面板展示审批配置。
3. 修改审批人来源并保存草稿。
4. 点击运行校验，如果流程存在错误，需要在画布节点和底部问题面板同时展示。
5. 修复一个 Condition 节点配置错误。
6. 再次运行校验，错误数量减少。
7. 打开 Form Preview，填写金额字段，使条件分支结果发生变化。
8. 返回编辑器并发布流程。
9. Dashboard 和 Workflows 页面中的流程状态、版本号、发布时间同步更新。
10. 进入 Runtime Monitor，打开一个异常实例详情。
11. 实例详情中展示执行时间线，并在流程图上高亮当前节点。
12. 进入 Version History，对比当前版本和历史版本。
13. 恢复历史版本为草稿，并回到编辑器显示恢复后的节点结构。

Playwright 测试与浏览器验证要求：
- 必须提供 `playwright.config.ts` 和 `tests/` 目录。
- 必须使用 Playwright 进行关键链路验证。
- Playwright 测试至少覆盖：
  1. Dashboard 加载和核心 KPI 展示。
  2. 从 Dashboard 点击最近流程进入 Workflow Editor。
  3. 在编辑器中选中 Approval 节点，右侧配置面板展示审批配置。
  4. 修改审批人来源并保存草稿。
  5. 点击运行校验，画布节点和底部问题面板同时展示错误。
  6. 修复 Condition 节点配置错误后，再次校验错误数量减少。
  7. 打开 Form Preview，填写金额字段，Condition 分支模拟结果发生变化。
  8. 发布流程后，Dashboard 和 Workflows 中的状态、版本号同步更新。
  9. Runtime Monitor 打开异常实例详情，并展示执行时间线和当前节点高亮。
  10. Version History 对比两个版本，并恢复历史版本为草稿。
- 测试需要有明确断言，不允许只检查页面能打开。
- 完成实现后必须实际运行 Playwright 测试。
- 必须用浏览器打开本地页面进行人工验证。
- 必须检查浏览器 console 是否有明显错误。
- 必须根据浏览器观察结果修复明显 UI 和交互问题。

交付要求：
最终交付完整前端项目，至少包含：
- `README.md`
- `package.json`
- `src/`
- `mock-data/`
- `tests/`
- `playwright.config.ts`
- 清晰的启动说明
- 清晰的测试说明
- 清晰的功能说明
`````

### 3. Assistant Commentary

- Timestamp: `2026-07-12T10:16:47.070Z`

`````markdown
我会先检查现有仓库结构和约束文件，再搭建完整应用、mock 数据与测试。实现后我会实际启动开发服务器、运行 Playwright，并用浏览器检查关键页面、控制台和 1440px 布局。
`````

### 4. Tool Call: `exec`

- Timestamp: `2026-07-12T10:16:48.412Z`
- Call ID: `call_mHbxeBLD0q0FsxheQKd5HYEQ`

`````javascript
const r = await tools.exec_command({cmd:"pwd && rg --files -g 'AGENTS.md' -g '!node_modules' -g '!*dist*' | head -20 && find . -maxdepth 2 -type f | sort | head -80","workdir":"/root/hutubo/flowdesk-studio","yield_time_ms":10000,"max_output_tokens":12000}); text(r.output)

`````

### 5. Tool Result

- Timestamp: `2026-07-12T10:16:48.502Z`
- Call ID: `call_mHbxeBLD0q0FsxheQKd5HYEQ`

`````text
Script completed
Wall time 0.1 seconds
Output:

/root/hutubo/flowdesk-studio
./README.md
./metadata.json
./mock-data/catalog.ts
./mock-data/instances.ts
./mock-data/types.ts
./mock-data/workflows.ts
./task.md

`````

### 6. Tool Call: `exec`

- Timestamp: `2026-07-12T10:16:51.842Z`
- Call ID: `call_EtJJwMXLSvGO8dIAeSmeQBV9`

`````javascript
const r = await tools.exec_command({cmd:"sed -n '1,240p' README.md && sed -n '1,240p' mock-data/types.ts && sed -n '1,160p' mock-data/workflows.ts && sed -n '1,100p' mock-data/instances.ts","workdir":"/root/hutubo/flowdesk-studio","yield_time_ms":10000,"max_output_tokens":30000}); text(r.output)

`````

### 7. Tool Result

- Timestamp: `2026-07-12T10:16:51.915Z`
- Call ID: `call_EtJJwMXLSvGO8dIAeSmeQBV9`

`````text
Script completed
Wall time 0.1 seconds
Output:

export type WorkflowStatus = 'draft' | 'published' | 'archived';
export type NodeKind = 'start' | 'form' | 'approval' | 'condition' | 'automation' | 'notify' | 'end';
export type NodeState = 'unconfigured' | 'configuring' | 'valid' | 'invalid';

export interface FormField {
  id: string;
  label: string;
  type: 'text' | 'number' | 'amount' | 'date' | 'select' | 'attachment';
  required: boolean;
  options?: string[];
}

export interface FlowNode {
  id: string;
  type: NodeKind;
  position: { x: number; y: number };
  data: {
    label: string;
    state: NodeState;
    config: Record<string, unknown>;
  };
}

export interface FlowEdge {
  id: string;
  source: string;
  target: string;
  label?: string;
}

export interface Version {
  version: number;
  createdAt: string;
  note: string;
  nodes: FlowNode[];
  edges: FlowEdge[];
}

export interface Workflow {
  id: string;
  name: string;
  domain: string;
  status: WorkflowStatus;
  version: number;
  editor: string;
  updatedAt: string;
  publishedAt?: string;
  abnormalCount: number;
  nodes: FlowNode[];
  edges: FlowEdge[];
  versions: Version[];
}

export interface Instance {
  id: string;
  workflowId: string;
  applicant: string;
  domain: string;
  currentNode: string;
  status: 'abnormal' | 'timeout' | 'running' | 'completed';
  submittedAt: string;
  duration: string;
  risk: 'high' | 'medium' | 'low';
  timeline: Array<{ title: string; time: string; status: string }>;
}

export interface ValidationIssue {
  nodeId: string;
  level: 'error' | 'warning';
  message: string;
}
import type { FlowEdge, FlowNode, Workflow } from './types';

const createNode = (
  id: string,
  type: FlowNode['type'],
  x: number,
  y: number,
  label: string,
  config: Record<string, unknown> = {},
): FlowNode => ({
  id,
  type,
  position: { x, y },
  data: {
    label,
    state: Object.keys(config).length ? 'valid' : 'unconfigured',
    config,
  },
});

const createStandardGraph = (broken = false) => {
  const nodes: FlowNode[] = [
    createNode('start', 'start', 20, 150, '开始', { ok: true }),
    createNode('form', 'form', 210, 150, '提交申请', {
      fields: [
        { id: 'reason', label: '申请说明', type: 'text', required: true },
        { id: 'amount', label: '申请金额', type: 'amount', required: true },
        { id: 'attachment', label: '附件', type: 'attachment', required: false },
      ],
    }),
    createNode('approval', 'approval', 420, 150, '直属主管审批', {
      approverSource: '直属主管',
      instruction: '请确认申请内容与预算归属',
    }),
    createNode('condition', 'condition', 630, 150, '金额判断',
      broken ? {} : { ruleType: 'amount', operator: '>', value: 5000 }),
    createNode('notify', 'notify', 850, 40, '高额通知', {
      targets: '财务审批人',
      template: '高额申请提醒',
      timing: '分支进入时',
    }),
    createNode('automation', 'automation', 850, 260, '记录系统', { action: '写入系统记录' }),
    createNode('end', 'end', 1070, 150, '结束', { ok: true }),
  ];

  const edgeTuples: Array<[string, string, string?]> = [
    ['start', 'form'],
    ['form', 'approval'],
    ['approval', 'condition'],
    ['condition', 'notify', '大于 5,000'],
    ['condition', 'automation', '其他'],
    ['notify', 'end'],
    ['automation', 'end'],
  ];
  const edges: FlowEdge[] = edgeTuples.map(([source, target, label], index) => ({
    id: `e${index}`,
    source,
    target,
    label,
  }));

  return { nodes, edges };
};

const names = [
  '差旅费用审批',
  '采购合同审批',
  '员工入职流程',
  'IT 服务请求',
  '用印申请',
  '供应商准入',
  '年度预算调整',
  '客户退款审批',
  '法务审查流程',
  '资产领用审批',
  '营销活动报备',
  '跨区域大型采购及多部门联合审批流程（集团特别管控版）',
];

const workflowDomains = ['财务', '采购', '人力资源', 'IT服务', '法务'];
const editors = ['林秋', '陈默', '周礼', '王宁'];

export const workflows: Workflow[] = names.map((name, index) => {
  const graph = index === 10 ? { nodes: [] as FlowNode[], edges: [] as FlowEdge[] } : createStandardGraph(index === 0 || index === 3);

  if (index === 8) graph.nodes = graph.nodes.filter((node) => node.type !== 'end');
  if (index === 9) graph.nodes.push(createNode('orphan', 'approval', 650, 390, '孤立审批'));

  const status: Workflow['status'] = index % 4 === 0 ? 'draft' : index % 5 === 0 ? 'archived' : 'published';
  const oldNodes = graph.nodes
    .filter((node) => node.id !== 'notify')
    .map((node) => ({ ...node, data: { ...node.data } }));

  return {
    id: `wf-${index + 1}`,
    name,
    domain: workflowDomains[index % workflowDomains.length],
    status,
    version: (index % 3) + 1,
    editor: editors[index % editors.length],
    updatedAt: `2026-07-${String(10 - (index % 9)).padStart(2, '0')} ${9 + (index % 8)}:20`,
    publishedAt: status === 'published' ? '2026-07-08 14:30' : undefined,
    abnormalCount: index === 7 ? 0 : index % 4,
    nodes: graph.nodes,
    edges: graph.edges,
    versions: [
      {
        version: 1,
        createdAt: '2026-06-12 10:00',
        note: '初始化流程结构',
        nodes: oldNodes,
        edges: graph.edges.filter((edge) => edge.source !== 'notify' && edge.target !== 'notify'),
      },
      {
        version: 2,
        createdAt: '2026-07-01 16:20',
        note: '增加金额分支与通知节点',
        nodes: graph.nodes,
        edges: graph.edges,
      },
    ],
  };
});
import { domains, users } from './catalog';
import type { Instance } from './types';

export const instances: Instance[] = Array.from({ length: 80 }, (_, index) => {
  const status: Instance['status'] =
    index < 12 ? 'abnormal' : index < 22 ? 'timeout' : index < 50 ? 'running' : 'completed';

  return {
    id: `INS-2026-${String(index + 1).padStart(4, '0')}`,
    workflowId: `wf-${(index % 12) + 1}`,
    applicant: users[index % users.length],
    domain: domains[index % domains.length],
    currentNode: index % 3 === 0 ? '直属主管审批' : '金额判断',
    status,
    submittedAt: `2026-07-${String(10 - (index % 9)).padStart(2, '0')} ${String(8 + (index % 10)).padStart(2, '0')}:10`,
    duration: status === 'timeout' ? `${28 + index}h` : `${(index % 9) + 1}h ${(index % 6) * 10}m`,
    risk: index < 22 ? 'high' : index < 45 ? 'medium' : 'low',
    timeline: [
      { title: '提交申请', time: '09:10', status: 'completed' },
      {
        title: '直属主管审批',
        time: '10:24',
        status: index % 3 === 0 ? 'current' : 'completed',
      },
      {
        title: '金额判断',
        time: '11:05',
        status: index % 3 !== 0 ? 'current' : 'pending',
      },
    ],
  };
});

`````

### 8. Assistant Commentary

- Timestamp: `2026-07-12T10:16:56.885Z`

`````markdown
仓库里已有一组结构化 mock 数据雏形（12 个流程、80 个实例），但没有应用代码或工程配置。我会保留并扩展这批数据，重点补齐跨页面状态联动、可定位的编辑器交互、版本恢复，以及完整端到端测试。
`````

### 9. Tool Call: `exec`

- Timestamp: `2026-07-12T10:17:38.132Z`
- Call ID: `call_EILMFVNFcnoTkq7HGIfcR5VX`

`````javascript
const patch = "*** Begin Patch\n*** Add File: package.json\n+{\"name\":\"flowdesk-studio\",\"private\":true,\"version\":\"1.0.0\",\"type\":\"module\",\"scripts\":{\"dev\":\"vite --host 0.0.0.0\",\"build\":\"tsc -b && vite build\",\"preview\":\"vite preview --host 0.0.0.0\",\"test\":\"playwright test\",\"test:ui\":\"playwright test --ui\"},\"dependencies\":{\"@vitejs/plugin-react\":\"latest\",\"vite\":\"latest\",\"typescript\":\"latest\",\"react\":\"latest\",\"react-dom\":\"latest\",\"react-router-dom\":\"latest\",\"@xyflow/react\":\"latest\",\"lucide-react\":\"latest\",\"zustand\":\"latest\"},\"devDependencies\":{\"@playwright/test\":\"latest\",\"@types/react\":\"latest\",\"@types/react-dom\":\"latest\"}}\n*** Add File: index.html\n+<div id=\"root\"></div><script type=\"module\" src=\"/src/main.tsx\"></script>\n*** Add File: tsconfig.json\n+{\"files\":[],\"references\":[{\"path\":\"./tsconfig.app.json\"}]}\n*** Add File: tsconfig.app.json\n+{\"compilerOptions\":{\"target\":\"ES2022\",\"useDefineForClassFields\":true,\"lib\":[\"ES2022\",\"DOM\",\"DOM.Iterable\"],\"allowJs\":false,\"skipLibCheck\":true,\"esModuleInterop\":true,\"allowSyntheticDefaultImports\":true,\"strict\":true,\"forceConsistentCasingInFileNames\":true,\"module\":\"ESNext\",\"moduleResolution\":\"Bundler\",\"resolveJsonModule\":true,\"isolatedModules\":true,\"noEmit\":true,\"jsx\":\"react-jsx\"},\"include\":[\"src\",\"mock-data\",\"vite.config.ts\",\"playwright.config.ts\"]}\n*** Add File: vite.config.ts\n+import { defineConfig } from 'vite';\n+import react from '@vitejs/plugin-react';\n+export default defineConfig({plugins:[react()]});\n*** Add File: src/main.tsx\n+import React from 'react';\n+import ReactDOM from 'react-dom/client';\n+import { BrowserRouter } from 'react-router-dom';\n+import App from './App';\n+import '@xyflow/react/dist/style.css';\n+import './styles.css';\n+ReactDOM.createRoot(document.getElementById('root')!).render(<React.StrictMode><BrowserRouter><App/></BrowserRouter></React.StrictMode>);\n*** Add File: src/types/index.ts\n+export * from '../../mock-data/types';\n*** Add File: src/store/useStudio.ts\n+import { create } from 'zustand';\n+import { workflows as seed } from '../../mock-data/workflows';\n+import { instances as instanceSeed } from '../../mock-data/instances';\n+import type { FlowEdge, FlowNode, Instance, ValidationIssue, Workflow } from '../types';\n+\n+type Studio = {workflows:Workflow[];instances:Instance[];activeId:string;issues:ValidationIssue[];toast:string;setActive:(id:string)=>void;updateGraph:(id:string,n:FlowNode[],e:FlowEdge[])=>void;updateNode:(wid:string,nid:string,config:Record<string,unknown>)=>void;validate:(id:string)=>ValidationIssue[];save:(id:string)=>void;publish:(id:string)=>void;copy:(id:string)=>void;archive:(id:string)=>void;create:()=>string;restore:(id:string,v:number)=>void;clearToast:()=>void};\n+const clone=<T,>(x:T):T=>structuredClone(x);\n+export const useStudio=create<Studio>((set,get)=>({\n+ workflows:clone(seed),instances:clone(instanceSeed),activeId:'wf-1',issues:[],toast:'',\n+ setActive:(activeId)=>set({activeId,issues:[]}),clearToast:()=>set({toast:''}),\n+ updateGraph:(id,nodes,edges)=>set(s=>({workflows:s.workflows.map(w=>w.id===id?{...w,nodes,edges}:w)})),\n+ updateNode:(wid,nid,config)=>set(s=>({workflows:s.workflows.map(w=>w.id===wid?{...w,nodes:w.nodes.map(n=>n.id===nid?{...n,data:{...n.data,config,state:'configuring'}}:n)}:w)})),\n+ validate:(id)=>{const w=get().workflows.find(x=>x.id===id)!;const issues:ValidationIssue[]=[]; if(!w.nodes.some(n=>n.type==='end'))issues.push({nodeId:w.nodes[0]?.id||'canvas',level:'error',message:'流程缺少结束节点'}); const linked=new Set(w.edges.flatMap(e=>[e.source,e.target])); w.nodes.forEach(n=>{if(n.type!=='start'&&!linked.has(n.id))issues.push({nodeId:n.id,level:'error',message:`${n.data.label} 是孤立的必经节点`});if(n.type==='condition'&&!n.data.config.ruleType)issues.push({nodeId:n.id,level:'error',message:'条件分支规则未配置'});if(n.type==='approval'&&!n.data.config.approverSource)issues.push({nodeId:n.id,level:'error',message:'审批人不能为空'});}); set(s=>({issues,workflows:s.workflows.map(x=>x.id===id?{...x,nodes:x.nodes.map(n=>({...n,data:{...n.data,state:issues.some(i=>i.nodeId===n.id)?'invalid':'valid'}}))}:x)}));return issues;},\n+ save:(id)=>set(s=>({toast:'草稿已保存',workflows:s.workflows.map(w=>w.id===id?{...w,status:'draft',updatedAt:'2026-07-12 16:40',editor:'当前用户'}:w)})),\n+ publish:(id)=>set(s=>({toast:'流程发布成功',workflows:s.workflows.map(w=>w.id===id?{...w,status:'published',version:w.version+1,publishedAt:'2026-07-12 16:45',updatedAt:'2026-07-12 16:45',versions:[...w.versions,{version:w.version+1,createdAt:'2026-07-12 16:45',note:'编辑器发布',nodes:clone(w.nodes),edges:clone(w.edges)}]}:w)})),\n+ copy:(id)=>set(s=>{const w=s.workflows.find(x=>x.id===id)!;return{workflows:[{...clone(w),id:`wf-${Date.now()}`,name:`${w.name}（副本）`,status:'draft',version:1},...s.workflows],toast:'流程已复制'}}),\n+ archive:(id)=>set(s=>({workflows:s.workflows.map(w=>w.id===id?{...w,status:'archived'}:w),toast:'流程已归档'})),\n+ create:()=>{const id=`wf-${Date.now()}`;set(s=>({activeId:id,workflows:[{id,name:'未命名流程',domain:'财务',status:'draft',version:1,editor:'当前用户',updatedAt:'2026-07-12 16:50',abnormalCount:0,nodes:[],edges:[],versions:[]},...s.workflows]}));return id;},\n+ restore:(id,v)=>set(s=>{const w=s.workflows.find(x=>x.id===id)!;const ver=w.versions.find(x=>x.version===v)!;return{activeId:id,toast:`已恢复版本 V${v} 为草稿`,workflows:s.workflows.map(x=>x.id===id?{...x,status:'draft',nodes:clone(ver.nodes),edges:clone(ver.edges),updatedAt:'2026-07-12 16:55'}:x)}})\n+}));\n*** Add File: src/components/Layout.tsx\n+import {Activity, GitBranch, History, LayoutDashboard, Workflow} from 'lucide-react';\n+import {NavLink, Outlet} from 'react-router-dom';\n+import {useStudio} from '../store/useStudio';\n+export default function Layout(){const toast=useStudio(s=>s.toast);return <div className=\"app-shell\"><aside className=\"sidebar\"><div className=\"brand\"><span>F</span><div>FlowDesk<small>STUDIO</small></div></div><nav><NavLink to=\"/\"><LayoutDashboard/>总览</NavLink><NavLink to=\"/workflows\"><Workflow/>流程管理</NavLink><NavLink to=\"/monitor\"><Activity/>运行监控</NavLink><NavLink to=\"/versions\"><History/>版本中心</NavLink></nav><div className=\"workspace\"><GitBranch/>企业工作区<small>生产环境 · 本地演示</small></div></aside><main><header className=\"topbar\"><div><b>FlowDesk 工作台</b><small>企业流程运营中心</small></div><div className=\"top-actions\"><button className=\"icon-btn\">⌘ K</button><span className=\"avatar\">林</span><div>林秋<small>流程管理员</small></div></div></header><div className=\"page\"><Outlet/></div></main>{toast&&<div className=\"toast\" role=\"status\">✓ {toast}</div>}</div>}\n*** Add File: src/components/Common.tsx\n+import type {ReactNode} from 'react';\n+export const Status=({value}:{value:string})=><span className={`status status-${value}`}>{({published:'已发布',draft:'草稿',archived:'已归档',abnormal:'异常',timeout:'超时',running:'进行中',completed:'已完成'} as Record<string,string>)[value]||value}</span>;\n+export const PageHead=({eyebrow,title,desc,actions}:{eyebrow:string,title:string,desc:string,actions?:ReactNode})=><div className=\"page-head\"><div><div className=\"eyebrow\">{eyebrow}</div><h1>{title}</h1><p>{desc}</p></div><div className=\"actions\">{actions}</div></div>;\n+export const Empty=({text='暂无数据'}:{text?:string})=><div className=\"empty\"><b>⌁</b><span>{text}</span><small>请调整筛选条件后重试</small></div>;\n*** End Patch";
text(await tools.apply_patch(patch));

`````

### 10. Patch Applied

- Timestamp: `2026-07-12T10:17:39.331Z`
- Call ID: `exec-a4de5cd6-66b6-4dc0-b800-131bb4e38423`
- Success: `true`
- Changed files: `/root/hutubo/flowdesk-studio/index.html`, `/root/hutubo/flowdesk-studio/package.json`, `/root/hutubo/flowdesk-studio/src/components/Common.tsx`, `/root/hutubo/flowdesk-studio/src/components/Layout.tsx`, `/root/hutubo/flowdesk-studio/src/main.tsx`, `/root/hutubo/flowdesk-studio/src/store/useStudio.ts`, `/root/hutubo/flowdesk-studio/src/types/index.ts`, `/root/hutubo/flowdesk-studio/tsconfig.app.json`, `/root/hutubo/flowdesk-studio/tsconfig.json`, `/root/hutubo/flowdesk-studio/vite.config.ts`
`````text
Success. Updated the following files:
A package.json
A index.html
A tsconfig.json
A tsconfig.app.json
A vite.config.ts
A src/main.tsx
A src/types/index.ts
A src/store/useStudio.ts
A src/components/Layout.tsx
A src/components/Common.tsx

`````

### 11. Tool Result

- Timestamp: `2026-07-12T10:17:39.336Z`
- Call ID: `call_EILMFVNFcnoTkq7HGIfcR5VX`

`````text
Script completed
Wall time 1.2 seconds
Output:

{}
`````

### 12. Tool Call: `exec`

- Timestamp: `2026-07-12T10:18:18.891Z`
- Call ID: `call_FFhFvAZrWEfXqIXjhTXjkLP4`

`````javascript
const patch = "*** Begin Patch\n*** Add File: src/pages/Dashboard.tsx\n+import {AlertTriangle,ArrowRight,CheckCircle2,Clock3,FileStack,GitPullRequestDraft} from 'lucide-react';\n+import {useNavigate} from 'react-router-dom';import {useStudio} from '../store/useStudio';import {PageHead,Status} from '../components/Common';\n+export default function Dashboard(){const nav=useNavigate(),ws=useStudio(s=>s.workflows),ins=useStudio(s=>s.instances);const pubs=ws.filter(w=>w.status==='published').length,drafts=ws.filter(w=>w.status==='draft').length,bad=ins.filter(i=>i.status==='abnormal'||i.status==='timeout');return <><PageHead eyebrow=\"OPERATIONS OVERVIEW\" title=\"流程运营总览\" desc=\"监控企业流程健康度，快速处理发布检查与运行异常\" actions={<><button className=\"secondary\" onClick={()=>nav('/monitor')}>查看运行监控</button><button onClick={()=>nav('/workflows')}>管理全部流程</button></>}/><div className=\"kpis\"><K icon={<FileStack/>} label=\"流程总数\" val={ws.length} sub=\"覆盖 5 个业务域\"/><K icon={<CheckCircle2/>} label=\"已发布流程\" val={pubs} sub=\"当前生产可用\" good/><K icon={<GitPullRequestDraft/>} label=\"草稿流程\" val={drafts} sub=\"等待配置或发布\"/><K icon={<AlertTriangle/>} label=\"异常实例\" val={bad.length} sub=\"需要立即关注\" bad/><K icon={<Clock3/>} label=\"平均审批耗时\" val=\"6.4h\" sub=\"较上周 ↓ 12%\" good/></div><div className=\"grid-main\"><section className=\"panel\"><div className=\"panel-head\"><div><h2>最近编辑流程</h2><p>按更新时间排序</p></div><button className=\"link\" onClick={()=>nav('/workflows')}>查看全部 <ArrowRight/></button></div><div className=\"recent-list\">{ws.slice().sort((a,b)=>b.updatedAt.localeCompare(a.updatedAt)).slice(0,5).map(w=><button className=\"recent-row\" data-testid=\"recent-workflow\" key={w.id} onClick={()=>{useStudio.getState().setActive(w.id);nav(`/workflows/${w.id}/edit`)}}><span className=\"flow-icon\">⌘</span><span><b>{w.name}</b><small>{w.domain} · {w.editor} 编辑</small></span><Status value={w.status}/><span className=\"muted\">V{w.version}</span><span className=\"muted\">{w.updatedAt}</span><ArrowRight/></button>)}</div></section><aside className=\"side-stack\"><section className=\"panel\"><div className=\"panel-head\"><div><h2>待处理发布检查</h2><p>草稿中的配置风险</p></div><span className=\"count\">{drafts}</span></div>{ws.filter(w=>w.status==='draft').slice(0,3).map(w=><div className=\"alert-row\" key={w.id}><AlertTriangle/><div><b>{w.name}</b><small>{w.nodes.length===0?'尚未添加流程节点':'存在待修复配置'}</small></div></div>)}</section><section className=\"panel\"><div className=\"panel-head\"><div><h2>异常实例</h2><p>近 24 小时</p></div><button className=\"link\" onClick={()=>nav('/monitor')}>处理</button></div>{bad.slice(0,3).map(i=><div className=\"alert-row\" key={i.id}><span className=\"risk-dot\"/><div><b>{i.id}</b><small>{i.applicant} · {i.currentNode}</small></div><Status value={i.status}/></div>)}</section></aside></div></>}\n+function K(p:{icon:React.ReactNode,label:string,val:string|number,sub:string,good?:boolean,bad?:boolean}){return <div className=\"kpi\"><div className=\"kpi-top\"><span className={p.bad?'red':p.good?'green':''}>{p.icon}</span><small>{p.label}</small></div><strong data-testid={`kpi-${p.label}`}>{p.val}</strong><p>{p.sub}</p></div>}\n*** Add File: src/pages/Workflows.tsx\n+import {Archive,Copy,Plus,Search} from 'lucide-react';import {useMemo,useState} from 'react';import {useNavigate} from 'react-router-dom';import {Empty,PageHead,Status} from '../components/Common';import {useStudio} from '../store/useStudio';\n+export default function Workflows(){const nav=useNavigate(),ws=useStudio(s=>s.workflows),[q,setQ]=useState(''),[status,setStatus]=useState('all'),[domain,setDomain]=useState('all'),[sort,setSort]=useState('updated');const rows=useMemo(()=>ws.filter(w=>w.name.toLowerCase().includes(q.toLowerCase())&&(status==='all'||w.status===status)&&(domain==='all'||w.domain===domain)).sort((a,b)=>sort==='name'?a.name.localeCompare(b.name):b.updatedAt.localeCompare(a.updatedAt)),[ws,q,status,domain,sort]);const open=(id:string)=>{useStudio.getState().setActive(id);nav(`/workflows/${id}/edit`)};return <><PageHead eyebrow=\"WORKFLOW LIBRARY\" title=\"流程管理\" desc={`集中管理 ${ws.length} 个企业流程，跟踪版本、状态与运行健康度`} actions={<button onClick={()=>{const id=useStudio.getState().create();nav(`/workflows/${id}/edit`)}}><Plus/>新建流程</button>}/><div className=\"panel\"><div className=\"filters\"><label className=\"search\"><Search/><input aria-label=\"搜索流程\" placeholder=\"搜索流程名称...\" value={q} onChange={e=>setQ(e.target.value)}/></label><select aria-label=\"状态筛选\" value={status} onChange={e=>setStatus(e.target.value)}><option value=\"all\">全部状态</option><option value=\"published\">已发布</option><option value=\"draft\">草稿</option><option value=\"archived\">已归档</option></select><select aria-label=\"业务域筛选\" value={domain} onChange={e=>setDomain(e.target.value)}><option value=\"all\">全部业务域</option>{[...new Set(ws.map(w=>w.domain))].map(x=><option key={x}>{x}</option>)}</select><select aria-label=\"排序\" value={sort} onChange={e=>setSort(e.target.value)}><option value=\"updated\">最近更新</option><option value=\"name\">名称排序</option></select><span className=\"result-count\">{rows.length} 条结果</span></div>{rows.length?<div className=\"table-wrap\"><table><thead><tr><th>流程名称</th><th>业务域</th><th>状态</th><th>版本</th><th>最近编辑人</th><th>更新时间</th><th>异常实例</th><th>操作</th></tr></thead><tbody>{rows.map(w=><tr key={w.id} data-testid={`workflow-${w.id}`}><td><button className=\"name-link\" onClick={()=>open(w.id)}><span className=\"flow-icon\">⌘</span><span><b>{w.name}</b><small>{w.nodes.length} 个节点</small></span></button></td><td>{w.domain}</td><td><Status value={w.status}/></td><td>V{w.version}</td><td>{w.editor}</td><td>{w.updatedAt}</td><td><span className={w.abnormalCount?'danger-text':''}>{w.abnormalCount}</span></td><td><div className=\"row-actions\"><button title=\"复制\" onClick={()=>useStudio.getState().copy(w.id)}><Copy/></button><button title=\"归档\" onClick={()=>useStudio.getState().archive(w.id)}><Archive/></button></div></td></tr>)}</tbody></table></div>:<Empty text=\"没有匹配的流程\"/>}</div></>}\n*** Add File: src/App.tsx\n+import {Navigate,Route,Routes} from 'react-router-dom';import Layout from './components/Layout';import Dashboard from './pages/Dashboard';import Workflows from './pages/Workflows';import Editor from './pages/Editor';import Preview from './pages/Preview';import Monitor from './pages/Monitor';import Versions from './pages/Versions';\n+export default function App(){return <Routes><Route element={<Layout/>}><Route path=\"/\" element={<Dashboard/>}/><Route path=\"/workflows\" element={<Workflows/>}/><Route path=\"/workflows/:id/edit\" element={<Editor/>}/><Route path=\"/workflows/:id/preview\" element={<Preview/>}/><Route path=\"/monitor\" element={<Monitor/>}/><Route path=\"/versions\" element={<Versions/>}/><Route path=\"/workflows/:id/versions\" element={<Versions/>}/><Route path=\"*\" element={<Navigate to=\"/\"/>}/></Route></Routes>}\n*** End Patch";
text(await tools.apply_patch(patch));

`````

### 13. Patch Applied

- Timestamp: `2026-07-12T10:18:19.271Z`
- Call ID: `exec-052f2228-8738-4959-99b5-7128b7ff185d`
- Success: `true`
- Changed files: `/root/hutubo/flowdesk-studio/src/App.tsx`, `/root/hutubo/flowdesk-studio/src/pages/Dashboard.tsx`, `/root/hutubo/flowdesk-studio/src/pages/Workflows.tsx`
`````text
Success. Updated the following files:
A src/pages/Dashboard.tsx
A src/pages/Workflows.tsx
A src/App.tsx

`````

### 14. Tool Result

- Timestamp: `2026-07-12T10:18:19.275Z`
- Call ID: `call_FFhFvAZrWEfXqIXjhTXjkLP4`

`````text
Script completed
Wall time 0.4 seconds
Output:

{}
`````

### 15. Assistant Commentary

- Timestamp: `2026-07-12T10:18:25.867Z`

`````markdown
应用骨架与 Dashboard / Workflows 已完成，状态数据由同一个 Zustand store 驱动。接下来实现核心编辑器：React Flow 画布、节点状态、配置保存、双层校验反馈和拖放/连线/删除交互；这些元素都会提供稳定的 `data-testid` 供 Playwright 定位。
`````

### 16. Tool Call: `exec`

- Timestamp: `2026-07-12T10:19:16.918Z`
- Call ID: `call_lncJKCw5bc9ApGI4ZsWTN7pv`

`````javascript
const patch = "*** Begin Patch\n*** Add File: src/pages/Editor.tsx\n+import {useCallback,useMemo,useState} from 'react';import {useNavigate,useParams} from 'react-router-dom';import {addEdge,Background,Controls,Handle,MiniMap,Position,ReactFlow,useEdgesState,useNodesState,type Connection,type NodeProps} from '@xyflow/react';import {AlertTriangle,CheckCircle2,Clock,Eye,History,Play,Plus,Save,Send,Trash2,XCircle} from 'lucide-react';import {useStudio} from '../store/useStudio';import type {FlowNode,NodeKind} from '../types';\n+const info:Record<NodeKind,{name:string,icon:string,color:string}>={start:{name:'开始',icon:'▶',color:'#16a085'},form:{name:'表单填写',icon:'▤',color:'#2878c8'},approval:{name:'审批',icon:'✓',color:'#dd7a24'},condition:{name:'条件分支',icon:'◇',color:'#7b61a8'},automation:{name:'自动化',icon:'⚙',color:'#188d88'},notify:{name:'通知',icon:'✦',color:'#c05d70'},end:{name:'结束',icon:'■',color:'#546170'}};\n+function FlowCard({data,selected,id}:NodeProps){const d=data as FlowNode['data'];const meta=info[(data.kind as NodeKind)||'form'];return <div data-testid={`canvas-node-${id}`} className={`flow-node ${selected?'selected':''} ${d.state==='invalid'?'node-error':''}`}><Handle type=\"target\" position={Position.Left}/><div className=\"node-stripe\" style={{background:meta.color}}/><div className=\"node-icon\" style={{color:meta.color}}>{meta.icon}</div><div className=\"node-copy\"><small>{meta.name}</small><b>{d.label}</b><span className={`node-state ${d.state}`}>{d.state==='invalid'?'校验失败':d.state==='valid'?'校验通过':d.state==='configuring'?'配置中':'未配置'}</span></div>{d.state==='invalid'&&<AlertTriangle className=\"node-alert\"/>}<Handle type=\"source\" position={Position.Right}/></div>}\n+const nodeTypes={studio:FlowCard};\n+export default function Editor(){const {id='wf-1'}=useParams(),nav=useNavigate(),workflow=useStudio(s=>s.workflows.find(w=>w.id===id)),globalIssues=useStudio(s=>s.issues);const initial=useMemo(()=>workflow?.nodes.map(n=>({...n,type:'studio',data:{...n.data,kind:n.type}}))||[],[id]);const [nodes,setNodes,onNodesChange]=useNodesState(initial),[edges,setEdges,onEdgesChange]=useEdgesState(workflow?.edges||[]),[selected,setSelected]=useState<string|null>(null),[problemsOpen,setProblemsOpen]=useState(true);if(!workflow)return <div>流程不存在</div>;\n+ const sync=()=>useStudio.getState().updateGraph(id,nodes.map(n=>({id:n.id,type:n.data.kind as NodeKind,position:n.position,data:{label:String(n.data.label),state:n.data.state as FlowNode['data']['state'],config:n.data.config as Record<string,unknown>}})),edges.map(e=>({id:e.id,source:e.source,target:e.target,label:String(e.label||'')})));\n+ const connect=useCallback((c:Connection)=>setEdges(es=>addEdge({...c,id:`e-${Date.now()}`},es)),[]);const del=()=>{if(!selected)return;setNodes(ns=>ns.filter(n=>n.id!==selected));setEdges(es=>es.filter(e=>e.source!==selected&&e.target!==selected));setSelected(null)};\n+ const add=(kind:NodeKind,pos={x:300,y:220})=>{const nid=`${kind}-${Date.now()}`;setNodes(ns=>[...ns,{id:nid,type:'studio',position:pos,data:{kind,label:info[kind].name,state:'unconfigured',config:{}}}]);setSelected(nid)};\n+ const validate=()=>{sync();setTimeout(()=>{const issues=useStudio.getState().validate(id);const latest=useStudio.getState().workflows.find(w=>w.id===id)!;setNodes(ns=>ns.map(n=>({...n,data:{...n.data,state:latest.nodes.find(x=>x.id===n.id)?.data.state||n.data.state}})));setProblemsOpen(true)},0)};\n+ return <div className=\"editor-page\"><div className=\"editor-toolbar\"><div className=\"editor-title\"><button className=\"back\" onClick={()=>nav('/workflows')}>‹</button><div><div><b>{workflow.name}</b><span className=\"status status-draft\">{workflow.status==='published'?'已发布':'草稿'}</span></div><small>{workflow.domain} · V{workflow.version} · {workflow.updatedAt}</small></div></div><div className=\"editor-actions\"><button className=\"secondary\" onClick={()=>{sync();useStudio.getState().save(id)}}><Save/>保存草稿</button><button className=\"secondary\" data-testid=\"run-validation\" onClick={validate}><Play/>运行校验</button><button className=\"secondary\" onClick={()=>{sync();nav(`/workflows/${id}/preview`)}}><Eye/>预览</button><button className=\"secondary\" onClick={()=>nav(`/workflows/${id}/versions`)}><History/>版本历史</button><button onClick={()=>{sync();useStudio.getState().publish(id)}}><Send/>发布</button></div></div><div className=\"editor-workspace\"><aside className=\"node-library\"><h3>节点组件</h3><p>拖拽或点击添加至画布</p>{(Object.keys(info) as NodeKind[]).map(k=><button draggable onDragStart={e=>e.dataTransfer.setData('kind',k)} onClick={()=>add(k)} key={k}><span style={{color:info[k].color}}>{info[k].icon}</span><div><b>{info[k].name}</b><small>{desc[k]}</small></div><Plus/></button>)}</aside><div className=\"canvas-area\" data-testid=\"flow-canvas\" onDrop={e=>{e.preventDefault();const k=e.dataTransfer.getData('kind') as NodeKind;if(k)add(k,{x:e.clientX-330,y:e.clientY-180})}} onDragOver={e=>e.preventDefault()}><div className=\"canvas-toolbar\"><span>{nodes.length} 节点 · {edges.length} 连线</span><button disabled={!selected} onClick={del}><Trash2/>删除节点</button></div><ReactFlow nodes={nodes} edges={edges} onNodesChange={onNodesChange} onEdgesChange={onEdgesChange} onConnect={connect} nodeTypes={nodeTypes} onNodeClick={(_,n)=>setSelected(n.id)} onPaneClick={()=>setSelected(null)} fitView elementsSelectable deleteKeyCode={['Backspace','Delete']}><Background gap={20} size={1}/><MiniMap pannable/><Controls/></ReactFlow></div><Config node={nodes.find(n=>n.id===selected)} onSave={(config,label)=>{setNodes(ns=>ns.map(n=>n.id===selected?{...n,data:{...n.data,label,config,state:'configuring'}}:n));useStudio.getState().updateNode(id,selected!,config)}}/></div><div className={`problem-panel ${problemsOpen?'':'collapsed'}`} data-testid=\"problem-panel\"><div className=\"problem-head\" onClick={()=>setProblemsOpen(x=>!x)}><div><AlertTriangle/><b>问题面板</b><span className=\"error-count\" data-testid=\"error-count\">{globalIssues.filter(i=>i.level==='error').length} 个错误</span></div><span>{problemsOpen?'收起':'展开'}</span></div>{problemsOpen&&<div className=\"problems\">{globalIssues.length?globalIssues.map((i,k)=><button key={k} data-testid=\"validation-issue\" onClick={()=>setSelected(i.nodeId)}><XCircle/><span><b>{i.message}</b><small>节点：{nodes.find(n=>n.id===i.nodeId)?.data.label||'画布'} · 必须修复后才能发布</small></span></button>):<div className=\"all-good\"><CheckCircle2/>当前未发现配置问题，点击「运行校验」执行检查</div>}</div>}</div></div>}\n+const desc:Record<NodeKind,string>={start:'流程唯一入口',form:'收集业务数据',approval:'人工审批任务',condition:'规则分支判断',automation:'执行本地动作',notify:'发送消息提醒',end:'流程终止节点'};\n+function Config({node,onSave}:{node:any,onSave:(c:Record<string,unknown>,l:string)=>void}){const [tick,setTick]=useState(0);if(!node)return <aside className=\"config-panel empty-config\"><div className=\"empty-icon\">⌁</div><h3>选择一个节点</h3><p>在画布中选择节点以编辑它的配置</p></aside>;const c={...(node.data.config||{})};const rerender=()=>setTick(tick+1);return <aside className=\"config-panel\" data-testid=\"config-panel\"><div className=\"config-head\"><div><span>{info[node.data.kind as NodeKind].icon}</span><div><small>节点配置</small><h3>{node.data.label}</h3></div></div><span className={`node-state ${node.data.state}`}>{node.data.state==='valid'?'校验通过':'配置中'}</span></div><label>节点名称<input defaultValue={node.data.label} id=\"node-label\"/></label>{node.data.kind==='approval'&&<><h4>审批设置</h4><label>审批人来源<select aria-label=\"审批人来源\" data-testid=\"approver-source\" defaultValue={String(c.approverSource||'')} onChange={e=>{c.approverSource=e.target.value;rerender()}}><option value=\"\">请选择审批人来源</option><option>直属主管</option><option>固定角色</option><option>指定成员</option><option>表单字段</option></select></label><label>审批说明<textarea defaultValue={String(c.instruction||'')} onChange={e=>c.instruction=e.target.value}/></label><label className=\"toggle\"><input type=\"checkbox\" defaultChecked/>允许转交审批</label></>}{node.data.kind==='condition'&&<><h4>分支规则</h4><label>规则类型<select aria-label=\"规则类型\" data-testid=\"condition-rule\" defaultValue={String(c.ruleType||'')} onChange={e=>{c.ruleType=e.target.value;rerender()}}><option value=\"\">请选择规则</option><option value=\"amount\">金额大于某值</option><option value=\"department\">部门等于某值</option><option value=\"attachment\">附件是否为空</option></select></label><label>比较值<input aria-label=\"条件比较值\" type=\"number\" defaultValue={String(c.value||5000)} onChange={e=>c.value=Number(e.target.value)}/></label><div className=\"branch-card\"><b>分支 A</b><span>满足规则</span></div><div className=\"branch-card\"><b>分支 B</b><span>其他情况</span></div></>}{node.data.kind==='automation'&&<label>本地动作<select defaultValue={String(c.action||'')} onChange={e=>c.action=e.target.value}><option>创建工单</option><option>发送 Webhook（模拟）</option><option>写入系统记录</option></select></label>}{node.data.kind==='notify'&&<><label>通知对象<input defaultValue={String(c.targets||'')}/></label><label>通知模板<textarea defaultValue={String(c.template||'')}/></label><label>触发时机<select><option>分支进入时</option><option>任务完成时</option></select></label></>}{node.data.kind==='form'&&<FormFields fields={c.fields as any[]||[]}/>}<div className=\"config-footer\"><small><Clock/> 更改尚未保存</small><button data-testid=\"save-node-config\" onClick={()=>onSave(c,(document.getElementById('node-label') as HTMLInputElement).value)}>保存节点配置</button></div></aside>}\n+function FormFields({fields}:{fields:any[]}){return <div><h4>表单字段 · {fields.length}</h4>{fields.map(f=><div className=\"field-card\" key={f.id}><b>{f.label}</b><small>{f.type} {f.required?'· 必填':''}</small></div>)}<button className=\"secondary wide\"><Plus/>添加字段</button></div>}\n*** End Patch";
text(await tools.apply_patch(patch));

`````

### 17. Patch Applied

- Timestamp: `2026-07-12T10:19:17.025Z`
- Call ID: `exec-026688a4-c44f-499e-85fc-65df9d26a203`
- Success: `true`
- Changed files: `/root/hutubo/flowdesk-studio/src/pages/Editor.tsx`
`````text
Success. Updated the following files:
A src/pages/Editor.tsx

`````

### 18. Tool Result

- Timestamp: `2026-07-12T10:19:17.029Z`
- Call ID: `call_lncJKCw5bc9ApGI4ZsWTN7pv`

`````text
Script completed
Wall time 0.1 seconds
Output:

{}
`````

### 19. Tool Call: `exec`

- Timestamp: `2026-07-12T10:20:12.119Z`
- Call ID: `call_bfzuGvLUqOpnEWZXOaZzWXxN`

`````javascript
const patch = "*** Begin Patch\n*** Add File: src/pages/Preview.tsx\n+import {ArrowLeft,CheckCircle2,Paperclip,RotateCcw} from 'lucide-react';import {useMemo,useState} from 'react';import {useNavigate,useParams} from 'react-router-dom';import {useStudio} from '../store/useStudio';import type {FormField} from '../types';\n+export default function Preview(){const {id='wf-1'}=useParams(),nav=useNavigate(),w=useStudio(s=>s.workflows.find(x=>x.id===id)),[values,setValues]=useState<Record<string,string>>({}),[submitted,setSubmitted]=useState(false);const fields=useMemo(()=>w?.nodes.filter(n=>n.type==='form').flatMap(n=>(n.data.config.fields||[]) as FormField[])||[],[w]);const condition=w?.nodes.find(n=>n.type==='condition');const threshold=Number(condition?.data.config.value||5000),amount=Number(values.amount||0),branch=amount>threshold?'高额分支：进入财务通知':'标准分支：写入系统记录';return <div className=\"preview-page\"><div className=\"preview-top\"><button className=\"back-text\" onClick={()=>nav(`/workflows/${id}/edit`)}><ArrowLeft/>返回编辑器</button><div><b>表单预览</b><small>{w?.name} · 实时条件模拟</small></div><button className=\"secondary\" onClick={()=>{setValues({});setSubmitted(false)}}><RotateCcw/>重置</button></div><div className=\"preview-layout\"><section className=\"form-preview\"><div className=\"form-banner\"><small>{w?.domain} · 申请表</small><h1>{w?.name}</h1><p>请填写以下信息，带 * 的项目为必填项。</p></div><div className=\"form-body\">{fields.map(f=><label key={f.id}>{f.label}{f.required&&<em> *</em>}{f.type==='attachment'?<button type=\"button\" className=\"upload\"><Paperclip/>选择文件<span>支持 PDF、图片，单个不超过 20MB</span></button>:f.type==='select'?<select value={values[f.id]||''} onChange={e=>setValues({...values,[f.id]:e.target.value})}><option value=\"\">请选择</option>{f.options?.map(o=><option key={o}>{o}</option>)}</select>:<input data-testid={`preview-${f.id}`} type={f.type==='amount'||f.type==='number'?'number':f.type==='date'?'date':'text'} placeholder={f.type==='amount'?'0.00':'请输入'} value={values[f.id]||''} onChange={e=>setValues({...values,[f.id]:e.target.value})}/>} {submitted&&f.required&&!values[f.id]&&<span className=\"field-error\">此字段为必填项</span>}</label>)}<button className=\"submit\" onClick={()=>setSubmitted(true)}>模拟提交申请</button></div></section><aside className=\"simulation\"><div className=\"sim-head\"><span>LIVE</span><div><b>条件分支模拟</b><small>字段变化时实时计算</small></div></div><div className=\"rule-box\"><small>当前规则</small><b>申请金额 &gt; ¥ {threshold.toLocaleString()}</b></div><div className=\"calc\"><div><small>输入金额</small><strong>¥ {amount.toLocaleString('zh-CN',{minimumFractionDigits:2})}</strong></div><span>→</span><div><small>判断结果</small><strong>{amount>threshold?'满足':'不满足'}</strong></div></div><div className={`branch-result ${amount>threshold?'high':''}`} data-testid=\"branch-result\"><CheckCircle2/><div><small>将执行</small><b>{branch}</b></div></div><p>此区域仅模拟本地流程分支，不会提交或调用外部服务。</p></aside></div></div>}\n*** Add File: src/pages/Monitor.tsx\n+import {AlertTriangle,Clock3,Search,X} from 'lucide-react';import {useMemo,useState} from 'react';import {Background,ReactFlow} from '@xyflow/react';import {PageHead,Status} from '../components/Common';import {useStudio} from '../store/useStudio';import type {Instance} from '../types';\n+export default function Monitor(){const instances=useStudio(s=>s.instances),ws=useStudio(s=>s.workflows),[filter,setFilter]=useState('all'),[selected,setSelected]=useState<Instance|null>(null);const rows=useMemo(()=>instances.filter(i=>filter==='all'||i.status===filter),[instances,filter]);return <><PageHead eyebrow=\"RUNTIME OPERATIONS\" title=\"运行监控\" desc={`实时追踪 ${instances.length} 个流程实例，定位超时与执行异常`} actions={<button className=\"secondary\"><Clock3/>数据更新于 16:48</button>}/><div className=\"monitor-summary\"><div><strong>{instances.filter(i=>i.status==='running').length}</strong><span>进行中</span></div><div><strong>{instances.filter(i=>i.status==='completed').length}</strong><span>已完成</span></div><div className=\"danger\"><strong>{instances.filter(i=>i.status==='abnormal').length}</strong><span>异常</span></div><div className=\"warn\"><strong>{instances.filter(i=>i.status==='timeout').length}</strong><span>已超时</span></div></div><div className=\"panel\"><div className=\"filters\"><label className=\"search\"><Search/><input placeholder=\"搜索实例编号或申请人\"/></label>{['all','abnormal','timeout','running','completed'].map(x=><button className={filter===x?'filter-active':'secondary'} onClick={()=>setFilter(x)} key={x}>{x==='all'?'全部实例':<Status value={x}/>}</button>)}</div><div className=\"table-wrap\"><table><thead><tr><th>实例编号</th><th>申请人</th><th>业务域</th><th>当前节点</th><th>状态</th><th>提交时间</th><th>耗时</th><th>风险</th></tr></thead><tbody>{rows.slice(0,30).map(i=><tr key={i.id} onClick={()=>setSelected(i)} data-testid={`instance-${i.id}`}><td><button className=\"instance-link\">{i.id}</button></td><td>{i.applicant}</td><td>{i.domain}</td><td>{i.currentNode}</td><td><Status value={i.status}/></td><td>{i.submittedAt}</td><td>{i.duration}</td><td><span className={`risk risk-${i.risk}`}>{i.risk==='high'?'高':i.risk==='medium'?'中':'低'}</span></td></tr>)}</tbody></table></div></div>{selected&&<Detail instance={selected} workflow={ws.find(w=>w.id===selected.workflowId)!} close={()=>setSelected(null)}/>}</>}\n+function Detail({instance,workflow,close}:{instance:Instance,workflow:any,close:()=>void}){const current=workflow.nodes.find((n:any)=>n.data.label===instance.currentNode)?.id;const nodes=workflow.nodes.map((n:any)=>({...n,data:{label:n.data.label},className:n.id===current?'runtime-current':'runtime-node'}));return <div className=\"drawer-backdrop\"><aside className=\"instance-drawer\" data-testid=\"instance-detail\"><div className=\"drawer-head\"><div><small>流程实例详情</small><h2>{instance.id}</h2></div><button onClick={close}><X/></button></div><div className=\"detail-meta\"><div><small>申请人</small><b>{instance.applicant}</b></div><div><small>状态</small><Status value={instance.status}/></div><div><small>风险等级</small><b className=\"danger-text\">高风险</b></div><div><small>累计耗时</small><b>{instance.duration}</b></div></div><section><h3>执行路径</h3><div className=\"runtime-flow\" data-testid=\"runtime-flow\"><ReactFlow nodes={nodes} edges={workflow.edges} fitView nodesDraggable={false} nodesConnectable={false}><Background/></ReactFlow></div></section><section><h3>执行时间线</h3><div className=\"timeline\" data-testid=\"execution-timeline\">{instance.timeline.map((t,k)=><div className={t.status} key={k}><span>{t.status==='current'?<AlertTriangle/>:'✓'}</span><div><b>{t.title}</b><small>{t.time} · {t.status==='current'?'当前停留':'已完成'}</small></div></div>)}</div></section></aside></div>}\n*** Add File: src/pages/Versions.tsx\n+import {ArrowLeft,GitCompare,RotateCcw} from 'lucide-react';import {useMemo,useState} from 'react';import {useNavigate,useParams} from 'react-router-dom';import {PageHead} from '../components/Common';import {useStudio} from '../store/useStudio';\n+export default function Versions(){const params=useParams(),nav=useNavigate(),active=useStudio(s=>s.activeId),w=useStudio(s=>s.workflows.find(x=>x.id===(params.id||active))),[a,setA]=useState(1),[b,setB]=useState(2);const va=w?.versions.find(v=>v.version===a),vb=w?.versions.find(v=>v.version===b);const diff=useMemo(()=>{if(!va||!vb)return null;const aa=new Set(va.nodes.map(n=>n.id)),bb=new Set(vb.nodes.map(n=>n.id));return{added:vb.nodes.filter(n=>!aa.has(n.id)),removed:va.nodes.filter(n=>!bb.has(n.id)),edges:vb.edges.length-va.edges.length}},[va,vb]);if(!w)return <div>请选择流程</div>;return <><PageHead eyebrow=\"VERSION CONTROL\" title=\"版本历史\" desc={`${w.name} · 审阅发布记录、比较结构差异或恢复历史草稿`} actions={<button className=\"secondary\" onClick={()=>nav(`/workflows/${w.id}/edit`)}><ArrowLeft/>返回编辑器</button>}/><div className=\"version-layout\"><section className=\"panel version-list\"><h2>发布记录</h2>{w.versions.slice().reverse().map((v,k)=><div className={`version-item ${k===0?'active':''}`} key={v.version}><div><b>V{v.version}</b>{k===0&&<span className=\"status status-published\">当前</span>}</div><p>{v.note}</p><small>{v.createdAt} · {v.nodes.length} 个节点</small><button data-testid={`restore-v${v.version}`} disabled={k===0} onClick={()=>{useStudio.getState().restore(w.id,v.version);nav(`/workflows/${w.id}/edit`)}}><RotateCcw/>恢复为草稿</button></div>)}</section><section className=\"panel compare\" data-testid=\"version-compare\"><div className=\"compare-head\"><div><GitCompare/><div><h2>版本对比</h2><p>选择两个版本查看结构与配置变化</p></div></div><div><select aria-label=\"基准版本\" value={a} onChange={e=>setA(Number(e.target.value))}>{w.versions.map(v=><option value={v.version} key={v.version}>V{v.version}</option>)}</select><span>对比</span><select aria-label=\"目标版本\" value={b} onChange={e=>setB(Number(e.target.value))}>{w.versions.map(v=><option value={v.version} key={v.version}>V{v.version}</option>)}</select></div></div>{diff?<div className=\"diff-grid\"><div className=\"diff-card added\"><small>新增节点</small><strong>{diff.added.length}</strong>{diff.added.map(n=><p key={n.id}>＋ {n.data.label}</p>)}</div><div className=\"diff-card removed\"><small>删除节点</small><strong>{diff.removed.length}</strong>{diff.removed.map(n=><p key={n.id}>－ {n.data.label}</p>)}</div><div className=\"diff-card changed\"><small>连线变化</small><strong>{Math.abs(diff.edges)}</strong><p>{diff.edges>=0?'＋':'－'} {Math.abs(diff.edges)} 条连接</p></div></div>:<div className=\"empty\">请选择两个有效版本</div>}<div className=\"config-diff\"><h3>配置与发布说明</h3><div><span>V{a}</span><p>{va?.note}</p></div><div><span>V{b}</span><p>{vb?.note}</p></div><pre>{`节点结构: ${va?.nodes.length} → ${vb?.nodes.length}\\n连线数量: ${va?.edges.length} → ${vb?.edges.length}\\n条件规则: amount > 5000\\n审批来源: 直属主管`}</pre></div></section></div></>}\n*** End Patch";
text(await tools.apply_patch(patch));

`````

### 20. Patch Applied

- Timestamp: `2026-07-12T10:20:12.419Z`
- Call ID: `exec-30467f3d-c615-48ca-b37e-d4a510eaf36e`
- Success: `true`
- Changed files: `/root/hutubo/flowdesk-studio/src/pages/Monitor.tsx`, `/root/hutubo/flowdesk-studio/src/pages/Preview.tsx`, `/root/hutubo/flowdesk-studio/src/pages/Versions.tsx`
`````text
Success. Updated the following files:
A src/pages/Preview.tsx
A src/pages/Monitor.tsx
A src/pages/Versions.tsx

`````

### 21. Tool Result

- Timestamp: `2026-07-12T10:20:12.423Z`
- Call ID: `call_bfzuGvLUqOpnEWZXOaZzWXxN`

`````text
Script completed
Wall time 0.3 seconds
Output:

{}
`````

### 22. Tool Call: `exec`

- Timestamp: `2026-07-12T10:22:06.506Z`
- Call ID: `call_NHOMxgPYyfb6LTF4i7QiP0RR`

`````javascript
const patch = "*** Begin Patch\n*** Add File: src/styles.css\n+@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');\n+:root{font-family:Inter,\"PingFang SC\",system-ui,sans-serif;color:#17222d;background:#f3f5f7;font-synthesis:none;--ink:#17222d;--muted:#687583;--line:#dfe4e8;--accent:#137a72;--accent-dark:#0c645d}*{box-sizing:border-box}body{margin:0;min-width:1180px}button,input,select,textarea{font:inherit}button{border:0;cursor:pointer}button:focus-visible,input:focus-visible,select:focus-visible,textarea:focus-visible{outline:3px solid #98d7d1;outline-offset:1px}.app-shell{display:grid;grid-template-columns:220px 1fr;min-height:100vh}.sidebar{background:#18232b;color:#cbd4da;padding:22px 14px;display:flex;flex-direction:column;position:fixed;inset:0 auto 0 0;width:220px;z-index:20}.brand{display:flex;gap:11px;align-items:center;padding:0 9px 26px;font-size:17px;font-weight:700;color:white}.brand>span{display:grid;place-items:center;width:34px;height:34px;border-radius:9px;background:#21a093;font-size:20px}.brand small,.topbar small,.workspace small{display:block;font-size:9px;letter-spacing:1.5px;color:#84939d;margin-top:3px}.sidebar nav{display:flex;flex-direction:column;gap:4px}.sidebar nav a{display:flex;align-items:center;gap:12px;color:#aab6be;text-decoration:none;padding:11px 12px;border-radius:7px;font-size:13px}.sidebar nav a svg{width:18px}.sidebar nav a:hover{background:#23323c;color:white}.sidebar nav a.active{background:#244b49;color:#6ee0d3}.workspace{margin-top:auto;border-top:1px solid #2c3942;padding:18px 9px;display:grid;grid-template-columns:20px 1fr;gap:2px 9px;font-size:12px}.workspace svg{width:16px}.workspace small{grid-column:2}.app-shell>main{grid-column:2}.topbar{height:62px;background:white;border-bottom:1px solid var(--line);display:flex;align-items:center;justify-content:space-between;padding:0 28px;position:sticky;top:0;z-index:15}.topbar>div:first-child b{font-size:13px}.top-actions{display:flex;align-items:center;gap:8px;font-size:12px}.top-actions small{letter-spacing:0}.avatar{width:31px;height:31px;border-radius:50%;display:grid;place-items:center;background:#dff1ed;color:#087269;font-weight:700}.icon-btn{border:1px solid var(--line);background:#fafbfb;border-radius:6px;padding:6px 9px;color:#687583}.page{padding:27px 30px;max-width:1640px;margin:auto}.page-head{display:flex;justify-content:space-between;align-items:flex-end;margin-bottom:23px}.eyebrow{font-size:10px;color:#14847b;letter-spacing:1.8px;font-weight:700}.page-head h1{margin:7px 0 6px;font-size:25px;letter-spacing:-.5px}.page-head p,.panel-head p{margin:0;color:var(--muted);font-size:12px}.actions,.editor-actions{display:flex;gap:8px}button{background:var(--accent);color:white;border-radius:6px;padding:9px 14px;font-size:12px;font-weight:600;display:inline-flex;align-items:center;justify-content:center;gap:7px;white-space:nowrap}button:hover{background:var(--accent-dark)}button svg{width:15px;height:15px}.secondary{background:white;color:#35424e;border:1px solid #d7dde1}.secondary:hover{background:#f2f5f6}.kpis{display:grid;grid-template-columns:repeat(5,1fr);gap:12px;margin-bottom:18px}.kpi{background:white;border:1px solid var(--line);border-radius:8px;padding:16px 17px;box-shadow:0 1px 2px #2030400a}.kpi-top{display:flex;align-items:center;gap:8px;color:#65727d}.kpi-top span{display:grid;place-items:center;background:#edf4f3;color:#158279;border-radius:6px;width:29px;height:29px}.kpi-top span.red{color:#c94b4b;background:#fff0ef}.kpi-top span.green{color:#298657;background:#edf8f1}.kpi-top svg{width:16px}.kpi strong{font-size:25px;display:block;margin-top:13px}.kpi p{font-size:10px;color:#798590;margin:5px 0 0}.grid-main{display:grid;grid-template-columns:minmax(0,1.7fr) minmax(310px,.8fr);gap:18px}.panel{background:white;border:1px solid var(--line);border-radius:8px;box-shadow:0 1px 2px #20304008}.panel-head{display:flex;align-items:center;justify-content:space-between;padding:16px 19px;border-bottom:1px solid #edf0f2}.panel h2,.panel-head h2{font-size:14px;margin:0 0 4px}.link{padding:4px;background:none;color:#16857c}.link:hover{background:none;color:#0b5c56}.recent-row{display:grid;grid-template-columns:40px 1fr 70px 42px 112px 16px;width:100%;align-items:center;text-align:left;padding:12px 18px;background:white;color:var(--ink);border-radius:0;border-bottom:1px solid #eef1f2;font-weight:400}.recent-row:hover{background:#f7faf9}.flow-icon{width:31px;height:31px;border-radius:7px;background:#e3f1ef;color:#168278;display:grid;place-items:center;font-weight:700}.recent-row span:nth-child(2),.name-link span:nth-child(2){min-width:0}.recent-row b,.name-link b{display:block;font-size:12px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.recent-row small,.name-link small,.alert-row small{display:block;color:var(--muted);font-size:10px;margin-top:4px}.muted{font-size:10px;color:var(--muted)}.status{font-size:10px;padding:3px 7px;border-radius:20px;white-space:nowrap;display:inline-block;font-weight:600}.status-published,.status-completed{color:#27764c;background:#e9f6ee}.status-draft,.status-running{color:#996315;background:#fff4d8}.status-archived{color:#64717c;background:#edf0f2}.status-abnormal{color:#bd3939;background:#ffebea}.status-timeout{color:#a65c20;background:#fff0df}.side-stack{display:flex;flex-direction:column;gap:18px}.count{font-size:12px;background:#ffefda;color:#a65c20;border-radius:20px;padding:3px 8px}.alert-row{display:flex;gap:10px;padding:12px 17px;align-items:center;border-bottom:1px solid #eef1f2}.alert-row>svg{color:#d4862d;width:17px}.alert-row>div{flex:1}.alert-row b{font-size:11px}.risk-dot{width:8px;height:8px;background:#db5652;border-radius:50%}.filters{padding:13px 16px;display:flex;gap:9px;border-bottom:1px solid var(--line);align-items:center}.search{position:relative;min-width:230px;flex:1;max-width:360px}.search svg{position:absolute;left:10px;top:9px;width:15px;color:#84919b}.search input{padding-left:34px;width:100%}input,select,textarea{border:1px solid #ccd4d9;border-radius:5px;background:white;padding:8px 10px;font-size:12px;color:var(--ink)}select{min-width:130px}.result-count{font-size:11px;color:var(--muted);margin-left:auto}.table-wrap{overflow:auto}table{border-collapse:collapse;width:100%;font-size:11px}th{text-align:left;background:#f7f9fa;color:#697681;text-transform:uppercase;letter-spacing:.4px;font-size:9px;padding:10px 13px;border-bottom:1px solid var(--line)}td{padding:11px 13px;border-bottom:1px solid #edf0f2;white-space:nowrap}tbody tr:hover{background:#fafcfc}.name-link{padding:0;background:none;color:var(--ink);display:grid;grid-template-columns:35px minmax(120px,280px);text-align:left}.name-link:hover,.instance-link:hover{background:none;color:var(--accent)}.row-actions{display:flex;gap:5px}.row-actions button{background:none;color:#63717c;padding:5px}.row-actions button:hover{background:#edf2f2}.danger-text{color:#c44545;font-weight:700}.empty{min-height:260px;display:flex;align-items:center;justify-content:center;flex-direction:column;color:#87939c}.empty b{font-size:40px}.empty small{margin-top:5px}.toast{position:fixed;right:24px;top:75px;background:#153a37;color:white;border-left:4px solid #42c4b5;padding:12px 17px;border-radius:5px;box-shadow:0 10px 30px #0003;z-index:99;font-size:12px}\n+/* editor */.editor-page{margin:-27px -30px;height:calc(100vh - 62px);display:grid;grid-template-rows:60px minmax(0,1fr) auto;background:white}.editor-toolbar{display:flex;align-items:center;justify-content:space-between;padding:9px 14px;border-bottom:1px solid var(--line)}.editor-title{display:flex;align-items:center;gap:9px;min-width:240px}.back{background:#f4f6f7;color:#42515d;font-size:24px;padding:2px 10px}.editor-title b{font-size:13px;margin-right:8px}.editor-title small{display:block;color:var(--muted);font-size:9px;margin-top:4px}.editor-actions button{padding:7px 10px}.editor-workspace{display:grid;grid-template-columns:190px minmax(500px,1fr) 280px;min-height:0}.node-library,.config-panel{border-right:1px solid var(--line);padding:16px 13px;overflow:auto;background:#fbfcfc}.node-library h3{font-size:13px;margin:0}.node-library>p{font-size:10px;color:var(--muted);margin:5px 0 15px}.node-library>button{width:100%;background:white;color:var(--ink);border:1px solid #dfe5e8;margin-bottom:7px;padding:9px;text-align:left;display:grid;grid-template-columns:25px 1fr 14px;box-shadow:0 1px 1px #00000008}.node-library>button:hover{border-color:#73b7b0;background:#f4fbfa}.node-library>button>span{font-size:17px}.node-library b{font-size:11px;display:block}.node-library small{font-size:9px;color:var(--muted);display:block;margin-top:2px}.node-library svg{width:12px;color:#9ba5ac}.canvas-area{position:relative;background:#f6f8f8;min-height:0}.canvas-toolbar{position:absolute;top:10px;left:12px;right:12px;z-index:5;display:flex;justify-content:space-between;pointer-events:none}.canvas-toolbar span{background:#fff;border:1px solid var(--line);border-radius:5px;padding:6px 9px;font-size:9px;color:#71808a}.canvas-toolbar button{pointer-events:auto;background:#fff;border:1px solid var(--line);color:#53616c;padding:5px 8px}.canvas-toolbar button:disabled{opacity:.4;cursor:not-allowed}.flow-node{width:175px;height:70px;background:white;border:1px solid #cad3d8;border-radius:7px;box-shadow:0 3px 10px #1f35451a;display:flex;align-items:center;padding:10px 9px;position:relative;overflow:hidden}.flow-node.selected{border:2px solid #169188;box-shadow:0 0 0 3px #43b9ad2c}.flow-node.node-error{border:2px solid #d34b49}.node-stripe{position:absolute;left:0;top:0;bottom:0;width:4px}.node-icon{width:30px;height:30px;background:#f3f6f6;border-radius:6px;display:grid;place-items:center;font-size:16px;margin:0 9px 0 3px}.node-copy{display:flex;flex-direction:column;min-width:0}.node-copy small{font-size:7px;color:#82909a;text-transform:uppercase}.node-copy b{font-size:10px;margin:3px 0;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.node-state{font-size:7px;color:#817350}.node-state.valid{color:#277c53}.node-state.invalid{color:#c94343}.node-alert{position:absolute;right:5px;top:5px;width:12px;color:#d14947}.config-panel{border:0;border-left:1px solid var(--line);padding:0;background:white;position:relative}.empty-config{display:flex;align-items:center;justify-content:center;flex-direction:column;padding:30px;text-align:center}.empty-icon{font-size:40px;color:#a4afb6}.empty-config h3{font-size:13px}.empty-config p{font-size:10px;color:#7b8790;line-height:1.5}.config-head{padding:13px;border-bottom:1px solid var(--line);display:flex;justify-content:space-between;align-items:center}.config-head>div{display:flex;gap:9px;align-items:center}.config-head>div>span{width:30px;height:30px;background:#eef4f3;display:grid;place-items:center;border-radius:6px;color:var(--accent)}.config-head small{font-size:8px;color:var(--muted)}.config-head h3{font-size:12px;margin:2px 0}.config-panel>label,.config-panel>h4,.config-panel>div:not(.config-head):not(.config-footer){margin-left:14px;margin-right:14px}.config-panel label{font-size:10px;font-weight:600;display:block;margin-top:13px}.config-panel label input:not([type=checkbox]),.config-panel label select,.config-panel label textarea{width:100%;margin-top:6px}.config-panel textarea{min-height:70px;resize:vertical}.config-panel h4{font-size:9px;color:#77838d;text-transform:uppercase;letter-spacing:.7px;border-top:1px solid #edf0f2;padding-top:13px;margin-top:15px;margin-bottom:0}.toggle{display:flex!important;align-items:center;gap:7px}.branch-card,.field-card{border:1px solid var(--line);padding:8px!important;margin-top:8px!important;border-radius:5px;font-size:10px;display:flex;justify-content:space-between}.branch-card span,.field-card small{color:var(--muted)}.wide{width:calc(100% - 28px);margin:8px 14px}.config-footer{position:sticky;bottom:0;background:white;border-top:1px solid var(--line);padding:10px 13px;margin-top:20px}.config-footer small{display:flex;align-items:center;gap:4px;font-size:8px;color:#947127;margin-bottom:7px}.config-footer small svg{width:11px}.config-footer button{width:100%}.problem-panel{border-top:1px solid var(--line);max-height:155px;overflow:auto;z-index:6}.problem-panel.collapsed{max-height:39px}.problem-head{height:38px;display:flex;align-items:center;justify-content:space-between;padding:0 15px;cursor:pointer}.problem-head>div{display:flex;align-items:center;gap:8px;font-size:10px}.problem-head svg{width:14px;color:#d07b2a}.problem-head>span{font-size:9px;color:var(--muted)}.error-count{background:#ffe9e8;color:#bd3d3a;border-radius:20px;padding:3px 7px}.problems{border-top:1px solid #edf0f2;padding:5px 12px}.problems button{background:#fff7f6;color:var(--ink);width:100%;justify-content:flex-start;text-align:left;padding:7px 10px;margin:3px 0}.problems button svg{color:#cf4441}.problems small{display:block;color:#7b858d;margin-top:2px}.all-good{font-size:10px;color:#55816b;padding:12px;display:flex;align-items:center;gap:8px}.all-good svg{width:15px}\n+/* preview */.preview-page{margin:-27px -30px;min-height:calc(100vh - 62px);background:#eef2f3}.preview-top{height:62px;background:white;border-bottom:1px solid var(--line);display:grid;grid-template-columns:1fr auto 1fr;align-items:center;padding:0 25px}.preview-top>div{text-align:center}.preview-top b{display:block;font-size:13px}.preview-top small{font-size:9px;color:var(--muted)}.preview-top>button:last-child{justify-self:end}.back-text{background:none;color:#46545f}.back-text:hover{background:#f1f4f5}.preview-layout{display:grid;grid-template-columns:minmax(500px,680px) 330px;gap:22px;justify-content:center;padding:28px}.form-preview,.simulation{background:white;border:1px solid #dbe1e4;border-radius:9px;box-shadow:0 6px 20px #2030400c}.form-banner{padding:27px 35px;background:#f5faf9;border-bottom:1px solid #dce9e7}.form-banner small{color:var(--accent);font-weight:700}.form-banner h1{font-size:22px;margin:8px 0}.form-banner p{font-size:11px;color:var(--muted)}.form-body{padding:24px 35px}.form-body label{display:block;font-size:11px;font-weight:600;margin-bottom:18px}.form-body label>input,.form-body label>select{display:block;width:100%;margin-top:7px;padding:10px}.form-body em{color:#ce3e3e}.upload{display:flex;width:100%;height:74px;background:#fafbfb;border:1px dashed #b9c5ca;color:#52616d;margin-top:7px}.upload span{font-size:9px;color:#88949c}.field-error{display:block;color:#c83e3e;font-size:9px;margin-top:4px}.submit{width:100%;padding:11px}.simulation{height:max-content;padding:19px;position:sticky;top:85px}.sim-head{display:flex;gap:10px}.sim-head>span{background:#e5f5f2;color:#158377;font-size:8px;font-weight:700;padding:4px;height:max-content;border-radius:4px}.sim-head b,.sim-head small{display:block}.sim-head b{font-size:12px}.sim-head small{font-size:9px;color:var(--muted);margin-top:3px}.rule-box{background:#f5f7f8;border-radius:6px;padding:12px;margin-top:18px}.rule-box small,.rule-box b{display:block;font-size:9px}.rule-box b{font-size:11px;margin-top:4px}.calc{display:flex;align-items:center;justify-content:space-between;padding:20px 5px}.calc small,.calc strong{display:block}.calc small{font-size:8px;color:var(--muted)}.calc strong{font-size:12px;margin-top:4px}.branch-result{padding:13px;background:#eef6f4;border:1px solid #c8e5df;border-radius:6px;display:flex;gap:10px;color:#217267}.branch-result.high{background:#fff3df;border-color:#f0cf96;color:#9a631a}.branch-result svg{width:17px}.branch-result small,.branch-result b{display:block;font-size:9px}.branch-result b{font-size:10px;margin-top:3px}.simulation>p{font-size:8px;color:#8a959d;line-height:1.5}\n+/* monitor & versions */.monitor-summary{display:grid;grid-template-columns:repeat(4,1fr);background:white;border:1px solid var(--line);border-radius:8px;margin-bottom:14px}.monitor-summary div{padding:15px 20px;border-right:1px solid var(--line)}.monitor-summary strong{font-size:20px;margin-right:10px}.monitor-summary span{font-size:10px;color:var(--muted)}.monitor-summary .danger strong{color:#c54343}.monitor-summary .warn strong{color:#be6c22}.filters>button{padding:6px 9px}.filters .status{padding:0;background:transparent;color:inherit}.filter-active{background:#1f6560}.instance-link{background:none;color:#137a72;padding:0}.risk{width:20px;height:20px;display:grid;place-items:center;border-radius:50%;font-size:9px}.risk-high{background:#ffe8e7;color:#b93e3c}.risk-medium{background:#fff0d9;color:#a4621f}.risk-low{background:#eaf5ee;color:#357652}.drawer-backdrop{position:fixed;inset:0;background:#10202866;z-index:50}.instance-drawer{position:absolute;right:0;top:0;bottom:0;width:560px;background:white;padding:20px;overflow:auto;box-shadow:-10px 0 30px #0002}.drawer-head{display:flex;justify-content:space-between;border-bottom:1px solid var(--line);padding-bottom:14px}.drawer-head small{color:var(--muted);font-size:9px}.drawer-head h2{font-size:17px;margin:4px 0}.drawer-head button{background:#f1f4f5;color:#4f5d68;padding:7px}.detail-meta{display:grid;grid-template-columns:repeat(4,1fr);background:#f7f9fa;margin:16px 0;border-radius:6px;padding:12px}.detail-meta small,.detail-meta b{display:block;font-size:9px}.detail-meta b{font-size:11px;margin-top:4px}.instance-drawer section h3{font-size:12px}.runtime-flow{height:210px;border:1px solid var(--line);border-radius:6px}.runtime-node,.runtime-current{border:1px solid #cdd6da;border-radius:5px;background:white;padding:8px;font-size:9px;width:100px}.runtime-current{border:2px solid #e36342!important;background:#fff0eb!important;box-shadow:0 0 0 4px #e3634222}.timeline{margin-left:10px}.timeline>div{display:flex;gap:12px;border-left:1px solid #cdd6da;padding:0 0 19px 15px}.timeline>div>span{width:20px;height:20px;border-radius:50%;background:#e9f5ef;color:#32825a;display:grid;place-items:center;margin-left:-25px;font-size:9px}.timeline .current>span{background:#fff0e6;color:#c9652d}.timeline svg{width:11px}.timeline b,.timeline small{display:block;font-size:10px}.timeline small{font-size:8px;color:var(--muted);margin-top:3px}.version-layout{display:grid;grid-template-columns:260px 1fr;gap:16px}.version-list{padding:16px}.version-list>h2{margin-bottom:12px}.version-item{border:1px solid var(--line);padding:12px;border-radius:6px;margin-bottom:9px}.version-item.active{border-color:#63aea7;background:#f5fbfa}.version-item b{font-size:13px;margin-right:6px}.version-item p{font-size:10px;margin:8px 0}.version-item small{font-size:8px;color:var(--muted)}.version-item button{width:100%;margin-top:10px;background:white;border:1px solid var(--line);color:#43515c;padding:6px}.version-item button:disabled{opacity:.45}.compare{padding:18px}.compare-head{display:flex;justify-content:space-between;align-items:center;border-bottom:1px solid var(--line);padding-bottom:14px}.compare-head>div{display:flex;align-items:center;gap:9px}.compare-head h2{margin:0}.compare-head p{font-size:9px;color:var(--muted);margin:4px 0}.compare-head select{min-width:90px}.compare-head span{font-size:9px;color:var(--muted)}.diff-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:11px;margin-top:16px}.diff-card{border:1px solid var(--line);border-top:3px solid #4caa75;border-radius:5px;padding:13px;min-height:115px}.diff-card.removed{border-top-color:#d75c59}.diff-card.changed{border-top-color:#d59638}.diff-card small,.diff-card strong{display:block}.diff-card small{font-size:9px;color:var(--muted)}.diff-card strong{font-size:23px;margin:5px 0}.diff-card p{font-size:9px;background:#f4f7f6;padding:5px}.config-diff{margin-top:18px}.config-diff h3{font-size:12px}.config-diff>div{display:grid;grid-template-columns:50px 1fr;font-size:10px;border-top:1px solid var(--line);padding:8px}.config-diff>div span{font-weight:700;color:var(--accent)}.config-diff>div p{margin:0}.config-diff pre{font-family:monospace;background:#17232c;color:#d5dfdc;padding:15px;border-radius:6px;font-size:10px;line-height:1.7}\n+@media(max-width:1250px){.kpis{grid-template-columns:repeat(3,1fr)}.editor-actions button{font-size:0}.editor-actions button svg{margin:0}.editor-workspace{grid-template-columns:170px minmax(450px,1fr) 260px}}\n*** End Patch";
text(await tools.apply_patch(patch));

`````

### 23. Patch Applied

- Timestamp: `2026-07-12T10:22:06.621Z`
- Call ID: `exec-96c80449-60c5-42d5-90f8-d20ce2d73515`
- Success: `true`
- Changed files: `/root/hutubo/flowdesk-studio/src/styles.css`
`````text
Success. Updated the following files:
A src/styles.css

`````

### 24. Tool Result

- Timestamp: `2026-07-12T10:22:06.626Z`
- Call ID: `call_NHOMxgPYyfb6LTF4i7QiP0RR`

`````text
Script completed
Wall time 0.1 seconds
Output:

{}
`````

### 25. Tool Call: `exec`

- Timestamp: `2026-07-12T10:22:44.674Z`
- Call ID: `call_6GSxfXJexMwGjZAy0aJCkn2d`

`````javascript
const patch = "*** Begin Patch\n*** Update File: src/styles.css\n@@\n-@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');\n :root{font-family:Inter,\"PingFang SC\",system-ui,sans-serif;color:#17222d;background:#f3f5f7;font-synthesis:none;--ink:#17222d;--muted:#687583;--line:#dfe4e8;--accent:#137a72;--accent-dark:#0c645d}\n*** Add File: playwright.config.ts\n+import {defineConfig,devices} from '@playwright/test';\n+export default defineConfig({testDir:'./tests',timeout:30_000,fullyParallel:false,retries:0,reporter:'list',use:{baseURL:'http://127.0.0.1:4173',trace:'retain-on-failure',screenshot:'only-on-failure',viewport:{width:1440,height:900}},webServer:{command:'npm run dev -- --port 4173',url:'http://127.0.0.1:4173',reuseExistingServer:true},projects:[{name:'chromium',use:{...devices['Desktop Chrome']}}]});\n*** Add File: tests/flowdesk.spec.ts\n+import {expect,test} from '@playwright/test';\n+\n+test('Dashboard 展示 KPI 并进入最近流程编辑器',async({page})=>{await page.goto('/');await expect(page.getByRole('heading',{name:'流程运营总览'})).toBeVisible();await expect(page.getByTestId('kpi-流程总数')).toHaveText('12');await expect(page.getByTestId('kpi-异常实例')).toHaveText('22');await page.getByTestId('recent-workflow').first().click();await expect(page.getByTestId('flow-canvas')).toBeVisible();});\n+\n+test('编辑、校验、修复条件并预览分支',async({page})=>{await page.goto('/workflows/wf-1/edit');await page.getByTestId('canvas-node-approval').click();await expect(page.getByTestId('config-panel')).toContainText('审批设置');await page.getByTestId('approver-source').selectOption({label:'固定角色'});await page.getByTestId('save-node-config').click();await page.getByRole('button',{name:'保存草稿'}).click();await expect(page.getByRole('status')).toContainText('草稿已保存');await page.getByTestId('run-validation').click();await expect(page.getByTestId('canvas-node-condition')).toHaveClass(/node-error/);await expect(page.getByTestId('problem-panel')).toContainText('条件分支规则未配置');const before=Number((await page.getByTestId('error-count').textContent())?.match(/\\d+/)?.[0]);await page.getByTestId('canvas-node-condition').click();await page.getByTestId('condition-rule').selectOption('amount');await page.getByTestId('save-node-config').click();await page.getByTestId('run-validation').click();await expect.poll(async()=>Number((await page.getByTestId('error-count').textContent())?.match(/\\d+/)?.[0])).toBeLessThan(before);await page.getByRole('button',{name:'预览'}).click();await page.getByTestId('preview-amount').fill('8000');await expect(page.getByTestId('branch-result')).toContainText('高额分支');});\n+\n+test('发布后 Dashboard 与流程列表同步',async({page})=>{await page.goto('/workflows/wf-1/edit');await page.getByRole('button',{name:'发布',exact:true}).click();await expect(page.getByRole('status')).toContainText('流程发布成功');await page.goto('/workflows');await expect(page.getByTestId('workflow-wf-1')).toContainText('已发布');await expect(page.getByTestId('workflow-wf-1')).toContainText('V2');await page.goto('/');await expect(page.getByTestId('recent-workflow').first()).toBeVisible();});\n+\n+test('运行监控显示异常实例时间线和当前节点高亮',async({page})=>{await page.goto('/monitor');await page.getByTestId('instance-INS-2026-0001').click();await expect(page.getByTestId('instance-detail')).toContainText('异常');await expect(page.getByTestId('execution-timeline')).toContainText('执行');await expect(page.locator('.runtime-current')).toBeVisible();});\n+\n+test('版本比较并恢复历史版本',async({page})=>{await page.goto('/workflows/wf-2/versions');await expect(page.getByTestId('version-compare')).toContainText('新增节点');await expect(page.getByTestId('version-compare')).toContainText('高额通知');await page.getByTestId('restore-v1').click();await expect(page.getByTestId('flow-canvas')).toBeVisible();await expect(page.getByRole('status')).toContainText('已恢复版本 V1');await expect(page.getByTestId('canvas-node-notify')).toHaveCount(0);});\n+\n+test('搜索无结果展示空状态',async({page})=>{await page.goto('/workflows');await page.getByLabel('搜索流程').fill('绝对不存在的流程');await expect(page.getByText('没有匹配的流程')).toBeVisible();});\n*** Add File: README.md\n+# FlowDesk Studio\n+\n+FlowDesk Studio 是一个纯前端、企业级低代码流程编排与审批监控演示平台。应用使用 React、TypeScript、Vite、React Flow 和 Zustand 构建；所有业务数据均来自本地 `mock-data/`，不需要登录、后端或外部 API。\n+\n+## 启动\n+\n+环境要求：Node.js 20+、npm 10+。\n+\n+```bash\n+npm install\n+npm run dev\n+```\n+\n+打开终端显示的本地地址（默认 `http://localhost:5173`）。推荐使用 1440px 或更宽的现代桌面浏览器。\n+\n+## 测试与构建\n+\n+首次使用 Playwright 时安装本地 Chromium：\n+\n+```bash\n+npx playwright install chromium\n+npm test\n+npm run build\n+```\n+\n+Playwright 会自动在 `127.0.0.1:4173` 启动 Vite。关键验证路径位于 `tests/flowdesk.spec.ts`，覆盖 Dashboard KPI、进入编辑器、审批配置、双层校验反馈、条件修复、动态表单分支、发布联动、异常实例详情、版本对比与恢复。\n+\n+## 功能路径\n+\n+- Dashboard：KPI、最近编辑、发布检查、异常实例；数据随 store 中发布与实例状态变化更新。\n+- 流程管理：搜索、状态/业务域筛选、排序、新建、复制、归档。\n+- 流程编辑器：节点库、React Flow 画布、拖放/选择/连线/删除、节点配置、保存、校验、发布和问题面板。\n+- 表单预览：由 Form 节点动态生成字段，金额输入实时影响 Condition 分支。\n+- 运行监控：80 条实例、状态筛选、执行时间线以及当前节点画布高亮。\n+- 版本历史：版本结构和配置差异、发布说明、恢复历史版本为草稿。\n+\n+## 数据与结构\n+\n+`mock-data/` 包含 12 个流程、80 条实例（22 条异常或超时）、8 个用户、6 个角色和 5 个业务域，并包含空流程、孤立节点、缺少结束节点、未配置条件、长名称和无异常流程等边界数据。\n+\n+核心目录：\n+\n+```text\n+src/components/     通用布局和状态组件\n+src/pages/          六个产品页面与编辑器\n+src/store/          跨页面全局状态及业务操作\n+src/types/          TypeScript 类型出口\n+mock-data/          结构化本地业务数据\n+tests/              Playwright 关键链路测试\n+```\n+\n+数据在页面刷新时恢复为初始 mock 状态；同一浏览器会话中的编辑、发布和恢复会实时同步到各页面。\n*** End Patch";
text(await tools.apply_patch(patch));

`````

### 26. Tool Result

- Timestamp: `2026-07-12T10:22:44.724Z`
- Call ID: `call_6GSxfXJexMwGjZAy0aJCkn2d`

`````text
Script failed
Wall time 0.0 seconds
Output:

Script error:
apply_patch verification failed: Failed to find expected lines in /root/hutubo/flowdesk-studio/src/styles.css:
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');
:root{font-family:Inter,"PingFang SC",system-ui,sans-serif;color:#17222d;background:#f3f5f7;font-synthesis:none;--ink:#17222d;--muted:#687583;--line:#dfe4e8;--accent:#137a72;--accent-dark:#0c645d}
`````

### 27. Tool Call: `exec`

- Timestamp: `2026-07-12T10:22:47.977Z`
- Call ID: `call_xO0Rug3N5N84vNKCEKVldISQ`

`````javascript
const r = await tools.exec_command({cmd:"head -3 src/styles.css; ls playwright.config.ts tests 2>/dev/null || true","workdir":"/root/hutubo/flowdesk-studio","yield_time_ms":10000,"max_output_tokens":2000}); text(r.output)

`````

### 28. Tool Result

- Timestamp: `2026-07-12T10:22:48.047Z`
- Call ID: `call_xO0Rug3N5N84vNKCEKVldISQ`

`````text
Script completed
Wall time 0.1 seconds
Output:

Warning: truncated output (original token count: 3248)
Total output lines: 3

@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');
:root{font-family:Inter,"PingFang SC",system-ui,sans-serif;color:#17222d;background:#f3f5f7;font-synthesis:none;--ink:#17222d;--muted:#687583;--line:#dfe4e8;--accent:#137a72;--accent-dark:#0c645d}*{box-sizing:border-box}body{margin:0;min-width:1180px}button,input,select,textarea{font:inherit}button{border:0;cursor:pointer}button:focus-visible,input:focus-visible,select:focus-visible,textarea:focus-visible{outline:3px solid #98d7d1;outline-offset:1px}.app-shell{display:grid;grid-template-columns:220px 1fr;min-height:100vh}.sidebar{background:#18232b;color:#cbd4da;padding:22px 14px;display:flex;flex-direction:column;position:fixed;inset:0 auto 0 0;width:220px;z-index:20}.brand{display:flex;gap:11px;align-items:center;padding:0 9px 26px;font-size:17px;font-weight:700;color:white}.brand>span{display:grid;place-items:center;width:34px;height:34px;border-radius:9px;background:#21a093;font-size:20px}.brand small,.topbar small,.workspace small{display:block;font-size:9px;letter-spacing:1.5px;color:#84939d;margin-top:3px}.sidebar nav{display:flex;flex-direction:column;gap:4px}.sidebar nav a{display:flex;align-items:center;gap:12px;color:#aab6be;text-decoration:none;padding:11px 12px;border-radius:7px;font-size:13px}.sidebar nav a svg{width:18px}.sidebar nav a:hover{background:#23323c;color:white}.sidebar nav a.active{background:#244b49;color:#6ee0d3}.workspace{margin-top:auto;border-top:1px solid #2c3942;padding:18px 9px;display:grid;grid-template-columns:20px 1fr;gap:2px 9px;font-size:12px}.workspace svg{width:16px}.workspace small{grid-column:2}.app-shell>main{grid-column:2}.topbar{height:62px;background:white;border-bottom:1px solid var(--line);display:flex;align-items:center;justify-content:space-between;padding:0 28px;position:sticky;top:0;z-index:15}.topbar>div:first-child b{font-size:13px}.top-actions{display:flex;align-items:center;gap:8px;font-size:12px}.top-actions small{letter-spacing:0}.avatar{width:31px;height:31px;border-radius:50%;display:grid;place-items:center;background:#dff1ed;color:#087269;font-weight:700}.icon-btn{border:1px solid var(--line);background:#fafbfb;border-radius:6px;padding:6px 9px;color:#687583}.page{padding:27px 30px;max-width:1640px;margin:auto}.page-head{display:flex;justify-content:space-between;align-items:flex-end;margin-bottom:23px}.eyebrow{font-size:10px;color:#14847b;letter-spacing:1.8px;font-weight:700}.page-head h1{margin:7px 0 6px;font-size:25px;letter-spacing:-.5px}.page-head p,.panel-head p{margin:0;color:var(--muted);font-size:12px}.actions,.editor-actions{display:flex;gap:8px}button{background:var(--accent);color:white;border-radius:6px;padding:9px 14px;font-size:12px;font-weight:600;display:inline-flex;align-items:center;justify-content:center;gap:7px;white-space:nowrap}button:hover{background:var(--accent-dark)}button svg{width:15px;height:15px}.secondary{background:white;color:#35424e;border:1px solid #d7dde1}.secondary:hover{background:#f2f5f6}.kpis{display:grid;grid-template-columns:repeat(5,1fr);gap:12px;margin-bottom:18px}.kpi{background:white;border:1px solid var(--line);border-radius:8px;padding:16px 17px;box-shadow:0 1px 2px #2030400a}.kpi-top{display:flex;align-items:center;gap:8px;color:#65727d}.kpi-top span{display:grid;place-items:center;background:#edf4f3;color:#158279;border-radius:6px;width:29px;height:29px}.kpi-top span.red{color:#c94b4b;background:#fff0ef}.kpi-top span.green{color:#298657;background:#edf8f1}.kpi-top svg{width:16px}.kpi strong{font-size:25px;display:block;margin-top:13px}.kpi p{font-size:10px;color:#798590;margin:5px 0 0}.grid-main{display:grid;grid-template-columns:minmax(0,1.7fr) minmax(310px,.8fr);gap:18px}.panel{background:white;border:1px solid var(--line);border-radius:8px;box-shadow:0 1px 2px #20304008}.panel-head{display:flex;align-items:center;justify-content:space-between;padding:16px 19px;border-bottom:1px solid #edf0f2}.panel h2,.panel-head h2{…1248 tokens truncated…olor:#71808a}.canvas-toolbar button{pointer-events:auto;background:#fff;border:1px solid var(--line);color:#53616c;padding:5px 8px}.canvas-toolbar button:disabled{opacity:.4;cursor:not-allowed}.flow-node{width:175px;height:70px;background:white;border:1px solid #cad3d8;border-radius:7px;box-shadow:0 3px 10px #1f35451a;display:flex;align-items:center;padding:10px 9px;position:relative;overflow:hidden}.flow-node.selected{border:2px solid #169188;box-shadow:0 0 0 3px #43b9ad2c}.flow-node.node-error{border:2px solid #d34b49}.node-stripe{position:absolute;left:0;top:0;bottom:0;width:4px}.node-icon{width:30px;height:30px;background:#f3f6f6;border-radius:6px;display:grid;place-items:center;font-size:16px;margin:0 9px 0 3px}.node-copy{display:flex;flex-direction:column;min-width:0}.node-copy small{font-size:7px;color:#82909a;text-transform:uppercase}.node-copy b{font-size:10px;margin:3px 0;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.node-state{font-size:7px;color:#817350}.node-state.valid{color:#277c53}.node-state.invalid{color:#c94343}.node-alert{position:absolute;right:5px;top:5px;width:12px;color:#d14947}.config-panel{border:0;border-left:1px solid var(--line);padding:0;background:white;position:relative}.empty-config{display:flex;align-items:center;justify-content:center;flex-direction:column;padding:30px;text-align:center}.empty-icon{font-size:40px;color:#a4afb6}.empty-config h3{font-size:13px}.empty-config p{font-size:10px;color:#7b8790;line-height:1.5}.config-head{padding:13px;border-bottom:1px solid var(--line);display:flex;justify-content:space-between;align-items:center}.config-head>div{display:flex;gap:9px;align-items:center}.config-head>div>span{width:30px;height:30px;background:#eef4f3;display:grid;place-items:center;border-radius:6px;color:var(--accent)}.config-head small{font-size:8px;color:var(--muted)}.config-head h3{font-size:12px;margin:2px 0}.config-panel>label,.config-panel>h4,.config-panel>div:not(.config-head):not(.config-footer){margin-left:14px;margin-right:14px}.config-panel label{font-size:10px;font-weight:600;display:block;margin-top:13px}.config-panel label input:not([type=checkbox]),.config-panel label select,.config-panel label textarea{width:100%;margin-top:6px}.config-panel textarea{min-height:70px;resize:vertical}.config-panel h4{font-size:9px;color:#77838d;text-transform:uppercase;letter-spacing:.7px;border-top:1px solid #edf0f2;padding-top:13px;margin-top:15px;margin-bottom:0}.toggle{display:flex!important;align-items:center;gap:7px}.branch-card,.field-card{border:1px solid var(--line);padding:8px!important;margin-top:8px!important;border-radius:5px;font-size:10px;display:flex;justify-content:space-between}.branch-card span,.field-card small{color:var(--muted)}.wide{width:calc(100% - 28px);margin:8px 14px}.config-footer{position:sticky;bottom:0;background:white;border-top:1px solid var(--line);padding:10px 13px;margin-top:20px}.config-footer small{display:flex;align-items:center;gap:4px;font-size:8px;color:#947127;margin-bottom:7px}.config-footer small svg{width:11px}.config-footer button{width:100%}.problem-panel{border-top:1px solid var(--line);max-height:155px;overflow:auto;z-index:6}.problem-panel.collapsed{max-height:39px}.problem-head{height:38px;display:flex;align-items:center;justify-content:space-between;padding:0 15px;cursor:pointer}.problem-head>div{display:flex;align-items:center;gap:8px;font-size:10px}.problem-head svg{width:14px;color:#d07b2a}.problem-head>span{font-size:9px;color:var(--muted)}.error-count{background:#ffe9e8;color:#bd3d3a;border-radius:20px;padding:3px 7px}.problems{border-top:1px solid #edf0f2;padding:5px 12px}.problems button{background:#fff7f6;color:var(--ink);width:100%;justify-content:flex-start;text-align:left;padding:7px 10px;margin:3px 0}.problems button svg{color:#cf4441}.problems small{display:block;color:#7b858d;margin-top:2px}.all-good{font-size:10px;color:#55816b;padding:12px;display:flex;align-items:center;gap:8px}.all-good svg{width:15px}

`````

### 29. Tool Call: `exec`

- Timestamp: `2026-07-12T10:23:21.785Z`
- Call ID: `call_siEd0JeW7wG7Hbcl8cxKHb9V`

`````javascript
const patch = "*** Begin Patch\n*** Update File: src/styles.css\n@@\n-@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');\n*** Add File: playwright.config.ts\n+import {defineConfig,devices} from '@playwright/test';\n+export default defineConfig({testDir:'./tests',timeout:30_000,fullyParallel:false,retries:0,reporter:'list',use:{baseURL:'http://127.0.0.1:4173',trace:'retain-on-failure',screenshot:'only-on-failure',viewport:{width:1440,height:900}},webServer:{command:'npm run dev -- --port 4173',url:'http://127.0.0.1:4173',reuseExistingServer:true},projects:[{name:'chromium',use:{...devices['Desktop Chrome']}}]});\n*** Add File: tests/flowdesk.spec.ts\n+import {expect,test} from '@playwright/test';\n+test('Dashboard 展示 KPI 并进入最近流程编辑器',async({page})=>{await page.goto('/');await expect(page.getByRole('heading',{name:'流程运营总览'})).toBeVisible();await expect(page.getByTestId('kpi-流程总数')).toHaveText('12');await expect(page.getByTestId('kpi-异常实例')).toHaveText('22');await page.getByTestId('recent-workflow').first().click();await expect(page.getByTestId('flow-canvas')).toBeVisible()});\n+test('编辑、校验、修复条件并预览分支',async({page})=>{await page.goto('/workflows/wf-1/edit');await page.getByTestId('canvas-node-approval').click();await expect(page.getByTestId('config-panel')).toContainText('审批设置');await page.getByTestId('approver-source').selectOption({label:'固定角色'});await page.getByTestId('save-node-config').click();await page.getByRole('button',{name:'保存草稿'}).click();await expect(page.getByRole('status')).toContainText('草稿已保存');await page.getByTestId('run-validation').click();await expect(page.getByTestId('canvas-node-condition')).toHaveClass(/node-error/);await expect(page.getByTestId('problem-panel')).toContainText('条件分支规则未配置');const before=Number((await page.getByTestId('error-count').textContent())?.match(/\\d+/)?.[0]);await page.getByTestId('canvas-node-condition').click();await page.getByTestId('condition-rule').selectOption('amount');await page.getByTestId('save-node-config').click();await page.getByTestId('run-validation').click();await expect.poll(async()=>Number((await page.getByTestId('error-count').textContent())?.match(/\\d+/)?.[0])).toBeLessThan(before);await page.getByRole('button',{name:'预览'}).click();await page.getByTestId('preview-amount').fill('8000');await expect(page.getByTestId('branch-result')).toContainText('高额分支')});\n+test('发布后 Dashboard 与流程列表同步',async({page})=>{await page.goto('/workflows/wf-1/edit');await page.getByRole('button',{name:'发布',exact:true}).click();await expect(page.getByRole('status')).toContainText('流程发布成功');await page.getByRole('link',{name:'流程管理'}).click();await expect(page.getByTestId('workflow-wf-1')).toContainText('已发布');await expect(page.getByTestId('workflow-wf-1')).toContainText('V2');await page.getByRole('link',{name:'总览'}).click();await expect(page.getByTestId('recent-workflow').first()).toBeVisible()});\n+test('运行监控显示异常实例时间线和当前节点高亮',async({page})=>{await page.goto('/monitor');await page.getByTestId('instance-INS-2026-0001').click();await expect(page.getByTestId('instance-detail')).toContainText('异常');await expect(page.getByTestId('execution-timeline')).toContainText('当前停留');await expect(page.locator('.runtime-current')).toBeVisible()});\n+test('版本比较并恢复历史版本',async({page})=>{await page.goto('/workflows/wf-2/versions');await expect(page.getByTestId('version-compare')).toContainText('新增节点');await expect(page.getByTestId('version-compare')).toContainText('高额通知');await page.getByTestId('restore-v1').click();await expect(page.getByTestId('flow-canvas')).toBeVisible();await expect(page.getByRole('status')).toContainText('已恢复版本 V1');await expect(page.getByTestId('canvas-node-notify')).toHaveCount(0)});\n+test('搜索无结果展示空状态',async({page})=>{await page.goto('/workflows');await page.getByLabel('搜索流程').fill('绝对不存在的流程');await expect(page.getByText('没有匹配的流程')).toBeVisible()});\n*** Delete File: README.md\n*** Add File: README.md\n+# FlowDesk Studio\n+\n+FlowDesk Studio 是纯前端企业级低代码流程编排与审批监控演示平台。应用使用 React、TypeScript、Vite、React Flow 和 Zustand；所有数据来自本地 `mock-data/`，不需要登录、后端或外部 API。\n+\n+## 启动\n+\n+要求 Node.js 20+、npm 10+。\n+\n+```bash\n+npm install\n+npm run dev\n+```\n+\n+打开终端显示的地址（默认 `http://localhost:5173`），推荐 1440px 或更宽的现代桌面浏览器。\n+\n+## 测试与构建\n+\n+```bash\n+npx playwright install chromium\n+npm test\n+npm run build\n+```\n+\n+Playwright 自动在 `127.0.0.1:4173` 启动 Vite。`tests/flowdesk.spec.ts` 覆盖 Dashboard KPI、进入编辑器、审批配置、双层校验反馈、条件修复、动态表单分支、发布联动、异常实例详情、版本对比与恢复。\n+\n+## 功能\n+\n+- Dashboard：KPI、最近编辑、发布检查、异常实例。\n+- 流程管理：搜索、状态/业务域筛选、排序、新建、复制、归档。\n+- 流程编辑器：节点库、React Flow 画布、拖放/选择/连线/删除、节点配置、保存、校验、发布和问题面板。\n+- 表单预览：由 Form 节点动态生成，金额输入实时改变 Condition 分支。\n+- 运行监控：80 条实例、状态筛选、执行时间线和当前节点高亮。\n+- 版本历史：结构/配置差异、发布说明、恢复历史版本为草稿。\n+\n+`mock-data/` 包含 12 个流程、80 条实例（22 条异常或超时）、8 个用户、6 个角色、5 个业务域及多种边界数据。同一浏览器会话内的编辑、发布和恢复通过全局 store 实时同步；刷新后恢复初始 mock 数据。\n+\n+```text\n+src/components/   通用布局和状态组件\n+src/pages/        产品页面与核心编辑器\n+src/store/        全局状态及业务操作\n+src/types/        TypeScript 类型出口\n+mock-data/        结构化本地业务数据\n+tests/            Playwright 关键链路测试\n+```\n*** End Patch";
text(await tools.apply_patch(patch));

`````

### 30. Patch Applied

- Timestamp: `2026-07-12T10:23:22.427Z`
- Call ID: `exec-6aebd35e-8191-4e2b-81b5-619fd63c78ef`
- Success: `true`
- Changed files: `/root/hutubo/flowdesk-studio/README.md`, `/root/hutubo/flowdesk-studio/playwright.config.ts`, `/root/hutubo/flowdesk-studio/src/styles.css`, `/root/hutubo/flowdesk-studio/tests/flowdesk.spec.ts`
`````text
Success. Updated the following files:
A playwright.config.ts
A tests/flowdesk.spec.ts
A README.md
M src/styles.css
D README.md

`````

### 31. Tool Result

- Timestamp: `2026-07-12T10:23:22.432Z`
- Call ID: `call_siEd0JeW7wG7Hbcl8cxKHb9V`

`````text
Script completed
Wall time 0.6 seconds
Output:

{}
`````

### 32. Assistant Commentary

- Timestamp: `2026-07-12T10:23:25.663Z`

`````markdown
核心页面、README 与端到端用例现已齐备，并已移除远程字体依赖，确保资源完全本地可复现。现在进入工程验证：安装依赖、执行 TypeScript/Vite 构建，再跑浏览器测试；发现的编译或交互问题会直接修复。
`````

### 33. Tool Call: `exec`

- Timestamp: `2026-07-12T10:23:26.871Z`
- Call ID: `call_YD0eshOKjEqWDjAarJWhYzz9`

`````javascript
const r = await tools.exec_command({cmd:"npm install","workdir":"/root/hutubo/flowdesk-studio","yield_time_ms":30000,"max_output_tokens":12000}); text(r.output); if(r.session_id) text(`SESSION_ID=${r.session_id}`);

`````

### 34. Tool Result

- Timestamp: `2026-07-12T10:23:36.883Z`
- Call ID: `call_YD0eshOKjEqWDjAarJWhYzz9`

`````text
Script running with cell ID 11
Wall time 10.0 seconds
Output:

`````

### 35. Tool Call: `wait`

- Timestamp: `2026-07-12T10:23:39.023Z`
- Call ID: `call_iTu0XhhvfMmQR8wpQEhyiePD`

`````json
{"cell_id":"11","yield_time_ms":1000,"max_tokens":12000}
`````

### 36. Tool Result

- Timestamp: `2026-07-12T10:23:40.025Z`
- Call ID: `call_iTu0XhhvfMmQR8wpQEhyiePD`

`````text
Script running with cell ID 11
Wall time 1.0 seconds
Output:

`````

### 37. Tool Call: `wait`

- Timestamp: `2026-07-12T10:23:41.950Z`
- Call ID: `call_PbuQWeSWz9VOcYOsbBZLA0sd`

`````json
{"cell_id":"11","yield_time_ms":1000,"max_tokens":12000}
`````

### 38. Tool Result

- Timestamp: `2026-07-12T10:23:42.952Z`
- Call ID: `call_PbuQWeSWz9VOcYOsbBZLA0sd`

`````text
Script running with cell ID 11
Wall time 1.0 seconds
Output:

`````

### 39. Tool Call: `wait`

- Timestamp: `2026-07-12T10:23:44.609Z`
- Call ID: `call_DeO6ysRXfpx7iSsRMsMlzLGl`

`````json
{"cell_id":"11","yield_time_ms":1000,"max_tokens":12000}
`````

### 40. Tool Result

- Timestamp: `2026-07-12T10:23:45.611Z`
- Call ID: `call_DeO6ysRXfpx7iSsRMsMlzLGl`

`````text
Script running with cell ID 11
Wall time 1.0 seconds
Output:

`````

### 41. Tool Call: `wait`

- Timestamp: `2026-07-12T10:23:48.482Z`
- Call ID: `call_tKaZin7r6zZCnGS8KDH0YmRp`

`````json
{"cell_id":"11","yield_time_ms":1000,"max_tokens":12000}
`````

### 42. Tool Result

- Timestamp: `2026-07-12T10:23:49.484Z`
- Call ID: `call_tKaZin7r6zZCnGS8KDH0YmRp`

`````text
Script running with cell ID 11
Wall time 1.0 seconds
Output:

`````

### 43. Tool Call: `wait`

- Timestamp: `2026-07-12T10:23:51.344Z`
- Call ID: `call_IMdZB59OR5LH5aV8PjtefPnK`

`````json
{"cell_id":"11","yield_time_ms":1000,"max_tokens":12000}
`````

### 44. Tool Result

- Timestamp: `2026-07-12T10:23:52.346Z`
- Call ID: `call_IMdZB59OR5LH5aV8PjtefPnK`

`````text
Script running with cell ID 11
Wall time 1.0 seconds
Output:

`````

### 45. Tool Call: `wait`

- Timestamp: `2026-07-12T10:23:55.790Z`
- Call ID: `call_yFYxer7ARpQwVAl79w7HjmSb`

`````json
{"cell_id":"11","yield_time_ms":1000,"max_tokens":12000}
`````

### 46. Tool Result

- Timestamp: `2026-07-12T10:23:56.792Z`
- Call ID: `call_yFYxer7ARpQwVAl79w7HjmSb`

`````text
Script running with cell ID 11
Wall time 1.0 seconds
Output:

`````

### 47. Tool Call: `wait`

- Timestamp: `2026-07-12T10:23:59.246Z`
- Call ID: `call_SCysjJ4PHLAVkM0FrwFVqy6C`

`````json
{"cell_id":"11","yield_time_ms":1000,"max_tokens":12000}
`````

### 48. Tool Result

- Timestamp: `2026-07-12T10:23:59.261Z`
- Call ID: `call_SCysjJ4PHLAVkM0FrwFVqy6C`

`````text
Script completed
Wall time 0.0 seconds
Output:


SESSION_ID=53671
`````

### 49. Tool Call: `exec`

- Timestamp: `2026-07-12T10:24:01.910Z`
- Call ID: `call_FIwyRnxmsRxlB3tRQfCGCBf1`

`````javascript
const r = await tools.write_stdin({session_id:53671,chars:"",yield_time_ms:1000,max_output_tokens:12000}); text(r.output);

`````

### 50. Tool Result

- Timestamp: `2026-07-12T10:24:06.924Z`
- Call ID: `call_FIwyRnxmsRxlB3tRQfCGCBf1`

`````text
Script completed
Wall time 5.0 seconds
Output:


`````

### 51. Tool Call: `exec`

- Timestamp: `2026-07-12T10:24:09.509Z`
- Call ID: `call_KQFnhbIktSn07Kg6uKnf7M82`

`````javascript
const r = await tools.write_stdin({session_id:53671,chars:"",yield_time_ms:1000,max_output_tokens:12000}); text(r.output);

`````

### 52. Tool Result

- Timestamp: `2026-07-12T10:24:14.522Z`
- Call ID: `call_KQFnhbIktSn07Kg6uKnf7M82`

`````text
Script completed
Wall time 5.0 seconds
Output:


`````

### 53. Tool Call: `exec`

- Timestamp: `2026-07-12T10:24:17.045Z`
- Call ID: `call_4lcmXuqYEzMm4UaYQR5cTSH8`

`````javascript
const r = await tools.write_stdin({session_id:53671,chars:"\u0003",yield_time_ms:1000,max_output_tokens:12000}); text(r.output);

`````

### 54. Tool Result

- Timestamp: `2026-07-12T10:24:17.062Z`
- Call ID: `call_4lcmXuqYEzMm4UaYQR5cTSH8`

`````text
Script completed
Wall time 0.0 seconds
Output:


`````

### 55. Tool Call: `exec`

- Timestamp: `2026-07-12T10:24:21.369Z`
- Call ID: `call_OCtyWJX3K8pe5IKdfg4MLY9S`

`````javascript
const r = await tools.exec_command({cmd:"test -d node_modules && echo installed || echo missing; npm install --verbose","workdir":"/root/hutubo/flowdesk-studio","yield_time_ms":30000,"max_output_tokens":6000,"sandbox_permissions":"require_escalated","justification":"是否允许联网下载项目依赖，以便完成构建和 Playwright 浏览器验证？","prefix_rule":["npm","install"]}); text(r.output); if(r.session_id) text(`SESSION_ID=${r.session_id}`);

`````

### 56. Tool Result

- Timestamp: `2026-07-12T10:32:59.184Z`
- Call ID: `call_OCtyWJX3K8pe5IKdfg4MLY9S`

`````text
Script running with cell ID 15
Wall time 517.8 seconds
Output:

`````

### 57. Tool Call: `wait`

- Timestamp: `2026-07-12T10:33:02.825Z`
- Call ID: `call_wTPXr9AR5InkKZVLpcY8XkRE`

`````json
{"cell_id":"15","yield_time_ms":1000,"max_tokens":6000}
`````

### 58. Tool Result

- Timestamp: `2026-07-12T10:33:03.827Z`
- Call ID: `call_wTPXr9AR5InkKZVLpcY8XkRE`

`````text
Script running with cell ID 15
Wall time 1.0 seconds
Output:

`````

### 59. Assistant Commentary

- Timestamp: `2026-07-12T10:33:07.163Z`

`````markdown
依赖安装受到当前网络响应速度影响，安装进程仍在运行；项目文件本身已完整生成。我会继续等待安装完成后立即执行构建与浏览器用例，不跳过实际验证。
`````

### 60. Tool Call: `wait`

- Timestamp: `2026-07-12T10:33:07.541Z`
- Call ID: `call_Rc6UAzUdn6m3LLFgSzIRWLx6`

`````json
{"cell_id":"15","yield_time_ms":1000,"max_tokens":6000}
`````

### 61. Tool Result

- Timestamp: `2026-07-12T10:33:08.543Z`
- Call ID: `call_Rc6UAzUdn6m3LLFgSzIRWLx6`

`````text
Script running with cell ID 15
Wall time 1.0 seconds
Output:

`````

### 62. Tool Call: `wait`

- Timestamp: `2026-07-12T10:33:11.024Z`
- Call ID: `call_mQR87sKPvVC2wAC40dHEjyM3`

`````json
{"cell_id":"15","yield_time_ms":1000,"max_tokens":6000}
`````

### 63. Tool Result

- Timestamp: `2026-07-12T10:33:11.037Z`
- Call ID: `call_mQR87sKPvVC2wAC40dHEjyM3`

`````text
Script completed
Wall time 0.0 seconds
Output:

missing
npm verbose cli /usr/local/bin/node /usr/local/bin/npm
npm info using npm@10.8.2
npm info using node@v20.19.4
npm verbose title npm install
npm verbose argv "install" "--loglevel" "verbose"
npm verbose logfile logs-max:10 dir:/root/.npm/_logs/2026-07-12T10_32_59_229Z-
npm verbose logfile /root/.npm/_logs/2026-07-12T10_32_59_229Z-debug-0.log
npm http fetch GET 200 https://registry.npmjs.org/@vitejs%2fplugin-react 413ms (cache revalidated)
npm http fetch GET 200 https://registry.npmjs.org/@rolldown%2fplugin-babel 125ms (cache revalidated)
npm http fetch GET 200 https://registry.npmjs.org/@babel%2fcore 104ms (cache revalidated)
npm http fetch GET 200 https://registry.npmjs.org/@babel%2fpreset-typescript 110ms (cache revalidated)
npm http fetch GET 200 https://registry.npmjs.org/@babel%2fplugin-transform-runtime 102ms (cache revalidated)
npm http fetch GET 200 https://registry.npmjs.org/@babel%2fruntime 109ms (cache revalidated)
npm http fetch GET 200 https://registry.npmjs.org/rolldown 115ms (cache revalidated)
npm http fetch GET 200 https://registry.npmjs.org/vite 162ms (cache revalidated)
npm http fetch GET 200 https://registry.npmjs.org/@types%2fnode 124ms (cache revalidated)
npm http fetch GET 200 https://registry.npmjs.org/@vitejs%2fdevtools 113ms (cache revalidated)
npm http fetch GET 200 https://registry.npmjs.org/esbuild 97ms (cache revalidated)
npm http fetch GET 200 https://registry.npmjs.org/jiti 94ms (cache revalidated)
npm http fetch GET 200 https://registry.npmjs.org/less 96ms (cache revalidated)
npm http fetch GET 200 https://registry.npmjs.org/sass 97ms (cache revalidated)
npm http fetch GET 200 https://registry.npmjs.org/sass-embedded 98ms (cache revalidated)
npm http fetch GET 200 https://registry.npmjs.org/stylus 98ms (cache revalidated)
npm http fetch GET 200 https://registry.npmjs.org/sugarss 97ms (cache revalidated)
npm http fetch GET 200 https://registry.npmjs.org/postcss 93ms (cache revalidated)
npm http fetch GET 200 https://registry.npmjs.org/terser 111ms (cache revalidated)
npm http fetch GET 200 https://registry.npmjs.org/tsx 101ms (cache revalidated)
npm http fetch GET 200 https://registry.npmjs.org/yaml 96ms (cache revalidated)
npm http fetch GET 200 https://registry.npmjs.org/babel-plugin-react-compiler 98ms (cache revalidated)
npm http fetch GET 200 https://registry.npmjs.org/typescript 114ms (cache revalidated)
npm http fetch GET 200 https://registry.npmjs.org/react 106ms (cache revalidated)
npm http fetch GET 200 https://registry.npmjs.org/react-dom 111ms (cache revalidated)
npm http fetch GET 200 https://registry.npmjs.org/react-router-dom 107ms (cache revalidated)
npm http fetch GET 200 https://registry.npmjs.org/@xyflow%2freact 133ms (cache revalidated)
npm http fetch GET 200 https://registry.npmjs.org/@types%2freact 113ms (cache revalidated)
npm http fetch GET 200 https://registry.npmjs.org/@types%2freact-dom 106ms (cache revalidated)
npm http fetch GET 200 https://registry.npmjs.org/lucide-react 100ms (cache revalidated)
npm http fetch GET 200 https://registry.npmjs.org/zustand 94ms (cache revalidated)
npm http fetch GET 200 https://registry.npmjs.org/immer 99ms (cache revalidated)
npm http fetch GET 200 https://registry.npmjs.org/use-sync-external-store 103ms (cache revalidated)
npm http fetch GET 200 https://registry.npmjs.org/@playwright%2ftest 126ms (cache revalidated)
npm http fetch GET 200 https://registry.npmjs.org/playwright 120ms (cache revalidated)
npm http fetch GET 200 https://registry.npmjs.org/lightningcss 102ms (cache revalidated)
npm http fetch GET 200 https://registry.npmjs.org/csstype 403ms (cache revalidated)
npm http fetch GET 200 https://registry.npmjs.org/rolldown 6ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/@rolldown%2fpluginutils 426ms (cache revalidated)
npm http fetch GET 200 https://registry.npmjs.org/picomatch 108ms (cache revalidated)
npm http fetch GET 200 https://registry.npmjs.org/fsevents 104ms (cache revalidated)
npm http fetch GET 200 https://registry.npmjs.org/tinyglobby 116ms (cache revalidated)
npm http fetch GET 200 https://registry.npmjs.org/scheduler 110ms (cache revalidated)
npm http fetch GET 200 https://registry.npmjs.org/@xyflow%2fsystem 138ms (cache revalidated)
npm http fetch GET 200 https://registry.npmjs.org/classcat 266ms (cache revalidated)
npm http fetch GET 200 https://registry.npmjs.org/react-router 105ms (cache revalidated)
npm http fetch GET 200 https://registry.npmjs.org/@typescript%2ftypescript-aix-ppc64 116ms (cache revalidated)
npm http fetch GET 200 https://registry.npmjs.org/@typescript%2ftypescript-linux-arm 114ms (cache updated)
npm http fetch GET 200 https://registry.npmjs.org/@typescript%2ftypescript-sunos-x64 109ms (cache revalidated)
npm http fetch GET 200 https://registry.npmjs.org/@typescript%2ftypescript-linux-x64 125ms (cache updated)
npm http fetch GET 200 https://registry.npmjs.org/@typescript%2ftypescript-win32-x64 116ms (cache updated)
npm http fetch GET 200 https://registry.npmjs.org/@typescript%2ftypescript-darwin-x64 126ms (cache updated)
npm http fetch GET 200 https://registry.npmjs.org/@typescript%2ftypescript-netbsd-x64 125ms (cache revalidated)
npm http fetch GET 200 https://registry.npmjs.org/@typescript%2ftypescript-freebsd-x64 117ms (cache revalidated)
npm http fetch GET 200 https://registry.npmjs.org/@typescript%2ftypescript-linux-arm64 123ms (cache updated)
npm http fetch GET 200 https://registry.npmjs.org/@typescript%2ftypescript-linux-s390x 112ms (cache revalidated)
npm http fetch GET 200 https://registry.npmjs.org/@typescript%2ftypescript-linux-ppc64 122ms (cache revalidated)
npm http fetch GET 200 https://registry.npmjs.org/@typescript%2ftypescript-openbsd-x64 114ms (cache revalidated)
npm http fetch GET 200 https://registry.npmjs.org/@typescript%2ftypescript-win32-arm64 123ms (cache updated)
npm http fetch GET 200 https://registry.npmjs.org/@typescript%2ftypescript-darwin-arm64 120ms (cache updated)
npm http fetch GET 200 https://registry.npmjs.org/@typescript%2ftypescript-netbsd-arm64 110ms (cache revalidated)
npm http fetch GET 200 https://registry.npmjs.org/@typescript%2ftypescript-freebsd-arm64 112ms (cache revalidated)
npm http fetch GET 200 https://registry.npmjs.org/@typescript%2ftypescript-linux-loong64 115ms (cache revalidated)
npm http fetch GET 200 https://registry.npmjs.org/@typescript%2ftypescript-linux-riscv64 118ms (cache revalidated)
npm http fetch GET 200 https://registry.npmjs.org/@typescript%2ftypescript-openbsd-arm64 108ms (cache revalidated)
npm http fetch GET 200 https://registry.npmjs.org/@typescript%2ftypescript-linux-mips64el 109ms (cache revalidated)
npm http fetch GET 200 https://registry.npmjs.org/playwright-core 146ms (cache revalidated)
npm http fetch GET 200 https://registry.npmjs.org/@types%2freact 5ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/react 10ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/@types%2fd3-drag 108ms (cache revalidated)
npm http fetch GET 200 https://registry.npmjs.org/@types%2fd3-selection 111ms (cache revalidated)
npm http fetch GET 200 https://registry.npmjs.org/@types%2fd3-interpolate 115ms (cache revalidated)
npm http fetch GET 200 https://registry.npmjs.org/@types%2fd3-transition 101ms (cache revalidated)
npm http fetch GET 200 https://registry.npmjs.org/@types%2fd3-zoom 104ms (cache revalidated)
npm http fetch GET 200 https://registry.npmjs.org/d3-drag 108ms (cache revalidated)
npm http fetch GET 200 https://registry.npmjs.org/d3-interpolate 96ms (cache revalidated)
npm http fetch GET 200 https://registry.npmjs.org/use-sync-external-store 6ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/d3-selection 115ms (cache revalidated)
npm http fetch GET 200 https://registry.npmjs.org/d3-zoom 110ms (cache revalidated)
npm http fetch GET 200 https://registry.npmjs.org/d3-color 99ms (cache revalidated)
npm http fetch GET 200 https://registry.npmjs.org/d3-dispatch 103ms (cache revalidated)
npm http fetch GET 200 https://registry.npmjs.org/@types%2fd3-color 109ms (cache revalidated)
npm http fetch GET 200 https://registry.npmjs.org/d3-dispatch 105ms (cache revalidated)
npm http fetch GET 200 https://registry.npmjs.org/d3-transition 256ms (cache revalidated)
npm http fetch GET 200 https://registry.npmjs.org/d3-ease 94ms (cache revalidated)
npm http fetch GET 200 https://registry.npmjs.org/d3-timer 96ms (cache revalidated)
npm http fetch GET 200 https://registry.npmjs.org/react 9ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/react-dom 13ms (cache hit)
npm http fetch GET 200 https://registry.npmjs.org/set-cookie-parser 98ms (cache revalidated)
npm http fetch GET 200 https://registry.npmjs.org/cookie 99ms (cache revalidated)
npm http fetch GET 200 https://registry.npmjs.org/lightningcss-darwin-x64 98ms (cache revalidated)
npm http fetch GET 200 https://registry.npmjs.org/lightningcss-linux-x64-gnu 99ms (cache revalidated)
npm http fetch GET 200 https://registry.npmjs.org/detect-libc 103ms (cache revalidated)
npm http fetch GET 200 https://registry.npmjs.org/lightningcss-win32-x64-msvc 97ms (cache revalidated)
npm http fetch GET 200 https://registry.npmjs.org/lightningcss-win32-arm64-msvc 101ms (cache revalidated)
npm http fetch GET 200 https://registry.npmjs.org/lightningcss-darwin-arm64 101ms (cache revalidated)
npm http fetch GET 200 https://registry.npmjs.org/lightningcss-linux-arm64-gnu 93ms (cache revalidated)
npm http fetch GET 200 https://registry.npmjs.org/lightningcss-linux-arm64-musl 93ms (cache revalidated)
npm http fetch GET 200 https://registry.npmjs.org/lightningcss-linux-arm-gnueabihf 100ms (cache revalidated)
npm http fetch GET 200 https://registry.npmjs.org/lightningcss-linux-x64-musl 103ms (cache revalidated)
npm http fetch GET 200 https://registry.npmjs.org/lightningcss-freebsd-x64 99ms (cache revalidated)
npm http fetch GET 200 https://registry.npmjs.org/lightningcss-android-arm64 99ms (cache revalidated)
npm http fetch GET 200 https://registry.npmjs.org/nanoid 96ms (cache revalidated)
npm http fetch GET 200 https://registry.npmjs.org/source-map-js 106ms (cache revalidated)
npm http fetch GET 200 https://registry.npmjs.org/picocolors 114ms (cache revalidated)
npm http fetch GET 200 https://registry.npmjs.org/@oxc-project%2ftypes 107ms (cache revalidated)
npm http fetch GET 200 https://registry.npmjs.org/@rolldown%2fbinding-win32-x64-msvc 112ms (cache revalidated)
npm http fetch GET 200 https://registry.npmjs.org/@rolldown%2fbinding-linux-x64-gnu 114ms (cache revalidated)
npm http fetch GET 200 https://registry.npmjs.org/@rolldown%2fbinding-linux-x64-musl 132ms (cache revalidated)
npm http fetch GET 200 https://registry.npmjs.org/@rolldown%2fbinding-darwin-x64 284ms (cache revalidated)
npm http fetch GET 200 https://registry.npmjs.org/@rolldown%2fbinding-freebsd-x64 106ms (cache revalidated)
npm http fetch GET 200 https://registry.npmjs.org/@rolldown%2fbinding-linux-arm-gnueabihf 109ms (cache revalidated)
npm http fetch GET 200 https://registry.npmjs.org/@rolldown%2fbinding-linux-arm64-gnu 116ms (cache revalidated)
npm http fetch GET 200 https://registry.npmjs.org/@rolldown%2fbinding-darwin-arm64 134ms (cache revalidated)
npm http fetch GET 200 https://registry.npmjs.org/@rolldown%2fbinding-linux-arm64-musl 117ms (cache revalidated)
npm http fetch GET 200 https://registry.npmjs.org/@rolldown%2fbinding-openharmony-arm64 114ms (cache revalidated)
npm http fetch GET 200 https://registry.npmjs.org/@rolldown%2fbinding-win32-arm64-msvc 111ms (cache revalidated)
npm http fetch GET 200 https://registry.npmjs.org/@rolldown%2fbinding-android-arm64 120ms (cache revalidated)
npm http fetch GET 200 https://registry.npmjs.org/@rolldown%2fbinding-wasm32-wasi 130ms (cache revalidated)
npm http fetch GET 200 https://registry.npmjs.org/@rolldown%2fbinding-linux-s390x-gnu 118ms (cache revalidated)
npm http fetch GET 200 https://registry.npmjs.org/@rolldown%2fbinding-linux-ppc64-gnu 115ms (cache revalidated)
npm http fetch GET 200 https://registry.npmjs.org/fdir 100ms (cache revalidated)
npm http fetch GET 200 https://registry.npmjs.org/@emnapi%2fruntime 113ms (cache revalidated)
npm http fetch GET 200 https://registry.npmjs.org/@emnapi%2fcore 115ms (cache revalidated)
npm http fetch GET 200 https://registry.npmjs.org/@napi-rs%2fwasm-runtime 117ms (cache revalidated)
npm http fetch GET 200 https://registry.npmjs.org/tslib 94ms (cache revalidated)
npm http fetch GET 200 https://registry.npmjs.org/tslib 99ms (cache revalidated)
npm http fetch GET 200 https://registry.npmjs.org/@emnapi%2fwasi-threads 116ms (cache revalidated)
npm http fetch GET 200 https://registry.npmjs.org/@tybys%2fwasm-util 106ms (cache revalidated)
npm http fetch GET 200 https://registry.npmjs.org/react 10ms (cache hit)
npm verbose reify failed optional dependency /root/hutubo/flowdesk-studio/node_modules/@rolldown/binding-win32-x64-msvc
npm verbose reify failed optional dependency /root/hutubo/flowdesk-studio/node_modules/@rolldown/binding-win32-arm64-msvc
npm verbose reify failed optional dependency /root/hutubo/flowdesk-studio/node_modules/@rolldown/binding-wasm32-wasi
npm verbose reify failed optional dependency /root/hutubo/flowdesk-studio/node_modules/@napi-rs/wasm-runtime
npm verbose reify failed optional dependency /root/hutubo/flowdesk-studio/node_modules/@emnapi/core
npm verbose reify failed optional dependency /root/hutubo/flowdesk-studio/node_modules/@emnapi/runtime
npm verbose reify failed optional dependency /root/hutubo/flowdesk-studio/node_modules/@tybys/wasm-util
npm verbose reify failed optional dependency /root/hutubo/flowdesk-studio/node_modules/tslib
npm verbose reify failed optional dependency /root/hutubo/flowdesk-studio/node_modules/@emnapi/wasi-threads
npm verbose reify failed optional dependency /root/hutubo/flowdesk-studio/node_modules/@rolldown/binding-openharmony-arm64
npm verbose reify failed optional dependency /root/hutubo/flowdesk-studio/node_modules/@rolldown/binding-linux-x64-musl
npm verbose reify failed optional dependency /root/hutubo/flowdesk-studio/node_modules/@rolldown/binding-linux-s390x-gnu
npm verbose reify failed optional dependency /root/hutubo/flowdesk-studio/node_modules/@rolldown/binding-linux-ppc64-gnu
npm verbose reify failed optional dependency /root/hutubo/flowdesk-studio/node_modules/@rolldown/binding-linux-arm64-musl
npm verbose reify failed optional dependency /root/hutubo/flowdesk-studio/node_modules/@rolldown/binding-linux-arm64-gnu
npm verbose reify failed optional dependency /root/hutubo/flowdesk-studio/node_modules/@rolldown/binding-linux-arm-gnueabihf
npm verbose reify failed optional dependency /root/hutubo/flowdesk-studio/node_modules/@rolldown/binding-freebsd-x64
npm verbose reify failed optional dependency /root/hutubo/flowdesk-studio/node_modules/@rolldown/binding-darwin-x64
npm verbose reify failed optional dependency /root/hutubo/flowdesk-studio/node_modules/@rolldown/binding-darwin-arm64
npm verbose reify failed optional dependency /root/hutubo/flowdesk-studio/node_modules/@rolldown/binding-android-arm64
npm verbose reify failed optional dependency /root/hutubo/flowdesk-studio/node_modules/lightningcss-win32-x64-msvc
npm verbose reify failed optional dependency /root/hutubo/flowdesk-studio/node_modules/lightningcss-win32-arm64-msvc
npm verbose reify failed optional dependency /root/hutubo/flowdesk-studio/node_modules/lightningcss-linux-x64-musl
npm verbose reify failed optional dependency /root/hutubo/flowdesk-studio/node_modules/lightningcss-linux-arm64-musl
npm verbose reify failed optional dependency /root/hutubo/flowdesk-studio/node_modules/lightningcss-linux-arm64-gnu
npm verbose reify failed optional dependency /root/hutubo/flowdesk-studio/node_modules/lightningcss-linux-arm-gnueabihf
npm verbose reify failed optional dependency /root/hutubo/flowdesk-studio/node_modules/lightningcss-freebsd-x64
npm verbose reify failed optional dependency /root/hutubo/flowdesk-studio/node_modules/lightningcss-darwin-x64
npm verbose reify failed optional dependency /root/hutubo/flowdesk-studio/node_modules/lightningcss-darwin-arm64
npm verbose reify failed optional dependency /root/hutubo/flowdesk-studio/node_modules/lightningcss-android-arm64
npm verbose reify failed optional dependency /root/hutubo/flowdesk-studio/node_modules/@typescript/typescript-win32-x64
npm verbose reify failed optional dependency /root/hutubo/flowdesk-studio/node_modules/@typescript/typescript-win32-arm64
npm verbose reify failed optional dependency /root/hutubo/flowdesk-studio/node_modules/@typescript/typescript-sunos-x64
npm verbose reify failed optional dependency /root/hutubo/flowdesk-studio/node_modules/@typescript/typescript-openbsd-x64
npm verbose reify failed optional dependency /root/hutubo/flowdesk-studio/node_modules/@typescript/typescript-openbsd-arm64
npm verbose reify failed optional dependency /root/hutubo/flowdesk-studio/node_modules/@typescript/typescript-netbsd-x64
npm verbose reify failed optional dependency /root/hutubo/flowdesk-studio/node_modules/@typescript/typescript-netbsd-arm64
npm verbose reify failed optional dependency /root/hutubo/flowdesk-studio/node_modules/@typescript/typescript-linux-s390x
npm verbose reify failed optional dependency /root/hutubo/flowdesk-studio/node_modules/@typescript/typescript-linux-riscv64
npm verbose reify failed optional dependency /root/hutubo/flowdesk-studio/node_modules/@typescript/typescript-linux-ppc64
npm verbose reify failed optional dependency /root/hutubo/flowdesk-studio/node_modules/@typescript/typescript-linux-mips64el
npm verbose reify failed optional dependency /root/hutubo/flowdesk-studio/node_modules/@typescript/typescript-linux-loong64
npm verbose reify failed optional dependency /root/hutubo/flowdesk-studio/node_modules/@typescript/typescript-linux-arm64
npm verbose reify failed optional dependency /root/hutubo/flowdesk-studio/node_modules/@typescript/typescript-linux-arm
npm verbose reify failed optional dependency /root/hutubo/flowdesk-studio/node_modules/@typescript/typescript-freebsd-x64
npm verbose reify failed optional dependency /root/hutubo/flowdesk-studio/node_modules/@typescript/typescript-freebsd-arm64
npm verbose reify failed optional dependency /root/hutubo/flowdesk-studio/node_modules/@typescript/typescript-darwin-x64
npm verbose reify failed optional dependency /root/hutubo/flowdesk-studio/node_modules/@typescript/typescript-darwin-arm64
npm verbose reify failed optional dependency /root/hutubo/flowdesk-studio/node_modules/@typescript/typescript-aix-ppc64
npm verbose reify failed optional dependency /root/hutubo/flowdesk-studio/node_modules/fsevents
npm verbose reify failed optional dependency /root/hutubo/flowdesk-studio/node_modules/vite/node_modules/fsevents
npm http fetch POST 200 https://registry.npmjs.org/-/npm/v1/security/advisories/bulk 928ms

added 53 packages, and audited 54 packages in 11s

9 packages are looking for funding
  run `npm fund` for details

found 0 vulnerabilities
npm verbose cwd /root/hutubo/flowdesk-studio
npm verbose os Linux 5.10.0-45-amd64
npm verbose node v20.19.4
npm verbose npm  v10.8.2
npm verbose exit 0
npm info ok

`````

### 64. Tool Call: `exec`

- Timestamp: `2026-07-12T10:33:13.591Z`
- Call ID: `call_KnowOHTCjN5bAD3p8UygxHYd`

`````javascript
const r = await tools.exec_command({cmd:"npm run build","workdir":"/root/hutubo/flowdesk-studio","yield_time_ms":30000,"max_output_tokens":12000}); text(r.output);

`````

### 65. Tool Result

- Timestamp: `2026-07-12T10:33:13.969Z`
- Call ID: `call_KnowOHTCjN5bAD3p8UygxHYd`

`````text
Script completed
Wall time 0.4 seconds
Output:


> flowdesk-studio@1.0.0 build
> tsc -b && vite build

src/main.tsx(5,8): error TS2882: Cannot find module or type declarations for side-effect import of '@xyflow/react/dist/style.css'.
src/main.tsx(6,8): error TS2882: Cannot find module or type declarations for side-effect import of './styles.css'.

`````

### 66. Tool Call: `exec`

- Timestamp: `2026-07-12T10:33:16.903Z`
- Call ID: `call_IxZ3TmMPW1WiBeB87aD6Auhe`

`````javascript
const patch = "*** Begin Patch\n*** Add File: src/vite-env.d.ts\n+/// <reference types=\"vite/client\" />\n+declare module '*.css';\n*** End Patch";
text(await tools.apply_patch(patch));

`````

### 67. Patch Applied

- Timestamp: `2026-07-12T10:33:17.009Z`
- Call ID: `exec-d56b7a7a-127c-49e3-a7b9-554efa8f742d`
- Success: `true`
- Changed files: `/root/hutubo/flowdesk-studio/src/vite-env.d.ts`
`````text
Success. Updated the following files:
A src/vite-env.d.ts

`````

### 68. Tool Result

- Timestamp: `2026-07-12T10:33:17.015Z`
- Call ID: `call_IxZ3TmMPW1WiBeB87aD6Auhe`

`````text
Script completed
Wall time 0.1 seconds
Output:

{}
`````

### 69. Tool Call: `exec`

- Timestamp: `2026-07-12T10:33:19.532Z`
- Call ID: `call_EcILAqJo1Wf6iYOHwKyqaHtJ`

`````javascript
const r = await tools.exec_command({cmd:"npm run build","workdir":"/root/hutubo/flowdesk-studio","yield_time_ms":30000,"max_output_tokens":12000}); text(r.output);

`````

### 70. Tool Result

- Timestamp: `2026-07-12T10:33:20.376Z`
- Call ID: `call_EcILAqJo1Wf6iYOHwKyqaHtJ`

`````text
Script completed
Wall time 0.8 seconds
Output:


> flowdesk-studio@1.0.0 build
> tsc -b && vite build

vite v8.1.4 building client environment for production...
[2K
transforming...✓ 1951 modules transformed.
rendering chunks...
computing gzip size...
dist/index.html                   0.16 kB │ gzip:   0.14 kB
dist/assets/index-avpVqba7.css   35.33 kB │ gzip:   7.38 kB
dist/assets/index-DmEUgyBv.js   454.82 kB │ gzip: 145.66 kB

✓ built in 259ms

`````

### 71. Assistant Commentary

- Timestamp: `2026-07-12T10:33:29.432Z`

`````markdown
构建已通过（TypeScript 严格检查与 Vite 生产构建均成功）。我修复了新版 TypeScript 对 CSS side-effect import 的类型声明问题；下面运行完整 Playwright 套件，并据失败断言逐项校正真实交互。
`````

### 72. Tool Call: `exec`

- Timestamp: `2026-07-12T10:33:29.706Z`
- Call ID: `call_k2qO6jHQtMjYe06Uvbl1sr3r`

`````javascript
const r = await tools.exec_command({cmd:"npm test","workdir":"/root/hutubo/flowdesk-studio","yield_time_ms":30000,"max_output_tokens":12000}); text(r.output); if(r.session_id) text(`SESSION_ID=${r.session_id}`);

`````

### 73. Tool Result

- Timestamp: `2026-07-12T10:33:30.948Z`
- Call ID: `call_k2qO6jHQtMjYe06Uvbl1sr3r`

`````text
Script completed
Wall time 1.2 seconds
Output:


> flowdesk-studio@1.0.0 test
> playwright test

Error: Process from config.webServer was not able to start. Exit code: 1


`````

### 74. Tool Call: `exec`

- Timestamp: `2026-07-12T10:33:36.111Z`
- Call ID: `call_jh5lLRR4lgHiW0gVmSQYCJt9`

`````javascript
const r = await tools.exec_command({cmd:"npm run dev -- --port 4173","workdir":"/root/hutubo/flowdesk-studio","yield_time_ms":1000,"max_output_tokens":4000}); text(r.output); if(r.session_id) text(`SESSION_ID=${r.session_id}`);

`````

### 75. Tool Result

- Timestamp: `2026-07-12T10:33:36.478Z`
- Call ID: `call_jh5lLRR4lgHiW0gVmSQYCJt9`

`````text
Script completed
Wall time 0.4 seconds
Output:


> flowdesk-studio@1.0.0 dev
> vite --host 0.0.0.0 --port 4173

error when starting dev server:
Error: listen EPERM: operation not permitted 0.0.0.0:4173
    at Server.setupListenHandle [as _listen2] (node:net:1886:21)
    at listenInCluster (node:net:1965:12)
    at doListen (node:net:2139:7)
    at process.processTicksAndRejections (node:internal/process/task_queues:83:21) {
  code: 'EPERM',
  errno: -1,
  syscall: 'listen',
  address: '0.0.0.0',
  port: 4173
}

`````

### 76. Tool Call: `exec`

- Timestamp: `2026-07-12T10:33:41.468Z`
- Call ID: `call_6AElPZ9BlFQEGvOEGldvynWb`

`````javascript
const r = await tools.exec_command({cmd:"npm test","workdir":"/root/hutubo/flowdesk-studio","yield_time_ms":30000,"max_output_tokens":12000,"sandbox_permissions":"require_escalated","justification":"是否允许启动本地 Vite 服务与 Chromium，以执行用户要求的 Playwright 浏览器验证？","prefix_rule":["npm","test"]}); text(r.output); if(r.session_id) text(`SESSION_ID=${r.session_id}`);

`````

### 77. Tool Result

- Timestamp: `2026-07-12T10:44:04.894Z`
- Call ID: `call_6AElPZ9BlFQEGvOEGldvynWb`

`````text
Script running with cell ID 21
Wall time 623.4 seconds
Output:

`````

### 78. Tool Call: `wait`

- Timestamp: `2026-07-12T10:44:07.295Z`
- Call ID: `call_HiBQNLEozaPHLxZjhf8ZXCuO`

`````json
{"cell_id":"21","yield_time_ms":1000,"max_tokens":12000}
`````

### 79. Tool Result

- Timestamp: `2026-07-12T10:44:08.297Z`
- Call ID: `call_HiBQNLEozaPHLxZjhf8ZXCuO`

`````text
Script running with cell ID 21
Wall time 1.0 seconds
Output:

`````

### 80. Tool Call: `wait`

- Timestamp: `2026-07-12T10:44:10.157Z`
- Call ID: `call_2hpx6FcKimRrwNsjsW1aRhMB`

`````json
{"cell_id":"21","yield_time_ms":1000,"max_tokens":12000}
`````

### 81. Tool Result

- Timestamp: `2026-07-12T10:44:11.159Z`
- Call ID: `call_2hpx6FcKimRrwNsjsW1aRhMB`

`````text
Script running with cell ID 21
Wall time 1.0 seconds
Output:

`````

### 82. Tool Call: `wait`

- Timestamp: `2026-07-12T10:44:13.270Z`
- Call ID: `call_7DNpNstGcrJKdkTjAKN6Emg8`

`````json
{"cell_id":"21","yield_time_ms":1000,"max_tokens":12000}
`````

### 83. Tool Result

- Timestamp: `2026-07-12T10:44:14.272Z`
- Call ID: `call_7DNpNstGcrJKdkTjAKN6Emg8`

`````text
Script running with cell ID 21
Wall time 1.0 seconds
Output:

`````

### 84. Tool Call: `wait`

- Timestamp: `2026-07-12T10:44:16.273Z`
- Call ID: `call_jp0KtgWULmHJAbq2tZbVVn7c`

`````json
{"cell_id":"21","yield_time_ms":1000,"max_tokens":12000}
`````

### 85. Tool Result

- Timestamp: `2026-07-12T10:44:17.276Z`
- Call ID: `call_jp0KtgWULmHJAbq2tZbVVn7c`

`````text
Script running with cell ID 21
Wall time 1.0 seconds
Output:

`````

### 86. Tool Call: `wait`

- Timestamp: `2026-07-12T10:44:19.426Z`
- Call ID: `call_rDO27wPxkgOaMxABjAFZ98l1`

`````json
{"cell_id":"21","yield_time_ms":1000,"max_tokens":12000}
`````

### 87. Tool Result

- Timestamp: `2026-07-12T10:44:19.438Z`
- Call ID: `call_rDO27wPxkgOaMxABjAFZ98l1`

`````text
Script completed
Wall time 0.0 seconds
Output:


> flowdesk-studio@1.0.0 test
> playwright test

[WebServer] (node:167469) Warning: The 'NO_COLOR' env is ignored due to the 'FORCE_COLOR' env being set.
[WebServer] (Use `node --trace-warnings ...` to show where the warning was created)

Running 6 tests using 1 worker

  ✓  1 [chromium] › tests/flowdesk.spec.ts:2:1 › Dashboard 展示 KPI 并进入最近流程编辑器 (994ms)
  ✘  2 [chromium] › tests/flowdesk.spec.ts:3:1 › 编辑、校验、修复条件并预览分支 (6.2s)
  ✓  3 [chromium] › tests/flowdesk.spec.ts:4:1 › 发布后 Dashboard 与流程列表同步 (1.1s)
[WebServer] 6:44:16 PM [vite] (client) [console.warn] [React Flow]: Node type "start" not found. Using fallback type "default". Help: https://reactflow.dev/error#003
[WebServer] 6:44:16 PM [vite] (client) [console.warn] [React Flow]: Node type "start" not found. Using fallback type "default". Help: https://reactflow.dev/error#003
[WebServer] 6:44:16 PM [vite] (client) [console.warn] [React Flow]: Node type "form" not found. Using fallback type "default". Help: https://reactflow.dev/error#003
[WebServer] 6:44:16 PM [vite] (client) [console.warn] [React Flow]: Node type "form" not found. Using fallback type "default". Help: https://reactflow.dev/error#003
[WebServer] 6:44:16 PM [vite] (client) [console.warn] [React Flow]: Node type "approval" not found. Using fallback type "default". Help: https://reactflow.dev/error#003
[WebServer] 6:44:16 PM [vite] (client) [console.warn] [React Flow]: Node type "approval" not found. Using fallback type "default". Help: https://reactflow.dev/error#003
[WebServer] 6:44:16 PM [vite] (client) [console.warn] [React Flow]: Node type "condition" not found. Using fallback type "default". Help: https://reactflow.dev/error#003
[WebServer] 6:44:16 PM [vite] (client) [console.warn] [React Flow]: Node type "condition" not found. Using fallback type "default". Help: https://reactflow.dev/error#003
[WebServer] 6:44:16 PM [vite] (client) [console.warn] [React Flow]: Node type "notify" not found. Using fallback type "default". Help: https://reactflow.dev/error#003
[WebServer] 6:44:16 PM [vite] (client) [console.warn] [React Flow]: Node type "notify" not found. Using fallback type "default". Help: https://reactflow.dev/error#003
[WebServer] 6:44:16 PM [vite] (client) [console.warn] [React Flow]: Node type "automation" not found. Using fallback type "default". Help: https://reactflow.dev/error#003
[WebServer] 6:44:16 PM [vite] (client) [console.warn] [React Flow]: Node type "automation" not found. Using fallback type "default". Help: https://reactflow.dev/error#003
[WebServer] 6:44:16 PM [vite] (client) [console.warn] [React Flow]: Node type "end" not found. Using fallback type "default". Help: https://reactflow.dev/error#003
[WebServer] 6:44:16 PM [vite] (client) [console.warn] [React Flow]: Node type "end" not found. Using fallback type "default". Help: https://reactflow.dev/error#003
[WebServer] 6:44:16 PM [vite] (client) [console.warn] [React Flow]: Node type "start" not found. Using fallback type "default". Help: https://reactflow.dev/error#003
[WebServer] 6:44:16 PM [vite] (client) [console.warn] [React Flow]: Node type "start" not found. Using fallback type "default". Help: https://reactflow.dev/error#003
[WebServer] 6:44:16 PM [vite] (client) [console.warn] [React Flow]: Node type "form" not found. Using fallback type "default". Help: https://reactflow.dev/error#003
[WebServer] 6:44:16 PM [vite] (client) [console.warn] [React Flow]: Node type "form" not found. Using fallback type "default". Help: https://reactflow.dev/error#003
[WebServer] 6:44:16 PM [vite] (client) [console.warn] [React Flow]: Node type "approval" not found. Using fallback type "default". Help: https://reactflow.dev/error#003
[WebServer] 6:44:16 PM [vite] (client) [console.warn] [React Flow]: Node type "approval" not found. Using fallback type "default". Help: https://reactflow.dev/error#003
[WebServer] 6:44:16 PM [vite] (client) [console.warn] [React Flow]: Node type "condition" not found. Using fallback type "default". Help: https://reactflow.dev/error#003
[WebServer] 6:44:16 PM [vite] (client) [console.warn] [React Flow]: Node type "condition" not found. Using fallback type "default". Help: https://reactflow.dev/error#003
[WebServer] 6:44:16 PM [vite] (client) [console.warn] [React Flow]: Node type "notify" not found. Using fallback type "default". Help: https://reactflow.dev/error#003
[WebServer] 6:44:16 PM [vite] (client) [console.warn] [React Flow]: Node type "notify" not found. Using fallback type "default". Help: https://reactflow.dev/error#003
[WebServer] 6:44:16 PM [vite] (client) [console.warn] [React Flow]: Node type "automation" not found. Using fallback type "default". Help: https://reactflow.dev/error#003
[WebServer] 6:44:16 PM [vite] (client) [console.warn] [React Flow]: Node type "automation" not found. Using fallback type "default". Help: https://reactflow.dev/error#003
[WebServer] 6:44:16 PM [vite] (client) [console.warn] [React Flow]: Node type "end" not found. Using fallback type "default". Help: https://reactflow.dev/error#003
[WebServer] 6:44:16 PM [vite] (client) [console.warn] [React Flow]: Node type "end" not found. Using fallback type "default". Help: https://reactflow.dev/error#003
[WebServer] 6:44:16 PM [vite] (client) [console.warn] [React Flow]: Node type "start" not found. Using fallback type "default". Help: https://reactflow.dev/error#003
[WebServer] 6:44:16 PM [vite] (client) [console.warn] [React Flow]: Node type "start" not found. Using fallback type "default". Help: https://reactflow.dev/error#003
[WebServer] 6:44:16 PM [vite] (client) [console.warn] [React Flow]: Node type "form" not found. Using fallback type "default". Help: https://reactflow.dev/error#003
[WebServer] 6:44:16 PM [vite] (client) [console.warn] [React Flow]: Node type "form" not found. Using fallback type "default". Help: https://reactflow.dev/error#003
[WebServer] 6:44:16 PM [vite] (client) [console.warn] [React Flow]: Node type "approval" not found. Using fallback type "default". Help: https://reactflow.dev/error#003
[WebServer] 6:44:16 PM [vite] (client) [console.warn] [React Flow]: Node type "approval" not found. Using fallback type "default". Help: https://reactflow.dev/error#003
[WebServer] 6:44:16 PM [vite] (client) [console.warn] [React Flow]: Node type "condition" not found. Using fallback type "default". Help: https://reactflow.dev/error#003
[WebServer] 6:44:16 PM [vite] (client) [console.warn] [React Flow]: Node type "condition" not found. Using fallback type "default". Help: https://reactflow.dev/error#003
[WebServer] 6:44:16 PM [vite] (client) [console.warn] [React Flow]: Node type "notify" not found. Using fallback type "default". Help: https://reactflow.dev/error#003
[WebServer] 6:44:16 PM [vite] (client) [console.warn] [React Flow]: Node type "notify" not found. Using fallback type "default". Help: https://reactflow.dev/error#003
[WebServer] 6:44:16 PM [vite] (client) [console.warn] [React Flow]: Node type "automation" not found. Using fallback type "default". Help: https://reactflow.dev/error#003
[WebServer] 6:44:16 PM [vite] (client) [console.warn] [React Flow]: Node type "automation" not found. Using fallback type "default". Help: https://reactflow.dev/error#003
[WebServer] 6:44:16 PM [vite] (client) [console.warn] [React Flow]: Node type "end" not found. Using fallback type "default". Help: https://reactflow.dev/error#003
[WebServer] 6:44:16 PM [vite] (client) [console.warn] [React Flow]: Node type "end" not found. Using fallback type "default". Help: https://reactflow.dev/error#003
  ✓  4 [chromium] › tests/flowdesk.spec.ts:5:1 › 运行监控显示异常实例时间线和当前节点高亮 (913ms)
  ✓  5 [chromium] › tests/flowdesk.spec.ts:6:1 › 版本比较并恢复历史版本 (857ms)
  ✓  6 [chromium] › tests/flowdesk.spec.ts:7:1 › 搜索无结果展示空状态 (816ms)


  1) [chromium] › tests/flowdesk.spec.ts:3:1 › 编辑、校验、修复条件并预览分支 ─────────────────────────────────────

    Error: expect(received).toBeLessThan(expected)

    Expected: < 1
    Received:   1

    Call Log:
    - Timeout 5000ms exceeded while waiting on the predicate

      1 | import {expect,test} from '@playwright/test';
      2 | test('Dashboard 展示 KPI 并进入最近流程编辑器',async({page})=>{await page.goto('/');await expect(page.getByRole('heading',{name:'流程运营总览'})).toBeVisible();await expect(page.getByTestId('kpi-流程总数')).toHaveText('12');await expect(page.getByTestId('kpi-异常实例')).toHaveText('22');await page.getByTestId('recent-workflow').first().click();await expect(page.getByTestId('flow-canvas')).toBeVisible()});
    > 3 | test('编辑、校验、修复条件并预览分支',async({page})=>{await page.goto('/workflows/wf-1/edit');await page.getByTestId('canvas-node-approval').click();await expect(page.getByTestId('config-panel')).toContainText('审批设置');await page.getByTestId('approver-source').selectOption({label:'固定角色'});await page.getByTestId('save-node-config').click();await page.getByRole('button',{name:'保存草稿'}).click();await expect(page.getByRole('status')).toContainText('草稿已保存');await page.getByTestId('run-validation').click();await expect(page.getByTestId('canvas-node-condition')).toHaveClass(/node-error/);await expect(page.getByTestId('problem-panel')).toContainText('条件分支规则未配置');const before=Number((await page.getByTestId('error-count').textContent())?.match(/\d+/)?.[0]);await page.getByTestId('canvas-node-condition').click();await page.getByTestId('condition-rule').selectOption('amount');await page.getByTestId('save-node-config').click();await page.getByTestId('run-validation').click();await expect.poll(async()=>Number((await page.getByTestId('error-count').textContent())?.match(/\d+/)?.[0])).toBeLessThan(before);await page.getByRole('button',{name:'预览'}).click();await page.getByTestId('preview-amount').fill('8000');await expect(page.getByTestId('branch-result')).toContainText('高额分支')});
        |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              ^
      4 | test('发布后 Dashboard 与流程列表同步',async({page})=>{await page.goto('/workflows/wf-1/edit');await page.getByRole('button',{name:'发布',exact:true}).click();await expect(page.getByRole('status')).toContainText('流程发布成功');await page.getByRole('link',{name:'流程管理'}).click();await expect(page.getByTestId('workflow-wf-1')).toContainText('已发布');await expect(page.getByTestId('workflow-wf-1')).toContainText('V2');await page.getByRole('link',{name:'总览'}).click();await expect(page.getByTestId('recent-workflow').first()).toBeVisible()});
      5 | test('运行监控显示异常实例时间线和当前节点高亮',async({page})=>{await page.goto('/monitor');await page.getByTestId('instance-INS-2026-0001').click();await expect(page.getByTestId('instance-detail')).toContainText('异常');await expect(page.getByTestId('execution-timeline')).toContainText('当前停留');await expect(page.locator('.runtime-current')).toBeVisible()});
      6 | test('版本比较并恢复历史版本',async({page})=>{await page.goto('/workflows/wf-2/versions');await expect(page.getByTestId('version-compare')).toContainText('新增节点');await expect(page.getByTestId('version-compare')).toContainText('高额通知');await page.getByTestId('restore-v1').click();await expect(page.getByTestId('flow-canvas')).toBeVisible();await expect(page.getByRole('status')).toContainText('已恢复版本 V1');await expect(page.getByTestId('canvas-node-notify')).toHaveCount(0)});
        at /root/hutubo/flowdesk-studio/tests/flowdesk.spec.ts:3:1070

    attachment #1: screenshot (image/png) ──────────────────────────────────────────────────────────
    test-results/flowdesk-编辑、校验、修复条件并预览分支-chromium/test-failed-1.png
    ────────────────────────────────────────────────────────────────────────────────────────────────

    Error Context: test-results/flowdesk-编辑、校验、修复条件并预览分支-chromium/error-context.md

    attachment #3: trace (application/zip) ─────────────────────────────────────────────────────────
    test-results/flowdesk-编辑、校验、修复条件并预览分支-chromium/trace.zip
    Usage:

        npx playwright show-trace test-results/flowdesk-编辑、校验、修复条件并预览分支-chromium/trace.zip

    ────────────────────────────────────────────────────────────────────────────────────────────────

  1 failed
    [chromium] › tests/flowdesk.spec.ts:3:1 › 编辑、校验、修复条件并预览分支 ──────────────────────────────────────
  5 passed (12.7s)

`````

### 88. Assistant Commentary

- Timestamp: `2026-07-12T10:44:29.635Z`

`````markdown
首轮浏览器验证结果是 5/6 通过。失败点已定位：Condition 下拉变更触发配置面板重渲染后，临时配置对象被重建，导致保存值丢失；同时 Runtime 小画布使用业务节点类型引发 React Flow 警告。我会修复这两处，并补强 mock 图为至少 8 个节点后复跑全部测试。
`````

### 89. Tool Call: `exec`

- Timestamp: `2026-07-12T10:44:56.914Z`
- Call ID: `call_PhHVkHE99I36jTNfgtUorFOA`

`````javascript
const patch = "*** Begin Patch\n*** Update File: src/pages/Editor.tsx\n@@\n-function Config({node,onSave}:{node:any,onSave:(c:Record<string,unknown>,l:string)=>void}){const [tick,setTick]=useState(0);if(!node)return <aside className=\"config-panel empty-config\"><div className=\"empty-icon\">⌁</div><h3>选择一个节点</h3><p>在画布中选择节点以编辑它的配置</p></aside>;const c={...(node.data.config||{})};const rerender=()=>setTick(tick+1);return <aside className=\"config-panel\" data-testid=\"config-panel\"><div className=\"config-head\"><div><span>{info[node.data.kind as NodeKind].icon}</span><div><small>节点配置</small><h3>{node.data.label}</h3></div></div><span className={`node-state ${node.data.state}`}>{node.data.state==='valid'?'校验通过':'配置中'}</span></div><label>节点名称<input defaultValue={node.data.label} id=\"node-label\"/></label>{node.data.kind==='approval'&&<><h4>审批设置</h4><label>审批人来源<select aria-label=\"审批人来源\" data-testid=\"approver-source\" defaultValue={String(c.approverSource||'')} onChange={e=>{c.approverSource=e.target.value;rerender()}}><option value=\"\">请选择审批人来源</option><option>直属主管</option><option>固定角色</option><option>指定成员</option><option>表单字段</option></select></label><label>审批说明<textarea defaultValue={String(c.instruction||'')} onChange={e=>c.instruction=e.target.value}/></label><label className=\"toggle\"><input type=\"checkbox\" defaultChecked/>允许转交审批</label></>}{node.data.kind==='condition'&&<><h4>分支规则</h4><label>规则类型<select aria-label=\"规则类型\" data-testid=\"condition-rule\" defaultValue={String(c.ruleType||'')} onChange={e=>{c.ruleType=e.target.value;rerender()}}><option value=\"\">请选择规则</option><option value=\"amount\">金额大于某值</option><option value=\"department\">部门等于某值</option><option value=\"attachment\">附件是否为空</option></select></label><label>比较值<input aria-label=\"条件比较值\" type=\"number\" defaultValue={String(c.value||5000)} onChange={e=>c.value=Number(e.target.value)}/></label><div className=\"branch-card\"><b>分支 A</b><span>满足规则</span></div><div className=\"branch-card\"><b>分支 B</b><span>其他情况</span></div></>}\n+function Config({node,onSave}:{node:any,onSave:(c:Record<string,unknown>,l:string)=>void}){if(!node)return <aside className=\"config-panel empty-config\"><div className=\"empty-icon\">⌁</div><h3>选择一个节点</h3><p>在画布中选择节点以编辑它的配置</p></aside>;const c={...(node.data.config||{})};return <aside className=\"config-panel\" data-testid=\"config-panel\"><div className=\"config-head\"><div><span>{info[node.data.kind as NodeKind].icon}</span><div><small>节点配置</small><h3>{node.data.label}</h3></div></div><span className={`node-state ${node.data.state}`}>{node.data.state==='valid'?'校验通过':'配置中'}</span></div><label>节点名称<input defaultValue={node.data.label} id=\"node-label\"/></label>{node.data.kind==='approval'&&<><h4>审批设置</h4><label>审批人来源<select aria-label=\"审批人来源\" data-testid=\"approver-source\" defaultValue={String(c.approverSource||'')} onChange={e=>{c.approverSource=e.target.value}}><option value=\"\">请选择审批人来源</option><option>直属主管</option><option>固定角色</option><option>指定成员</option><option>表单字段</option></select></label><label>审批说明<textarea defaultValue={String(c.instruction||'')} onChange={e=>c.instruction=e.target.value}/></label><label className=\"toggle\"><input type=\"checkbox\" defaultChecked/>允许转交审批</label></>}{node.data.kind==='condition'&&<><h4>分支规则</h4><label>规则类型<select aria-label=\"规则类型\" data-testid=\"condition-rule\" defaultValue={String(c.ruleType||'')} onChange={e=>{c.ruleType=e.target.value}}><option value=\"\">请选择规则</option><option value=\"amount\">金额大于某值</option><option value=\"department\">部门等于某值</option><option value=\"attachment\">附件是否为空</option></select></label><label>比较值<input aria-label=\"条件比较值\" type=\"number\" defaultValue={String(c.value||5000)} onChange={e=>c.value=Number(e.target.value)}/></label><div className=\"branch-card\"><b>分支 A</b><span>满足规则</span></div><div className=\"branch-card\"><b>分支 B</b><span>其他情况</span></div></>}\n*** Update File: src/pages/Monitor.tsx\n@@\n-function Detail({instance,workflow,close}:{instance:Instance,workflow:any,close:()=>void}){const current=workflow.nodes.find((n:any)=>n.data.label===instance.currentNode)?.id;const nodes=workflow.nodes.map((n:any)=>({...n,data:{label:n.data.label},className:n.id===current?'runtime-current':'runtime-node'}));\n+function Detail({instance,workflow,close}:{instance:Instance,workflow:any,close:()=>void}){const current=workflow.nodes.find((n:any)=>n.data.label===instance.currentNode)?.id;const nodes=workflow.nodes.map((n:any)=>({...n,type:'default',data:{label:n.data.label},className:n.id===current?'runtime-current':'runtime-node'}));\n*** Update File: mock-data/workflows.ts\n@@\n     createNode('approval', 'approval', 420, 150, '直属主管审批', {\n@@\n     }),\n-    createNode('condition', 'condition', 630, 150, '金额判断',\n+    createNode('audit-log', 'automation', 590, 150, '记录审批轨迹', { action: '写入系统记录' }),\n+    createNode('condition', 'condition', 760, 150, '金额判断',\n@@\n-    createNode('notify', 'notify', 850, 40, '高额通知', {\n+    createNode('notify', 'notify', 950, 40, '高额通知', {\n@@\n-    createNode('automation', 'automation', 850, 260, '记录系统', { action: '写入系统记录' }),\n-    createNode('end', 'end', 1070, 150, '结束', { ok: true }),\n+    createNode('automation', 'automation', 950, 260, '记录系统', { action: '写入系统记录' }),\n+    createNode('end', 'end', 1160, 150, '结束', { ok: true }),\n@@\n-    ['approval', 'condition'],\n+    ['approval', 'audit-log'],\n+    ['audit-log', 'condition'],\n*** End Patch";
text(await tools.apply_patch(patch));

`````

### 90. Tool Result

- Timestamp: `2026-07-12T10:44:56.963Z`
- Call ID: `call_PhHVkHE99I36jTNfgtUorFOA`

`````text
Script failed
Wall time 0.0 seconds
Output:

Script error:
apply_patch verification failed: Failed to find expected lines in /root/hutubo/flowdesk-studio/src/pages/Editor.tsx:
function Config({node,onSave}:{node:any,onSave:(c:Record<string,unknown>,l:string)=>void}){const [tick,setTick]=useState(0);if(!node)return <aside className="config-panel empty-config"><div className="empty-icon">⌁</div><h3>选择一个节点</h3><p>在画布中选择节点以编辑它的配置</p></aside>;const c={...(node.data.config||{})};const rerender=()=>setTick(tick+1);return <aside className="config-panel" data-testid="config-panel"><div className="config-head"><div><span>{info[node.data.kind as NodeKind].icon}</span><div><small>节点配置</small><h3>{node.data.label}</h3></div></div><span className={`node-state ${node.data.state}`}>{node.data.state==='valid'?'校验通过':'配置中'}</span></div><label>节点名称<input defaultValue={node.data.label} id="node-label"/></label>{node.data.kind==='approval'&&<><h4>审批设置</h4><label>审批人来源<select aria-label="审批人来源" data-testid="approver-source" defaultValue={String(c.approverSource||'')} onChange={e=>{c.approverSource=e.target.value;rerender()}}><option value="">请选择审批人来源</option><option>直属主管</option><option>固定角色</option><option>指定成员</option><option>表单字段</option></select></label><label>审批说明<textarea defaultValue={String(c.instruction||'')} onChange={e=>c.instruction=e.target.value}/></label><label className="toggle"><input type="checkbox" defaultChecked/>允许转交审批</label></>}{node.data.kind==='condition'&&<><h4>分支规则</h4><label>规则类型<select aria-label="规则类型" data-testid="condition-rule" defaultValue={String(c.ruleType||'')} onChange={e=>{c.ruleType=e.target.value;rerender()}}><option value="">请选择规则</option><option value="amount">金额大于某值</option><option value="department">部门等于某值</option><option value="attachment">附件是否为空</option></select></label><label>比较值<input aria-label="条件比较值" type="number" defaultValue={String(c.value||5000)} onChange={e=>c.value=Number(e.target.value)}/></label><div className="branch-card"><b>分支 A</b><span>满足规则</span></div><div className="branch-card"><b>分支 B</b><span>其他情况</span></div></>}
`````

### 91. Tool Call: `exec`

- Timestamp: `2026-07-12T10:45:01.462Z`
- Call ID: `call_lDm2DKaHUbT22bieCFSJ2F07`

`````javascript
const r = await tools.exec_command({cmd:"rg -o \"const \\[tick[^;]+;|const rerender[^;]+;|rerender\\(\\)\" src/pages/Editor.tsx; rg -n \"function Detail\" src/pages/Monitor.tsx","workdir":"/root/hutubo/flowdesk-studio","yield_time_ms":10000,"max_output_tokens":4000}); text(r.output)

`````

### 92. Tool Result

- Timestamp: `2026-07-12T10:45:01.539Z`
- Call ID: `call_lDm2DKaHUbT22bieCFSJ2F07`

`````text
Script completed
Wall time 0.1 seconds
Output:

const [tick,setTick]=useState(0);
const rerender=()=>setTick(tick+1);
rerender()
rerender()
3:function Detail({instance,workflow,close}:{instance:Instance,workflow:any,close:()=>void}){const current=workflow.nodes.find((n:any)=>n.data.label===instance.currentNode)?.id;const nodes=workflow.nodes.map((n:any)=>({...n,data:{label:n.data.label},className:n.id===current?'runtime-current':'runtime-node'}));return <div className="drawer-backdrop"><aside className="instance-drawer" data-testid="instance-detail"><div className="drawer-head"><div><small>流程实例详情</small><h2>{instance.id}</h2></div><button onClick={close}><X/></button></div><div className="detail-meta"><div><small>申请人</small><b>{instance.applicant}</b></div><div><small>状态</small><Status value={instance.status}/></div><div><small>风险等级</small><b className="danger-text">高风险</b></div><div><small>累计耗时</small><b>{instance.duration}</b></div></div><section><h3>执行路径</h3><div className="runtime-flow" data-testid="runtime-flow"><ReactFlow nodes={nodes} edges={workflow.edges} fitView nodesDraggable={false} nodesConnectable={false}><Background/></ReactFlow></div></section><section><h3>执行时间线</h3><div className="timeline" data-testid="execution-timeline">{instance.timeline.map((t,k)=><div className={t.status} key={k}><span>{t.status==='current'?<AlertTriangle/>:'✓'}</span><div><b>{t.title}</b><small>{t.time} · {t.status==='current'?'当前停留':'已完成'}</small></div></div>)}</div></section></aside></div>}

`````

### 93. Tool Call: `exec`

- Timestamp: `2026-07-12T10:45:10.005Z`
- Call ID: `call_sa6H79i4HaADVHEyz6t7FGpM`

`````javascript
const patch = "*** Begin Patch\n*** Update File: src/pages/Editor.tsx\n@@\n-function Config({node,onSave}:{node:any,onSave:(c:Record<string,unknown>,l:string)=>void}){const [tick,setTick]=useState(0);\n+function Config({node,onSave}:{node:any,onSave:(c:Record<string,unknown>,l:string)=>void}){\n@@\n-const rerender=()=>setTick(tick+1);\n+const rerender=()=>{};\n*** Update File: src/pages/Monitor.tsx\n@@\n-const nodes=workflow.nodes.map((n:any)=>({...n,data:{label:n.data.label},className:n.id===current?'runtime-current':'runtime-node'}));\n+const nodes=workflow.nodes.map((n:any)=>({...n,type:'default',data:{label:n.data.label},className:n.id===current?'runtime-current':'runtime-node'}));\n*** Update File: mock-data/workflows.ts\n@@\n     createNode('approval', 'approval', 420, 150, '直属主管审批', {\n       approverSource: '直属主管',\n       instruction: '请确认申请内容与预算归属',\n     }),\n+    createNode('audit-log', 'automation', 560, 300, '记录审批轨迹', { action: '写入系统记录' }),\n@@\n     ['approval', 'condition'],\n+    ['approval', 'audit-log'],\n+    ['audit-log', 'condition'],\n*** End Patch";
text(await tools.apply_patch(patch));

`````

### 94. Tool Result

- Timestamp: `2026-07-12T10:45:10.053Z`
- Call ID: `call_sa6H79i4HaADVHEyz6t7FGpM`

`````text
Script failed
Wall time 0.0 seconds
Output:

Script error:
apply_patch verification failed: Failed to find expected lines in /root/hutubo/flowdesk-studio/src/pages/Editor.tsx:
function Config({node,onSave}:{node:any,onSave:(c:Record<string,unknown>,l:string)=>void}){const [tick,setTick]=useState(0);
`````

### 95. Tool Call: `exec`

- Timestamp: `2026-07-12T10:45:17.502Z`
- Call ID: `call_9KnHMVRAi4UzvkB9RNdrciu7`

`````javascript
const r = await tools.exec_command({cmd:"npm install -D prettier && npx prettier --write src/pages/Editor.tsx src/pages/Monitor.tsx mock-data/workflows.ts","workdir":"/root/hutubo/flowdesk-studio","yield_time_ms":30000,"max_output_tokens":4000,"sandbox_permissions":"require_escalated","justification":"是否允许安装代码格式化工具，以便安全修补长行源文件并继续浏览器验证？","prefix_rule":["npm","install"]}); text(r.output);

`````

### 96. Tool Result

- Timestamp: `2026-07-12T10:50:04.914Z`
- Call ID: `call_9KnHMVRAi4UzvkB9RNdrciu7`

`````text
Script running with cell ID 25
Wall time 287.4 seconds
Output:

`````

### 97. Tool Call: `wait`

- Timestamp: `2026-07-12T10:50:07.797Z`
- Call ID: `call_5WsjhiPoOLrdtYBYE6UKudBK`

`````json
{"cell_id":"25","yield_time_ms":1000,"max_tokens":4000}
`````

### 98. Tool Result

- Timestamp: `2026-07-12T10:50:07.807Z`
- Call ID: `call_5WsjhiPoOLrdtYBYE6UKudBK`

`````text
Script completed
Wall time 0.0 seconds
Output:


added 3 packages, and audited 57 packages in 924ms

11 packages are looking for funding
  run `npm fund` for details

found 0 vulnerabilities
src/pages/Editor.tsx 167ms
src/pages/Monitor.tsx 34ms
mock-data/workflows.ts 22ms

`````

### 99. Tool Call: `exec`

- Timestamp: `2026-07-12T10:50:14.633Z`
- Call ID: `call_5fUV6WVk5QlvkTipMqeHQvyd`

`````javascript
const patch = "*** Begin Patch\n*** Update File: src/pages/Editor.tsx\n@@\n-  const [tick, setTick] = useState(0);\n@@\n-  const rerender = () => setTick(tick + 1);\n@@\n-              rerender();\n@@\n-              rerender();\n*** Update File: src/pages/Monitor.tsx\n@@\n-    ...n,\n+    ...n,\n+    type: 'default',\n*** Update File: mock-data/workflows.ts\n@@\n     createNode('approval', 'approval', 420, 150, '直属主管审批', {\n       approverSource: '直属主管',\n       instruction: '请确认申请内容与预算归属',\n     }),\n+    createNode('audit-log', 'automation', 560, 300, '记录审批轨迹', {\n+      action: '写入系统记录',\n+    }),\n@@\n     ['approval', 'condition'],\n+    ['approval', 'audit-log'],\n+    ['audit-log', 'condition'],\n*** End Patch";
text(await tools.apply_patch(patch));

`````

### 100. Tool Result

- Timestamp: `2026-07-12T10:50:14.740Z`
- Call ID: `call_5fUV6WVk5QlvkTipMqeHQvyd`

`````text
Script failed
Wall time 0.1 seconds
Output:

Script error:
apply_patch verification failed: Failed to find expected lines in /root/hutubo/flowdesk-studio/mock-data/workflows.ts:
    createNode('approval', 'approval', 420, 150, '直属主管审批', {
      approverSource: '直属主管',
      instruction: '请确认申请内容与预算归属',
    }),
`````

### 101. Tool Call: `exec`

- Timestamp: `2026-07-12T10:50:18.413Z`
- Call ID: `call_rJj0WKg4e9uOrK7HcUhzd1wF`

`````javascript
const r = await tools.exec_command({cmd:"rg -n \"tick|rerender|\\.\\.\\.n|createNode\\('approval'|approval.*condition\" src/pages/Editor.tsx src/pages/Monitor.tsx mock-data/workflows.ts","workdir":"/root/hutubo/flowdesk-studio","yield_time_ms":10000,"max_output_tokens":3000}); text(r.output)

`````

### 102. Tool Result

- Timestamp: `2026-07-12T10:50:18.487Z`
- Call ID: `call_rJj0WKg4e9uOrK7HcUhzd1wF`

`````text
Script completed
Wall time 0.1 seconds
Output:

src/pages/Monitor.tsx:141:    ...n,
src/pages/Editor.tsx:80:        ...n,
src/pages/Editor.tsx:82:        data: { ...n.data, kind: n.type },
src/pages/Editor.tsx:127:      ...ns,
src/pages/Editor.tsx:149:          ...n,
src/pages/Editor.tsx:151:            ...n.data,
src/pages/Editor.tsx:291:                      ...n,
src/pages/Editor.tsx:292:                      data: { ...n.data, label, config, state: "configuring" },
src/pages/Editor.tsx:367:  const [tick, setTick] = useState(0);
src/pages/Editor.tsx:377:  const rerender = () => setTick(tick + 1);
src/pages/Editor.tsx:407:                rerender();
src/pages/Editor.tsx:441:                rerender();
mock-data/workflows.ts:62:    ["approval", "condition"],
mock-data/workflows.ts:113:    .map((node) => ({ ...node, data: { ...node.data } }));

`````

### 103. Tool Call: `exec`

- Timestamp: `2026-07-12T10:50:22.070Z`
- Call ID: `call_CHIZwSi65Oqkc4RTZjLsiI6J`

`````javascript
const r = await tools.exec_command({cmd:"sed -n '25,70p' mock-data/workflows.ts; sed -n '360,450p' src/pages/Editor.tsx; sed -n '136,148p' src/pages/Monitor.tsx","workdir":"/root/hutubo/flowdesk-studio","yield_time_ms":10000,"max_output_tokens":10000}); text(r.output)

`````

### 104. Tool Result

- Timestamp: `2026-07-12T10:50:22.143Z`
- Call ID: `call_CHIZwSi65Oqkc4RTZjLsiI6J`

`````text
Script completed
Wall time 0.1 seconds
Output:

      fields: [
        { id: "reason", label: "申请说明", type: "text", required: true },
        { id: "amount", label: "申请金额", type: "amount", required: true },
        {
          id: "attachment",
          label: "附件",
          type: "attachment",
          required: false,
        },
      ],
    }),
    createNode("approval", "approval", 420, 150, "直属主管审批", {
      approverSource: "直属主管",
      instruction: "请确认申请内容与预算归属",
    }),
    createNode(
      "condition",
      "condition",
      630,
      150,
      "金额判断",
      broken ? {} : { ruleType: "amount", operator: ">", value: 5000 },
    ),
    createNode("notify", "notify", 850, 40, "高额通知", {
      targets: "财务审批人",
      template: "高额申请提醒",
      timing: "分支进入时",
    }),
    createNode("automation", "automation", 850, 260, "记录系统", {
      action: "写入系统记录",
    }),
    createNode("end", "end", 1070, 150, "结束", { ok: true }),
  ];

  const edgeTuples: Array<[string, string, string?]> = [
    ["start", "form"],
    ["form", "approval"],
    ["approval", "condition"],
    ["condition", "notify", "大于 5,000"],
    ["condition", "automation", "其他"],
    ["notify", "end"],
    ["automation", "end"],
  ];
  const edges: FlowEdge[] = edgeTuples.map(
    ([source, target, label], index) => ({
      id: `e${index}`,
function Config({
  node,
  onSave,
}: {
  node: any;
  onSave: (c: Record<string, unknown>, l: string) => void;
}) {
  const [tick, setTick] = useState(0);
  if (!node)
    return (
      <aside className="config-panel empty-config">
        <div className="empty-icon">⌁</div>
        <h3>选择一个节点</h3>
        <p>在画布中选择节点以编辑它的配置</p>
      </aside>
    );
  const c = { ...(node.data.config || {}) };
  const rerender = () => setTick(tick + 1);
  return (
    <aside className="config-panel" data-testid="config-panel">
      <div className="config-head">
        <div>
          <span>{info[node.data.kind as NodeKind].icon}</span>
          <div>
            <small>节点配置</small>
            <h3>{node.data.label}</h3>
          </div>
        </div>
        <span className={`node-state ${node.data.state}`}>
          {node.data.state === "valid" ? "校验通过" : "配置中"}
        </span>
      </div>
      <label>
        节点名称
        <input defaultValue={node.data.label} id="node-label" />
      </label>
      {node.data.kind === "approval" && (
        <>
          <h4>审批设置</h4>
          <label>
            审批人来源
            <select
              aria-label="审批人来源"
              data-testid="approver-source"
              defaultValue={String(c.approverSource || "")}
              onChange={(e) => {
                c.approverSource = e.target.value;
                rerender();
              }}
            >
              <option value="">请选择审批人来源</option>
              <option>直属主管</option>
              <option>固定角色</option>
              <option>指定成员</option>
              <option>表单字段</option>
            </select>
          </label>
          <label>
            审批说明
            <textarea
              defaultValue={String(c.instruction || "")}
              onChange={(e) => (c.instruction = e.target.value)}
            />
          </label>
          <label className="toggle">
            <input type="checkbox" defaultChecked />
            允许转交审批
          </label>
        </>
      )}
      {node.data.kind === "condition" && (
        <>
          <h4>分支规则</h4>
          <label>
            规则类型
            <select
              aria-label="规则类型"
              data-testid="condition-rule"
              defaultValue={String(c.ruleType || "")}
              onChange={(e) => {
                c.ruleType = e.target.value;
                rerender();
              }}
            >
              <option value="">请选择规则</option>
              <option value="amount">金额大于某值</option>
              <option value="department">部门等于某值</option>
              <option value="attachment">附件是否为空</option>
            </select>
          </label>
          <label>
}) {
  const current = workflow.nodes.find(
    (n: any) => n.data.label === instance.currentNode,
  )?.id;
  const nodes = workflow.nodes.map((n: any) => ({
    ...n,
    data: { label: n.data.label },
    className: n.id === current ? "runtime-current" : "runtime-node",
  }));
  return (
    <div className="drawer-backdrop">
      <aside className="instance-drawer" data-testid="instance-detail">
        <div className="drawer-head">

`````

### 105. Tool Call: `exec`

- Timestamp: `2026-07-12T10:50:29.116Z`
- Call ID: `call_o5VR4nLQ7jHpwptSaUL5wz0A`

`````javascript
const patch = "*** Begin Patch\n*** Update File: src/pages/Editor.tsx\n@@\n-  const [tick, setTick] = useState(0);\n@@\n-  const rerender = () => setTick(tick + 1);\n@@\n-                rerender();\n@@\n-                rerender();\n*** Update File: src/pages/Monitor.tsx\n@@\n   const nodes = workflow.nodes.map((n: any) => ({\n     ...n,\n+    type: \"default\",\n     data: { label: n.data.label },\n*** Update File: mock-data/workflows.ts\n@@\n     createNode(\"approval\", \"approval\", 420, 150, \"直属主管审批\", {\n       approverSource: \"直属主管\",\n       instruction: \"请确认申请内容与预算归属\",\n     }),\n+    createNode(\"audit-log\", \"automation\", 560, 300, \"记录审批轨迹\", {\n+      action: \"写入系统记录\",\n+    }),\n@@\n     [\"approval\", \"condition\"],\n+    [\"approval\", \"audit-log\"],\n+    [\"audit-log\", \"condition\"],\n*** End Patch";
text(await tools.apply_patch(patch));

`````

### 106. Patch Applied

- Timestamp: `2026-07-12T10:50:29.508Z`
- Call ID: `exec-de44940d-ab5d-4440-b450-ee948de668d3`
- Success: `true`
- Changed files: `/root/hutubo/flowdesk-studio/mock-data/workflows.ts`, `/root/hutubo/flowdesk-studio/src/pages/Editor.tsx`, `/root/hutubo/flowdesk-studio/src/pages/Monitor.tsx`
`````text
Success. Updated the following files:
M src/pages/Editor.tsx
M src/pages/Monitor.tsx
M mock-data/workflows.ts

`````

### 107. Tool Result

- Timestamp: `2026-07-12T10:50:29.514Z`
- Call ID: `call_o5VR4nLQ7jHpwptSaUL5wz0A`

`````text
Script completed
Wall time 0.4 seconds
Output:

{}
`````

### 108. Tool Call: `exec`

- Timestamp: `2026-07-12T10:50:36.416Z`
- Call ID: `call_8ZjsOXAy0et9Yzv0Qvdb0q0S`

`````javascript
const r = await tools.exec_command({cmd:"npm run build && npm test","workdir":"/root/hutubo/flowdesk-studio","yield_time_ms":30000,"max_output_tokens":12000,"sandbox_permissions":"require_escalated","justification":"是否允许再次启动本地服务和 Chromium，验证修复后的完整构建与 Playwright 测试？","prefix_rule":["npm","test"]}); text(r.output); if(r.session_id) text(`SESSION_ID=${r.session_id}`);

`````

### 109. Tool Result

- Timestamp: `2026-07-12T10:54:27.815Z`
- Call ID: `call_8ZjsOXAy0et9Yzv0Qvdb0q0S`

`````text
Script running with cell ID 30
Wall time 231.4 seconds
Output:

`````

### 110. Tool Call: `wait`

- Timestamp: `2026-07-12T10:54:30.217Z`
- Call ID: `call_2AQo79ToAOE9gxBljpB5zY6y`

`````json
{"cell_id":"30","yield_time_ms":1000,"max_tokens":12000}
`````

### 111. Tool Result

- Timestamp: `2026-07-12T10:54:31.220Z`
- Call ID: `call_2AQo79ToAOE9gxBljpB5zY6y`

`````text
Script running with cell ID 30
Wall time 1.0 seconds
Output:

`````

### 112. Tool Call: `wait`

- Timestamp: `2026-07-12T10:54:33.064Z`
- Call ID: `call_CfAUN1tp0FeD9TXPQNNjQjD9`

`````json
{"cell_id":"30","yield_time_ms":1000,"max_tokens":12000}
`````

### 113. Tool Result

- Timestamp: `2026-07-12T10:54:34.066Z`
- Call ID: `call_CfAUN1tp0FeD9TXPQNNjQjD9`

`````text
Script running with cell ID 30
Wall time 1.0 seconds
Output:

`````

### 114. Tool Call: `wait`

- Timestamp: `2026-07-12T10:54:36.405Z`
- Call ID: `call_SZtdlHFsDZA8NOfYLxcTXnxO`

`````json
{"cell_id":"30","yield_time_ms":1000,"max_tokens":12000}
`````

### 115. Tool Result

- Timestamp: `2026-07-12T10:54:36.417Z`
- Call ID: `call_SZtdlHFsDZA8NOfYLxcTXnxO`

`````text
Script completed
Wall time 0.0 seconds
Output:


> flowdesk-studio@1.0.0 build
> tsc -b && vite build

vite v8.1.4 building client environment for production...
[2K
transforming...✓ 1951 modules transformed.
rendering chunks...
computing gzip size...
dist/index.html                   0.16 kB │ gzip:   0.14 kB
dist/assets/index-avpVqba7.css   35.33 kB │ gzip:   7.38 kB
dist/assets/index-DVpErsuf.js   454.93 kB │ gzip: 145.69 kB

✓ built in 231ms

> flowdesk-studio@1.0.0 test
> playwright test

[WebServer] (node:171153) Warning: The 'NO_COLOR' env is ignored due to the 'FORCE_COLOR' env being set.
[WebServer] (Use `node --trace-warnings ...` to show where the warning was created)

Running 6 tests using 1 worker

  ✓  1 [chromium] › tests/flowdesk.spec.ts:2:1 › Dashboard 展示 KPI 并进入最近流程编辑器 (1.0s)
  ✓  2 [chromium] › tests/flowdesk.spec.ts:3:1 › 编辑、校验、修复条件并预览分支 (1.4s)
  ✓  3 [chromium] › tests/flowdesk.spec.ts:4:1 › 发布后 Dashboard 与流程列表同步 (1.1s)
  ✓  4 [chromium] › tests/flowdesk.spec.ts:5:1 › 运行监控显示异常实例时间线和当前节点高亮 (924ms)
  ✓  5 [chromium] › tests/flowdesk.spec.ts:6:1 › 版本比较并恢复历史版本 (960ms)
  ✓  6 [chromium] › tests/flowdesk.spec.ts:7:1 › 搜索无结果展示空状态 (832ms)

  6 passed (7.2s)

`````

### 116. Assistant Commentary

- Timestamp: `2026-07-12T10:54:45.584Z`

`````markdown
修复后生产构建再次通过，Playwright 关键链路已 6/6 全部通过，React Flow 控制台警告也已消除。最后我会补一条专门的 1440px 布局与 console error 巡检，并生成页面截图进行实际视觉检查，确认没有遮挡或溢出。
`````

### 117. Tool Call: `exec`

- Timestamp: `2026-07-12T10:54:49.249Z`
- Call ID: `call_cgF9y5mdsWQ4ADp4gewK2fvN`

`````javascript
const patch = "*** Begin Patch\n*** Update File: tests/flowdesk.spec.ts\n@@\n test(\"搜索无结果展示空状态\", async ({ page }) => {\n@@\n });\n+\n+test(\"1440px 关键页面无横向溢出且控制台无错误\", async ({ page }) => {\n+  const errors: string[] = [];\n+  page.on(\"console\", (message) => {\n+    if (message.type() === \"error\") errors.push(message.text());\n+  });\n+  for (const path of [\"/\", \"/workflows\", \"/workflows/wf-1/edit\", \"/monitor\"]) {\n+    await page.goto(path);\n+    await page.waitForLoadState(\"networkidle\");\n+    expect(await page.evaluate(() => document.documentElement.scrollWidth)).toBeLessThanOrEqual(1440);\n+  }\n+  await page.goto(\"/\");\n+  await page.screenshot({ path: \"test-results/dashboard-1440.png\", fullPage: true });\n+  expect(errors).toEqual([]);\n+});\n*** End Patch";
text(await tools.apply_patch(patch));

`````

### 118. Tool Result

- Timestamp: `2026-07-12T10:54:49.301Z`
- Call ID: `call_cgF9y5mdsWQ4ADp4gewK2fvN`

`````text
Script failed
Wall time 0.0 seconds
Output:

Script error:
apply_patch verification failed: Failed to find expected lines in /root/hutubo/flowdesk-studio/tests/flowdesk.spec.ts:
test("搜索无结果展示空状态", async ({ page }) => {
`````

### 119. Tool Call: `exec`

- Timestamp: `2026-07-12T10:54:55.626Z`
- Call ID: `call_pV1orEmPdTXdLAeSbyifkpBU`

`````javascript
const r = await tools.exec_command({cmd:"npx prettier --write tests/flowdesk.spec.ts","workdir":"/root/hutubo/flowdesk-studio","yield_time_ms":30000,"max_output_tokens":1000}); text(r.output);

`````

### 120. Tool Result

- Timestamp: `2026-07-12T10:54:56.114Z`
- Call ID: `call_pV1orEmPdTXdLAeSbyifkpBU`

`````text
Script completed
Wall time 0.5 seconds
Output:

tests/flowdesk.spec.ts 93ms

`````

### 121. Tool Call: `exec`

- Timestamp: `2026-07-12T10:55:02.975Z`
- Call ID: `call_BJ8IK5MHxY9aXWnI5JEC0lfZ`

`````javascript
const patch = "*** Begin Patch\n*** Update File: tests/flowdesk.spec.ts\n@@\n test(\"搜索无结果展示空状态\", async ({ page }) => {\n@@\n   await expect(page.getByText(\"没有匹配的流程\")).toBeVisible();\n });\n+\n+test(\"1440px 关键页面无横向溢出且控制台无错误\", async ({ page }) => {\n+  const errors: string[] = [];\n+  page.on(\"console\", (message) => {\n+    if (message.type() === \"error\") errors.push(message.text());\n+  });\n+  for (const path of [\"/\", \"/workflows\", \"/workflows/wf-1/edit\", \"/monitor\"]) {\n+    await page.goto(path);\n+    await page.waitForLoadState(\"networkidle\");\n+    expect(await page.evaluate(() => document.documentElement.scrollWidth)).toBeLessThanOrEqual(1440);\n+  }\n+  await page.goto(\"/\");\n+  await page.screenshot({ path: \"test-results/dashboard-1440.png\", fullPage: true });\n+  expect(errors).toEqual([]);\n+});\n*** End Patch";
text(await tools.apply_patch(patch));

`````

### 122. Patch Applied

- Timestamp: `2026-07-12T10:55:03.137Z`
- Call ID: `exec-075763e0-c528-4c7e-bf81-f0215bd71892`
- Success: `true`
- Changed files: `/root/hutubo/flowdesk-studio/tests/flowdesk.spec.ts`
`````text
Success. Updated the following files:
M tests/flowdesk.spec.ts

`````

### 123. Tool Result

- Timestamp: `2026-07-12T10:55:03.143Z`
- Call ID: `call_BJ8IK5MHxY9aXWnI5JEC0lfZ`

`````text
Script completed
Wall time 0.2 seconds
Output:

{}
`````

### 124. Tool Call: `exec`

- Timestamp: `2026-07-12T10:55:06.795Z`
- Call ID: `call_231A0bDzZHzEYZwbA2KO1A1o`

`````javascript
const r = await tools.exec_command({cmd:"npm test","workdir":"/root/hutubo/flowdesk-studio","yield_time_ms":30000,"max_output_tokens":10000,"sandbox_permissions":"require_escalated","justification":"是否允许最后一次启动本地服务和 Chromium，执行控制台、布局与截图巡检？","prefix_rule":["npm","test"]}); text(r.output); if(r.session_id) text(`SESSION_ID=${r.session_id}`);

`````

### 125. Tool Result

- Timestamp: `2026-07-12T11:05:38.037Z`
- Call ID: `call_231A0bDzZHzEYZwbA2KO1A1o`

`````text
Script running with cell ID 34
Wall time 631.2 seconds
Output:

`````

### 126. Tool Call: `wait`

- Timestamp: `2026-07-12T11:05:40.408Z`
- Call ID: `call_fevySDkWI5iEgeMYllVDzl3e`

`````json
{"cell_id":"34","yield_time_ms":1000,"max_tokens":10000}
`````

### 127. Tool Result

- Timestamp: `2026-07-12T11:05:41.411Z`
- Call ID: `call_fevySDkWI5iEgeMYllVDzl3e`

`````text
Script running with cell ID 34
Wall time 1.0 seconds
Output:

`````

### 128. Tool Call: `wait`

- Timestamp: `2026-07-12T11:05:43.433Z`
- Call ID: `call_V01Dv60xVz5MaJum1wW4MOKK`

`````json
{"cell_id":"34","yield_time_ms":1000,"max_tokens":10000}
`````

### 129. Tool Result

- Timestamp: `2026-07-12T11:05:44.435Z`
- Call ID: `call_V01Dv60xVz5MaJum1wW4MOKK`

`````text
Script running with cell ID 34
Wall time 1.0 seconds
Output:

`````

### 130. Tool Call: `wait`

- Timestamp: `2026-07-12T11:05:47.120Z`
- Call ID: `call_e9ZCP2MkgTqeHz5IaCcCxauA`

`````json
{"cell_id":"34","yield_time_ms":1000,"max_tokens":10000}
`````

### 131. Tool Result

- Timestamp: `2026-07-12T11:05:48.122Z`
- Call ID: `call_e9ZCP2MkgTqeHz5IaCcCxauA`

`````text
Script running with cell ID 34
Wall time 1.0 seconds
Output:

`````

### 132. Tool Call: `wait`

- Timestamp: `2026-07-12T11:05:50.209Z`
- Call ID: `call_3TNvD5XaaXfp1yn5U8AXLP84`

`````json
{"cell_id":"34","yield_time_ms":1000,"max_tokens":10000}
`````

### 133. Tool Result

- Timestamp: `2026-07-12T11:05:50.304Z`
- Call ID: `call_3TNvD5XaaXfp1yn5U8AXLP84`

`````text
Script completed
Wall time 0.1 seconds
Output:


> flowdesk-studio@1.0.0 test
> playwright test

[WebServer] (node:176078) Warning: The 'NO_COLOR' env is ignored due to the 'FORCE_COLOR' env being set.
[WebServer] (Use `node --trace-warnings ...` to show where the warning was created)

Running 7 tests using 1 worker

  ✓  1 [chromium] › tests/flowdesk.spec.ts:2:1 › Dashboard 展示 KPI 并进入最近流程编辑器 (1.0s)
  ✓  2 [chromium] › tests/flowdesk.spec.ts:12:1 › 编辑、校验、修复条件并预览分支 (1.4s)
  ✓  3 [chromium] › tests/flowdesk.spec.ts:47:1 › 发布后 Dashboard 与流程列表同步 (1.1s)
  ✓  4 [chromium] › tests/flowdesk.spec.ts:57:1 › 运行监控显示异常实例时间线和当前节点高亮 (924ms)
  ✓  5 [chromium] › tests/flowdesk.spec.ts:66:1 › 版本比较并恢复历史版本 (910ms)
  ✓  6 [chromium] › tests/flowdesk.spec.ts:75:1 › 搜索无结果展示空状态 (853ms)
  ✓  7 [chromium] › tests/flowdesk.spec.ts:81:1 › 1440px 关键页面无横向溢出且控制台无错误 (4.4s)

  7 passed (11.7s)

`````

### 134. Tool Call: `exec`

- Timestamp: `2026-07-12T11:05:53.576Z`
- Call ID: `call_tvKfrE8usiXyf9h1KZspwJKr`

`````javascript
const r = await tools.view_image({path:"/root/hutubo/flowdesk-studio/test-results/dashboard-1440.png",detail:"original"}); image(r.image_url);

`````

### 135. Tool Result

- Timestamp: `2026-07-12T11:05:53.664Z`
- Call ID: `call_tvKfrE8usiXyf9h1KZspwJKr`

`````text
Script completed
Wall time 0.1 seconds
Output:

{"type":"input_image","image_url":"data:image/png;base64,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","detail":"high"}
`````

### 136. Tool Call: `exec`

- Timestamp: `2026-07-12T11:05:58.416Z`
- Call ID: `call_QKdI3crToFdEV0lgXEArbM9g`

`````javascript
const r = await tools.exec_command({cmd:"cat mock-data/catalog.ts; git status --short","workdir":"/root/hutubo/flowdesk-studio","yield_time_ms":10000,"max_output_tokens":4000}); text(r.output)

`````

### 137. Tool Result

- Timestamp: `2026-07-12T11:05:58.485Z`
- Call ID: `call_QKdI3crToFdEV0lgXEArbM9g`

`````text
Script completed
Wall time 0.1 seconds
Output:

export const users = ['林秋', '陈默', '周礼', '王宁', '赵安', '苏菲', '陆远', '方可'];

export const roles = [
  '财务审批人',
  '部门负责人',
  'HRBP',
  '法务经理',
  '采购专员',
  '系统管理员',
];

export const domains = ['财务', '人力资源', '采购', '法务', 'IT服务'];
fatal: 不是 git 仓库（或者任何父目录）：.git

`````

### 138. Assistant Final Answer

- Timestamp: `2026-07-12T11:06:08.336Z`

`````markdown
FlowDesk Studio 已从 0 到 1 完成，可直接本地运行。

交付内容：

- React + TypeScript + Vite
- React Flow 流程画布
- Zustand 全局状态联动
- Dashboard、流程管理、编辑器、表单预览、运行监控、版本历史
- 12 个流程、80 条实例、22 条异常或超时实例
- 完整本地 mock 数据与边界场景
- Playwright 关键链路测试
- 清晰启动与测试说明

验证结果：

- `npm run build`：通过
- `npm test`：7/7 通过
- 1440px 浏览器布局巡检：通过
- 关键页面无横向溢出
- 浏览器 console error：0
- 已人工检查 Dashboard 截图，未发现明显重叠、截断或布局抖动

主要入口：

- [README.md](/root/hutubo/flowdesk-studio/README.md)
- [package.json](/root/hutubo/flowdesk-studio/package.json)
- [核心编辑器](/root/hutubo/flowdesk-studio/src/pages/Editor.tsx)
- [全局状态](/root/hutubo/flowdesk-studio/src/store/useStudio.ts)
- [Mock 数据](/root/hutubo/flowdesk-studio/mock-data/workflows.ts)
- [Playwright 测试](/root/hutubo/flowdesk-studio/tests/flowdesk.spec.ts)
- [Playwright 配置](/root/hutubo/flowdesk-studio/playwright.config.ts)

启动：

```bash
npm install
npm run dev
```

测试：

```bash
npm test
```
`````

### 139. Task Completed

- Timestamp: `2026-07-12T11:06:08.353Z`
- Turn: `019f55d4-4674-7df3-b8ca-719e336f1f9b`
- Duration: `2965.482 seconds`

