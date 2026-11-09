// 来源: Lin-arm/GKD_subscription src/apps/com.sf.activity.ts
// 摘取类别: 开屏广告 / 全屏广告, 同步于 2026-11-09
// 重新导入: pnpm tsx scripts/import-ref.ts --force com.sf.activity
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.sf.activity',
  name: '顺丰速运',
  groups: [
    {
      key: 3,
      name: '全屏广告-弹窗广告',
      desc: '点击关闭',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          key: 0,
          activityIds: '.MainActivity',
          matches:
            '@Button[id="BmsAdDialogViewCloseButton"] <2 ViewGroup < ViewGroup <2 ViewGroup < ViewGroup <2 ViewGroup < ViewGroup < FrameLayout < [vid="rnRootLayout"]',
          exampleUrls: 'https://e.gkd.li/3be50f7b-5696-47c9-95cc-ef46f8531967',
          snapshotUrls: [
            'https://i.gkd.li/i/14502128',
            'https://i.gkd.li/i/17869485',
          ],
        },
      ],
    },
  ],
});
