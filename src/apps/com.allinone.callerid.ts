// 来源: Lin-arm/GKD_subscription src/apps/com.allinone.callerid.ts
// 摘取类别: 开屏广告 / 全屏广告, 同步于 2026-11-09
// 重新导入: pnpm tsx scripts/import-ref.ts --force com.allinone.callerid
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.allinone.callerid',
  name: 'Showcaller',
  groups: [
    {
      key: 1,
      name: '全屏广告-弹窗广告',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          key: 0,
          matches: '[id="mys-content"] > View > View > Button[clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13696207',
        },
        {
          key: 1,
          matches: '[id="close-button"] > View > View > Image',
          snapshotUrls: 'https://i.gkd.li/i/13696205',
        },
      ],
    },
  ],
});
