// 来源: Lin-arm/GKD_subscription src/apps/com.kurogame.kjq.ts
// 摘取类别: 开屏广告 / 全屏广告, 同步于 2026-11-09
// 重新导入: pnpm tsx scripts/import-ref.ts --force com.kurogame.kjq
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.kurogame.kjq',
  name: '库街区',
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
          activityIds: '.MainActivity',
          matches: '[vid="close"]',
          exampleUrls:
            'https://m.gkd.li/57941037/d9c598fc-5bd4-4773-8db1-316b8f7155c3',
          snapshotUrls: 'https://i.gkd.li/i/15629864',
        },
      ],
    },
  ],
});
