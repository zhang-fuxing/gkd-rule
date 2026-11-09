// 来源: Lin-arm/GKD_subscription src/apps/com.huawei.appmarket.ts
// 摘取类别: 开屏广告 / 全屏广告, 同步于 2026-11-09
// 重新导入: pnpm tsx scripts/import-ref.ts --force com.huawei.appmarket
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.huawei.appmarket',
  name: '华为应用市场',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      priorityTime: 10000,
      rules: [
        {
          matches: '[vid="clock_layout"]',
          snapshotUrls: 'https://i.gkd.li/i/15523957',
        },
      ],
    },
    {
      key: 4,
      name: '全屏广告-热门应用推荐弹窗',
      desc: '点击[直接进入]',
      fastQuery: true,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          activityIds: 'com.huawei.appgallery.upgraderecommendation.ui.',
          matches: '[text="直接进入" || text="进入主页"][visibleToUser=true]',
          exampleUrls:
            'https://m.gkd.li/57941037/89e6f2eb-b543-4dd8-88ce-6e888d0d8c8a',
          snapshotUrls: [
            'https://i.gkd.li/i/14861810',
            'https://i.gkd.li/i/21231632',
            'https://i.gkd.li/i/24640204',
          ],
        },
      ],
    },
  ],
});
