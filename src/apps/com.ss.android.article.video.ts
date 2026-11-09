// 来源: Lin-arm/GKD_subscription src/apps/com.ss.android.article.video.ts
// 摘取类别: 开屏广告 / 全屏广告, 同步于 2026-11-09
// 重新导入: pnpm tsx scripts/import-ref.ts --force com.ss.android.article.video
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.ss.android.article.video',
  name: '西瓜视频',
  groups: [
    {
      key: 6,
      name: '全屏广告-红包弹窗',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          activityIds: '.activity.SplashActivity',
          matches: '@FlattenUIImage[clickable=true] -2 [text="开心收下"]',
          snapshotUrls: 'https://i.gkd.li/i/13620299',
        },
      ],
    },
  ],
});
