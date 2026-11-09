// 来源: Lin-arm/GKD_subscription src/apps/com.mcdonalds.gma.cn.ts
// 摘取类别: 开屏广告 / 全屏广告, 同步于 2026-11-09
// 重新导入: pnpm tsx scripts/import-ref.ts --force com.mcdonalds.gma.cn
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.mcdonalds.gma.cn',
  name: '麦当劳',
  groups: [
    {
      key: 2,
      name: '全屏广告-弹窗广告',
      desc: '点击关闭',
      rules: [
        {
          key: 1,
          fastQuery: true,
          forcedTime: 10000, // https://github.com/AIsouler/GKD_subscription/issues/677
          activityIds: '.activity.MainActivity',
          matches: '[vid="iv_ad_close"][visibleToUser=true]',
          exampleUrls: 'https://e.gkd.li/6a95fcb7-3f9c-43f8-80bb-bdd034c81252',
          snapshotUrls: 'https://i.gkd.li/i/17967920',
        },
        {
          key: 2,
          fastQuery: true,
          activityIds: 'com.mcd.order.activity.OrderActivity',
          matches: '[vid="recommend_product_close"][visibleToUser=true]',
          exampleUrls: 'https://e.gkd.li/8f3670e7-a0c9-47a5-b708-163a94ac2a8f',
          snapshotUrls: 'https://i.gkd.li/i/17967943',
        },
      ],
    },
  ],
});
