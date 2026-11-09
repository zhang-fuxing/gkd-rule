// 来源: Lin-arm/GKD_subscription src/apps/com.spdbccc.app.ts
// 摘取类别: 开屏广告 / 全屏广告, 同步于 2026-11-09
// 重新导入: pnpm tsx scripts/import-ref.ts --force com.spdbccc.app
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.spdbccc.app',
  name: '浦大喜奔',
  groups: [
    {
      key: 2,
      name: '全屏广告-首页弹窗广告',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      activityIds: '.sp.main.MainActivity',
      rules: [
        {
          key: 1,
          matches:
            '[vid="ckb_not_show_again"][checked=false][visibleToUser=true]',
          exampleUrls: 'https://e.gkd.li/bb770917-9fbb-4910-9c9e-8bf58437bb1e',
          snapshotUrls: 'https://i.gkd.li/i/18275682',
        },
        {
          preKeys: [1],
          matches: '[vid="iv_kfc_image_close"][visibleToUser=true]',
          exampleUrls: 'https://e.gkd.li/bb770917-9fbb-4910-9c9e-8bf58437bb1e',
          snapshotUrls: 'https://i.gkd.li/i/18275682',
        },
      ],
    },
  ],
});
