// 来源: Lin-arm/GKD_subscription src/apps/com.xiaomi.mico.ts
// 摘取类别: 开屏广告 / 全屏广告, 同步于 2026-11-09
// 重新导入: pnpm tsx scripts/import-ref.ts --force com.xiaomi.mico
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.xiaomi.mico',
  name: '小爱音箱',
  groups: [
    {
      key: 1,
      name: '全屏广告-首页弹窗广告',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          activityIds: '.main.MainActivity',
          matches: '[vid="adImage"] + [vid="ivCloseAd"]',
          snapshotUrls: 'https://i.gkd.li/i/12745621',
        },
      ],
    },
  ],
});
