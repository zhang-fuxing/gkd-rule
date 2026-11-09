// 来源: Lin-arm/GKD_subscription src/apps/com.niu.cloud.ts
// 摘取类别: 开屏广告 / 全屏广告, 同步于 2026-11-09
// 重新导入: pnpm tsx scripts/import-ref.ts --force com.niu.cloud
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.niu.cloud',
  name: '小牛电动',
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
          activityIds: '.main.MainActivityNew',
          matches: '[vid="closeDialogIv"][visibleToUser=true]',
          exampleUrls: 'https://e.gkd.li/78f2afd2-de8b-46b5-ae6c-6df58862f00e',
          snapshotUrls: 'https://i.gkd.li/i/20939822',
        },
      ],
    },
  ],
});
