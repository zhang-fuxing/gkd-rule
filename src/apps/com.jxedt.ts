// 来源: Lin-arm/GKD_subscription src/apps/com.jxedt.ts
// 摘取类别: 开屏广告 / 全屏广告, 同步于 2026-11-09
// 重新导入: pnpm tsx scripts/import-ref.ts --force com.jxedt
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.jxedt',
  name: '驾校一点通',
  groups: [
    {
      key: 3,
      name: '全屏广告-弹窗广告',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          key: 0,
          activityIds: '.ui.activitys.NewHomeActivity',
          matches: '[vid="img_dialog_ad_close"]',
          snapshotUrls: 'https://i.gkd.li/i/13476741',
        },
      ],
    },
  ],
});
