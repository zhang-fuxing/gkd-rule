// 来源: Lin-arm/GKD_subscription src/apps/com.yek.android.uniqlo.ts
// 摘取类别: 开屏广告 / 全屏广告, 同步于 2026-11-09
// 重新导入: pnpm tsx scripts/import-ref.ts --force com.yek.android.uniqlo
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.yek.android.uniqlo',
  name: '优衣库',
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
          activityIds: '.uiux.Home.activity.HomeActivity',
          matches: 'ImageView[vid="pop_close"]',
          snapshotUrls: 'https://i.gkd.li/i/13212320',
        },
      ],
    },
  ],
});
