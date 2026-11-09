// 来源: Lin-arm/GKD_subscription src/apps/com.kylindev.totalk.ts
// 摘取类别: 开屏广告 / 全屏广告, 同步于 2026-11-09
// 重新导入: pnpm tsx scripts/import-ref.ts --force com.kylindev.totalk
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.kylindev.totalk',
  name: '滔滔对讲',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      fastQuery: true,
      matchRoot: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      priorityTime: 10000,
      rules: [
        {
          key: 1,
          matches: '[vid="adgain_splash_skip_ll"]',
          snapshotUrls: 'https://i.gkd.li/i/30350919',
        },
      ],
    },
  ],
});
