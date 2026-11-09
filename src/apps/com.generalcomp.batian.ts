// 来源: Lin-arm/GKD_subscription src/apps/com.generalcomp.batian.ts
// 摘取类别: 开屏广告 / 全屏广告, 同步于 2026-11-09
// 重新导入: pnpm tsx scripts/import-ref.ts --force com.generalcomp.batian
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.generalcomp.batian',
  name: '霸天安云',
  groups: [
    {
      key: 1,
      name: '全屏广告-弹窗广告',
      desc: '点击关闭',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          key: 0,
          fastQuery: true,
          activityIds:
            'com.zasko.modulemain.mvpdisplay.activity.X35MainActivity',
          matches:
            '@ImageView[childCount=0][text=null][visibleToUser=true] < FrameLayout[childCount=1] <2 FrameLayout[childCount=2] <2 FrameLayout[childCount=2] <2 FrameLayout[childCount=2] - FrameLayout > [text^="扭动或点击"]',
          exampleUrls: 'https://e.gkd.li/5b7e260d-6896-4e9d-bbbf-062f5ec02b86',
          snapshotUrls: 'https://i.gkd.li/i/17742964',
        },
        {
          key: 1,
          fastQuery: true,
          activityIds:
            'com.zasko.modulemain.mvpdisplay.activity.X35CommonDisplayActivity',
          matches:
            '@ImageView[visibleToUser=true][id=null][width<100 && height<100] <2 FrameLayout[childCount=3] < FrameLayout[childCount=1] < FrameLayout[childCount=1] < [id="android:id/content"]',
          exampleUrls: 'https://e.gkd.li/9b44f7b6-fe7e-4c9d-ac5f-6a41a7b507b3',
          snapshotUrls: 'https://i.gkd.li/i/17735543',
        },
      ],
    },
  ],
});
