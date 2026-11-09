// 来源: Lin-arm/GKD_subscription src/apps/com.soft.blued.ts
// 摘取类别: 开屏广告 / 全屏广告, 同步于 2026-11-09
// 重新导入: pnpm tsx scripts/import-ref.ts --force com.soft.blued
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.soft.blued',
  name: 'Blued',
  groups: [
    {
      key: 2,
      name: '全屏广告-弹窗广告',
      desc: '点击关闭',
      fastQuery: true,
      rules: [
        {
          key: 0,
          activityIds: 'com.blued.android.core.ui.TerminalActivity',
          matches: '[vid="iv_close"]',
          exampleUrls:
            'https://m.gkd.li/57941037/37ea59cf-9606-4cd6-a74a-84f353f07975',
          snapshotUrls: 'https://i.gkd.li/i/14157519',
        },
        {
          key: 1,
          activityIds: '.ui.home.HomeActivity',
          matches: '[vid="nearby_common_guide_close_iv"]',
          exampleUrls: 'https://e.gkd.li/04e78fd8-9d78-48d7-b1f0-eddde80f5c52',
          snapshotUrls: 'https://i.gkd.li/i/17172243',
        },
      ],
    },
    {
      key: 3,
      name: '全屏广告-会员活动弹窗',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          key: 0,
          activityIds: 'com.blued.android.core.ui.TransparentActivity',
          matches: '[vid="blued_ad_layout"] + [vid="img_close"]',
          snapshotUrls: 'https://i.gkd.li/i/14310618',
        },
      ],
    },
  ],
});
