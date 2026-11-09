// 来源: Lin-arm/GKD_subscription src/apps/com.mi.poketrade.ts
// 摘取类别: 开屏广告 / 全屏广告, 同步于 2026-11-09
// 重新导入: pnpm tsx scripts/import-ref.ts --force com.mi.poketrade
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.mi.poketrade',
  name: 'PokeHub',
  groups: [
    {
      key: 2,
      name: '全屏广告-订阅广告',
      desc: '点击关闭',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          key: 0,
          fastQuery: true,
          activityIds: '.MainActivity',
          matches:
            '@ImageView[clickable=true][childCount=0][visibleToUser=true] <2 View[getChild(5).desc="Subscribe"] < View < View < View < FrameLayout < FrameLayout < [id="android:id/content"]',
          exampleUrls: 'https://e.gkd.li/19371ab4-5b1a-4efb-925a-883252fd50d0',
          snapshotUrls: 'https://i.gkd.li/i/19643520',
        },
        {
          key: 1,
          fastQuery: true,
          activityIds: '.MainActivity',
          matches:
            '@View[desc="Back"][visibleToUser=true] < ImageView[desc*="VIP"] < View < View < View < View < FrameLayout < FrameLayout < [id="android:id/content"]',
          exampleUrls: 'https://e.gkd.li/a7e15182-89fc-4b38-9acc-fdbbe81908f0',
          snapshotUrls: 'https://i.gkd.li/i/19825695',
          excludeSnapshotUrls: 'https://i.gkd.li/i/20598704',
        },
      ],
    },
  ],
});
