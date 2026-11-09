// 来源: Lin-arm/GKD_subscription src/apps/com.xiaoxiongyhh.ts
// 摘取类别: 开屏广告 / 全屏广告, 同步于 2026-11-09
// 重新导入: pnpm tsx scripts/import-ref.ts --force com.xiaoxiongyhh
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.xiaoxiongyhh',
  name: '小熊有好货',
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
          activityIds: 'com.uzmap.pkg.EntranceActivity',
          matches:
            'View[childCount=2] > ImageView + Button[childCount=0][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13401975',
        },
      ],
    },
  ],
});
