// 来源: Lin-arm/GKD_subscription src/apps/com.greenpoint.android.mc10086.activity.ts
// 摘取类别: 开屏广告 / 全屏广告, 同步于 2026-11-09
// 重新导入: pnpm tsx scripts/import-ref.ts --force com.greenpoint.android.mc10086.activity
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.greenpoint.android.mc10086.activity',
  name: '中国移动',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 2,
      resetMatch: 'app',
      actionMaximumKey: 0,
      priorityTime: 10000,
      rules: [
        {
          key: 0,
          action: 'clickCenter', // https://github.com/AIsouler/GKD_subscription/issues/1109
          matches:
            '[text*="跳过"][text.length<10][width<500 && height<300][visibleToUser=true]',
          snapshotUrls: 'https://i.gkd.li/i/16335136',
        },
        {
          key: 1,
          position: {
            left: 'width * 0.8731',
            top: 'width * 0.1352',
          },
          matches:
            '@FrameLayout[childCount=2] > [vid="ll_top_right"][childCount=0]',
          exampleUrls: 'https://e.gkd.li/6fca95f1-d672-4d1d-bcf5-e71f1865dd52',
          snapshotUrls: 'https://i.gkd.li/i/20903074',
          excludeSnapshotUrls: 'https://i.gkd.li/i/16335136',
        },
      ],
    },
    {
      key: 2,
      name: '全屏广告-首页弹窗广告',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          fastQuery: true,
          activityIds: 'com.mc10086.cmcc.view.tabs.AppTabFragment',
          matches:
            '@[vid="close_btn" || vid="iv_close_top"] <n LinearLayout >2 [vid="ad_image" || vid="ll_ad_logo"]',
          snapshotUrls: [
            'https://i.gkd.li/i/12662361', //旧快照 close_btn
            'https://i.gkd.li/i/31612036', // iv_close_top
          ],
        },
      ],
    },
  ],
});
