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
