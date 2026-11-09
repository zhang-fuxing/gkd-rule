// 来源: Lin-arm/GKD_subscription src/apps/com.csg.palmhall.ts
// 摘取类别: 开屏广告 / 全屏广告, 同步于 2026-11-09
// 重新导入: pnpm tsx scripts/import-ref.ts --force com.csg.palmhall
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.csg.palmhall',
  name: '南网在线',
  groups: [
    {
      key: 2,
      name: '全屏广告-首页弹窗广告',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          activityIds: '.MainActivity',
          matches: 'View > Image +(3) [text="不再显示"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/12700075',
        },
      ],
    },
  ],
});
