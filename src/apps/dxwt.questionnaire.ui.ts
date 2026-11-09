// 来源: Lin-arm/GKD_subscription src/apps/dxwt.questionnaire.ui.ts
// 摘取类别: 开屏广告 / 全屏广告, 同步于 2026-11-09
// 重新导入: pnpm tsx scripts/import-ref.ts --force dxwt.questionnaire.ui
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'dxwt.questionnaire.ui',
  name: '10000社区',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      priorityTime: 10000,
      rules: [
        {
          matches:
            '@View[desc^="关闭"][visibleToUser=true] <3 FrameLayout < FrameLayout < FrameLayout < [vid="container"]',
          snapshotUrls: 'https://i.gkd.li/i/13255491',
          excludeSnapshotUrls: 'https://i.gkd.li/i/13259475', // 限制 visibleToUser=true 防止按钮未出现就触发规则
        },
      ],
    },
  ],
});
