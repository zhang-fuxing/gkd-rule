// 来源: Lin-arm/GKD_subscription src/apps/com.hihonor.cloudmusic.ts
// 摘取类别: 开屏广告 / 全屏广告, 同步于 2026-11-09
// 重新导入: pnpm tsx scripts/import-ref.ts --force com.hihonor.cloudmusic
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.hihonor.cloudmusic',
  name: '荣耀音乐',
  groups: [
    {
      key: 2,
      name: '全屏广告-弹窗广告',
      desc: '点击关闭',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          action: 'back',
          activityIds: 'com.netease.cloudmusic.activity.MainActivity',
          matches: '[vid="dsl_dialog_root"]',
          snapshotUrls: 'https://i.gkd.li/i/15860430',
        },
      ],
    },
  ],
});
