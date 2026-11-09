// 来源: Lin-arm/GKD_subscription src/apps/com.xinhang.mobileclient.ts
// 摘取类别: 开屏广告 / 全屏广告, 同步于 2026-11-09
// 重新导入: pnpm tsx scripts/import-ref.ts --force com.xinhang.mobileclient
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.xinhang.mobileclient',
  name: '中国移动河南',
  groups: [
    {
      key: 1,
      name: '全屏广告-弹窗广告',
      activityIds: '.home.activity.HomeActivity',
      rules: [
        {
          key: 0,
          matches: 'View[desc^="close"]',
          snapshotUrls: 'https://i.gkd.li/i/13024867',
        },
        {
          key: 1,
          matches: 'View > View > TextView + TextView[text=""]',
          snapshotUrls: 'https://i.gkd.li/i/13024869',
        },
      ],
    },
  ],
});
