import type { FlowEdge, FlowNode, Workflow } from "./types";

const createNode = (
  id: string,
  type: FlowNode["type"],
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
    state: Object.keys(config).length ? "valid" : "unconfigured",
    config,
  },
});

const createStandardGraph = (broken = false) => {
  const nodes: FlowNode[] = [
    createNode("start", "start", 20, 150, "开始", { ok: true }),
    createNode("form", "form", 210, 150, "提交申请", {
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
    createNode("audit-log", "automation", 560, 300, "记录审批轨迹", {
      action: "写入系统记录",
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
    ["approval", "audit-log"],
    ["audit-log", "condition"],
    ["condition", "notify", "大于 5,000"],
    ["condition", "automation", "其他"],
    ["notify", "end"],
    ["automation", "end"],
  ];
  const edges: FlowEdge[] = edgeTuples.map(
    ([source, target, label], index) => ({
      id: `e${index}`,
      source,
      target,
      label,
    }),
  );

  return { nodes, edges };
};

const names = [
  "差旅费用审批",
  "采购合同审批",
  "员工入职流程",
  "IT 服务请求",
  "用印申请",
  "供应商准入",
  "年度预算调整",
  "客户退款审批",
  "法务审查流程",
  "资产领用审批",
  "营销活动报备",
  "跨区域大型采购及多部门联合审批流程（集团特别管控版）",
];

const workflowDomains = ["财务", "采购", "人力资源", "IT服务", "法务"];
const editors = ["林秋", "陈默", "周礼", "王宁"];

export const workflows: Workflow[] = names.map((name, index) => {
  const graph =
    index === 10
      ? { nodes: [] as FlowNode[], edges: [] as FlowEdge[] }
      : createStandardGraph(index === 0 || index === 3);

  if (index === 8)
    graph.nodes = graph.nodes.filter((node) => node.type !== "end");
  if (index === 9)
    graph.nodes.push(createNode("orphan", "approval", 650, 390, "孤立审批"));

  const status: Workflow["status"] =
    index % 4 === 0 ? "draft" : index % 5 === 0 ? "archived" : "published";
  const oldNodes = graph.nodes
    .filter((node) => node.id !== "notify")
    .map((node) => ({ ...node, data: { ...node.data } }));

  return {
    id: `wf-${index + 1}`,
    name,
    domain: workflowDomains[index % workflowDomains.length],
    status,
    version: (index % 3) + 1,
    editor: editors[index % editors.length],
    updatedAt: `2026-07-${String(10 - (index % 9)).padStart(2, "0")} ${9 + (index % 8)}:20`,
    publishedAt: status === "published" ? "2026-07-08 14:30" : undefined,
    abnormalCount: index === 7 ? 0 : index % 4,
    nodes: graph.nodes,
    edges: graph.edges,
    versions: [
      {
        version: 1,
        createdAt: "2026-06-12 10:00",
        note: "初始化流程结构",
        nodes: oldNodes,
        edges: graph.edges.filter(
          (edge) => edge.source !== "notify" && edge.target !== "notify",
        ),
      },
      {
        version: 2,
        createdAt: "2026-07-01 16:20",
        note: "增加金额分支与通知节点",
        nodes: graph.nodes,
        edges: graph.edges,
      },
    ],
  };
});
