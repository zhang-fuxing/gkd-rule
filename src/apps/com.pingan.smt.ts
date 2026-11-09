// 来源: Lin-arm/GKD_subscription src/apps/com.pingan.smt.ts
// 摘取类别: 开屏广告 / 全屏广告, 同步于 2026-11-09
// 重新导入: pnpm tsx scripts/import-ref.ts --force com.pingan.smt
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.pingan.smt',
  name: 'i深圳',
  groups: [
    {
      key: 1,
      name: '全屏广告-弹窗广告',
      desc: '点击关闭',
      rules: [
        {
          fastQuery: true,
          matchTime: 10000,
          actionMaximum: 1,
          resetMatch: 'app',
          activityIds: '.MainActivity',
          matches: '[vid="close_view"]',
          exampleUrls: 'https://e.gkd.li/97a058cf-0564-4194-b527-b2ec40233204',
          snapshotUrls: 'https://i.gkd.li/i/17011387',
        },
      ],
    },
  ],
});
