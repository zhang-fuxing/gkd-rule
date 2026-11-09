// 来源: Lin-arm/GKD_subscription src/apps/com.netease.gl.ts
// 摘取类别: 开屏广告 / 全屏广告, 同步于 2026-11-09
// 重新导入: pnpm tsx scripts/import-ref.ts --force com.netease.gl
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.netease.gl',
  name: '网易大神',
  groups: [
    {
      key: 2,
      name: '全屏广告-弹窗广告',
      rules: [
        {
          key: 0,
          activityIds: '.ui.activity.welcome.WelcomeActivity',
          matches: '@[vid="iv_close"] + [vid="iv_cover"]',
          snapshotUrls: 'https://i.gkd.li/i/12883277',
        },
      ],
    },
  ],
});
