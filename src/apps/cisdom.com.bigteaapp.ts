// 来源: Lin-arm/GKD_subscription src/apps/cisdom.com.bigteaapp.ts
// 摘取类别: 开屏广告 / 全屏广告, 同步于 2026-11-09
// 重新导入: pnpm tsx scripts/import-ref.ts --force cisdom.com.bigteaapp
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'cisdom.com.bigteaapp',
  name: '大茶肆',
  groups: [
    {
      key: 1,
      name: '全屏广告-弹窗广告',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          matches: '[text$="抽奖送大礼"] < WebView - [vid="close"]',
          snapshotUrls: 'https://i.gkd.li/i/13228579', //旧快照
        },
      ],
    },
  ],
});
