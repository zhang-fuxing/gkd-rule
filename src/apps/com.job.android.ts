// 来源: Lin-arm/GKD_subscription src/apps/com.job.android.ts
// 摘取类别: 开屏广告 / 全屏广告, 同步于 2026-11-09
// 重新导入: pnpm tsx scripts/import-ref.ts --force com.job.android
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.job.android',
  name: '前程无忧51Job',
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
          activityIds: '.pages.apphome.AppHomeActivity',
          matches: '[vid="ivBack"][visibleToUser=true]',
          exampleUrls: 'https://e.gkd.li/5c1e281a-f5cc-45ff-9799-828f510c78c6',
          snapshotUrls: 'https://i.gkd.li/i/19798235',
        },
      ],
    },
  ],
});
