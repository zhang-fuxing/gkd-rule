// 来源: Lin-arm/GKD_subscription src/apps/com.gamestar.perfectpiano.ts
// 摘取类别: 开屏广告 / 全屏广告, 同步于 2026-11-09
// 重新导入: pnpm tsx scripts/import-ref.ts --force com.gamestar.perfectpiano
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.gamestar.perfectpiano',
  name: '完美钢琴',
  groups: [
    {
      key: 1,
      name: '全屏广告-VIP会员弹窗',
      desc: '按[返回键]',
      rules: [
        {
          fastQuery: true,
          action: 'back',
          // activityIds: null,
          matches: '[text="已完成付费，恢复VIP状态?"] -n [text*="永久VIP"]',
          snapshotUrls: 'https://i.gkd.li/i/34023961',
          exampleUrls: 'https://e.gkd.li/8a52c238-04f7-4880-bc16-5f6c879ef034',
        },
      ],
    },
  ],
});
