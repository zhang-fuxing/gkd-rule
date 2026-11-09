// 来源: Lin-arm/GKD_subscription src/apps/com.gspace.android.ts
// 摘取类别: 开屏广告 / 全屏广告, 同步于 2026-11-09
// 重新导入: pnpm tsx scripts/import-ref.ts --force com.gspace.android
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.gspace.android',
  name: 'Gspace',
  groups: [
    {
      key: 2,
      name: '全屏广告-Youtube播放视频跳过广告',
      // activityIds: 'com.huawei.openalliance.ad.ppskit.activity.InnerPPSInterstitialAdActivity',
      // 我不清楚，上面的activityIds是否与系统有关
      rules: '[id="com.google.android.youtube:id/skip_ad_button"]',
      snapshotUrls: 'https://i.gkd.li/i/12709006',
    },
  ],
});
