// 来源: Lin-arm/GKD_subscription src/apps/com.sdu.didi.gsui.ts
// 摘取类别: 开屏广告 / 全屏广告, 同步于 2026-11-09
// 重新导入: pnpm tsx scripts/import-ref.ts --force com.sdu.didi.gsui
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.sdu.didi.gsui',
  name: '滴滴车主',
  groups: [
    {
      key: 1,
      name: '全屏广告-弹窗广告',
      desc: '点击关闭',
      rules: [
        {
          fastQuery: true,
          activityIds: '.main.MainActivity',
          matches: '[vid="main_dialog_banner_image_close"]',
          snapshotUrls: 'https://i.gkd.li/i/13958887',
        },
      ],
    },
  ],
});
