// 来源: Lin-arm/GKD_subscription src/apps/com.black.unique.ts
// 摘取类别: 开屏广告 / 全屏广告, 同步于 2026-11-09
// 重新导入: pnpm tsx scripts/import-ref.ts --force com.black.unique
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.black.unique',
  name: '全球购骑士特权',
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
          activityIds: '.feature.home.HomeActivity',
          matches: '@ImageView[vid="iv_close"]',
          snapshotUrls: 'https://i.gkd.li/i/13499502',
        },
      ],
    },
  ],
});
