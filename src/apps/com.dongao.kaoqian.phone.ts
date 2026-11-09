// 来源: Lin-arm/GKD_subscription src/apps/com.dongao.kaoqian.phone.ts
// 摘取类别: 开屏广告 / 全屏广告, 同步于 2026-11-09
// 重新导入: pnpm tsx scripts/import-ref.ts --force com.dongao.kaoqian.phone
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.dongao.kaoqian.phone',
  name: '会计云课堂',
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
          matches: '[vid="tv_welcome_guide"]',
          snapshotUrls: 'https://i.gkd.li/i/14809185',
        },
      ],
    },
  ],
});
