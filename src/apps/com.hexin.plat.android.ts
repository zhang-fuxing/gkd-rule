// 来源: Lin-arm/GKD_subscription src/apps/com.hexin.plat.android.ts
// 摘取类别: 开屏广告 / 全屏广告, 同步于 2026-11-09
// 重新导入: pnpm tsx scripts/import-ref.ts --force com.hexin.plat.android
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.hexin.plat.android',
  name: '同花顺',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      actionMaximumKey: 0,
      priorityTime: 10000,
      rules: [
        {
          key: 0,
          position: {
            left: 'width * 3.6279',
            top: 'width * -6.5736',
          },
          matches:
            '@[id="android:id/title"][childCount=0][width<150] < LinearLayout < [parent=null]',
          exampleUrls: 'https://e.gkd.li/2750d496-8889-4aed-88b7-70692df44e8f',
          snapshotUrls: 'https://i.gkd.li/i/16505270',
        },
        {
          key: 1,
          position: {
            left: 'width * 3.7',
            top: 'width * -6.9281',
          },
          matches:
            '@[id="android:id/title"][childCount=0][width>=150] < LinearLayout < [parent=null]',
          exampleUrls: 'https://e.gkd.li/f9c7621d-8b2b-4ca8-9904-fe0bca61c43f',
          snapshotUrls: 'https://i.gkd.li/i/17726527',
        },
        {
          key: 2,
          matches:
            '[text*="跳过"][text.length<10][width<500 && height<300][visibleToUser=true]',
          snapshotUrls: 'https://i.gkd.li/i/24119631',
        },
      ],
    },
  ],
});
