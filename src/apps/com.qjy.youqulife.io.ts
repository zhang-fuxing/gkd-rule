// 来源: Lin-arm/GKD_subscription src/apps/com.qjy.youqulife.io.ts
// 摘取类别: 开屏广告 / 全屏广告, 同步于 2026-11-09
// 重新导入: pnpm tsx scripts/import-ref.ts --force com.qjy.youqulife.io
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.qjy.youqulife.io',
  name: 'MINO 4K',
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
          name: '快手广告',
          fastQuery: true,
          activityIds: '.MainActivity',
          matches: ['[text="广告"] ', '[text="跳过"]'],
          snapshotUrls: 'https://i.gkd.li/i/13378653',
        },
      ],
    },
  ],
});
