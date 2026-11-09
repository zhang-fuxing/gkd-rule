// 来源: Lin-arm/GKD_subscription src/apps/com.mt.mtxx.mtxx.ts
// 摘取类别: 开屏广告 / 全屏广告, 同步于 2026-11-09
// 重新导入: pnpm tsx scripts/import-ref.ts --force com.mt.mtxx.mtxx
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.mt.mtxx.mtxx',
  name: '美图秀秀',
  groups: [
    {
      key: 2,
      name: '全屏广告-VIP弹窗',
      desc: '点击关闭',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          fastQuery: true,
          activityIds: '.MainActivity',
          matches: '[vid="iv_close"][clickable=true][visibleToUser=true]',
          exampleUrls:
            'https://m.gkd.li/57941037/d98355c6-1308-4ed1-bf29-56499e22446d',
          snapshotUrls: 'https://i.gkd.li/i/14368853',
        },
      ],
    },
  ],
});
