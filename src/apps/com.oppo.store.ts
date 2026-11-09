// 来源: Lin-arm/GKD_subscription src/apps/com.oppo.store.ts
// 摘取类别: 开屏广告 / 全屏广告, 同步于 2026-11-09
// 重新导入: pnpm tsx scripts/import-ref.ts --force com.oppo.store
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.oppo.store',
  name: 'OPPO商城',
  groups: [
    {
      key: 2,
      name: '全屏广告-弹窗广告',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          activityIds: '.MainActivity',
          matches: 'ImageView[vid="dialog_delete"][desc="关闭"]',
          snapshotUrls: 'https://i.gkd.li/i/13295201',
        },
      ],
    },
  ],
});
