// 来源: Lin-arm/GKD_subscription src/apps/com.x.istar.ts
// 摘取类别: 开屏广告 / 全屏广告, 同步于 2026-11-09
// 重新导入: pnpm tsx scripts/import-ref.ts --force com.x.istar
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.x.istar',
  name: '观星',
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
          activityIds: '.view.main.MainActivity',
          matches: '[text="关闭广告"][vid="btn_negative"]',
          snapshotUrls: 'https://i.gkd.li/i/13974606',
        },
      ],
    },
  ],
});
