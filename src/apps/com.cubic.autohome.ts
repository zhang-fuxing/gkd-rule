// 来源: Lin-arm/GKD_subscription src/apps/com.cubic.autohome.ts
// 摘取类别: 开屏广告 / 全屏广告, 同步于 2026-11-09
// 重新导入: pnpm tsx scripts/import-ref.ts --force com.cubic.autohome
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.cubic.autohome',
  name: '汽车之家',
  groups: [
    {
      key: 1,
      name: '全屏广告-弹窗广告',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          activityIds: '.MainActivity',
          matches: '[vid="operate_show_exit_layout"]',
          snapshotUrls: 'https://i.gkd.li/i/12836324',
        },
      ],
    },
  ],
});
