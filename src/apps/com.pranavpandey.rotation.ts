// 来源: Lin-arm/GKD_subscription src/apps/com.pranavpandey.rotation.ts
// 摘取类别: 开屏广告 / 全屏广告, 同步于 2026-11-09
// 重新导入: pnpm tsx scripts/import-ref.ts --force com.pranavpandey.rotation
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.pranavpandey.rotation',
  name: 'Rotation',
  groups: [
    {
      key: 1,
      name: '全屏广告',
      rules: [
        {
          activityIds: 'com.google.android.gms.ads.AdActivity',
          matches: '[desc="Interstitial close button"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/23497601',
        },
      ],
    },
  ],
});
