// 来源: Lin-arm/GKD_subscription src/apps/com.eastmoney.android.berlin.ts
// 摘取类别: 开屏广告 / 全屏广告, 同步于 2026-11-09
// 重新导入: pnpm tsx scripts/import-ref.ts --force com.eastmoney.android.berlin
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.eastmoney.android.berlin',
  name: '东方财富',
  groups: [
    {
      key: 2,
      name: '全屏广告',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          fastQuery: true,
          activityIds:
            'com.eastmoney.android.module.launcher.internal.home.HomeActivity',
          matches: '[vid="iv_single_close"][visibleToUser=true]',
          exampleUrls: 'https://e.gkd.li/286da57c-7a7f-4668-aea8-7cbff63e8499',
          snapshotUrls: 'https://i.gkd.li/i/23281792',
        },
      ],
    },
  ],
});
