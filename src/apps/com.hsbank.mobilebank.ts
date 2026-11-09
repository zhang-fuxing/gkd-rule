// 来源: Lin-arm/GKD_subscription src/apps/com.hsbank.mobilebank.ts
// 摘取类别: 开屏广告 / 全屏广告, 同步于 2026-11-09
// 重新导入: pnpm tsx scripts/import-ref.ts --force com.hsbank.mobilebank
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.hsbank.mobilebank',
  name: '徽商银行',
  groups: [
    {
      key: 1,
      name: '开屏广告',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      actionMaximumKey: 0,
      resetMatch: 'app',
      priorityTime: 10000,
      rules: [
        {
          key: 0,
          matches:
            '[text*="跳过"][text.length<10][width<500 && height<300][visibleToUser=true]',
        },
        {
          key: 1,
          matches: '[vid="tv_skip"][visibleToUser=true]',
          snapshotUrls: 'https://i.gkd.li/i/31823929',
        },
      ],
    },
  ],
});
