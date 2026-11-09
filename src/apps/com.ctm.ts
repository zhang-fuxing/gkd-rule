// 来源: Lin-arm/GKD_subscription src/apps/com.ctm.ts
// 摘取类别: 开屏广告 / 全屏广告, 同步于 2026-11-09
// 重新导入: pnpm tsx scripts/import-ref.ts --force com.ctm
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.ctm',
  name: 'CTM Buddy',
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
          activityIds: '.home.page.MainActivity',
          matches: '[vid="iv_close"]',
          exampleUrls: 'https://e.gkd.li/fbaa53c3-109d-47b3-b85c-373d93e420d9',
          snapshotUrls: 'https://i.gkd.li/i/13350575',
        },
      ],
    },
  ],
});
