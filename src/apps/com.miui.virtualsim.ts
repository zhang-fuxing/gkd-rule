// 来源: Lin-arm/GKD_subscription src/apps/com.miui.virtualsim.ts
// 摘取类别: 开屏广告 / 全屏广告, 同步于 2026-11-09
// 重新导入: pnpm tsx scripts/import-ref.ts --force com.miui.virtualsim
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.miui.virtualsim',
  name: '全球上网',
  groups: [
    {
      key: 1,
      name: '全屏广告-弹窗广告',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          fastQuery: true,
          activityIds:
            'com.mobile.businesshall.ui.common.RecommendPopupActivity',
          matches: '[vid="img_close_btn"]',
          exampleUrls:
            'https://m.gkd.li/57941037/76a7cf39-06f1-4e1b-9bb6-fd8b1ad25e8e',
          snapshotUrls: 'https://i.gkd.li/i/15981731',
        },
      ],
    },
  ],
});
