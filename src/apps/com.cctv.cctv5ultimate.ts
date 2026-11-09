// 来源: Lin-arm/GKD_subscription src/apps/com.cctv.cctv5ultimate.ts
// 摘取类别: 开屏广告 / 全屏广告, 同步于 2026-11-09
// 重新导入: pnpm tsx scripts/import-ref.ts --force com.cctv.cctv5ultimate
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.cctv.cctv5ultimate',
  name: '央视体育',
  groups: [
    {
      key: 1,
      name: '全屏广告-弹窗广告',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          activityIds: '.activity.MainActivity',
          matches: ['[text="广告"]', '[vid="iv_close"]'],
          snapshotUrls: 'https://i.gkd.li/i/13405159',
        },
      ],
    },
  ],
});
