// 来源: Lin-arm/GKD_subscription src/apps/com.eastmoney.android.fund.ts
// 摘取类别: 开屏广告 / 全屏广告, 同步于 2026-11-09
// 重新导入: pnpm tsx scripts/import-ref.ts --force com.eastmoney.android.fund
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.eastmoney.android.fund',
  name: '天天基金',
  groups: [
    {
      key: 4,
      name: '全屏广告-弹窗广告',
      desc: '点击关闭',
      rules: [
        {
          fastQuery: true,
          activityIds: [
            '.centralis.activity.FundRootActivity',
            '.activity.FundSplashActivity',
          ],
          matches:
            'ImageView[childCount=0] < @FrameLayout[clickable=true][childCount=1] <2 FrameLayout < FrameLayout < FrameLayout < FrameLayout < [vid="container"]',
          exampleUrls:
            'https://m.gkd.li/57941037/21743bbb-010a-410c-8ce1-57710d37722d',
          snapshotUrls: [
            'https://i.gkd.li/i/14149452',
            'https://i.gkd.li/i/14332091',
          ],
        },
      ],
    },
  ],
});
