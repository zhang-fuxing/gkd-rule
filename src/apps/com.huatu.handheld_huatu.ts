// 来源: Lin-arm/GKD_subscription src/apps/com.huatu.handheld_huatu.ts
// 摘取类别: 开屏广告 / 全屏广告, 同步于 2026-11-09
// 重新导入: pnpm tsx scripts/import-ref.ts --force com.huatu.handheld_huatu
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.huatu.handheld_huatu',
  name: '华图在线',
  groups: [
    {
      key: 1,
      name: '全屏广告-首页弹窗广告',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          activityIds: [
            '.view.MainPopDialog',
            '.business.main.MainTabActivity',
          ],
          matches: '[vid="main_img_adv_bg"] + [vid="main_img_close"]',
          snapshotUrls: [
            'https://i.gkd.li/i/12715702',
            'https://i.gkd.li/i/12744973',
          ],
        },
      ],
    },
  ],
});
