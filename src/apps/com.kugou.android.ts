// 来源: Lin-arm/GKD_subscription src/apps/com.kugou.android.ts
// 摘取类别: 开屏广告 / 全屏广告, 同步于 2026-11-09
// 重新导入: pnpm tsx scripts/import-ref.ts --force com.kugou.android
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.kugou.android',
  name: '酷狗音乐',
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
          matches: '[desc="跳过"||desc="GdtCountDownView"]',
          snapshotUrls: [
            'https://i.gkd.li/i/12775410',
            'https://i.gkd.li/i/13426030',
            'https://i.gkd.li/i/13468987',
          ],
        },
        {
          key: 1,
          position: {
            left: 'width * 0.6858',
            top: 'width * 0.3906',
          },
          matches: '[desc="createSkipView"]',
          exampleUrls:
            'https://m.gkd.li/57941037/fc4a38c9-20aa-4cfc-9a92-c20e9194418b',
          snapshotUrls: 'https://i.gkd.li/i/14609953',
        },
      ],
    },
    {
      key: 2,
      name: '全屏广告-VIP弹窗',
      rules: [
        {
          key: 0,
          fastQuery: true,
          matches:
            '@ImageView[clickable=true][visibleToUser=true] + RelativeLayout >2 [text*="豪华VIP已过期"]',
          exampleUrls: 'https://e.gkd.li/cab683ac-801d-4089-8b5d-548954761c08',
          snapshotUrls: 'https://i.gkd.li/i/13548005',
        },
        {
          key: 1,
          activityIds: '.app.MediaActivity',
          matches:
            '@[id=null][text="退出页面" || text=""][width<200 && height<200] <(1,3) [childCount>3] >(1,2) [visibleToUser=true][text*="会员" || text*="VIP" || text*="支持蝰蛇"]',
          exampleUrls: 'https://e.gkd.li/86e4a797-5366-4579-81ee-bc5354e95568',
          snapshotUrls: [
            'https://i.gkd.li/i/17177377',
            'https://i.gkd.li/i/18070974',
            'https://i.gkd.li/i/22310624',
            'https://i.gkd.li/i/29639642',
          ],
        },
      ],
    },
    {
      key: 3,
      name: '全屏广告-[看广告免费听歌]弹窗',
      desc: '点击关闭',
      rules: [
        {
          activityIds: '.app.MediaActivity',
          matches: '[desc="看广告，免费听会员歌"] +2 [desc="关闭"]',
          exampleUrls:
            'https://m.gkd.li/57941037/dfd70c7c-3200-493e-9afa-404de5fcd2ff',
          snapshotUrls: 'https://i.gkd.li/i/14722104',
        },
      ],
    },
    {
      key: 4,
      name: '全屏广告-[开启音乐DJ]弹窗',
      desc: '勾选[今日不再提醒]-点击[关闭]',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          key: 0,
          matches: '@[checked=false] + [text="今日不再提醒"]',
          exampleUrls:
            'https://m.gkd.li/57941037/69f564e9-464a-488b-a181-f1085176b49f',
          snapshotUrls: 'https://i.gkd.li/i/14722457',
        },
        {
          preKeys: [0],
          key: 1,
          matches: '@ImageView - * > [text="今日不再提醒"]',
          exampleUrls:
            'https://m.gkd.li/57941037/69f564e9-464a-488b-a181-f1085176b49f',
          snapshotUrls: 'https://i.gkd.li/i/14722457',
        },
      ],
    },
    {
      key: 6,
      name: '全屏广告-签到弹窗',
      desc: '点击关闭',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          position: {
            left: 'width * 0.9287',
            top: 'width * 0.8935',
          },
          activityIds: '.app.flexowebview.uploadvideo.ContributeWebActivity',
          matches:
            '@FrameLayout > WebView > WebView[text="金币中心"] > View[id="body"] > TextView[id="root"][childCount=0]',
          exampleUrls: 'https://e.gkd.li/f2a44161-d0a2-421d-a5e7-26fcf005daf2',
          snapshotUrls: 'https://i.gkd.li/i/18071067',
        },
      ],
    },
  ],
});
