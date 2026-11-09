// 来源: Lin-arm/GKD_subscription src/apps/com.duokan.reader.ts
// 摘取类别: 开屏广告 / 全屏广告, 同步于 2026-11-09
// 重新导入: pnpm tsx scripts/import-ref.ts --force com.duokan.reader
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.duokan.reader',
  name: '多看',
  groups: [
    {
      key: 2,
      name: '全屏广告-首页弹窗广告',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          activityIds: '.DkMainActivity',
          matches: '[vid="store_feed_layer_close"]',
          snapshotUrls: 'https://i.gkd.li/i/13248773',
        },
      ],
    },
    {
      key: 3,
      name: '全屏广告-小说推荐弹窗',
      rules: [
        {
          key: 1,
          name: '退出阅读时的推荐弹窗',
          fastQuery: true,
          activityIds: '.DkMainActivity',
          matches: '[vid="reading_stop_read_recommend_stop"]',
          snapshotUrls: 'https://i.gkd.li/i/13413412',
        },
      ],
    },
  ],
});
