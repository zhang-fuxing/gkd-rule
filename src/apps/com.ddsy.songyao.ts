// 来源: Lin-arm/GKD_subscription src/apps/com.ddsy.songyao.ts
// 摘取类别: 开屏广告 / 全屏广告, 同步于 2026-11-09
// 重新导入: pnpm tsx scripts/import-ref.ts --force com.ddsy.songyao
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.ddsy.songyao',
  name: '叮当快药',
  groups: [
    {
      key: 1,
      name: '全屏广告-优惠卷提示',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          activityIds: '.activity.SplashActivity',
          matches: '[vid="iv_coupon_bottom"] + [vid="iv_close"]',
          snapshotUrls: 'https://i.gkd.li/i/13048720',
        },
      ],
    },
  ],
});
