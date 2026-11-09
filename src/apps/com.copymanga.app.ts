// 来源: Lin-arm/GKD_subscription src/apps/com.copymanga.app.ts
// 摘取类别: 开屏广告 / 全屏广告, 同步于 2026-11-09
// 重新导入: pnpm tsx scripts/import-ref.ts --force com.copymanga.app
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.copymanga.app',
  name: '拷貝漫畫',
  groups: [
    {
      key: 1,
      name: '全屏广告-弹窗广告',
      fastQuery: true,
      rules: [
        {
          key: 0,
          name: '快手广告-1',
          activityIds: 'com.miui.home.launcher.Launcher',
          matches:
            '@ImageView[clickable=true][width<78] <n [visibleToUser=true] -2 * >2 [text="广告"]',
          snapshotUrls: 'https://i.gkd.li/i/13259085',
        },
        {
          key: 1,
          name: '快手广告-2',
          activityIds: ['.MainActivity', 'com.kwad.components.ad.interstitial'],
          matches:
            'ImageView[childCount=0][text=null] < @ViewGroup[childCount=1][clickable=true][visibleToUser=true] < ViewGroup +n ViewGroup[childCount=2] > [text="广告"]',
          snapshotUrls: [
            'https://i.gkd.li/i/13625486',
            'https://i.gkd.li/i/12504488',
            'https://i.gkd.li/i/13344156',
          ],
        },
        {
          key: 2,
          name: '快手广告-3',
          activityIds: '.MainActivity',
          matches: [
            'ViewGroup > [text="广告"]',
            '@ViewGroup[clickable=true] > [text="跳过"]',
          ],
          snapshotUrls: 'https://i.gkd.li/i/13696292',
        },
        {
          key: 3,
          name: '腾讯广告-1',
          actionDelay: 400, //目标节点不是 [clickable=true] 的,加一点延迟
          activityIds: '.MainActivity',
          matches:
            '@ImageView[childCount=0][text=null][desc=null][id=null][visibleToUser=true][width<90 && height<90] < FrameLayout[childCount=1][text=null][desc=null][id=null][parent.childCount>3] <n FrameLayout >(2,3) [text^="立即" || text$="详情" || text^="了解" || text="去微信看看" || text$="应用" || text="进入小程序" || text="领取优惠" || text="跳转微信"]',
          snapshotUrls: [
            'https://i.gkd.li/i/12504520',
            'https://i.gkd.li/i/12661019',
            'https://i.gkd.li/i/13193877',
            'https://i.gkd.li/i/12892156',
            'https://i.gkd.li/i/12504501',
            'https://i.gkd.li/i/13259082',
          ],
        },
        {
          key: 4,
          name: '腾讯广告-2',
          actionDelay: 400,
          matches:
            '@ImageView[childCount=0][text=null][desc=null][id=null][visibleToUser=true][width<90 && height<90] < FrameLayout[childCount=1][text=null][desc=null][id=null] - FrameLayout[childCount>2] >3 [text^="立即" || text$="应用" || text="了解更多" || text="查看详情"]',
          snapshotUrls: 'https://i.gkd.li/i/13246786',
        },
        {
          key: 5,
          name: '腾讯广告-3',
          activityIds: '.MainActivity',
          matches: '[vid="interact_ad_root"] > [vid="iv_close"]',
          snapshotUrls: [
            'https://i.gkd.li/i/13521801',
            'https://i.gkd.li/i/13332719',
          ],
        },
        {
          key: 6,
          name: '腾讯广告-4',
          actionDelay: 400,
          matches:
            '@ImageView[childCount=0][text=null][visibleToUser=true] < FrameLayout[childCount=1] <2 FrameLayout[childCount=2] <2 FrameLayout[childCount=2] <2 FrameLayout[childCount=2] - FrameLayout > [text^="扭动或点击"]',
          snapshotUrls: 'https://i.gkd.li/i/13233178',
        },
        {
          key: 7,
          name: '字节广告-1',
          activityIds:
            'com.bytedance.sdk.openadsdk.stub.activity.Stub_Standard_Portrait_Activity',
          matches:
            '@View[clickable=true] < FrameLayout[desc*="close"] +4 FrameLayout[desc!=null] >2 [text="反馈"]',
          snapshotUrls: 'https://i.gkd.li/i/13372542',
        },
        {
          key: 8,
          activityIds: 'com.beizi.ad.v2.activity.BeiZiNewInterstitialActivity',
          matches:
            '@[clickable=true] > ImageView[vid="beizi_interstitial_ad_close_iv"]',
          snapshotUrls: 'https://i.gkd.li/i/25049918',
        },
        {
          key: 9,
          name: '字节广告-3',
          actionDelay: 400,
          activityIds:
            'com.bytedance.sdk.openadsdk.stub.activity.Stub_Standard_Portrait_Activity',
          matches:
            '@Image[childCount=0][text=""][width<60 && height<60] < View[childCount=1] + View +n View > View[childCount=1] > TextView[text$="广告"]',
          snapshotUrls: [
            'https://i.gkd.li/i/12925052',
            'https://i.gkd.li/i/12925095',
          ],
        },
        {
          key: 10,
          name: '百度广告-1',
          activityIds: 'com.baidu.mobads.sdk.api.MobRewardVideoActivity',
          matches:
            '@ImageView[clickable=true][width<134 && height<134] <n RelativeLayout >(1,3) [text="反馈"]',
          snapshotUrls: [
            'https://i.gkd.li/i/25189723',
            'https://i.gkd.li/i/33947096',
          ],
        },
        {
          key: 11,
          // activityIds: null,  // #282
          matches: '[vid="ad_close"]',
          snapshotUrls: 'https://i.gkd.li/i/30617190',
        },
      ],
    },
    {
      key: 3,
      name: '全屏广告-关闭赞助提示',
      activityIds: '.MainActivity',
      rules: [
        {
          matches: '@[desc="就这样吧"] + [desc^="赞助免广告"]',
          snapshotUrls: 'https://i.gkd.li/i/12851627',
        },
      ],
    },
  ],
});
