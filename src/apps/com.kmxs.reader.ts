// 来源: Lin-arm/GKD_subscription src/apps/com.kmxs.reader.ts
// 摘取类别: 开屏广告 / 全屏广告, 同步于 2026-11-09
// 重新导入: pnpm tsx scripts/import-ref.ts --force com.kmxs.reader
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.kmxs.reader',
  name: '七猫免费小说',
  groups: [
    {
      key: 3,
      name: '全屏广告-阅读结束后显示的广告',
      fastQuery: true,
      activityIds: 'org.geometerplus.android.fbreader.FBReader',
      rules: [
        {
          matches: '[vid="ad_direct_close"]',
          snapshotUrls: [
            'https://i.gkd.li/i/12640303',
            'https://i.gkd.li/i/13362269',
            'https://i.gkd.li/i/13362272',
          ],
        },
      ],
    },
    {
      key: 4,
      name: '全屏广告-签到弹窗',
      activityIds: 'org.geometerplus.android.fbreader.FBReader',
      rules:
        '@TextView[id=null] < View +(2) TextView[text^="已连签"&&text*="天"]',
      snapshotUrls: ['https://i.gkd.li/i/12640320'],
    },
    {
      key: 5,
      name: '全屏广告-字节视频广告',
      desc: '点击关闭',
      actionDelay: 300,
      rules: [
        {
          key: 0,
          activityIds:
            'com.bytedance.sdk.openadsdk.stub.activity.Stub_Standard_Portrait_Activity',
          matches: '[text*="跳过"][text.length<=10]',
          snapshotUrls: [
            'https://i.gkd.li/i/13459157',
            'https://i.gkd.li/i/13459172',
            'https://i.gkd.li/i/13459174',
          ],
        },
        {
          key: 1,
          activityIds:
            'com.bytedance.sdk.openadsdk.stub.activity.Stub_Standard_Portrait_Activity',
          fastQuery: true,
          matches:
            '[id="com.byted.pangle:id/tt_reward_full_count_down_after_close"]',
          snapshotUrls: 'https://i.gkd.li/i/13459182',
        },
        {
          key: 2,
          fastQuery: true,
          activityIds: 'com.baidu.mobads.sdk.api.MobRewardVideoActivity',
          matches:
            '@ImageView[clickable=true][visibleToUser=true][childCount=0] <3 RelativeLayout[childCount=4] < [id="android:id/content"]',
          snapshotUrls: 'https://i.gkd.li/i/13472957',
        },
        {
          key: 3,
          fastQuery: true,
          activityIds: 'com.qq.e.ads.PortraitADActivity',
          matches:
            '@ImageView[visibleToUser=true][childCount=0] < FrameLayout[childCount=1] < FrameLayout[childCount=1] + FrameLayout >3 [text^="摇动或点击"]',
          snapshotUrls: 'https://i.gkd.li/i/13472955',
        },
      ],
    },
    {
      key: 9,
      name: '全屏广告-今日专属推荐弹窗',
      desc: '点击关闭',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          fastQuery: true,
          matches: '[vid="close"]',
          snapshotUrls: 'https://i.gkd.li/i/13941276',
        },
      ],
    },
  ],
});
