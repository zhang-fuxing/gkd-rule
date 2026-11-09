// 来源: Lin-arm/GKD_subscription src/apps/com.cmi.jegotrip.ts
// 摘取类别: 开屏广告 / 全屏广告, 同步于 2026-11-09
// 重新导入: pnpm tsx scripts/import-ref.ts --force com.cmi.jegotrip
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.cmi.jegotrip',
  name: '无忧行',
  groups: [
    {
      key: 2,
      name: '全屏广告-弹窗广告',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          activityIds: '.ui.BottomTabsActivity',
          matches: '[vid="ig_ad_close"]',
          snapshotUrls: 'https://i.gkd.li/i/13631904',
        },
      ],
    },
  ],
});
