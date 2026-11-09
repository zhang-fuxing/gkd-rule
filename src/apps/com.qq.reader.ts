// 来源: Lin-arm/GKD_subscription src/apps/com.qq.reader.ts
// 摘取类别: 开屏广告 / 全屏广告, 同步于 2026-11-09
// 重新导入: pnpm tsx scripts/import-ref.ts --force com.qq.reader
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.qq.reader',
  name: 'QQ阅读',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      actionMaximumKey: 0,
      resetMatch: 'app',
      priorityTime: 10000,
      rules: [
        {
          key: 0,
          matches:
            '[text*="跳过"][text.length<10][width<500 && height<300][visibleToUser=true]',
          snapshotUrls: 'https://i.gkd.li/i/32436978',
          exampleUrls: 'https://e.gkd.li/cf0112a6-887e-4dd3-ba53-6dfdb592bf03',
        },
        {
          key: 1,
          matches:
            'TextView[width<200] - @View[clickable=true][width<170 && height<170] - FrameLayout[childCount=1][height=getPrev(2).height] <2 [childCount=4] <2 FrameLayout < [vid="splash_container"]',
          snapshotUrls: 'https://i.gkd.li/i/32436980',
          exampleUrls: 'https://e.gkd.li/ef7dc5c7-ad3d-45e8-8fa2-ae9a4c279052',
        },
        {
          key: 2,
          matches:
            '@View[clickable=true][width<170 && height<170] - FrameLayout[height=getPrev(1).height] <2 [childCount=3] < [vid="splash_container"]',
          snapshotUrls: 'https://i.gkd.li/i/33926416',
        },
        {
          key: 3,
          matches:
            '@ImageView[width<140 && height<140][visibleToUser=true][vid=null][text=null] < * < ViewGroup +n ViewGroup[index=parent.childCount.minus(1)] >2 [text="广告"]',
          snapshotUrls: [
            'https://i.gkd.li/i/32437199',
            'https://i.gkd.li/i/32436976',
          ],
        },
      ],
    },
  ],
});
