// 来源: Lin-arm/GKD_subscription src/apps/com.erksd.qdmk.yxml.sousou.ts
// 摘取类别: 开屏广告 / 全屏广告, 同步于 2026-11-09
// 重新导入: pnpm tsx scripts/import-ref.ts --force com.erksd.qdmk.yxml.sousou
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.erksd.qdmk.yxml.sousou',
  name: '新大师兄影视',
  groups: [
    {
      key: 1,
      name: '全屏广告',
      desc: '点击关闭',
      rules: [
        {
          key: 0,
          fastQuery: true,
          activityIds: 'cn.haorui.sdk.activity.HRNativeInterstitialActivity',
          matches:
            '[vid="activity_sdk_interstitial_cacel"][visibleToUser=true]',
          exampleUrls: 'https://e.gkd.li/8f712571-be10-4d59-afa4-6957492eb25d',
          snapshotUrls: 'https://i.gkd.li/i/23435915',
        },
        {
          key: 1,
          activityIds:
            'com.sigmob.sdk.base.common.PortraitTransparentAdActivity',
          matches: '[id="ad_area"] > [id="close_btn"][visibleToUser=true]',
          exampleUrls: 'https://e.gkd.li/92bb7cc8-c5c2-4ccf-8f1d-35bcc0e30f9e',
          snapshotUrls: 'https://i.gkd.li/i/23435936',
        },
      ],
    },
  ],
});
