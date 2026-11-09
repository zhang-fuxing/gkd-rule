// 来源: Lin-arm/GKD_subscription src/apps/com.hihonor.appmarket.ts
// 摘取类别: 开屏广告 / 全屏广告, 同步于 2026-11-09
// 重新导入: pnpm tsx scripts/import-ref.ts --force com.hihonor.appmarket
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.hihonor.appmarket',
  name: '荣耀应用市场',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      priorityTime: 10000,
      rules: [
        {
          matches: '[vid="tv_operation_skip" || vid="btn_skip"]',
          exampleUrls: 'https://e.gkd.li/549d5fc1-20a2-42aa-b249-4cc8896807e6',
          snapshotUrls: [
            'https://i.gkd.li/i/16406381',
            'https://i.gkd.li/i/29175881',
          ],
        },
      ],
    },
    {
      key: 1,
      name: '全屏广告-弹窗广告',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          activityIds: [
            'com.hihonor.android.launcher.unihome.UniHomeLauncher',
            '.module.main.MainActivity',
          ],
          matches: '[vid="iv_dialog_operation_close"]',
          snapshotUrls: [
            'https://i.gkd.li/i/13063815',
            'https://i.gkd.li/i/13168440',
          ],
        },
      ],
    },
  ],
});
