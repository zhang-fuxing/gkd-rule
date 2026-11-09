// 来源: Lin-arm/GKD_subscription src/apps/com.android.thememanager.ts
// 摘取类别: 开屏广告 / 全屏广告, 同步于 2026-11-09
// 重新导入: pnpm tsx scripts/import-ref.ts --force com.android.thememanager
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.android.thememanager',
  name: '主题壁纸',
  groups: [
    {
      key: 2,
      name: '全屏广告-弹窗广告',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          action: 'clickCenter',
          activityIds: [
            '.ThemeResourceTabActivity',
            '.ThemeResourceProxyTabActivity',
          ],
          matches: 'ImageView[vid="cancel"][desc="关闭"]',
          snapshotUrls: [
            'https://i.gkd.li/i/13215038',
            'https://i.gkd.li/i/15286330',
          ],
        },
      ],
    },
  ],
});
