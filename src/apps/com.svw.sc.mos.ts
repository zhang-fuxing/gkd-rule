// 来源: Lin-arm/GKD_subscription src/apps/com.svw.sc.mos.ts
// 摘取类别: 开屏广告 / 全屏广告, 同步于 2026-11-09
// 重新导入: pnpm tsx scripts/import-ref.ts --force com.svw.sc.mos
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.svw.sc.mos',
  name: '上汽大众',
  groups: [
    {
      key: 1,
      name: '全屏广告-弹窗广告',
      desc: '点击关闭',
      rules: [
        {
          key: 0,
          fastQuery: true,
          matchTime: 10000,
          actionMaximum: 1,
          resetMatch: 'app',
          activityIds: '.main.ui.home.ui.AppStartDialogActivity',
          matches: '[vid="iv_appstart_close"][visibleToUser=true]',
          exampleUrls: 'https://e.gkd.li/0acf720d-1752-449f-bbe6-357896f1bb2e',
          snapshotUrls: 'https://i.gkd.li/i/17528776',
        },
        {
          key: 1,
          fastQuery: true,
          activityIds: '.main.ui.mine.ui.MedalDialogActivity',
          matches: '[vid="imv_share_close"][visibleToUser=true]',
          exampleUrls: 'https://e.gkd.li/01611ed2-11f7-4ffe-93d7-f07878196ada',
          snapshotUrls: 'https://i.gkd.li/i/18399174',
        },
      ],
    },
  ],
});
