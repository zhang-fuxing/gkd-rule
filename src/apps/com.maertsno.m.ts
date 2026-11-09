// 来源: Lin-arm/GKD_subscription src/apps/com.maertsno.m.ts
// 摘取类别: 开屏广告 / 全屏广告, 同步于 2026-11-09
// 重新导入: pnpm tsx scripts/import-ref.ts --force com.maertsno.m
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.maertsno.m',
  name: 'OnStream',
  groups: [
    {
      key: 1,
      name: '全屏广告',
      rules: [
        {
          fastQuery: true,
          activityIds: 'co.notix.interstitial.InterstitialActivity',
          matches: '[vid="tv_button"]',
          snapshotUrls: 'https://i.gkd.li/i/13842558',
        },
      ],
    },
  ],
});
