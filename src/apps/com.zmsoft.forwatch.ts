// 来源: Lin-arm/GKD_subscription src/apps/com.zmsoft.forwatch.ts
// 摘取类别: 开屏广告 / 全屏广告, 同步于 2026-11-09
// 重新导入: pnpm tsx scripts/import-ref.ts --force com.zmsoft.forwatch
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.zmsoft.forwatch',
  name: '子腾园',
  groups: [
    {
      key: 1,
      name: '全屏广告-弹窗广告',
      rules: [
        {
          key: 0,
          name: '字节广告',
          fastQuery: true,
          matchTime: 10000,
          actionMaximum: 1,
          resetMatch: 'app',
          activityIds: 'com.zmapp.fwatch.activity.NativeAdActivity',
          matches: '[vid="ad_close"]',
          snapshotUrls: 'https://i.gkd.li/i/13545995',
        },
      ],
    },
  ],
});
