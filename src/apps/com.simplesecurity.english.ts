// 来源: Lin-arm/GKD_subscription src/apps/com.simplesecurity.english.ts
// 摘取类别: 开屏广告 / 全屏广告, 同步于 2026-11-09
// 重新导入: pnpm tsx scripts/import-ref.ts --force com.simplesecurity.english
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.simplesecurity.english',
  name: '水果派',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      priorityTime: 10000,
      rules: [
        {
          fastQuery: true,
          matchDelay: 3000, // 反馈3s后才能关闭
          matches: '[text="关闭广告"]',
          exampleUrls: 'https://e.gkd.li/8718ddc4-8775-482e-a259-bc43c7171fd8',
          snapshotUrls: 'https://i.gkd.li/i/13447714',
        },
      ],
    },
  ],
});
