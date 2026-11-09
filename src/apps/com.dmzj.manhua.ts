// 来源: Lin-arm/GKD_subscription src/apps/com.dmzj.manhua.ts
// 摘取类别: 开屏广告 / 全屏广告, 同步于 2026-11-09
// 重新导入: pnpm tsx scripts/import-ref.ts --force com.dmzj.manhua
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.dmzj.manhua',
  name: '动漫之家',
  groups: [
    {
      key: 1,
      name: '全屏广告-弹窗广告',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          activityIds: '.ui.LaunchInterceptorActivity',
          matches: '[vid="iv_close"]',
          snapshotUrls: 'https://i.gkd.li/i/13542503',
        },
      ],
    },
  ],
});
