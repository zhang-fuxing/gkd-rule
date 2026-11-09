// 来源: Lin-arm/GKD_subscription src/apps/cn.mil.junhao.ts
// 摘取类别: 开屏广告 / 全屏广告, 同步于 2026-11-09
// 重新导入: pnpm tsx scripts/import-ref.ts --force cn.mil.junhao
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'cn.mil.junhao',
  name: '中国军号',
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
          matches: '[vid="splash_adv_ship"]',
          snapshotUrls: 'https://i.gkd.li/i/13806892',
        },
      ],
    },
  ],
});
