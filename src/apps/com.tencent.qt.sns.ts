// 来源: Lin-arm/GKD_subscription src/apps/com.tencent.qt.sns.ts
// 摘取类别: 开屏广告 / 全屏广告, 同步于 2026-11-09
// 重新导入: pnpm tsx scripts/import-ref.ts --force com.tencent.qt.sns
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.tencent.qt.sns',
  name: '掌上穿越火线',
  groups: [
    {
      key: 1,
      name: '全屏广告-首页活动弹窗',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          matches: '[vid="closebtn"]',
          snapshotUrls: 'https://i.gkd.li/i/13497978',
        },
      ],
    },
  ],
});
