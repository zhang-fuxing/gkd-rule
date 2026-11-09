// 来源: Lin-arm/GKD_subscription src/apps/com.hihonor.vmall.ts
// 摘取类别: 开屏广告 / 全屏广告, 同步于 2026-11-09
// 重新导入: pnpm tsx scripts/import-ref.ts --force com.hihonor.vmall
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.hihonor.vmall',
  name: '荣耀商城',
  groups: [
    {
      key: 1,
      name: '全屏广告-应用内弹窗广告',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          activityIds: [
            'com.vmall.client.base.fragment.VmallWapActivity',
            'com.vmall.client.splash.fragment.SplashActivity',
          ],
          matches: '[vid="gift_close_iv"]',
          snapshotUrls: 'https://i.gkd.li/i/13060881',
        },
      ],
    },
  ],
});
