// 来源: Lin-arm/GKD_subscription src/apps/com.xmcy.hykb.ts
// 摘取类别: 开屏广告 / 全屏广告, 同步于 2026-11-09
// 重新导入: pnpm tsx scripts/import-ref.ts --force com.xmcy.hykb
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.xmcy.hykb',
  name: '好游快爆',
  groups: [
    {
      key: 2,
      name: '全屏广告-弹窗广告',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          activityIds: '.app.ui.main.MainActivity',
          matches: '[vid="dialog_home_notice_image_close"]',
          snapshotUrls: 'https://i.gkd.li/i/13259427',
        },
      ],
    },
  ],
});
