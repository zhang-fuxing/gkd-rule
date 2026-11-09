// 来源: Lin-arm/GKD_subscription src/apps/com.zjwh.android_wh_physicalfitness.ts
// 摘取类别: 开屏广告 / 全屏广告, 同步于 2026-11-09
// 重新导入: pnpm tsx scripts/import-ref.ts --force com.zjwh.android_wh_physicalfitness
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.zjwh.android_wh_physicalfitness',
  name: '运动世界',
  groups: [
    {
      key: 1,
      name: '全屏广告-弹窗广告',
      desc: '点击关闭',
      rules: [
        {
          key: 0,
          fastQuery: true,
          matches: '[vid="iv_close" || vid="ad_close"][clickable=true]',
          snapshotUrls: [
            'https://i.gkd.li/i/12673231',
            'https://i.gkd.li/i/12673523',
            'https://i.gkd.li/i/13166472',
            'https://i.gkd.li/i/22437128',
            'https://i.gkd.li/i/22449070',
            'https://i.gkd.li/i/22495266',
            'https://i.gkd.li/i/22495298',
            'https://i.gkd.li/i/22495361',
            'https://i.gkd.li/i/22508959',
          ],
        },
        {
          key: 1,
          fastQuery: true,
          activityIds: ['.activity.HomeActivity', '.mvi.home.HomeActivity'],
          matches:
            '@ImageView[childCount=0][text=null][desc=null][id=null][visibleToUser=true][width<90 && height<90] < FrameLayout[childCount=1][text=null][desc=null][id=null] <2 FrameLayout[childCount=5] + FrameLayout[childCount=2] > [text^="立即" || text$="详情" || text^="了解" || text="去逛逛" || text="去微信看看" || text$="应用" || text="进入小程序" || text="领取优惠" || text="跳转微信"]',
          exampleUrls: 'https://e.gkd.li/a7753ec9-5382-42ee-9a41-b4e2b61b9050',
          snapshotUrls: 'https://i.gkd.li/i/17355585',
        },
        {
          key: 2,
          fastQuery: true,
          activityIds: [
            '.activity.HomeActivity',
            '.ui.AdActivity',
            '.mvi.home.HomeActivity',
          ],
          matches:
            'ImageView[childCount=0] < @ViewGroup[clickable=true][childCount=1][visibleToUser=true] < ViewGroup <n ViewGroup <n ViewGroup  >n [text="广告"]',
          exampleUrls: 'https://e.gkd.li/cb21dc41-bcca-47ec-ae0a-df9aedde48b5',
          snapshotUrls: [
            'https://i.gkd.li/i/12826124',
            'https://i.gkd.li/i/13228216',
            'https://i.gkd.li/i/13601132',
            'https://i.gkd.li/i/22427117',
          ],
        },
        {
          key: 3,
          fastQuery: true,
          activityIds: 'com.baidu.mobads.sdk.api.MobRewardVideoActivity',
          matches:
            '@ImageView[clickable=true][width<110 && height<110] - RelativeLayout >(1,2) [text="反馈"]',
          exampleUrls: 'https://e.gkd.li/6882bcf4-1aa1-47e1-b7ad-299d4aa7bfd9',
          snapshotUrls: [
            'https://i.gkd.li/i/13554229',
            'https://i.gkd.li/i/22960459',
          ],
        },
        {
          key: 4,
          activityIds: '.activity.SplashActivity',
          matches:
            '@[text="跳过"][clickable=true] +3 RelativeLayout >2 [text="点击跳转至第三方页面"]',
          snapshotUrls: 'https://i.gkd.li/i/12673349',
        },
        {
          key: 5,
          fastQuery: true,
          activityIds: [
            '.activity.HomeActivity',
            '.mvi.home.HomeActivity',
            '.mvi.run.RunHistoryDetailActivity',
          ],
          matches:
            '@ImageView[childCount=0] < FrameLayout[childCount=1] <2 FrameLayout[childCount=2] <2 FrameLayout[childCount=2] <2 FrameLayout[childCount=2] - FrameLayout > [text^="扭动或点击"]',
          exampleUrls: 'https://e.gkd.li/2debed48-37f2-43ec-8b0f-3a5e06c23ed1',
          snapshotUrls: [
            'https://i.gkd.li/i/17378546',
            'https://i.gkd.li/i/23145860',
            'https://i.gkd.li/i/25904078',
          ],
        },
        {
          key: 6,
          fastQuery: true,
          activityIds: [
            '.activity.HomeActivity',
            '.mvi.home.HomeActivity',
            '.mvi.notice.NoticeListActivity',
          ],
          matches:
            '@ImageView[childCount=0][text=null][desc=null][id=null][visibleToUser=true][width<90 && height<90] < FrameLayout[childCount=1][text=null][desc=null][id=null][parent.childCount>3] <n FrameLayout >(2,3) [text^="立即" || text$="详情" || text^="了解" || text="去微信看看" || text$="应用" || text="进入小程序" || text="领取优惠" || text="跳转微信"]',
          exampleUrls: 'https://e.gkd.li/f640d0c2-197d-45ef-98ff-58a04920bd2d',
          snapshotUrls: [
            'https://i.gkd.li/i/17358027',
            'https://i.gkd.li/i/23206013',
            'https://i.gkd.li/i/23455815',
          ],
        },
        {
          key: 7,
          activityIds:
            'com.bytedance.sdk.openadsdk.stub.activity.Stub_Standard_Portrait_Activity',
          matches:
            '@Image[childCount=0][width<80 && height<80] < View[childCount=1] < View[childCount=1] - View[childCount=1] > [visibleToUser=true][text="反馈"]',
          snapshotUrls: 'https://i.gkd.li/i/22946236',
        },
        {
          key: 8,
          fastQuery: true,
          activityIds: 'com.baidu.mobads.sdk.api.MobRewardVideoActivity',
          matches:
            '@ImageView[clickable=true][width<100 && height<100] <2 RelativeLayout < RelativeLayout < RelativeLayout < RelativeLayout < [id="android:id/content"]',
          snapshotUrls: 'https://i.gkd.li/i/22946242',
        },
        {
          key: 9,
          fastQuery: true,
          activityIds: '.mvi.home.HomeActivity',
          matches:
            '@Image[text=""][childCount=0][width<70 && height<70] < View[childCount=1] + * >2 [childCount=0][text="淘宝精选广告"] <<n [vid="fl_native"]',
          snapshotUrls: 'https://i.gkd.li/i/23254520',
        },
        {
          key: 10,
          fastQuery: true,
          matches:
            '@[desc="top_close_button"][clickable=true] <<n * + * >(1,3) [text="广告"]',
          snapshotUrls: [
            'https://i.gkd.li/i/23255102',
            'https://i.gkd.li/i/32145596',
          ],
        },
        {
          key: 11,
          name: '字节-关闭悬浮球可继续浏览应用',
          fastQuery: true,
          activityIds: [
            'com.bytedance.sdk.openadsdk.core.component.reward.activity.TTFullScreenVideoActivity',
            'com.byazt.qde.Stub_Standard_Portrait_Activity',
            'com.byazt.cef.Stub_Standard_Portrait_Activity',
          ],
          matches:
            '@ImageView[visibleToUser=true][width<100 && height<100] < * < [childCount=1] < ViewGroup <2 [childCount=2] >6 [text*="落地页" || text*="三方APP"]',
          snapshotUrls: [
            'https://i.gkd.li/i/28790670',
            'https://i.gkd.li/i/28834493',
            'https://i.gkd.li/i/33345377',
          ],
        },
        {
          key: 12,
          fastQuery: true,
          activityIds: '.mvi.home.HomeActivity',
          matches:
            '@ImageView[childCount=0][text=null][desc=null][id=null][visibleToUser=true][width<90 && height<90] < FrameLayout[childCount=1][text=null][desc=null][id=null][parent.childCount>3] <n * +n FrameLayout >(2,3) [text^="立即" || text$="详情" || text*="了解" || text="去微信看看" || text$="应用" || text="进入小程序" || text="领取优惠" || text="跳转微信"]',
          snapshotUrls: 'https://i.gkd.li/i/32145803',
        },
        {
          key: 13,
          fastQuery: true,
          activityIds: 'com.baidu.mobads.sdk.api.MobRewardVideoActivity',
          matches:
            '@ImageView[clickable=true][visibleToUser=true][width<110 && height<110] + RelativeLayout >(2,3) [text="反馈"]',
          snapshotUrls: [
            'https://i.gkd.li/i/33430048',
            'https://i.gkd.li/i/33430738',
            'https://i.gkd.li/i/34107321',
          ],
        },
        {
          key: 14,
          fastQuery: true,
          activityIds: 'com.baidu.mobads.sdk.api.MobRewardVideoActivity',
          matches:
            '@ImageView[clickable=true][visibleToUser=true] + ImageView[clickable=true] + [text="点击或滑动查看奖励"]',
          snapshotUrls: 'https://i.gkd.li/i/33430738',
        },
        {
          key: 15,
          fastQuery: true,
          activityIds: 'com.baidu.mobads.sdk.api.MobRewardVideoActivity',
          matches:
            '@ImageView[clickable=true][visibleToUser=true][width<110 && height<110] - [text="反馈"]',
          snapshotUrls: 'https://i.gkd.li/i/33430746',
        },
      ],
    },
  ],
});
