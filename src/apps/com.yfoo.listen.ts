// 来源: Lin-arm/GKD_subscription src/apps/com.yfoo.listen.ts
// 摘取类别: 开屏广告 / 全屏广告, 同步于 2026-11-09
// 重新导入: pnpm tsx scripts/import-ref.ts --force com.yfoo.listen
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.yfoo.listen',
  name: '聆听音乐',
  groups: [
    {
      key: 1,
      name: '全屏广告-弹窗广告',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          key: 0,
          fastQuery: true,
          activityIds: 'x.activity.HomeActivity',
          matches: '@[text="取消"] < * > [text="下载"]',
          snapshotUrls: 'https://i.gkd.li/i/15856014',
        },
      ],
    },
  ],
});
