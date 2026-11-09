// 来源: Lin-arm/GKD_subscription src/apps/yyc.xk.ts
// 摘取类别: 开屏广告 / 全屏广告, 同步于 2026-11-09
// 重新导入: pnpm tsx scripts/import-ref.ts --force yyc.xk
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'yyc.xk',
  name: '星空视频壁纸',
  groups: [
    {
      key: 1,
      name: '全屏广告-弹窗广告',
      desc: '点击关闭',
      rules: [
        {
          fastQuery: true,
          activityIds: '.activity.MainActivity',
          matches: '[vid="gm信息流广告关闭"][visibleToUser=true]',
          exampleUrls: 'https://e.gkd.li/972de09c-a399-4b7d-b7c4-e03c072a7170',
          snapshotUrls: 'https://i.gkd.li/i/20863704',
        },
      ],
    },
  ],
});
