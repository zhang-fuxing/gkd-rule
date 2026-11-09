// 来源: Lin-arm/GKD_subscription src/apps/com.vlending.apps.mubeat.ts
// 摘取类别: 开屏广告 / 全屏广告, 同步于 2026-11-09
// 重新导入: pnpm tsx scripts/import-ref.ts --force com.vlending.apps.mubeat
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.vlending.apps.mubeat',
  name: 'Mubeat',
  groups: [
    {
      key: 1,
      name: '全屏广告',
      desc: '点击关闭',
      rules: [
        {
          fastQuery: true,
          activityIds: '.activity.LauncherActivity',
          matches: '@[desc="Close Ad"][visibleToUser=true] > [text*="Ad"]',
          exampleUrls: 'https://e.gkd.li/86c7a56e-190d-4063-9b38-e8cfd71381e2',
          snapshotUrls: 'https://i.gkd.li/i/18053470',
        },
      ],
    },
  ],
});
