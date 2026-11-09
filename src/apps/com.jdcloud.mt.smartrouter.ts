// 来源: Lin-arm/GKD_subscription src/apps/com.jdcloud.mt.smartrouter.ts
// 摘取类别: 开屏广告 / 全屏广告, 同步于 2026-11-09
// 重新导入: pnpm tsx scripts/import-ref.ts --force com.jdcloud.mt.smartrouter
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.jdcloud.mt.smartrouter',
  name: '京东云无线宝',
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
          matches: '[vid="iv_close"][clickable=true]',
          exampleUrls:
            'https://m.gkd.li/57941037/26521f31-ee9b-4bab-8275-fab75a76c96e',
          snapshotUrls: 'https://i.gkd.li/i/14432168',
        },
      ],
    },
  ],
});
