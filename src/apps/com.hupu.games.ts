// 来源: Lin-arm/GKD_subscription src/apps/com.hupu.games.ts
// 摘取类别: 开屏广告 / 全屏广告, 同步于 2026-11-09
// 重新导入: pnpm tsx scripts/import-ref.ts --force com.hupu.games
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.hupu.games',
  name: '虎扑',
  groups: [
    {
      key: 2,
      name: '全屏广告',
      desc: '点击x掉',
      rules: [
        {
          fastQuery: true,
          activityIds: '.main.MainActivity',
          matches: '[vid="iv_close"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/27383159',
        },
      ],
    },
  ],
});
