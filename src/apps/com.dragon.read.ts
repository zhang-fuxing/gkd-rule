// 来源: Lin-arm/GKD_subscription src/apps/com.dragon.read.ts
// 摘取类别: 开屏广告 / 全屏广告, 同步于 2026-11-09
// 重新导入: pnpm tsx scripts/import-ref.ts --force com.dragon.read
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.dragon.read',
  name: '番茄免费小说',
  groups: [
    {
      key: -1,
      name: '开屏广告',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      priorityTime: 10000,
      rules: [
        {
          fastQuery: true,
          actionDelay: 1000, // 过早点击可能导致应用闪退
          matches:
            '@[desc="跳过广告"][clickable=true] > [text*="跳过"][text.length<10][width<500 && height<300][visibleToUser=true]',
          exampleUrls: 'https://e.gkd.li/e36d701f-bcee-48d5-99da-1c5301101d9e',
          snapshotUrls: 'https://i.gkd.li/i/23282793',
        },
      ],
    },
    {
      key: 3,
      name: '全屏广告',
      fastQuery: true,
      rules: [
        {
          key: 0,
          name: '电商惊喜券',
          activityIds: '.pages.main.MainFragmentActivity',
          anyMatches: [
            '@LynxFlattenUI[id=null][text=""][clickable=true] - [text="去逛商城"] -4 [text$="电商惊喜券"]',
            '@ImageView[desc="dialog_close_icon"][clickable=true][visibleToUser=true] <n View[getChild(1).text="惊喜电商券即将失效"] < ComposeView < FrameLayout < [id="android:id/content"]',
          ],
          snapshotUrls: [
            'https://i.gkd.li/i/12910159',
            'https://i.gkd.li/i/34167848',
          ],
        },
        {
          key: 1,
          name: '爆款好物一分购',
          activityIds: '.pages.main.MainFragmentActivity',
          matches:
            '@ImageView[clickable=true] <2 LinearLayout[childCount=2] < [id="android:id/content"][childCount=1]',
          snapshotUrls: 'https://i.gkd.li/i/12878266',
        },
        {
          key: 2,
          name: '抽奖赢好礼',
          activityIds: '.pages.main.MainFragmentActivity',
          matches: '@LynxFlattenUI[clickable=true] - [text="前往抽奖"]',
          exampleUrls:
            'https://m.gkd.li/57941037/77c4098a-818f-4d0f-8492-e98818d0da27',
          snapshotUrls: 'https://i.gkd.li/i/14292475',
        },
        {
          key: 3,
          name: '签到弹窗',
          activityIds: '.pages.main.MainFragmentActivity',
          matches:
            '@LynxFlattenUI[clickable=true][visibleToUser=true][text=""] -27 FlattenUIText[text^="立即签到"]',
          exampleUrls:
            'https://m.gkd.li/57941037/96afbb4f-afd5-4f64-948d-15fc7bb14075',
          snapshotUrls: 'https://i.gkd.li/i/15223416',
        },
        {
          key: 4,
          activityIds: '.reader.ui.ReaderActivity',
          matches:
            'AwemeLynxVideoUI +n FlattenUIText[text="关闭"][clickable=true][visibleToUser=true]',
          exampleUrls: 'https://e.gkd.li/6d33c17b-85de-4977-aa7f-b45e2a917a12',
          snapshotUrls: 'https://i.gkd.li/i/23549149',
        },
        {
          key: 5,
          activityIds: '.reader.ui.ReaderActivity',
          matches: 'TextView[text="广告"] +2 Button[vid="close"]',
          snapshotUrls: 'https://i.gkd.li/i/13191156', //无vid旧快照
        },
        {
          key: 6,
          activityIds: '.reader.ui.ReaderActivity',
          matches:
            '@ImageView[clickable=true][visibleToUser=true] +5 [text="领取限时福利"]',
          snapshotUrls: [
            'https://i.gkd.li/i/14430326',
            'https://i.gkd.li/i/14969861',
          ],
        },
        {
          key: 7,
          name: '坐标点击[关闭]',
          position: {
            left: 'width * 0.9123',
            top: 'width * 0.067',
          },
          activityIds: '.reader.ui.ReaderActivity',
          matches:
            'View[id=null][text=null][desc=null][childCount=0] < [id="com.dragon.read.awemevideo:id/fullvideo_videoview"][childCount=1][visibleToUser=true]',
          exampleUrls: 'https://e.gkd.li/c29c5647-e2ee-460f-87aa-8717779645ec',
          snapshotUrls: 'https://i.gkd.li/i/23621776',
        },
        {
          key: 8,
          activityIds: '.pages.main.MainFragmentActivity',
          matches:
            'TextureView < FrameLayout + FrameLayout > TextView[text="关闭"][clickable=true][visibleToUser=true]',
          snapshotUrls: 'https://i.gkd.li/i/34167893',
        },
      ],
    },
    {
      key: 4,
      name: '全屏广告-阅读页面关注作者弹窗',
      fastQuery: true,
      rules: [
        {
          key: 0,
          activityIds: '.reader.ui.ReaderActivity',
          matches: '@ImageView +2 FrameLayout >3 [text="关注"]',
          snapshotUrls: 'https://i.gkd.li/i/13399505',
        },
      ],
    },
  ],
});
