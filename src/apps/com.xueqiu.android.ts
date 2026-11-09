// 来源: Lin-arm/GKD_subscription src/apps/com.xueqiu.android.ts
// 摘取类别: 开屏广告 / 全屏广告, 同步于 2026-11-09
// 重新导入: pnpm tsx scripts/import-ref.ts --force com.xueqiu.android
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.xueqiu.android',
  name: '雪球',
  groups: [
    {
      key: 3,
      name: '全屏广告',
      desc: '点击关闭',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          fastQuery: true,
          activityIds: '.mainnesting.view.MainNestingActivity',
          matches: '[vid="image_cancel"][visibleToUser=true]',
          exampleUrls: 'https://e.gkd.li/5229142b-49d5-4985-ab75-104e46ede45e',
          snapshotUrls: 'https://i.gkd.li/i/22995479',
        },
      ],
    },
  ],
});
