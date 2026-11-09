// 来源: Lin-arm/GKD_subscription src/apps/com.qiyi.video.lite.ts
// 摘取类别: 开屏广告 / 全屏广告, 同步于 2026-11-09
// 重新导入: pnpm tsx scripts/import-ref.ts --force com.qiyi.video.lite
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.qiyi.video.lite',
  name: '爱奇艺极速版',
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
          matches: '@[clickable=true] >2 [text="关闭"]',
          snapshotUrls: 'https://i.gkd.li/i/13797162',
        },
      ],
    },
  ],
});
