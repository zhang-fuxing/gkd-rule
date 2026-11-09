// 来源: Lin-arm/GKD_subscription src/apps/com.cebbank.mobile.cemb.ts
// 摘取类别: 开屏广告 / 全屏广告, 同步于 2026-11-09
// 重新导入: pnpm tsx scripts/import-ref.ts --force com.cebbank.mobile.cemb
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.cebbank.mobile.cemb',
  name: '光大银行',
  groups: [
    {
      key: -1,
      name: '开屏广告',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      priorityTime: 10000,
      rules: [
        {
          fastQuery: true,
          matches: '[vid="tv_skip"]',
          exampleUrls: 'https://e.gkd.li/81f951ce-39b0-4677-93a7-25b5a709b46d',
          snapshotUrls: 'https://i.gkd.li/i/17615867',
        },
      ],
    },
    {
      key: 2,
      name: '全屏广告-首页弹窗广告',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          activityIds: [
            '.ui.activity.SplashActivity',
            '.ui.activity.HomeActivity',
          ],
          matches: '[vid="home_advertising_iv_close"]',
          snapshotUrls: [
            'https://i.gkd.li/i/12727248',
            'https://i.gkd.li/i/13471080',
          ],
        },
      ],
    },
  ],
});
