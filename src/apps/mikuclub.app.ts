// 来源: Lin-arm/GKD_subscription src/apps/mikuclub.app.ts
// 摘取类别: 开屏广告 / 全屏广告, 同步于 2026-11-09
// 重新导入: pnpm tsx scripts/import-ref.ts --force mikuclub.app
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'mikuclub.app',
  name: '初音社',
  groups: [
    {
      key: 1,
      name: '全屏广告-谷歌广告',
      desc: '点击关闭',
      rules: [
        {
          forcedTime: 10000,
          activityIds: 'com.google.android.gms.ads.AdActivity',
          matches: '[text^="关闭广告"] + View >2 Image[text=""]',
          exampleUrls:
            'https://m.gkd.li/57941037/2fa2793e-187e-44e6-91e4-6a5a355568c6',
          snapshotUrls: 'https://i.gkd.li/i/14306002',
        },
      ],
    },
  ],
});
