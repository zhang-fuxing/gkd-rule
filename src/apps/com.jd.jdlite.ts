// 来源: Lin-arm/GKD_subscription src/apps/com.jd.jdlite.ts
// 摘取类别: 开屏广告 / 全屏广告, 同步于 2026-11-09
// 重新导入: pnpm tsx scripts/import-ref.ts --force com.jd.jdlite
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.jd.jdlite',
  name: '京喜特价',
  groups: [
    {
      key: 1,
      name: '全屏广告-首页弹窗广告',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          activityIds: '.MainFrameActivity',
          matches: '@[desc="关闭页面"] - FrameLayout >n [text="极速版弹窗"]',
          snapshotUrls: 'https://i.gkd.li/i/12727396',
        },
      ],
    },
  ],
});
