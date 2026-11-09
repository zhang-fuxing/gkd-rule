// 来源: Lin-arm/GKD_subscription src/apps/com.netease.yanxuan.ts
// 摘取类别: 开屏广告 / 全屏广告, 同步于 2026-11-09
// 重新导入: pnpm tsx scripts/import-ref.ts --force com.netease.yanxuan
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.netease.yanxuan',
  name: '网易严选',
  groups: [
    {
      key: 1,
      name: '全屏广告-首页弹窗广告',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          activityIds: '.module.mainpage.activity.MainPageActivity',
          matches: '[vid="trans_cancel"]',
          snapshotUrls: 'https://i.gkd.li/i/12840641',
        },
      ],
    },
  ],
});
