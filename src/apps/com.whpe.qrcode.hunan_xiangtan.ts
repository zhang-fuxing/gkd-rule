// 来源: Lin-arm/GKD_subscription src/apps/com.whpe.qrcode.hunan_xiangtan.ts
// 摘取类别: 开屏广告 / 全屏广告, 同步于 2026-11-09
// 重新导入: pnpm tsx scripts/import-ref.ts --force com.whpe.qrcode.hunan_xiangtan
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.whpe.qrcode.hunan_xiangtan',
  name: '湘潭出行',
  groups: [
    {
      key: 1,
      name: '全屏广告-弹窗广告',
      rules: [
        {
          key: 0,
          name: '快手广告',
          fastQuery: true,
          activityIds: '.MainActivity',
          matches: '[vid="interact_ad_root"] > [vid="iv_close"]',
          snapshotUrls: 'https://i.gkd.li/i/13476265',
        },
      ],
    },
  ],
});
