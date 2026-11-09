// 来源: Lin-arm/GKD_subscription src/apps/com.crirp.zhipu.ts
// 摘取类别: 开屏广告 / 全屏广告, 同步于 2026-11-09
// 重新导入: pnpm tsx scripts/import-ref.ts --force com.crirp.zhipu
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.crirp.zhipu',
  name: '智谱',
  groups: [
    {
      key: 1,
      name: '开屏广告',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      priorityTime: 10000,
      rules: [
        {
          matches: '[text="关闭"]',
          snapshotUrls: 'https://i.gkd.li/i/13725305',
        },
      ],
    },
    {
      key: 2,
      name: '全屏广告-今日要闻弹窗',
      desc: '点击不再提示',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          activityIds: 'com.ruipeng.zipu.ui.main.uniauto.UniautoHomeActivity',
          matches: '[text="今日不再提示"]',
          snapshotUrls: 'https://i.gkd.li/i/13725337',
        },
      ],
    },
  ],
});
