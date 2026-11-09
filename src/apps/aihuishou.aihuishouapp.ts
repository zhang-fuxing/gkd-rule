// 来源: Lin-arm/GKD_subscription src/apps/aihuishou.aihuishouapp.ts
// 摘取类别: 开屏广告 / 全屏广告, 同步于 2026-11-09
// 重新导入: pnpm tsx scripts/import-ref.ts --force aihuishou.aihuishouapp
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'aihuishou.aihuishouapp',
  name: '爱回收',
  groups: [
    {
      key: 1,
      name: '全屏广告',
      rules: [
        {
          fastQuery: true,
          //   activityIds: null,
          matches: 'ImageView + [vid="iv_close"]',
          snapshotUrls: 'https://i.gkd.li/i/28374178',
        },
      ],
    },
  ],
});
