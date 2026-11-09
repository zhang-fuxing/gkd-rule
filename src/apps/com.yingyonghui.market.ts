// 来源: Lin-arm/GKD_subscription src/apps/com.yingyonghui.market.ts
// 摘取类别: 开屏广告 / 全屏广告, 同步于 2026-11-09
// 重新导入: pnpm tsx scripts/import-ref.ts --force com.yingyonghui.market
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.yingyonghui.market',
  name: '应用汇',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      // actionMaximumKey: 0,
      resetMatch: 'app',
      priorityTime: 10000,
      rules: [
        {
          key: 0,
          matches: '[vid="splashAdvert_skipLayout"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/32155585',
        },
      ],
    },
    {
      key: 1,
      name: '全屏广告-弹窗广告',
      rules: [
        {
          key: 0,
          name: '快手广告',
          fastQuery: true,
          activityIds: '.ui.MainActivity',
          matches: [
            '[text="广告"]',
            '@ImageView[clickable=true] - [text="|"] - [text$="s"]',
          ],
          snapshotUrls: 'https://i.gkd.li/i/13538316',
        },
      ],
    },
  ],
});
