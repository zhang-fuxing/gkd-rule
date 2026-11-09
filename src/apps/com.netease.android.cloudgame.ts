// 来源: Lin-arm/GKD_subscription src/apps/com.netease.android.cloudgame.ts
// 摘取类别: 开屏广告 / 全屏广告, 同步于 2026-11-09
// 重新导入: pnpm tsx scripts/import-ref.ts --force com.netease.android.cloudgame
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.netease.android.cloudgame',
  name: '网易云游戏',
  groups: [
    {
      key: 1,
      name: '全屏广告',
      rules: [
        {
          fastQuery: true,
          activityIds: '.activity.MainActivity',
          matches:
            '@[vid="guide_close_btn"][clickable=true][visibleToUser=true] - [vid="content_container"]',
          snapshotUrls: 'https://i.gkd.li/i/25573586',
        },
      ],
    },
  ],
});
