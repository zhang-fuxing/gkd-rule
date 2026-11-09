// 来源: Lin-arm/GKD_subscription src/apps/com.xiaote.ts
// 摘取类别: 开屏广告 / 全屏广告, 同步于 2026-11-09
// 重新导入: pnpm tsx scripts/import-ref.ts --force com.xiaote
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.xiaote',
  name: '小特',
  groups: [
    {
      key: 1,
      name: '开屏广告',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      priorityTime: 10000,
      rules: [
        {
          matches: '[vid="ad_close"][text*="关闭"]',
          snapshotUrls: 'https://i.gkd.li/i/14035706',
        },
      ],
    },
  ],
});
