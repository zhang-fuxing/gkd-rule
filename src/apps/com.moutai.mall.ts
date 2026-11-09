// 来源: Lin-arm/GKD_subscription src/apps/com.moutai.mall.ts
// 摘取类别: 开屏广告 / 全屏广告, 同步于 2026-11-09
// 重新导入: pnpm tsx scripts/import-ref.ts --force com.moutai.mall
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.moutai.mall',
  name: 'i茅台',
  groups: [
    {
      key: 1,
      name: '全屏广告-首页弹窗广告',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          activityIds: ['.MainActivity', '.module.splash.SplashActivity'],
          matches: '[vid="ivPic"] + ViewGroup + [vid="vClose"]',
          snapshotUrls: [
            'https://i.gkd.li/i/12745130',
            'https://i.gkd.li/i/12745153',
          ],
        },
      ],
    },
  ],
});
