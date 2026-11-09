// 来源: Lin-arm/GKD_subscription src/apps/com.tima.carnet.m.main.ts
// 摘取类别: 开屏广告 / 全屏广告, 同步于 2026-11-09
// 重新导入: pnpm tsx scripts/import-ref.ts --force com.tima.carnet.m.main
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.tima.carnet.m.main',
  name: '钛马星',
  groups: [
    {
      key: 2,
      name: '全屏广告-每日弹窗广告',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      activityIds: [
        '.lib.common.dialog.TimaLoadingDialog',
        '.app.main.NoticeActivity',
        '.app.main.MainActivity',
        '.LaunchActivity',
      ],
      rules: [
        {
          key: 1,
          matches: '[text="今天内不显示"][checked=false]',
          exampleUrls: 'https://e.gkd.li/66af6710-ec2e-472b-a589-cac40ac6ea6d',
          snapshotUrls: [
            'https://i.gkd.li/i/12654432',
            'https://i.gkd.li/i/13507746',
            'https://i.gkd.li/i/13508074',
            'https://i.gkd.li/i/13508041',
          ],
        },
        {
          preKeys: [1],
          key: 2,
          matches: '@ImageButton[clickable=true] - [text="今天内不显示"]',
          exampleUrls: 'https://e.gkd.li/66af6710-ec2e-472b-a589-cac40ac6ea6d',
          snapshotUrls: [
            'https://i.gkd.li/i/12654432',
            'https://i.gkd.li/i/13507746',
            'https://i.gkd.li/i/13508074',
            'https://i.gkd.li/i/13508041',
          ],
        },
      ],
    },
  ],
});
