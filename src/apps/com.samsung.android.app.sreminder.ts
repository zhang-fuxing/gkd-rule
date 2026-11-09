// 来源: Lin-arm/GKD_subscription src/apps/com.samsung.android.app.sreminder.ts
// 摘取类别: 开屏广告 / 全屏广告, 同步于 2026-11-09
// 重新导入: pnpm tsx scripts/import-ref.ts --force com.samsung.android.app.sreminder
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.samsung.android.app.sreminder',
  name: '三星生活助手',
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
          fastQuery: true,
          activityIds: '.popupconfig.PopupConfigActivity',
          matches: '[vid="cancel_iv"]',
          exampleUrls: 'https://e.gkd.li/428ddc56-fff5-401d-a08e-2fcfc4bb4510',
          snapshotUrls: 'https://i.gkd.li/i/17611025',
        },
      ],
    },
  ],
});
