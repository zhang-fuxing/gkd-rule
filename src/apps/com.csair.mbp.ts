// 来源: Lin-arm/GKD_subscription src/apps/com.csair.mbp.ts
// 摘取类别: 开屏广告 / 全屏广告, 同步于 2026-11-09
// 重新导入: pnpm tsx scripts/import-ref.ts --force com.csair.mbp
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.csair.mbp',
  name: '南方航空',
  groups: [
    {
      key: 3,
      name: '全屏广告-弹窗广告',
      desc: '点击关闭',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          fastQuery: true,
          activityIds: '.CSMBPActivity',
          matches: '[vid="close_btn"]',
          exampleUrls: 'https://e.gkd.li/c6aeaf1c-e4d6-4b9c-a4bf-ee5b05d2bb30',
          snapshotUrls: 'https://i.gkd.li/i/13197497',
        },
      ],
    },
  ],
});
