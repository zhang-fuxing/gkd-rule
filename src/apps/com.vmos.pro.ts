// 来源: Lin-arm/GKD_subscription src/apps/com.vmos.pro.ts
// 摘取类别: 开屏广告 / 全屏广告, 同步于 2026-11-09
// 重新导入: pnpm tsx scripts/import-ref.ts --force com.vmos.pro
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.vmos.pro',
  name: 'VMOS Pro',
  groups: [
    {
      key: 1,
      name: '全屏广告-弹窗广告',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          activityIds: '.activities.main.MainActivity',
          matches: '[text="不再显示本活动"]',
          snapshotUrls: 'https://i.gkd.li/i/13536416',
        },
      ],
    },
  ],
});
