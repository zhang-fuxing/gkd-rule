// 来源: Lin-arm/GKD_subscription src/apps/com.chaoxing.mobile.ts
// 摘取类别: 开屏广告 / 全屏广告, 同步于 2026-11-09
// 重新导入: pnpm tsx scripts/import-ref.ts --force com.chaoxing.mobile
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.chaoxing.mobile',
  name: '学习通',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      matchRoot: true,
      rules: [
        {
          fastQuery: true,
          activityIds: '.activity.SplashActivity',
          matches: '@[clickable=true] > [text^="跳过"][visibleToUser=true]',
          snapshotUrls: 'https://i.gkd.li/i/26644070',
          exampleUrls: 'https://e.gkd.li/42ea0ef8-e1c6-43e8-8f48-971439c19d58',
        },
      ],
    },
  ],
});
