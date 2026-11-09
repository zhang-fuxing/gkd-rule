// 来源: Lin-arm/GKD_subscription src/apps/com.liuguang.down.ts
// 摘取类别: 开屏广告 / 全屏广告, 同步于 2026-11-09
// 重新导入: pnpm tsx scripts/import-ref.ts --force com.liuguang.down
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.liuguang.down',
  name: '流光助手',
  groups: [
    {
      key: 1,
      name: '开屏广告',
      matchTime: 10000,
      actionMaximum: 1,
      actionMaximumKey: 0,
      resetMatch: 'app',
      priorityTime: 10000,
      rules: [
        {
          key: 0,
          fastQuery: true,
          matches: '[text*="跳过"][clickable=true][desc.length<10]',
        },
        {
          key: 1,
          matches: '[clickable=true][desc*="跳过"][desc.length<10]',
          snapshotUrls: 'https://i.gkd.li/i/31147124',
        },
      ],
    },
  ],
});
