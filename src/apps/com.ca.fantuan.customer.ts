// 来源: Lin-arm/GKD_subscription src/apps/com.ca.fantuan.customer.ts
// 摘取类别: 开屏广告 / 全屏广告, 同步于 2026-11-09
// 重新导入: pnpm tsx scripts/import-ref.ts --force com.ca.fantuan.customer
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.ca.fantuan.customer',
  name: 'Fantuan Delivery',
  groups: [
    {
      key: 4,
      name: '全屏广告',
      desc: '点击x掉',
      rules: [
        {
          fastQuery: true,
          activityIds: '.app.main.view.MainActivityV2',
          matches: '[vid="activity_popup_close"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/28430432',
        },
      ],
    },
  ],
});
