// 来源: Lin-arm/GKD_subscription src/apps/com.mxbc.mxsa.ts
// 摘取类别: 开屏广告 / 全屏广告, 同步于 2026-11-09
// 重新导入: pnpm tsx scripts/import-ref.ts --force com.mxbc.mxsa
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.mxbc.mxsa',
  name: '蜜雪冰城',
  groups: [
    {
      key: 2,
      name: '全屏广告-主界面弹窗广告',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          key: 1,
          activityIds: '.modules.main.MainActivity',
          matches: '[vid="close"]',
          snapshotUrls: 'https://i.gkd.li/i/12929345',
        },
      ],
    },
  ],
});
