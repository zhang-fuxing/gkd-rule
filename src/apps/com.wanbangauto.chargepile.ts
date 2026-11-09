// 来源: Lin-arm/GKD_subscription src/apps/com.wanbangauto.chargepile.ts
// 摘取类别: 开屏广告 / 全屏广告, 同步于 2026-11-09
// 重新导入: pnpm tsx scripts/import-ref.ts --force com.wanbangauto.chargepile
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.wanbangauto.chargepile',
  name: '星星充电',
  groups: [
    {
      key: 1,
      name: '全屏广告-弹窗广告',
      desc: '点击关闭',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          activityIds: '.ui.newhome.MainActivity',
          matches: '@[vid="image_close"][visibleToUser=true]',
          exampleUrls: 'https://e.gkd.li/ce4838fb-0f0d-4b20-bab3-565bd80bbc93',
          snapshotUrls: 'https://i.gkd.li/i/18421090',
        },
      ],
    },
  ],
});
