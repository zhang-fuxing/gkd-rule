// 来源: Lin-arm/GKD_subscription src/apps/com.finshell.wallet.ts
// 摘取类别: 开屏广告 / 全屏广告, 同步于 2026-11-09
// 重新导入: pnpm tsx scripts/import-ref.ts --force com.finshell.wallet
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.finshell.wallet',
  name: '钱包',
  groups: [
    {
      key: 1,
      name: '全屏广告-弹窗广告',
      desc: '点击关闭',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          fastQuery: true,
          activityIds: 'com.finshell.homepage.WalletNativeActionActivity',
          matches: '[vid="ivClose"][visibleToUser=true]',
          exampleUrls: 'https://e.gkd.li/b5a04cd0-2f5a-4161-838b-422552f1ba9e',
          snapshotUrls: 'https://i.gkd.li/i/16451563',
        },
      ],
    },
  ],
});
