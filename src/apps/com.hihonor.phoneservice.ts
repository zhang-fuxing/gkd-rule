// 来源: Lin-arm/GKD_subscription src/apps/com.hihonor.phoneservice.ts
// 摘取类别: 开屏广告 / 全屏广告, 同步于 2026-11-09
// 重新导入: pnpm tsx scripts/import-ref.ts --force com.hihonor.phoneservice
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.hihonor.phoneservice',
  name: '我的荣耀',
  groups: [
    {
      key: 1,
      name: '全屏广告-弹窗广告',
      desc: '点击关闭',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          fastQuery: true,
          activityIds: '.main.MainActivity',
          matches: '[vid="ads_cancel"]',
          exampleUrls: 'https://e.gkd.li/539acb69-5c9c-4c4b-9757-d189b6852f89',
          snapshotUrls: 'https://i.gkd.li/i/16476928',
        },
      ],
    },
  ],
});
