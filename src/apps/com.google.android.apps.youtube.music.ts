// 来源: Lin-arm/GKD_subscription src/apps/com.google.android.apps.youtube.music.ts
// 摘取类别: 开屏广告 / 全屏广告, 同步于 2026-11-09
// 重新导入: pnpm tsx scripts/import-ref.ts --force com.google.android.apps.youtube.music
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.google.android.apps.youtube.music',
  name: 'YouTube Music',
  groups: [
    {
      key: 2,
      name: '全屏广告-会员广告',
      desc: '点击关闭',
      rules: [
        {
          key: 0,
          fastQuery: true,
          activityIds: '.activities.MusicActivity',
          matches:
            '@[desc="Close" || desc="No thanks"][visibleToUser=true] <<n [vid="custom"]',
          exampleUrls: 'https://e.gkd.li/42b2cb6d-b1e2-4cb1-84d8-399939263711',
          snapshotUrls: [
            'https://i.gkd.li/i/18542111',
            'https://i.gkd.li/i/18727504',
          ],
        },
        {
          key: 1,
          fastQuery: true,
          activityIds: '.activities.MusicActivity',
          matches: '[text="No thanks"][visibleToUser=true]',
          exampleUrls: 'https://e.gkd.li/eb519d7d-8d6c-4196-bf23-ea8c0511cfa9',
          snapshotUrls: 'https://i.gkd.li/i/19442247',
        },
      ],
    },
  ],
});
