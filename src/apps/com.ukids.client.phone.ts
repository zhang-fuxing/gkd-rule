// 来源: Lin-arm/GKD_subscription src/apps/com.ukids.client.phone.ts
// 摘取类别: 开屏广告 / 全屏广告, 同步于 2026-11-09
// 重新导入: pnpm tsx scripts/import-ref.ts --force com.ukids.client.phone
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.ukids.client.phone',
  name: '小小优趣',
  groups: [
    {
      key: 1,
      name: '全屏广告-弹窗广告',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          fastQuery: true,
          activityIds: '.parent.ParentClientHomeActivity',
          matches: '[vid="dialog_dismiss_btn_two"]',
          snapshotUrls: 'https://i.gkd.li/i/13400238',
        },
      ],
    },
  ],
});
