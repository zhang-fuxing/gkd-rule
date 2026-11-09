// 来源: Lin-arm/GKD_subscription src/apps/com.bbk.appstore.ts
// 摘取类别: 开屏广告 / 全屏广告, 同步于 2026-11-09
// 重新导入: pnpm tsx scripts/import-ref.ts --force com.bbk.appstore
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.bbk.appstore',
  name: 'vivo应用商店',
  groups: [
    {
      key: 2,
      name: '全屏广告-热门应用推荐',
      desc: '点击[进入首页]',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      fastQuery: true,
      activityIds: '.upgrade.UpgradeNecessaryActivity',
      rules: [
        {
          key: 0,
          matches: '[text*="进入首页"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13198101',
          exampleUrls: 'https://e.gkd.li/eb96ca80-2e68-4f41-ac0f-3c82092034d7',
        },
        {
          key: 1,
          matches: '@Button[clickable=true] >2 [text*="进入首页"]',
          snapshotUrls: 'https://i.gkd.li/i/28419903',
          exampleUrls: 'https://e.gkd.li/d28ac0e6-a03e-4e46-8600-550f22b35a85',
        },
      ],
    },
  ],
});
