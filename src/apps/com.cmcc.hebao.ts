// 来源: Lin-arm/GKD_subscription src/apps/com.cmcc.hebao.ts
// 摘取类别: 开屏广告 / 全屏广告, 同步于 2026-11-09
// 重新导入: pnpm tsx scripts/import-ref.ts --force com.cmcc.hebao
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.cmcc.hebao',
  name: '和包',
  groups: [
    {
      key: 1,
      name: '全屏广告-弹窗广告',
      desc: '点击关闭',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          key: 0,
          activityIds: 'com.cmcc.wallet.mocam.activity.home.WalletHomeActivity',
          matches:
            '@[clickable=true] > [visibleToUser=true][text="dialog-delete"] <<n [vid="rl_parent"]',
          exampleUrls:
            'https://m.gkd.li/57941037/cb33c5b5-dd2e-4aa9-80d1-f7013f150305',
          snapshotUrls: 'https://i.gkd.li/i/14567338',
        },
      ],
    },
  ],
});
