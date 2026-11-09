// 来源: Lin-arm/GKD_subscription src/apps/com.redfinger.app.ts
// 摘取类别: 开屏广告 / 全屏广告, 同步于 2026-11-09
// 重新导入: pnpm tsx scripts/import-ref.ts --force com.redfinger.app
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.redfinger.app',
  name: '红手指云手机',
  groups: [
    {
      key: 2,
      name: '全屏广告-弹窗广告',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          key: 0,
          fastQuery: true,
          activityIds: '.activity.MainActivity',
          matches: '[vid="rl_screen_ad_close"]',
          snapshotUrls: 'https://i.gkd.li/i/13761825',
        },
      ],
    },
  ],
});
