// 来源: Lin-arm/GKD_subscription src/apps/com.rytong.hnair.ts
// 摘取类别: 开屏广告 / 全屏广告, 同步于 2026-11-09
// 重新导入: pnpm tsx scripts/import-ref.ts --force com.rytong.hnair
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.rytong.hnair',
  name: '海南航空',
  groups: [
    {
      key: 1,
      name: '全屏广告-首页弹窗广告',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          activityIds: 'com.hnair.airlines.ui.main.MainActivity',
          matches: 'ImageView[id*="com.rytong.hnair:id/iv_cloes"]',
          snapshotUrls: 'https://i.gkd.li/i/12846381',
        },
      ],
    },
  ],
});
