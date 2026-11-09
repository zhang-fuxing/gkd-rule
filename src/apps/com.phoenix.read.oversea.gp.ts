// 来源: Lin-arm/GKD_subscription src/apps/com.phoenix.read.oversea.gp.ts
// 摘取类别: 开屏广告 / 全屏广告, 同步于 2026-11-09
// 重新导入: pnpm tsx scripts/import-ref.ts --force com.phoenix.read.oversea.gp
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.phoenix.read.oversea.gp',
  name: '红果短剧',
  groups: [
    {
      key: 2,
      name: '全屏广告',
      rules: [
        {
          fastQuery: true,
          swipeArg: {
            start: {
              x: 'screenWidth * 0.5',
              y: 'screenHeight * 0.7',
            },
            end: {
              x: 'screenWidth * 0.5',
              y: 'screenHeight * 0.3',
            },
            duration: 300, // 时间过短可能无效
          },
          activityIds: 'com.dragon.read.pages.main.MainFragmentActivity',
          matches: '[vid="ad_source"][visibleToUser=true]',
          snapshotUrls: 'https://i.gkd.li/i/34213154',
        },
      ],
    },
  ],
});
