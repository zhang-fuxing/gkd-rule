// 来源: Lin-arm/GKD_subscription src/apps/com.baidu.homework.ts
// 摘取类别: 开屏广告 / 全屏广告, 同步于 2026-11-09
// 重新导入: pnpm tsx scripts/import-ref.ts --force com.baidu.homework
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.baidu.homework',
  name: '作业帮',
  groups: [
    {
      key: 1,
      name: '全屏广告-弹窗广告',
      desc: '点击关闭',
      rules: [
        {
          key: 0,
          fastQuery: true,
          matchTime: 10000,
          actionMaximum: 1,
          resetMatch: 'app',
          activityIds: '.activity.index.IndexActivity',
          matches: '[vid="ad_dialog_close"]',
          snapshotUrls: 'https://i.gkd.li/i/15374440',
        },
        {
          key: 1,
          fastQuery: true,
          activityIds: '.activity.index.IndexActivity',
          matches: ['[text^="小组件"]', '[text="以后再说"][clickable=true]'],
          snapshotUrls: 'https://i.gkd.li/i/23567064',
        },
      ],
    },
  ],
});
