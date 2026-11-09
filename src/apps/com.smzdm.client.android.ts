// 来源: Lin-arm/GKD_subscription src/apps/com.smzdm.client.android.ts
// 摘取类别: 开屏广告 / 全屏广告, 同步于 2026-11-09
// 重新导入: pnpm tsx scripts/import-ref.ts --force com.smzdm.client.android
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.smzdm.client.android',
  name: '什么值得买',
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
          activityIds: '.app.HomeActivity',
          matches: '[vid="dialog_home_close"]',
          snapshotUrls: 'https://i.gkd.li/i/12695751',
        },
      ],
    },
  ],
});
