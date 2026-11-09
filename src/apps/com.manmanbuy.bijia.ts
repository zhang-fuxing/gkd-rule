// 来源: Lin-arm/GKD_subscription src/apps/com.manmanbuy.bijia.ts
// 摘取类别: 开屏广告 / 全屏广告, 同步于 2026-11-09
// 重新导入: pnpm tsx scripts/import-ref.ts --force com.manmanbuy.bijia
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.manmanbuy.bijia',
  name: '慢慢买',
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
          matches: '[text^="关闭"][text.length=4]',
          snapshotUrls: 'https://i.gkd.li/i/13214974',
        },
      ],
    },
    {
      key: 2,
      name: '全屏广告-弹窗广告',
      rules: [
        {
          fastQuery: true,
          activityIds: '.MainActivity',
          matches: '@[clickable=true] >2 TextView[text=""]',
          snapshotUrls: 'https://i.gkd.li/i/28312474',
        },
      ],
    },
  ],
});
