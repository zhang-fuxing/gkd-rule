// 来源: Lin-arm/GKD_subscription src/apps/com.koudai.weidian.buyer.ts
// 摘取类别: 开屏广告 / 全屏广告, 同步于 2026-11-09
// 重新导入: pnpm tsx scripts/import-ref.ts --force com.koudai.weidian.buyer
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.koudai.weidian.buyer',
  name: '微店',
  groups: [
    {
      key: 6,
      name: '全屏广告-首页红包弹窗',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          activityIds:
            'com.vdian.android.wdb.main.ui.activity.MainTabsActivity',
          matches:
            '@ImageView[clickable=true][visibleToUser=true][childCount=0] <2 RelativeLayout[childCount=2] < FrameLayout <2 [parent=null]',
          snapshotUrls: 'https://i.gkd.li/i/13646151',
        },
      ],
    },
  ],
});
