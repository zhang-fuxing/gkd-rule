// 来源: Lin-arm/GKD_subscription src/apps/com.heytap.market.ts
// 摘取类别: 开屏广告 / 全屏广告, 同步于 2026-11-09
// 重新导入: pnpm tsx scripts/import-ref.ts --force com.heytap.market
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.heytap.market',
  name: 'OPPO软件商店',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      priorityTime: 10000,
      rules: [
        {
          fastQuery: true,
          matches: '@[clickable=true] > [text="跳过"]', // 全局规则无效，必须点击clickable=true的节点才能跳过
          snapshotUrls: 'https://i.gkd.li/i/14668997',
        },
      ],
    },
  ],
});
