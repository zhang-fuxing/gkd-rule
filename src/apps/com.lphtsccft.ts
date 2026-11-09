// 来源: Lin-arm/GKD_subscription src/apps/com.lphtsccft.ts
// 摘取类别: 开屏广告 / 全屏广告, 同步于 2026-11-09
// 重新导入: pnpm tsx scripts/import-ref.ts --force com.lphtsccft
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.lphtsccft',
  name: '涨乐财富通',
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
            '.zhangle.startup.SplashScreenActivity',
            '.zhangle.main.MainActivity',
          ],
          matches: '[vid="tv_never"][text="不再提醒"]',
          snapshotUrls: [
            'https://i.gkd.li/i/12646899',
            'https://i.gkd.li/i/12646925',
          ],
        },
      ],
    },
  ],
});
