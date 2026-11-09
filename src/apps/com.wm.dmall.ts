// 来源: Lin-arm/GKD_subscription src/apps/com.wm.dmall.ts
// 摘取类别: 开屏广告 / 全屏广告, 同步于 2026-11-09
// 重新导入: pnpm tsx scripts/import-ref.ts --force com.wm.dmall
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.wm.dmall',
  name: '多点',
  groups: [
    {
      key: 1,
      name: '全屏广告-首页-弹窗广告',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          key: 1,
          fastQuery: true,
          activityIds: '.MainActivity',
          matches: '[vid="advert_close"]',
          exampleUrls: 'https://e.gkd.li/60b65af4-7efa-4e82-b294-d96d5b426953',
          snapshotUrls: 'https://i.gkd.li/i/13197627',
        },
        {
          key: 2,
          fastQuery: true,
          matches: [
            '[vid="coupon_activity"][text="去使用"]',
            '[vid="iv_close"]',
          ],
          snapshotUrls: 'https://i.gkd.li/i/13331283',
        },
      ],
    },
  ],
});
