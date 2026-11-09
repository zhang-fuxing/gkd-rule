// 来源: Lin-arm/GKD_subscription src/apps/com.futurefleet.dongguantongbus.ui.dg.ts
// 摘取类别: 开屏广告 / 全屏广告, 同步于 2026-11-09
// 重新导入: pnpm tsx scripts/import-ref.ts --force com.futurefleet.dongguantongbus.ui.dg
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.futurefleet.dongguantongbus.ui.dg',
  name: '东莞通',
  groups: [
    {
      key: 2,
      name: '全屏广告',
      desc: '点击关闭',
      rules: [
        {
          fastQuery: true,
          activityIds:
            'com.yd.saas.base.inner.interstitial.YdInterstitialActivity',
          matches: '[vid="iv_close"][visibleToUser=true]',
          exampleUrls: 'https://e.gkd.li/d4e02a98-f4e7-492f-9317-717454d74fd5',
          snapshotUrls: 'https://i.gkd.li/i/23357205',
        },
      ],
    },
  ],
});
