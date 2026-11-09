// 来源: Lin-arm/GKD_subscription src/apps/tw.net.pic.m.openpoint.ts
// 摘取类别: 开屏广告 / 全屏广告, 同步于 2026-11-09
// 重新导入: pnpm tsx scripts/import-ref.ts --force tw.net.pic.m.openpoint
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'tw.net.pic.m.openpoint',
  name: 'OPENPOINT',
  groups: [
    {
      key: 1,
      name: '全屏广告-每日弹窗广告',
      desc: '勾选[今日不再顯示]-点击关闭',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          key: 0,
          fastQuery: true,
          activityIds: '.activity.MainActivity',
          matches: '[vid="iv_check_box"][checked=false]',
          exampleUrls: 'https://e.gkd.li/ec0eea76-8689-498d-8329-75bdb06c1e30',
          snapshotUrls: 'https://i.gkd.li/i/15806622',
        },
        {
          preKeys: [0],
          key: 1,
          fastQuery: true,
          activityIds: '.activity.MainActivity',
          matches: '[vid="ivClose"][visibleToUser=true]',
          exampleUrls: 'https://e.gkd.li/ec0eea76-8689-498d-8329-75bdb06c1e30',
          snapshotUrls: 'https://i.gkd.li/i/15806622',
        },
      ],
    },
  ],
});
