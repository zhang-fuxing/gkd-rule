// 来源: Lin-arm/GKD_subscription src/apps/com.baidu.input.ts
// 摘取类别: 开屏广告 / 全屏广告, 同步于 2026-11-09
// 重新导入: pnpm tsx scripts/import-ref.ts --force com.baidu.input
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.baidu.input',
  name: '百度输入法',
  groups: [
    {
      key: 1,
      name: '全屏广告-创作祝福弹窗',
      desc: '点击关闭',
      fastQuery: true,
      matchTime: 10000,
      resetMatch: 'app',
      actionMaximum: 1,
      rules: [
        {
          activityIds: '.ImeAppMainActivity',
          matches: '[id="android:id/content"] >2 [vid="button_close"]',
          snapshotUrls: 'https://i.gkd.li/i/14179064',
        },
      ],
    },
  ],
});
