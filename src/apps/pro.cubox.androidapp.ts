// 来源: Lin-arm/GKD_subscription src/apps/pro.cubox.androidapp.ts
// 摘取类别: 开屏广告 / 全屏广告, 同步于 2026-11-09
// 重新导入: pnpm tsx scripts/import-ref.ts --force pro.cubox.androidapp
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'pro.cubox.androidapp',
  name: 'Cubox',
  groups: [
    {
      key: 1,
      name: '全屏广告-会员广告',
      desc: '点击关闭',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          fastQuery: true,
          activityIds: '.ui.pro.ProAccountActivity',
          matches:
            '@View[clickable=true][childCount=0][visibleToUser=true][index=parent.childCount.minus(1)] - [text*="支付"] <5 View[childCount=6] < [vid="newCV"]',
          exampleUrls: 'https://e.gkd.li/a51b01f3-d690-4bdf-9db1-f40e05212b11',
          snapshotUrls: 'https://i.gkd.li/i/20708841',
        },
      ],
    },
  ],
});
