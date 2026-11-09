// 来源: Lin-arm/GKD_subscription src/apps/com.hnjiajie.zhixiaole.ts
// 摘取类别: 开屏广告 / 全屏广告, 同步于 2026-11-09
// 重新导入: pnpm tsx scripts/import-ref.ts --force com.hnjiajie.zhixiaole
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.hnjiajie.zhixiaole',
  name: '智校乐',
  groups: [
    {
      key: 1,
      name: '开屏广告',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      priorityTime: 10000,
      rules: [
        {
          fastQuery: true,
          matches: '[vid="tev_countdown"][visibleToUser=true]',
          exampleUrls: 'https://e.gkd.li/0b7ec3a5-d601-489a-a50c-32c876f38edf',
          snapshotUrls: 'https://i.gkd.li/i/20745490',
        },
      ],
    },
  ],
});
