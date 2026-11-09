// 来源: Lin-arm/GKD_subscription src/apps/com.tencent.qqmusic.ts
// 摘取类别: 开屏广告 / 全屏广告, 同步于 2026-11-09
// 重新导入: pnpm tsx scripts/import-ref.ts --force com.tencent.qqmusic
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.tencent.qqmusic',
  name: 'QQ音乐',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      actionMaximumKey: 0,
      priorityTime: 10000,
      rules: [
        {
          key: 0,
          fastQuery: true,
          action: 'clickCenter',
          matches:
            '[text*="跳过"][text.length<10][width<500 && height<300][visibleToUser=true]',
          exampleUrls: 'https://e.gkd.li/bde5c1a5-3259-45d3-a6b8-8482f7818c6f',
          snapshotUrls: 'https://i.gkd.li/i/17056504',
        },
        {
          key: 1,
          action: 'clickCenter',
          matches:
            '[text*="跳过"][text.length<10][width<500 && height<300][visibleToUser=true]',
          exampleUrls: 'https://e.gkd.li/6537da92-f5f6-4ee8-9219-5f39f7c5e8a2',
          snapshotUrls: 'https://i.gkd.li/i/17068758',
        },
      ],
    },
    {
      key: 2,
      name: '全屏广告-弹窗广告',
      fastQuery: true,
      rules: [
        {
          key: 0,
          activityIds: [
            '.activity.TranslucentWebViewActivity',
            '.activity.AppStarterActivity',
            '.business.playernew.view.NewPlayerActivity',
            'com.tencent.qqmusiccommon.hybrid.HybridViewActivity',
          ],
          matches:
            '@[desc^="关闭"][desc.length<10][visibleToUser=true][width>50 && width<177] <<(25-n) [id="android:id/content"]',
          snapshotUrls: [
            'https://i.gkd.li/i/13115121', //关闭
            'https://i.gkd.li/i/14549936',
            'https://i.gkd.li/i/14798904',
            'https://i.gkd.li/i/15209764', // <<n , n=20
            'https://i.gkd.li/i/15261116',
            'https://i.gkd.li/i/17459008',
            'https://i.gkd.li/i/23930628', // [clickable=false]
            'https://i.gkd.li/i/23930853', // [clickable=false]
            'https://i.gkd.li/i/17057551', //关闭弹窗
            'https://i.gkd.li/i/23495699', //关闭弹窗，按钮
            'https://i.gkd.li/i/13806773', //关闭按钮
          ],
          exampleUrls: 'https://e.gkd.li/47107dd3-b19a-4486-a0d1-6d9aa62ee722',
        },
        {
          key: 2,
          activityIds: [
            '.activity.AppStarterActivity',
            '.business.playernew.view.NewPlayerActivity',
          ],
          matches:
            '@ImageView[id=null][text=null][desc=null][childCount=0][visibleToUser=true][width<130 && height<130] <<(7,8,9) [id="android:id/content"]',
          snapshotUrls: [
            'https://i.gkd.li/i/18439138',
            'https://i.gkd.li/i/22924866',
            'https://i.gkd.li/i/20745872',
            'https://i.gkd.li/i/22699223',
            'https://i.gkd.li/i/30530361',
          ],
          excludeSnapshotUrls: [
            'https://i.gkd.li/i/34188274', //用 [id=null] 排除
            'https://i.gkd.li/i/34188273', //用 [id=null][desc=null] 排除
          ],
          exampleUrls: 'https://e.gkd.li/881cddd2-e4ec-472e-8bf8-00f26f61cbc4',
        },
        {
          key: 4,
          matchTime: 10000,
          actionMaximum: 1,
          resetMatch: 'app',
          activityIds: '.activity.AppStarterActivity',
          matches:
            '@ViewGroup[childCount=0][clickable=true][visibleToUser=true][width<150 && height<150] < ViewGroup[childCount=1] < ViewGroup < FrameLayout < FrameLayout < [id="android:id/content"]',
          exampleUrls: 'https://e.gkd.li/f1c596e5-36b6-485b-aa55-a235d57bddf9',
          snapshotUrls: 'https://i.gkd.li/i/22699207',
        },
        {
          key: 6,
          name: '免流弹窗',
          activityIds: [
            '.activity.AppStarterActivity',
            '.business.playernew.view.NewPlayerActivity',
          ],
          matches: '[text="流量够用"]',
          snapshotUrls: [
            'https://i.gkd.li/i/13197868',
            'https://i.gkd.li/i/15285647',
          ],
        },
        {
          key: 8,
          activityIds: '.activity.AppStarterActivity',
          matches:
            '@ViewGroup[childCount=0][clickable=true] <2 ViewGroup[childCount=2] < FrameLayout < FrameLayout < [id="android:id/content"]',
          snapshotUrls: 'https://i.gkd.li/i/13806782',
        },
        {
          key: 9,
          matchTime: 10000,
          actionMaximum: 1,
          resetMatch: 'app',
          activityIds: '.activity.AppStarterActivity',
          matches: '[visibleToUser=true][desc$="不再提示"]',
          exampleUrls: 'https://e.gkd.li/e3d904e1-dfe5-4d12-b8c8-b1eead8459c9',
          snapshotUrls: 'https://i.gkd.li/i/18428240',
        },
      ],
    },
  ],
});
