// 来源: Lin-arm/GKD_subscription src/apps/com.wordscon.axe.ts
// 摘取类别: 开屏广告 / 全屏广告, 同步于 2026-11-09
// 重新导入: pnpm tsx scripts/import-ref.ts --force com.wordscon.axe
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.wordscon.axe',
  name: '句子控',
  groups: [
    {
      key: 1,
      name: '全屏广告',
      rules: [
        {
          fastQuery: true,
          activityIds: '.main.MainActivity',
          matches: '[vid="imv_close"]',
          snapshotUrls: 'https://i.gkd.li/i/28225736',
        },
      ],
    },
  ],
});
