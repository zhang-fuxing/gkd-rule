// 来源: Lin-arm/GKD_subscription src/apps/com.jv.samsungeshop.ts
// 摘取类别: 开屏广告 / 全屏广告, 同步于 2026-11-09
// 重新导入: pnpm tsx scripts/import-ref.ts --force com.jv.samsungeshop
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.jv.samsungeshop',
  name: '三星商城',
  groups: [
    {
      key: 1,
      name: '开屏广告',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      priorityTime: 10000,
      rules: [
        {
          matches: '[desc="跳过"][desc.length<10][visibleToUser=true]',
          exampleUrls: 'https://e.gkd.li/65cbe48e-843e-4dba-a53b-5f6598a2b409',
          snapshotUrls: 'https://i.gkd.li/i/23288756',
        },
      ],
    },
  ],
});
