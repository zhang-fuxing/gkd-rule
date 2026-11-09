// 来源: Lin-arm/GKD_subscription src/apps/io.microshow.fm.ts
// 摘取类别: 开屏广告 / 全屏广告, 同步于 2026-11-09
// 重新导入: pnpm tsx scripts/import-ref.ts --force io.microshow.fm
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'io.microshow.fm',
  name: '畅听FM',
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
          fastQuery: true,
          activityIds: '.ui.activity.MainActivity',
          matches:
            '@Button[childCount=0][clickable=true][visibleToUser=true] <2 FrameLayout < RelativeLayout < [id="android:id/content"]',
          snapshotUrls: 'https://i.gkd.li/i/14953007',
        },
      ],
    },
  ],
});
