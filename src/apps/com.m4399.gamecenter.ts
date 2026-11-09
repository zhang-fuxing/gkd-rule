// 来源: Lin-arm/GKD_subscription src/apps/com.m4399.gamecenter.ts
// 摘取类别: 开屏广告 / 全屏广告, 同步于 2026-11-09
// 重新导入: pnpm tsx scripts/import-ref.ts --force com.m4399.gamecenter
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.m4399.gamecenter',
  name: '4399游戏盒',
  groups: [
    {
      key: 2,
      name: '全屏广告-弹窗广告',
      desc: '点击关闭',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          fastQuery: true,
          matches: '[vid="image"] + [vid="close"]',
          exampleUrls: 'https://e.gkd.li/28dafb84-2474-4a09-9885-9810089bad00',
          snapshotUrls: 'https://i.gkd.li/i/13297551',
        },
      ],
    },
  ],
});
