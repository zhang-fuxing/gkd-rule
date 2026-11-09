// 来源: Lin-arm/GKD_subscription src/apps/com.taobao.movie.android.ts
// 摘取类别: 开屏广告 / 全屏广告, 同步于 2026-11-09
// 重新导入: pnpm tsx scripts/import-ref.ts --force com.taobao.movie.android
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.taobao.movie.android',
  name: '淘票票',
  groups: [
    {
      key: 1,
      name: '全屏广告-弹窗广告',
      rules: [
        {
          fastQuery: true,
          activityIds: '.common.minuscampaign.MinusDialogActivity',
          matches: '@[clickable=true][width<151] - [vid="minus_dialog"]',
          snapshotUrls: 'https://i.gkd.li/i/31164402',
          exampleUrls: 'https://e.gkd.li/05265ff0-580f-4e4c-8432-9f45626beb5c',
        },
      ],
    },
  ],
});
