// 来源: Lin-arm/GKD_subscription src/apps/com.akspeed.jiasuqi.gameboost.ts
// 摘取类别: 开屏广告 / 全屏广告, 同步于 2026-11-09
// 重新导入: pnpm tsx scripts/import-ref.ts --force com.akspeed.jiasuqi.gameboost
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.akspeed.jiasuqi.gameboost',
  name: 'AK加速器',
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
          activityIds: '.ui.screen.MainActivity',
          matches:
            '@ImageView[index=1][clickable=true][visibleToUser=true][width<200 && height<200] <2 View[childCount=2] < View < ViewGroup < [id="android:id/content"]',
          exampleUrls: 'https://e.gkd.li/8cf84942-9a6e-43a7-b743-d72dff1b7d8c',
          snapshotUrls: 'https://i.gkd.li/i/20538098',
        },
      ],
    },
  ],
});
