// 来源: Lin-arm/GKD_subscription src/apps/com.yitong.mbank.psbc.ts
// 摘取类别: 开屏广告 / 全屏广告, 同步于 2026-11-09
// 重新导入: pnpm tsx scripts/import-ref.ts --force com.yitong.mbank.psbc
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.yitong.mbank.psbc',
  name: '邮储银行',
  groups: [
    {
      key: 2,
      name: '全屏广告-首页弹窗广告',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          activityIds: '.module.home.view.activity.MainActivity',
          matches: '[vid="iv_theme"] + [vid="iv_theme_close_btn"]',
          snapshotUrls: 'https://i.gkd.li/i/12755516',
        },
      ],
    },
  ],
});
