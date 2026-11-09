// 来源: Lin-arm/GKD_subscription src/apps/com.steampy.app.ts
// 摘取类别: 开屏广告 / 全屏广告, 同步于 2026-11-09
// 重新导入: pnpm tsx scripts/import-ref.ts --force com.steampy.app
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.steampy.app',
  name: 'SteamPY',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          matches:
            '[vid="pyAdLayout"] > [vid="count_down_view"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/26231218',
        },
      ],
    },
  ],
});
