// 来源: Lin-arm/GKD_subscription src/apps/com.lion.market.ts
// 摘取类别: 开屏广告 / 全屏广告, 同步于 2026-11-09
// 重新导入: pnpm tsx scripts/import-ref.ts --force com.lion.market
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.lion.market',
  name: '虫虫助手',
  groups: [
    {
      key: 1,
      name: '全屏广告',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          fastQuery: true,
          activityIds: '.app.MainActivity',
          matches: '[vid="dlg_main_ad_close"][visibleToUser=true]',
          exampleUrls: 'https://e.gkd.li/6e29aaa4-1a01-4422-8379-24140a4ffed5',
          snapshotUrls: 'https://i.gkd.li/i/23784776',
        },
      ],
    },
  ],
});
