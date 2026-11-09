// 来源: Lin-arm/GKD_subscription src/apps/com.youloft.icloser.ts
// 摘取类别: 开屏广告 / 全屏广告, 同步于 2026-11-09
// 重新导入: pnpm tsx scripts/import-ref.ts --force com.youloft.icloser
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.youloft.icloser',
  name: '心动日常',
  groups: [
    {
      key: 1,
      name: '全屏广告-购买会员弹窗广告',
      rules: [
        {
          fastQuery: true,
          activityIds: '.view.dialog.VipRetainPacketDialog',
          matches: '[vid="tv_later_buy"]',
          snapshotUrls: 'https://i.gkd.li/i/13067183',
        },
      ],
    },
  ],
});
