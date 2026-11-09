// 来源: Lin-arm/GKD_subscription src/apps/com.crgt.ilife.ts
// 摘取类别: 开屏广告 / 全屏广告, 同步于 2026-11-09
// 重新导入: pnpm tsx scripts/import-ref.ts --force com.crgt.ilife
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.crgt.ilife',
  name: '国铁吉讯',
  groups: [
    {
      key: 2,
      name: '全屏广告-弹窗广告',
      desc: '点击关闭',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          activityIds: '.ui.main.MainPageView',
          matches: '[vid="iv_close"]',
          exampleUrls: 'https://e.gkd.li/43ccfd78-67d7-4dba-a25f-a2f5d62f9c40',
          snapshotUrls: 'https://i.gkd.li/i/16581549',
        },
      ],
    },
  ],
});
