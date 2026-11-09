// 来源: Lin-arm/GKD_subscription src/apps/com.hihonor.health.ts
// 摘取类别: 开屏广告 / 全屏广告, 同步于 2026-11-09
// 重新导入: pnpm tsx scripts/import-ref.ts --force com.hihonor.health
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.hihonor.health',
  name: '荣耀运动健康',
  groups: [
    {
      key: 2,
      name: '全屏广告-弹窗广告',
      desc: '点击关闭',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          fastQuery: true,
          activityIds: '.main.MainActivity',
          matches: '[vid="btn_close"][desc="关闭弹窗"]',
          exampleUrls: 'https://e.gkd.li/1ab101bd-59cb-46c0-bbb1-7a0a9dccf79a',
          snapshotUrls: 'https://i.gkd.li/i/16454150',
        },
      ],
    },
  ],
});
