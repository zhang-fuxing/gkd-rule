// 来源: Lin-arm/GKD_subscription src/apps/com.tencent.qqlive.ts
// 摘取类别: 开屏广告 / 全屏广告, 同步于 2026-11-09
// 重新导入: pnpm tsx scripts/import-ref.ts --force com.tencent.qqlive
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.tencent.qqlive',
  name: '腾讯视频',
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
          matches: 'TextView[text*="跳过"][text.length<=10]',
          snapshotUrls: 'https://i.gkd.li/i/14049316',
        },
      ],
    },
    {
      key: 4,
      name: '全屏广告-视频播放时的广告',
      desc: '自动点击 跳过/关闭广告',
      activityIds: [
        '.ona.activity.VideoDetailActivity',
        '.kmm.VideoDetailKmmActivityBk',
      ],
      rules: [
        {
          key: 2,
          name: '全屏广告2',
          fastQuery: true,
          matches:
            '[text$="关闭广告" || text="关闭VIP热剧推荐"][clickable=true]',
          snapshotUrls: [
            'https://i.gkd.li/i/13526547',
            'https://i.gkd.li/i/20691266',
            'https://i.gkd.li/i/21152927',
          ],
        },
        {
          key: 3,
          name: '居中广告-1',
          fastQuery: true,
          matches:
            '@ImageView[clickable=true][childCount=0][width<150&&height<150] - * >(3,4) [text^="摇动或点击" || text*="应用" || text*="立即" || text*="下载" || text*="了解" || text*="查看" || text*="详情" || text="去微信看看"][visibleToUser=true]',
          snapshotUrls: [
            'https://i.gkd.li/i/18476380',
            'https://i.gkd.li/i/18476384',
            'https://i.gkd.li/i/19667827',
          ],
        },
        {
          key: 4,
          name: '居中广告-2',
          fastQuery: true,
          matches:
            '@ImageView[clickable=true][childCount=0] +2 [text^="摇动或点击" || text*="应用" || text*="立即" || text*="下载" || text*="了解" || text*="查看" || text*="详情" || text="去微信看看" || text*="小程序"][visibleToUser=true]',
          exampleUrls: 'https://e.gkd.li/4bf0ff94-239d-4b43-900f-a375b44922e0',
          snapshotUrls: [
            'https://i.gkd.li/i/13946107',
            'https://i.gkd.li/i/14318385',
            'https://i.gkd.li/i/18476383',
            'https://i.gkd.li/i/20038310',
            'https://i.gkd.li/i/24689566',
          ],
        },
        {
          key: 5,
          fastQuery: true,
          matches:
            '@View[clickable=true][childCount=0][width<100 && height<100] <8 View < DetachableComposeView < FrameLayout <2 [id="android:id/content"]',
          exampleUrls: 'https://e.gkd.li/b0f4982a-ac12-481c-bccb-f8b7a8b14c46',
          snapshotUrls: 'https://i.gkd.li/i/21175698',
        },
      ],
    },
    {
      key: 6,
      name: '全屏广告-弹窗广告',
      matchTime: 10000,
      actionMaximum: 1,
      rules: [
        {
          key: 0,
          fastQuery: true,
          activityIds: '.redpacket.rain.OpenRedPacketActivity',
          matches:
            '@ImageView[clickable=true] < ViewGroup[childCount=5] < [id="android:id/content"]',
          exampleUrls:
            'https://m.gkd.li/57941037/05606ba5-1a89-470c-bcca-bd52561a634d',
          snapshotUrls: 'https://i.gkd.li/i/13842643',
        },
        {
          key: 1,
          fastQuery: true,
          activityIds: '.ona.activity.SplashHomeActivity',
          matches: '@RelativeLayout[clickable=true] + * >3 [text="立即预约"]',
          exampleUrls:
            'https://m.gkd.li/57941037/c8131a06-837a-4c42-9a70-9e8a7fe21334',
          snapshotUrls: 'https://i.gkd.li/i/14567294',
        },
        {
          key: 2,
          fastQuery: true,
          activityIds: '.ona.activity.SplashHomeActivity',
          matches:
            '@ImageView[clickable=true][visibleToUser=true] -3 LinearLayout >2 [text="立即免费领取"]',
          exampleUrls: 'https://e.gkd.li/8b128ebc-ce9c-4345-8094-769f9afa8cd6',
          snapshotUrls: 'https://i.gkd.li/i/17088095',
        },
        {
          key: 3,
          fastQuery: true,
          activityIds: '.ona.activity.SplashHomeActivity',
          matches: '[text="暂不需要，稍后领取"][visibleToUser=true]',
          exampleUrls: 'https://e.gkd.li/3256ed8e-752c-426d-9d64-26c9fdea9b09',
          snapshotUrls: 'https://i.gkd.li/i/17542869',
        },
        {
          key: 4,
          fastQuery: true,
          activityIds: '.ona.activity.VideoDetailActivity',
          matches: '[text="放弃权益"][visibleToUser=true]',
          exampleUrls: 'https://e.gkd.li/37d3d077-1d3b-4b4d-87c2-4e0fa00d423e',
          snapshotUrls: 'https://i.gkd.li/i/19666924',
        },
        {
          key: 5,
          fastQuery: true,
          activityIds: '.ona.activity.SplashHomeActivity',
          matches:
            '@ImageView[clickable=true][childCount=0][visibleToUser=true][width<200 && height<200] <2 RelativeLayout < RelativeLayout < RelativeLayout < [id="android:id/content"]',
          exampleUrls: 'https://e.gkd.li/afb17212-1dcb-4d07-a9ce-b4f775ccd6fc',
          snapshotUrls: 'https://i.gkd.li/i/19666714',
        },
        {
          key: 6,
          fastQuery: true,
          activityIds: '.ona.activity.SplashHomeActivity',
          matches:
            'TextView[text^="暂不需要"] < @View[clickable=true] <6 View < ComposeView < FrameLayout <2 FrameLayout < FrameLayout <2 FrameLayout <2 [id="android:id/content"]',
          exampleUrls: 'https://e.gkd.li/4f48767f-9cfa-4507-89ab-eb24f483d05e',
          snapshotUrls: 'https://i.gkd.li/i/20148077',
        },
        {
          key: 7,
          activityIds: '.ona.activity.origin.OriginIconHomeActivity',
          matches:
            '@TextView[text="x"][clickable=true][childCount=0] + View >2 [text^="下载并领取"][visibleToUser=true]',
          exampleUrls: 'https://e.gkd.li/3a524370-1dbc-4017-a357-6728f809bd9c',
          snapshotUrls: 'https://i.gkd.li/i/23763930',
        },
      ],
    },
  ],
});
