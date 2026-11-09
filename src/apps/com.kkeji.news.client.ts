// 来源: Lin-arm/GKD_subscription src/apps/com.kkeji.news.client.ts
// 摘取类别: 开屏广告 / 全屏广告, 同步于 2026-11-09
// 重新导入: pnpm tsx scripts/import-ref.ts --force com.kkeji.news.client
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.kkeji.news.client',
  name: '快科技',
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
          matches: '[vid="tv_counter"]',
          snapshotUrls: 'https://i.gkd.li/i/13197536',
        },
      ],
    },
  ],
});
