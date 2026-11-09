// 来源: Lin-arm/GKD_subscription src/apps/com.intsig.camscanner.ts
// 摘取类别: 开屏广告 / 全屏广告, 同步于 2026-11-09
// 重新导入: pnpm tsx scripts/import-ref.ts --force com.intsig.camscanner
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.intsig.camscanner',
  name: '扫描全能王',
  groups: [
    {
      key: 2,
      name: '全屏广告-开通会员', // 该广告在开屏完成后立即弹出
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          key: 0, // 无`activityId`
          matches: '[vid="iv_cancel"]',
          fastQuery: true,
          exampleUrls: 'https://e.gkd.li/5f628895-e214-4a0b-8344-14f3d8c20807',
          snapshotUrls: 'https://i.gkd.li/i/16761285',
        },
        {
          key: 1,
          activityIds: '.guide.CancelAdShowCnGuidePurchaseActivity',
          matches: '[vid="iv_drop_cnl_close"]',
          fastQuery: true,
          exampleUrls: 'https://e.gkd.li/e9a6775a-be51-4aca-b3cd-0b496efe2f0c',
          snapshotUrls: 'https://i.gkd.li/i/17002087',
        },
      ],
    },
  ],
});
