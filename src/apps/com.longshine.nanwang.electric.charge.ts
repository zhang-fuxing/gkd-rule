// 来源: Lin-arm/GKD_subscription src/apps/com.longshine.nanwang.electric.charge.ts
// 摘取类别: 开屏广告 / 全屏广告, 同步于 2026-11-09
// 重新导入: pnpm tsx scripts/import-ref.ts --force com.longshine.nanwang.electric.charge
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.longshine.nanwang.electric.charge',
  name: '顺易充',
  groups: [
    {
      key: 1,
      name: '全屏广告-首页弹窗广告',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          activityIds: 'com.android.app.station.NewMainAct',
          matches: '[vid="bodyFL"] + [vid="ivClose"]',
          snapshotUrls: 'https://i.gkd.li/i/12700011',
        },
      ],
    },
  ],
});
