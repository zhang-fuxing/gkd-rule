// 来源: Lin-arm/GKD_subscription src/apps/com.lxt.cfmoto.ts
// 摘取类别: 开屏广告 / 全屏广告, 同步于 2026-11-09
// 重新导入: pnpm tsx scripts/import-ref.ts --force com.lxt.cfmoto
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.lxt.cfmoto',
  name: 'CFMOTO',
  groups: [
    {
      key: 1,
      name: '全屏广告-弹窗广告',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          key: 1,
          name: '首页弹窗广告',
          fastQuery: true,
          activityIds: 'com.cfmoto.oilmoto.ui.MainCfActivity',
          matches: '[vid="closeClick"]',
          snapshotUrls: 'https://i.gkd.li/i/13401967',
        },
      ],
    },
  ],
});
