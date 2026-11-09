// 来源: Lin-arm/GKD_subscription src/apps/cn.TuHu.android.ts
// 摘取类别: 开屏广告 / 全屏广告, 同步于 2026-11-09
// 重新导入: pnpm tsx scripts/import-ref.ts --force cn.TuHu.android
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'cn.TuHu.android',
  name: '途虎养车',
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
          activityIds: 'cn.TuHu.Activity.tuhutab.TuHuTabActivity',
          matches: '@[vid="imgClose"] - [vid="rlContent"] > [vid="img_jump"]',
          snapshotUrls: 'https://i.gkd.li/i/13228818', //无vid旧快照
        },
      ],
    },
  ],
});
