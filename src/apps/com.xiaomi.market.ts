// 来源: Lin-arm/GKD_subscription src/apps/com.xiaomi.market.ts
// 摘取类别: 开屏广告 / 全屏广告, 同步于 2026-11-09
// 重新导入: pnpm tsx scripts/import-ref.ts --force com.xiaomi.market
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.xiaomi.market',
  name: '小米应用商店',
  groups: [
    {
      key: 0,
      name: '全屏广告-弹窗广告',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          key: 0,
          matchRoot: true,
          action: 'clickCenter', // clickNode 可能无效
          activityIds: ['.ui.FloatWebActivity', '.ui.HomeFloatWebActivity'],
          matches:
            '@Button[text="关闭" || desc="关闭"][clickable=true][visibleToUser=true] <<n [vid="webview"]',
          snapshotUrls: [
            'https://i.gkd.li/i/16323123',
            'https://i.gkd.li/i/20946336',
            'https://i.gkd.li/i/23249365',
          ],
        },
        {
          key: 1,
          activityIds: '.business_ui.main.MarketTabActivity',
          matches: '[vid="iv_ad"] + [vid="iv_close"]',
          snapshotUrls: 'https://i.gkd.li/i/28141509',
        },
      ],
    },
  ],
});
