// 来源: Lin-arm/GKD_subscription src/apps/com.ky.medical.reference.ts
// 摘取类别: 开屏广告 / 全屏广告, 同步于 2026-11-09
// 重新导入: pnpm tsx scripts/import-ref.ts --force com.ky.medical.reference
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.ky.medical.reference',
  name: '用药参考',
  groups: [
    {
      key: -1,
      name: '开屏广告',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      priorityTime: 10000,
      rules: '[vid="btn_go"][text^="关闭"]',
      snapshotUrls: 'https://i.gkd.li/i/12918049',
    },
    {
      key: 0,
      name: '全屏广告-弹窗广告',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          activityIds: '.promotion.AdDialogActivity',
          matches: '[vid="icClose"]',
          snapshotUrls: 'https://i.gkd.li/i/12840924',
        },
      ],
    },
  ],
});
