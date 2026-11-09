// 来源: Lin-arm/GKD_subscription src/apps/com.cmcc.cmvideo.ts
// 摘取类别: 开屏广告 / 全屏广告, 同步于 2026-11-09
// 重新导入: pnpm tsx scripts/import-ref.ts --force com.cmcc.cmvideo
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.cmcc.cmvideo',
  name: '咪咕视频',
  groups: [
    {
      key: 5,
      name: '全屏广告-首页',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          matchRoot: true,
          activityIds: '.main.application.CompatibleMainActivity',
          matches: '[vid="iv_big_close" || vid="close_bg_single"]',
          exampleUrls: [
            'https://e.gkd.li/ece7eb54-9b9b-40e2-9402-fc350f4734bb',
            'https://e.gkd.li/5a577aa5-7d8a-4f7b-8a4a-230263775fbc',
          ],
          snapshotUrls: [
            'https://i.gkd.li/i/16503612',
            'https://i.gkd.li/i/27368845',
          ],
        },
      ],
    },
  ],
});
