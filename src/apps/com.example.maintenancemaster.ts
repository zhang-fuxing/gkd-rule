// 来源: Lin-arm/GKD_subscription src/apps/com.example.maintenancemaster.ts
// 摘取类别: 开屏广告 / 全屏广告, 同步于 2026-11-09
// 重新导入: pnpm tsx scripts/import-ref.ts --force com.example.maintenancemaster
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.example.maintenancemaster',
  name: '维护大师',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      priorityTime: 10000,
      rules: [
        {
          matches: '[vid="advertisement_countdown_ccd"]',
          snapshotUrls: 'https://i.gkd.li/i/12903877',
        },
      ],
    },
  ],
});
