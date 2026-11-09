// 来源: Lin-arm/GKD_subscription src/apps/com.tongcheng.android.ts
// 摘取类别: 开屏广告 / 全屏广告, 同步于 2026-11-09
// 重新导入: pnpm tsx scripts/import-ref.ts --force com.tongcheng.android
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.tongcheng.android',
  name: '同程旅行',
  groups: [
    {
      key: 2,
      name: '全屏广告-弹窗广告',
      desc: '点击关闭',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          fastQuery: true,
          activityIds: '.TongchengMainActivity',
          matches: '[vid="iv_home_ad_close"][visibleToUser=true]',
          exampleUrls: 'https://e.gkd.li/25369e74-1527-4ca5-9f39-77930ee84d1e',
          snapshotUrls: 'https://i.gkd.li/i/20921290',
        },
      ],
    },
  ],
});
