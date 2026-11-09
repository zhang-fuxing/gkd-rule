// 来源: Lin-arm/GKD_subscription src/apps/com.dw.btime.ts
// 摘取类别: 开屏广告 / 全屏广告, 同步于 2026-11-09
// 重新导入: pnpm tsx scripts/import-ref.ts --force com.dw.btime
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.dw.btime',
  name: '亲宝宝',
  groups: [
    {
      key: 1,
      name: '全屏广告-弹窗广告',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          activityIds: '.MainHomeTabActivity',
          matches: '[vid="iv_overlay_close"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/12889448',
        },
      ],
    },
  ],
});
