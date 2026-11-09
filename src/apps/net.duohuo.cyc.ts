// 来源: Lin-arm/GKD_subscription src/apps/net.duohuo.cyc.ts
// 摘取类别: 开屏广告 / 全屏广告, 同步于 2026-11-09
// 重新导入: pnpm tsx scripts/import-ref.ts --force net.duohuo.cyc
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'net.duohuo.cyc',
  name: '次元城动画',
  groups: [
    {
      key: 1,
      name: '全屏广告-弹窗广告',
      rules: [
        {
          key: 0,
          fastQuery: true,
          activityIds: 'top.cycdm.cycapp.MainActivity',
          matches:
            '@ViewGroup[clickable=true][childCount=1] < ViewGroup +2 ViewGroup[childCount=2] > [text="广告"]',
          snapshotUrls: [
            'https://i.gkd.li/i/13972796',
            'https://i.gkd.li/i/14358701',
            'https://i.gkd.li/i/14358706',
          ],
        },
        {
          key: 1,
          fastQuery: true,
          activityIds: 'top.cycdm.cycapp.MainActivity',
          matches: '@[clickable=true] > [text="跳过"]',
          snapshotUrls: [
            'https://i.gkd.li/i/13972792',
            'https://i.gkd.li/i/14358630',
          ],
        },
      ],
    },
  ],
});
