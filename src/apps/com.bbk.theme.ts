// 来源: Lin-arm/GKD_subscription src/apps/com.bbk.theme.ts
// 摘取类别: 开屏广告 / 全屏广告, 同步于 2026-11-09
// 重新导入: pnpm tsx scripts/import-ref.ts --force com.bbk.theme
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.bbk.theme',
  name: '(vivo)主题',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      fastQuery: true,
      matchTime: 10000,
      forcedTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      priorityTime: 10000,
      rules: [
        {
          key: 0,
          matches: '[text*="跳过"][text.length<10][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/30565834',
        },
      ],
    },
    {
      key: 1,
      name: '全屏广告-推广弹窗',
      desc: '点击关闭',
      rules: [
        {
          fastQuery: true,
          activityIds: '.Theme',
          matches: '[vid="card_close_img"]',
          exampleUrls:
            'https://m.gkd.li/57941037/8207ec80-6e9d-4b9e-9880-7370d826c405',
          snapshotUrls: 'https://i.gkd.li/i/14904298',
        },
      ],
    },
  ],
});
