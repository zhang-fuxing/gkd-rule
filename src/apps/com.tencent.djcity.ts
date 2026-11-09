// 来源: Lin-arm/GKD_subscription src/apps/com.tencent.djcity.ts
// 摘取类别: 开屏广告 / 全屏广告, 同步于 2026-11-09
// 重新导入: pnpm tsx scripts/import-ref.ts --force com.tencent.djcity
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.tencent.djcity',
  name: '掌上道聚城',
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
          key: 0,
          action: 'clickCenter',
          matches:
            '[text*="跳过"][text.length<10][width<500 && height<300][visibleToUser=true]',
          snapshotUrls: 'https://i.gkd.li/i/15137209',
        },
      ],
    },
    {
      key: 1,
      name: '全屏广告-弹窗广告',
      desc: '点击关闭',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          activityIds: '.activities.homepage.MainActivity',
          matches:
            '[vid="main_container"] >7 View[childCount=7] > View[childCount=2] > @View[index=1][childCount=1][clickable=true] > ImageView[childCount=0] <<n [vid="main_container"]',
          exampleUrls:
            'https://m.gkd.li/57941037/151fd8a5-8c44-4368-a8ba-3563df44e492',
          snapshotUrls: 'https://i.gkd.li/i/14229532',
        },
      ],
    },
  ],
});
