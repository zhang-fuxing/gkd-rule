// 来源: Lin-arm/GKD_subscription src/apps/com.tencent.docs.ts
// 摘取类别: 开屏广告 / 全屏广告, 同步于 2026-11-09
// 重新导入: pnpm tsx scripts/import-ref.ts --force com.tencent.docs
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.tencent.docs',
  name: '腾讯文档',
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
          key: 0,
          matches:
            '@LinearLayout[clickable=true] - [text^="互动广告"][visibleToUser=true]',
          snapshotUrls: [
            'https://i.gkd.li/i/13198082',
            'https://i.gkd.li/i/23557410',
          ],
        },
      ],
    },
    {
      key: 3,
      name: '全屏广告-弹窗广告',
      rules: [
        {
          actionDelay: 200,
          activityIds: '.DocsFlutterActivity',
          matches:
            'View[childCount=2] > @TextView[id=null][clickable=true] + View',
          snapshotUrls: 'https://i.gkd.li/i/13242404',
        },
      ],
    },
  ],
});
