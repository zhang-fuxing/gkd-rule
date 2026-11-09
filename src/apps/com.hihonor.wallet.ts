// 来源: Lin-arm/GKD_subscription src/apps/com.hihonor.wallet.ts
// 摘取类别: 开屏广告 / 全屏广告, 同步于 2026-11-09
// 重新导入: pnpm tsx scripts/import-ref.ts --force com.hihonor.wallet
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.hihonor.wallet',
  name: '荣耀钱包',
  groups: [
    {
      key: 3,
      name: '全屏广告-弹窗广告',
      rules: [
        {
          fastQuery: true,
          activityIds: 'com.hihonor.adsdk.reward.RewardActivity',
          matches: '[vid="ad_close_dialog"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/31248363',
          exampleUrls: 'https://e.gkd.li/457f1d00-a7ea-43cb-9263-be9a012bf310',
        },
      ],
    },
  ],
});
