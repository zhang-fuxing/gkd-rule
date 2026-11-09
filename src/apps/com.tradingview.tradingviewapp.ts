// 来源: Lin-arm/GKD_subscription src/apps/com.tradingview.tradingviewapp.ts
// 摘取类别: 开屏广告 / 全屏广告, 同步于 2026-11-09
// 重新导入: pnpm tsx scripts/import-ref.ts --force com.tradingview.tradingviewapp
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.tradingview.tradingviewapp',
  name: 'TradingView',
  groups: [
    {
      key: 2,
      name: '全屏广告',
      rules: [
        {
          fastQuery: true,
          activityIds: '.root.view.RootActivity',
          matches: '[vid="friday_fl_layout"] > [vid="friday_iv_close"]',
          exampleUrls: 'https://e.gkd.li/9cc35e84-1b27-4aa5-a74b-ace7cf42d943',
          snapshotUrls: 'https://i.gkd.li/i/18222211',
        },
      ],
    },
  ],
});
