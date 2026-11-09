// 来源: Lin-arm/GKD_subscription src/apps/com.guodongbaohe.app.ts
// 摘取类别: 开屏广告 / 全屏广告, 同步于 2026-11-09
// 重新导入: pnpm tsx scripts/import-ref.ts --force com.guodongbaohe.app
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.guodongbaohe.app',
  name: '果冻宝盒',
  groups: [
    {
      key: 6,
      name: '全屏广告-弹窗广告',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          fastQuery: true,
          activityIds: '.activity.AdvertisementTwoActivity',
          matches: 'LinearLayout[vid="close_dialog_lv"]',
          snapshotUrls: 'https://i.gkd.li/i/13577877',
        },
      ],
    },
  ],
});
