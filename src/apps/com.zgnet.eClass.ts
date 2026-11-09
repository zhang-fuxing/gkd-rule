// 来源: Lin-arm/GKD_subscription src/apps/com.zgnet.eClass.ts
// 摘取类别: 开屏广告 / 全屏广告, 同步于 2026-11-09
// 重新导入: pnpm tsx scripts/import-ref.ts --force com.zgnet.eClass
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.zgnet.eClass',
  name: '掌医课堂',
  groups: [
    {
      key: 1,
      name: '开屏广告',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      priorityTime: 10000,
      rules: [
        {
          matches: 'TextView[id$="tv_close_time"&&text^="关闭"]',
          snapshotUrls: 'https://i.gkd.li/i/12644260',
        },
      ],
    },
  ],
});
