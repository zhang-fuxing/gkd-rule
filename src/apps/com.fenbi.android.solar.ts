// 来源: Lin-arm/GKD_subscription src/apps/com.fenbi.android.solar.ts
// 摘取类别: 开屏广告 / 全屏广告, 同步于 2026-11-09
// 重新导入: pnpm tsx scripts/import-ref.ts --force com.fenbi.android.solar
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.fenbi.android.solar',
  name: '小猿搜题',
  groups: [
    {
      key: 3,
      name: '全屏广告-年卡广告',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      fastQuery: true,
      rules: [
        {
          matches: '[vid="v_firework_close"]',
          exampleUrls: 'https://e.gkd.li/874cdabf-8e49-4c6d-8fd0-48effd6e44e9',
          snapshotUrls: 'https://i.gkd.li/i/16759322',
        },
      ],
    },
  ],
});
