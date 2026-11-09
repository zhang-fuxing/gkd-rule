// 来源: Lin-arm/GKD_subscription src/apps/com.mipay.wallet.ts
// 摘取类别: 开屏广告 / 全屏广告, 同步于 2026-11-09
// 重新导入: pnpm tsx scripts/import-ref.ts --force com.mipay.wallet
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.mipay.wallet',
  name: '钱包',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      priorityTime: 10000,
      rules: [
        {
          matches: '[vid="skip"][visibleToUser=true]',
          exampleUrls: 'https://e.gkd.li/670b95f6-12d0-4787-9158-98ac52eb1641',
          snapshotUrls: [
            'https://i.gkd.li/i/16828031',
            'https://i.gkd.li/i/16828053',
          ],
        },
      ],
    },
    {
      key: 1,
      name: '全屏广告-弹窗广告',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          fastQuery: true,
          activityIds: 'com.xiaomi.jr.app.MiFinanceActivity',
          matches:
            'FrameLayout >2 View[childCount=2] >2 View[childCount=2] > @ImageView[clickable=true][index=0][visibleToUser=true] <<n [vid="flutter_container"]',
          exampleUrls: 'https://e.gkd.li/9d8a1bb4-40ab-4312-8f5b-ef224e18720e',
          snapshotUrls: 'https://i.gkd.li/i/16828039',
        },
      ],
    },
  ],
});
