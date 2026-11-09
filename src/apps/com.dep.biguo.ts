// 来源: Lin-arm/GKD_subscription src/apps/com.dep.biguo.ts
// 摘取类别: 开屏广告 / 全屏广告, 同步于 2026-11-09
// 重新导入: pnpm tsx scripts/import-ref.ts --force com.dep.biguo
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.dep.biguo',
  name: '自考笔果题库',
  groups: [
    {
      key: 2,
      name: '全屏广告-首页弹窗广告',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          activityIds: '.dialog',
          matches: '[vid="imageView"] + [vid="closeView"]',
          snapshotUrls: 'https://i.gkd.li/i/12708756',
        },
      ],
    },
  ],
});
