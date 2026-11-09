// 来源: Lin-arm/GKD_subscription src/apps/com.huawei.android.thememanager.ts
// 摘取类别: 开屏广告 / 全屏广告, 同步于 2026-11-09
// 重新导入: pnpm tsx scripts/import-ref.ts --force com.huawei.android.thememanager
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.huawei.android.thememanager',
  name: '华为主题',
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
          action: 'clickCenter',
          matches: '[text^="跳过"][text.length<=10]',
          snapshotUrls: [
            'https://i.gkd.li/i/12657379',
            'https://i.gkd.li/i/13069736',
            'https://i.gkd.li/i/13762181',
          ],
        },
      ],
    },
    {
      key: 7,
      name: '全屏广告-首页活动弹窗',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          activityIds: [
            '.HwThemeManagerActivity',
            'com.huawei.android.launcher.unihome.UniHomeLauncher',
          ],
          matches: '[vid="campaign_dialog_close_image"]',
          snapshotUrls: [
            'https://i.gkd.li/i/12657939',
            'https://i.gkd.li/i/12667815',
          ],
        },
      ],
    },
  ],
});
