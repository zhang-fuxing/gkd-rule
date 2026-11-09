// 来源: Lin-arm/GKD_subscription src/apps/com.powersi.zhrs.ts
// 摘取类别: 开屏广告 / 全屏广告, 同步于 2026-11-09
// 重新导入: pnpm tsx scripts/import-ref.ts --force com.powersi.zhrs
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.powersi.zhrs',
  name: '智慧人社',
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
          matches: '[vid="tv_time"][visibleToUser=true]',
          exampleUrls: 'https://e.gkd.li/1cad6c38-5c76-4b5a-b350-bb9630221661',
          snapshotUrls: 'https://i.gkd.li/i/19746757',
        },
      ],
    },
  ],
});
