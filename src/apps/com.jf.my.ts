// 来源: Lin-arm/GKD_subscription src/apps/com.jf.my.ts
// 摘取类别: 开屏广告 / 全屏广告, 同步于 2026-11-09
// 重新导入: pnpm tsx scripts/import-ref.ts --force com.jf.my
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.jf.my',
  name: '蜜源',
  groups: [
    {
      key: 1,
      name: '全屏广告-首页弹窗广告',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          activityIds: '.main.ui.dialog.HomeRedPackageDialog',
          matches: '[vid="iv_back"]',
          snapshotUrls: 'https://i.gkd.li/i/12840619',
        },
      ],
    },
  ],
});
