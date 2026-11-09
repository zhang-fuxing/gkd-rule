// 来源: Lin-arm/GKD_subscription src/apps/com.tuying.kuimg.rjm.ts
// 摘取类别: 开屏广告 / 全屏广告, 同步于 2026-11-09
// 重新导入: pnpm tsx scripts/import-ref.ts --force com.tuying.kuimg.rjm
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.tuying.kuimg.rjm',
  name: '热剧猫',
  groups: [
    {
      key: 1,
      name: '全屏广告-弹窗广告',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          key: 0,
          activityIds: '.MainActivity',
          matches:
            'ImageView[childCount=0][text=null] < @ViewGroup[childCount=1][clickable=true][visibleToUser=true] < ViewGroup +n ViewGroup[childCount=2] > [text="广告"]',
          snapshotUrls: 'https://i.gkd.li/i/13166088',
        },
        {
          key: 1,
          activityIds: '.MainActivity',
          matches: ['[text="广告"]', '@ViewGroup > [text="跳过"]'],
          snapshotUrls: 'https://i.gkd.li/i/13166086',
        },
      ],
    },
  ],
});
