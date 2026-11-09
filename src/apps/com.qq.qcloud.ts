// 来源: Lin-arm/GKD_subscription src/apps/com.qq.qcloud.ts
// 摘取类别: 开屏广告 / 全屏广告, 同步于 2026-11-09
// 重新导入: pnpm tsx scripts/import-ref.ts --force com.qq.qcloud
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.qq.qcloud',
  name: '腾讯微云',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      actionMaximumKey: 0,
      priorityTime: 10000,
      rules: [
        {
          fastQuery: true,
          activityIds: '.activity.WeiyunRootActivity',
          matches: '@LinearLayout -(1,2) [text="互动广告"][visibleToUser=true]',
          snapshotUrls: [
            'https://i.gkd.li/i/19752123',
            'https://i.gkd.li/i/19752144',
          ],
        },
      ],
    },
  ],
});
