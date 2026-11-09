// 来源: Lin-arm/GKD_subscription src/apps/com.example.pptv.ts
// 摘取类别: 开屏广告 / 全屏广告, 同步于 2026-11-09
// 重新导入: pnpm tsx scripts/import-ref.ts --force com.example.pptv
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.example.pptv',
  name: '人人视频',
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
          matches: '[text*="跳过"][text.length<=10]',
          snapshotUrls: 'https://i.gkd.li/i/13669401',
        },
        {
          key: 1,
          matches: '[vid="view_count_shake"]',
          snapshotUrls: 'https://i.gkd.li/i/13761160',
        },
      ],
    },
  ],
});
