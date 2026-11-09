// 来源: Lin-arm/GKD_subscription src/apps/com.dtdream.publictransit.ts
// 摘取类别: 开屏广告 / 全屏广告, 同步于 2026-11-09
// 重新导入: pnpm tsx scripts/import-ref.ts --force com.dtdream.publictransit
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.dtdream.publictransit',
  name: '杭州公共交通',
  groups: [
    {
      key: 0,
      name: '全屏广告-弹窗广告',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          activityIds: 'com.dtchuxing.main.MainActivity',
          matches: '[vid="ifv_close"]',
          snapshotUrls: 'https://i.gkd.li/i/12830113',
        },
      ],
    },
  ],
});
