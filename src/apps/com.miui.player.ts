// 来源: Lin-arm/GKD_subscription src/apps/com.miui.player.ts
// 摘取类别: 开屏广告 / 全屏广告, 同步于 2026-11-09
// 重新导入: pnpm tsx scripts/import-ref.ts --force com.miui.player
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.miui.player',
  name: '小米音乐',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          fastQuery: true,
          action: 'clickCenter',
          matches:
            '[text*="跳过"][text.length<10][width<500 && height<300][visibleToUser=true]',
          snapshotUrls: 'https://i.gkd.li/i/25094542',
        },
      ],
    },
    {
      key: 3,
      name: '全屏广告-弹窗广告',
      desc: '点击关闭',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          key: 0,
          fastQuery: true,
          activityIds: 'com.tencent.qqmusiccommon.hybrid.HybridViewActivity',
          matches:
            '@ViewGroup[clickable=true][childCount=0][visibleToUser=true] < ViewGroup[childCount=1] < ViewGroup[childCount=2] < FrameLayout < FrameLayout < [vid="webview_container"]',
          exampleUrls: 'https://e.gkd.li/5e6fd5f8-6ad3-4a46-ab34-c9b6b2d7a112',
          snapshotUrls: 'https://i.gkd.li/i/17783777',
        },
        {
          key: 1,
          activityIds: 'com.tencent.qqmusiccommon.hybrid.HybridViewActivity',
          matches: '[id=null][desc~=".*关闭.*按钮.*"][clickable=true]',
          snapshotUrls: [
            'https://i.gkd.li/i/12700955',
            'https://i.gkd.li/i/22562104',
          ],
        },
      ],
    },
    {
      key: 5,
      name: '全屏广告-弹窗广告（部分误触）',
      desc: '注意：会关闭年度报告邀请函弹窗',
      rules: [
        {
          fastQuery: true,
          activityIds: 'com.tencent.qqmusiclite.activity.MainActivity',
          matches: '[vid="iv_close_dialog_button"]',
          snapshotUrls: 'https://i.gkd.li/i/13623503',
        },
      ],
    },
    {
      key: 15,
      name: '全屏广告-体验臻品音质',
      desc: '连接设备30min臻品音质-> x掉',
      rules: [
        {
          fastQuery: true,
          activityIds:
            'com.tencent.qqmusiclite.activity.player.MusicPlayerActivity',
          matches:
            '[text$="钟免费体验"] < * - [text$="臻品音质"] <2 * - @View[clickable=true][text=null][childCount=0] <<4 [id="android:id/content"]',
          exampleUrls: 'https://e.gkd.li/3bffcfdf-4d08-4461-8c43-24521d85e697',
          snapshotUrls: 'https://i.gkd.li/i/29175549',
        },
      ],
    },
  ],
});
