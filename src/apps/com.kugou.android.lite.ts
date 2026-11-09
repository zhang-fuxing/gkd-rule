// 来源: Lin-arm/GKD_subscription src/apps/com.kugou.android.lite.ts
// 摘取类别: 开屏广告 / 全屏广告, 同步于 2026-11-09
// 重新导入: pnpm tsx scripts/import-ref.ts --force com.kugou.android.lite
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.kugou.android.lite',
  name: '酷狗概念版',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      matchTime: 10000,
      actionMaximum: 2, // https://github.com/Lin-arm/GKD_subscription/issues/248
      resetMatch: 'app',
      actionMaximumKey: 0,
      priorityTime: 10000,
      rules: [
        {
          key: 0,
          fastQuery: true,
          action: 'clickCenter', // https://github.com/Lin-arm/GKD_subscription/issues/417
          matches:
            '[text*="跳过"][text.length<10][width<500 && height<300][visibleToUser=true]',
          exampleUrls: 'https://e.gkd.li/94c7fc27-891f-4206-b933-f26661041b99',
          snapshotUrls: 'https://i.gkd.li/i/21451911',
        },
        {
          key: 1,
          matches: '[desc*="跳过"][desc.length<10][visibleToUser=true]',
          exampleUrls: 'https://e.gkd.li/7aa8bc5b-e14c-4cef-9eae-b89aac8ef459',
          snapshotUrls: 'https://i.gkd.li/i/21750055',
        },
      ],
    },
    {
      key: 2,
      name: '全屏广告',
      desc: '点击[x掉/狠心拒绝/放弃优惠]',
      fastQuery: true,
      activityIds: [
        'com.kugou.android.app.setting.YoungModeTipsActivity',
        'com.kugou.common.useraccount.app.KgUserLoginAndRegActivity',
        'com.kugou.android.app.MediaActivity',
      ],
      rules: [
        {
          key: 0,
          name: 'VIP已过期',
          anyMatches: [
            '[text*="已过期"] +n [text="放弃优惠" || text="狠心拒绝"]', // ①
            '@[text="狠心拒绝"] -n FrameLayout >3 [text*="已过期"]', // ②
          ],
          snapshotUrls: [
            'https://i.gkd.li/i/14321698',
            'https://i.gkd.li/i/25020137',
            'https://i.gkd.li/i/26031222',
            'https://i.gkd.li/i/25640086', // ②
          ],
          exampleUrls: 'https://e.gkd.li/1a5e5107-8e05-4031-873c-d3feed467cd7',
        },
        {
          key: 1,
          name: '弹窗-点击x掉',
          matches:
            '@ImageView[clickable=true][visibleToUser=true][childCount=0] <3 ViewGroup[childCount=3] < [id="android:id/content"]',
          snapshotUrls: [
            'https://i.gkd.li/i/14321700',
            'https://i.gkd.li/i/25018524',
            'https://i.gkd.li/i/27670397',
          ],
        },
        {
          key: 2,
          activityIds: 'com.kugou.android.app.MediaActivity',
          matches: '@[text*="跳过"] + [text*="广告"]',
          exampleUrls: 'https://e.gkd.li/64dd159b-bff5-4dff-a4b9-d63f5b34acb7',
          snapshotUrls: 'https://i.gkd.li/i/16407631',
        },
        {
          key: 3,
          activityIds: 'com.kugou.android.app.MediaActivity',
          matches:
            '@ImageView[clickable=true][width<170 && height<170] +n [text="领奖通知"]',
          snapshotUrls: 'https://i.gkd.li/i/27670451',
        },
        {
          key: 4,
          activityIds: 'com.kugou.android.app.MediaActivity',
          matches:
            '@ImageView[clickable=true][width<160 && height<160] <2 [childCount=3] < FrameLayout < LinearLayout < LinearLayout <2 LinearLayout < FrameLayout < FrameLayout <2 FrameLayout < [id="android:id/content"]',
          exampleUrls: 'https://e.gkd.li/0776da1e-3ff6-4fba-a7e9-de8fa1fe5344',
          snapshotUrls: 'https://i.gkd.li/i/23619626',
        },

        // 预留key, 无快查
        {
          key: 10,
          fastQuery: false,
          activityIds:
            'com.kugou.framework.musicfees.ui.feeintercept.FeeInterceptWebActivity',
          matches:
            'WebView > [id="body"] > [id="root"] >(2,3) [name$="TextView" || name$="Image"][index=0][width<131 && height<131][visibleToUser=true]',
          snapshotUrls: [
            'https://i.gkd.li/i/25022292',
            'https://i.gkd.li/i/27398903',
          ],
        },
      ],
    },
  ],
});
