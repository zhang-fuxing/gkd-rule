// 来源: Lin-arm/GKD_subscription src/apps/cn.medlive.guideline.android.ts
// 摘取类别: 开屏广告 / 全屏广告, 同步于 2026-11-09
// 重新导入: pnpm tsx scripts/import-ref.ts --force cn.medlive.guideline.android
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'cn.medlive.guideline.android',
  name: '临床指南',
  groups: [
    {
      key: 1,
      name: '全屏广告',
      rules: [
        {
          key: 0,
          fastQuery: true,
          activityIds: 'cn.medlive.vip.AdDialogActivity',
          matches:
            'ViewGroup > [vid="imgAd"] + [vid="icClose"][clickable=true][visibleToUser=true]',
          exampleUrls: 'https://e.gkd.li/bce1c836-88d1-49a0-a417-b2ecca2991ab',
          snapshotUrls: 'https://i.gkd.li/i/25769524',
        },
        {
          key: 1,
          activityIds: 'com.quick.jsbridge.view.QuickWebLoader',
          matches:
            '@Button[clickable=true][visibleToUser=true] + [text="开通用药会员"] <2 View[childCount=5]',
          exampleUrls: 'https://e.gkd.li/2ee23070-6091-49e3-b035-02618bc1e3df',
          snapshotUrls: 'https://i.gkd.li/i/25769624',
        },
      ],
    },
  ],
});
