// 来源: Lin-arm/GKD_subscription src/apps/com.UCMobile.ts
// 摘取类别: 开屏广告 / 全屏广告, 同步于 2026-11-09
// 重新导入: pnpm tsx scripts/import-ref.ts --force com.UCMobile
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.UCMobile',
  name: 'UC浏览器',
  groups: [
    {
      key: -1,
      name: '开屏广告',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      actionMaximumKey: 0,
      priorityTime: 10000,
      ignoreGlobalGroupMatch: true,
      rules: [
        {
          key: 1,
          matches:
            '[id="android:id/content"] > FrameLayout[childCount=4] >3 FrameLayout[childCount=4] > RelativeLayout[childCount=1] > View[childCount=0][text=null][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13197655',
        },
        {
          key: 2,
          fastQuery: true,
          position: {
            left: 'width * 0.9',
            top: 'width * 0.1676',
          },
          matches: '[id="com.UCMobile.adn_jingdong_sdk:id/animation_view"]',
          exampleUrls: 'https://e.gkd.li/92da64ad-5b08-4343-bec2-bb6a7e0bb92d',
          snapshotUrls: 'https://i.gkd.li/i/16494884',
        },
      ],
    },
  ],
});
