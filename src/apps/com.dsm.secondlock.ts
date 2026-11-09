// 来源: Lin-arm/GKD_subscription src/apps/com.dsm.secondlock.ts
// 摘取类别: 开屏广告 / 全屏广告, 同步于 2026-11-09
// 重新导入: pnpm tsx scripts/import-ref.ts --force com.dsm.secondlock
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.dsm.secondlock',
  name: '德施曼智能',
  groups: [
    {
      key: 1,
      name: '全屏广告',
      rules: [
        {
          fastQuery: true,
          activityIds: [
            '.main.MainActivity',
            'com.dsm.message.activity.MessageActivity',
          ],
          matches: '[vid="ivCancel"]',
          snapshotUrls: [
            'https://i.gkd.li/i/29934451',
            'https://i.gkd.li/i/29934452',
          ],
        },
      ],
    },
  ],
});
