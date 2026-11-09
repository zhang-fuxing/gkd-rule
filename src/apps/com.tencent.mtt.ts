// 来源: Lin-arm/GKD_subscription src/apps/com.tencent.mtt.ts
// 摘取类别: 开屏广告 / 全屏广告, 同步于 2026-11-09
// 重新导入: pnpm tsx scripts/import-ref.ts --force com.tencent.mtt
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.tencent.mtt',
  name: 'QQ浏览器',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      actionMaximumKey: 0,
      priorityTime: 10000,
      rules: [
        {
          key: 0,
          matches: '@LinearLayout[clickable=true] > TextView[text="跳过"]',
          snapshotUrls: 'https://i.gkd.li/i/12472630',
        },
        {
          key: 1,
          matches:
            '@View[clickable=true][childCount=0] +2 * >3 [text^="向上滑动"][visibleToUser=true]',
          snapshotUrls: [
            'https://i.gkd.li/i/14819586',
            'https://i.gkd.li/i/23743205',
          ],
        },
      ],
    },
  ],
});
