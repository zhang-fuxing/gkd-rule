// 来源: Lin-arm/GKD_subscription src/apps/com.zhiwei.rjm.ts
// 摘取类别: 开屏广告 / 全屏广告, 同步于 2026-11-09
// 重新导入: pnpm tsx scripts/import-ref.ts --force com.zhiwei.rjm
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.zhiwei.rjm',
  name: 'RJmao',
  groups: [
    {
      key: 1,
      name: '全屏广告-弹窗广告',
      desc: '点击关闭',
      rules: [
        {
          key: 0,
          fastQuery: true,
          matchTime: 10000,
          actionMaximum: 1,
          resetMatch: 'app',
          activityIds: '.MainActivity',
          matches:
            'ImageView < @ViewGroup[clickable=true] < * +2 ViewGroup > [text="广告"]',
          exampleUrls:
            'https://m.gkd.li/57941037/a68b2a70-9bd3-4ba4-9802-f0b60052d4c2',
          snapshotUrls: 'https://i.gkd.li/i/14430564',
        },
      ],
    },
  ],
});
