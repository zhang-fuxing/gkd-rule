// 来源: Lin-arm/GKD_subscription src/apps/com.showstartfans.activity.ts
// 摘取类别: 开屏广告 / 全屏广告, 同步于 2026-11-09
// 重新导入: pnpm tsx scripts/import-ref.ts --force com.showstartfans.activity
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.showstartfans.activity',
  name: '秀动',
  groups: [
    {
      key: 1,
      name: '全屏广告-弹窗广告',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          key: 0,
          fastQuery: true,
          activityIds: '.activitys.maintab.newmain.MainNewActivity',
          matches: '[vid="img_close_coupon"]',
          snapshotUrls: 'https://i.gkd.li/i/13670432',
        },
      ],
    },
  ],
});
