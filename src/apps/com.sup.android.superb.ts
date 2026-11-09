// 来源: Lin-arm/GKD_subscription src/apps/com.sup.android.superb.ts
// 摘取类别: 开屏广告 / 全屏广告, 同步于 2026-11-09
// 重新导入: pnpm tsx scripts/import-ref.ts --force com.sup.android.superb
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.sup.android.superb',
  name: '皮皮虾',
  groups: [
    {
      key: 9,
      name: '全屏广告-集五福弹窗',
      desc: '点击关闭',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          fastQuery: true,
          activityIds: 'com.sup.android.base.MainActivity',
          matches:
            '@ImageView[clickable=true][visibleToUser=true][childCount=0] <2 RelativeLayout[childCount=2] < [id="android:id/content"]',
          exampleUrls:
            'https://m.gkd.li/57941037/246d1d0b-d493-4d40-bbb7-9c04ae6b457d',
          snapshotUrls: 'https://i.gkd.li/i/14151026',
        },
      ],
    },
  ],
});
