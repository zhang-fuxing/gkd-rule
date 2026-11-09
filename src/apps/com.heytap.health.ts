// 来源: Lin-arm/GKD_subscription src/apps/com.heytap.health.ts
// 摘取类别: 开屏广告 / 全屏广告, 同步于 2026-11-09
// 重新导入: pnpm tsx scripts/import-ref.ts --force com.heytap.health
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.heytap.health',
  name: 'OPPO 健康',
  groups: [
    {
      key: 4,
      name: '全屏广告',
      rules: [
        {
          fastQuery: true,
          activityIds: '.main.MainActivity',
          matches: '[vid="image_operation"] + [vid="close"]',
          snapshotUrls: 'https://i.gkd.li/i/22724039',
        },
      ],
    },
  ],
});
