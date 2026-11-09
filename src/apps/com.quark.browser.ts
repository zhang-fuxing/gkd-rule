// 来源: Lin-arm/GKD_subscription src/apps/com.quark.browser.ts
// 摘取类别: 开屏广告 / 全屏广告, 同步于 2026-11-09
// 重新导入: pnpm tsx scripts/import-ref.ts --force com.quark.browser
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.quark.browser',
  name: '夸克浏览器',
  groups: [
    {
      key: 4,
      name: '全屏广告-弹窗广告',
      rules: [
        {
          fastQuery: true,
          actionMaximum: 1,
          activityIds: 'com.ucpro.BrowserActivity',
          matches: 'ImageView[vid="close_img"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13292571',
        },
      ],
    },
  ],
});
