// 来源: Lin-arm/GKD_subscription src/apps/com.thestore.main.ts
// 摘取类别: 开屏广告 / 全屏广告, 同步于 2026-11-09
// 重新导入: pnpm tsx scripts/import-ref.ts --force com.thestore.main
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.thestore.main',
  name: '1号会员店',
  groups: [
    {
      key: 1,
      name: '全屏广告-弹窗广告',
      desc: '关闭弹窗',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          activityIds: '.app.home.HomeActivity',
          matches:
            '@TextView[clickable=true][childCount=0] <2 RelativeLayout[childCount=2] < FrameLayout < [parent=null]',
          snapshotUrls: 'https://i.gkd.li/i/13163686',
        },
      ],
    },
  ],
});
