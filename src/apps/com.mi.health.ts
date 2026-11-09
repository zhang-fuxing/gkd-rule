// 来源: Lin-arm/GKD_subscription src/apps/com.mi.health.ts
// 摘取类别: 开屏广告 / 全屏广告, 同步于 2026-11-09
// 重新导入: pnpm tsx scripts/import-ref.ts --force com.mi.health
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.mi.health',
  name: '小米运动健康',
  groups: [
    {
      key: 3,
      name: '全屏广告',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          key: 0,
          name: '活动弹窗',
          activityIds: 'com.xiaomi.fitness.main.MainActivity',
          matches: '[vid="cardview"] + [vid="dialog_close"]',
          snapshotUrls: 'https://i.gkd.li/i/13537836',
        },
        {
          key: 1,
          name: '表盘广告',
          activityIds: 'com.xiaomi.wearable.yrn.views.WearableRNActivity',
          matches: '@[clickable=true] > [desc="Close"]',
          snapshotUrls: 'https://i.gkd.li/i/23923968',
        },
      ],
    },
  ],
});
