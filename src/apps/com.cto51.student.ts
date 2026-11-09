// 来源: Lin-arm/GKD_subscription src/apps/com.cto51.student.ts
// 摘取类别: 开屏广告 / 全屏广告, 同步于 2026-11-09
// 重新导入: pnpm tsx scripts/import-ref.ts --force com.cto51.student
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.cto51.student',
  name: '51CTO',
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
          activityIds: '.foundation.activities.MainActivity',
          matches: '@[vid="iv_close"] - [vid="rl_ad"][visibleToUser=true]',
          exampleUrls: 'https://e.gkd.li/b646bfb4-0d23-483e-b03e-f827f1c4b155',
          snapshotUrls: 'https://i.gkd.li/i/18308616',
        },
      ],
    },
  ],
});
