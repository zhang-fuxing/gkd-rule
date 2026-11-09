// 来源: Lin-arm/GKD_subscription src/apps/com.tianqi2345.ts
// 摘取类别: 开屏广告 / 全屏广告, 同步于 2026-11-09
// 重新导入: pnpm tsx scripts/import-ref.ts --force com.tianqi2345
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.tianqi2345',
  name: '2345天气王',
  groups: [
    {
      key: 1,
      name: '全屏广告-弹窗广告',
      desc: '点击关闭',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          activityIds:
            'com.biz2345.shell.activity.holder.CloudInterstitialActivity',
          matches:
            '@TextView[id="com.biz2345.adware:id/cloud_interstitial_close_tv"][clickable=true][childCount=0] < RelativeLayout[childCount=2] < RelativeLayout < FrameLayout < [id="android:id/content"]',
          exampleUrls:
            'https://m.gkd.li/57941037/1535a559-f2cd-49c5-8c19-b2bc16709f55',
          snapshotUrls: 'https://i.gkd.li/i/14391796',
        },
      ],
    },
  ],
});
