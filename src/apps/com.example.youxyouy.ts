// 来源: Lin-arm/GKD_subscription src/apps/com.example.youxyouy.ts
// 摘取类别: 开屏广告 / 全屏广告, 同步于 2026-11-09
// 重新导入: pnpm tsx scripts/import-ref.ts --force com.example.youxyouy
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.example.youxyouy',
  name: '有鱼生活',
  groups: [
    {
      key: 1,
      name: '全屏广告-弹窗广告',
      desc: '点击关闭',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          fastQuery: true,
          activityIds: '.MainActivity',
          matches: '[vid="iv_close"][visibleToUser=true]',
          exampleUrls: 'https://e.gkd.li/ddeb0c34-6a3d-407d-b600-96d21dd1f77b',
          snapshotUrls: [
            'https://i.gkd.li/i/20637763',
            'https://i.gkd.li/i/20637764',
          ],
        },
      ],
    },
  ],
});
