// 来源: Lin-arm/GKD_subscription src/apps/com.babytree.apps.pregnancy.ts
// 摘取类别: 开屏广告 / 全屏广告, 同步于 2026-11-09
// 重新导入: pnpm tsx scripts/import-ref.ts --force com.babytree.apps.pregnancy
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.babytree.apps.pregnancy',
  name: '宝宝树孕育',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      actionMaximumKey: 0,
      priorityTime: 10000,
      rules: [
        {
          key: 0,
          matches:
            '[text*="跳过"][text.length<10][width<500 && height<300][visibleToUser=true]',
          snapshotUrls: 'https://i.gkd.li/i/12614757',
        },
        {
          key: 1,
          matches:
            '@View[childCount=0][clickable=true][visibleToUser=true] < RelativeLayout < FrameLayout + RelativeLayout >2 [text^="摇一摇"]',
          snapshotUrls: 'https://i.gkd.li/i/15566228',
        },
      ],
    },
    {
      key: 2,
      name: '全屏广告-弹窗广告',
      activityIds: '.activity.SailfishActivity',
      rules: [
        {
          matches:
            'ImageView[vid="bb_referenced_active_dialog_img_2"] + ImageView[id!=null][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/12614834',
        },
      ],
    },
  ],
});
