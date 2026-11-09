// 来源: Lin-arm/GKD_subscription src/apps/cn.kuwo.player.ts
// 摘取类别: 开屏广告 / 全屏广告, 同步于 2026-11-09
// 重新导入: pnpm tsx scripts/import-ref.ts --force cn.kuwo.player
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'cn.kuwo.player',
  name: '酷我音乐',
  groups: [
    {
      key: 1,
      name: '全屏广告-酷我会员日弹窗',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          activityIds: '.activities.MainActivity',
          matches: '[vid="iv_business_personal_dia_close"]',
          snapshotUrls: 'https://i.gkd.li/i/13974483', //无vid旧快照
        },
      ],
    },
  ],
});
