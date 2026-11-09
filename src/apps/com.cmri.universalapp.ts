// 来源: Lin-arm/GKD_subscription src/apps/com.cmri.universalapp.ts
// 摘取类别: 开屏广告 / 全屏广告, 同步于 2026-11-09
// 重新导入: pnpm tsx scripts/import-ref.ts --force com.cmri.universalapp
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.cmri.universalapp',
  name: '移动爱家',
  groups: [
    {
      key: 5,
      name: '全屏广告-弹窗广告',
      fastQuery: true,
      matchTime: 10000,
      forcedTime: 10000,
      rules: [
        {
          activityIds: ['.SmartMainProxyActivity', '.SmartMainActivity'],
          matches: '[vid="ivCancelDlg"][visibleToUser=true]',
          snapshotUrls: [
            'https://i.gkd.li/i/30352091',
            'https://i.gkd.li/i/28761589',
          ],
        },
      ],
    },
  ],
});
