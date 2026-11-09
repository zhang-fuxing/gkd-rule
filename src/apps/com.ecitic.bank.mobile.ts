// 来源: Lin-arm/GKD_subscription src/apps/com.ecitic.bank.mobile.ts
// 摘取类别: 开屏广告 / 全屏广告, 同步于 2026-11-09
// 重新导入: pnpm tsx scripts/import-ref.ts --force com.ecitic.bank.mobile
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.ecitic.bank.mobile',
  name: '中信银行',
  groups: [
    {
      key: 2,
      name: '全屏广告-弹窗广告',
      rules: [
        {
          fastQuery: true,
          activityIds: [
            '.ui.MainActivity',
            '.ui.webview.CordovaWebViewActivity',
          ],
          matches: '[vid="close_product_send"]',
          snapshotUrls: [
            'https://i.gkd.li/i/12701230',
            'https://i.gkd.li/i/13402746',
          ],
        },
      ],
    },
  ],
});
