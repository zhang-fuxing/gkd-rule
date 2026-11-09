// 来源: Lin-arm/GKD_subscription src/apps/com.klcxkj.zqxy_kaihe.ts
// 摘取类别: 开屏广告 / 全屏广告, 同步于 2026-11-09
// 重新导入: pnpm tsx scripts/import-ref.ts --force com.klcxkj.zqxy_kaihe
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.klcxkj.zqxy_kaihe',
  name: '悦享校园',
  groups: [
    {
      key: 2,
      name: '全屏广告',
      fastQuery: true,
      rules: [
        {
          key: 0,
          activityIds: '.ui.ConsumeActivity',
          matches:
            'ImageView[childCount=0] < @[desc="top_close_button"][childCount=1][clickable=true] < ViewGroup + * > [text="广告"]',
          snapshotUrls: 'https://i.gkd.li/i/25931841',
          exampleUrls: 'https://e.gkd.li/578f3304-96d8-4e43-bfa9-07cd85ca6f8d',
        },
        {
          key: 1,
          activityIds: '.ui.ConsumeActivity',
          matches:
            '@ImageView[childCount=0][visibleToUser=true] < [index=parent.childCount.minus(1)][childCount=1] <n FrameLayout[childCount=3] < * +4 * > [text$="查看详情"]',
          snapshotUrls: 'https://i.gkd.li/i/25929002',
          exampleUrls: 'https://e.gkd.li/06e41609-81a1-4b71-bd32-d83b66afe247',
        },
        {
          key: 2, //字节sdk
          activityIds:
            'com.bytedance.sdk.openadsdk.stub.activity.Stub_Standard_Activity_T',
          matches:
            '@ImageView < * - FrameLayout >(2,3) [text*="第三方应用" || text*="扭动手机" || text*="点击" || text*="上滑" || text*="省钱好物" || text*="扭一扭"]',
          snapshotUrls: 'https://i.gkd.li/i/25935365',
          exampleUrls: 'https://e.gkd.li/029e1258-ef6c-4474-991b-7925d9e73e9e',
        },
        {
          key: 3,
          activityIds: 'com.beizi.ad.v2.activity.BeiZiNewInterstitialActivity',
          matches: '@[clickable=true] > [vid="beizi_interstitial_ad_close_iv"]',
          snapshotUrls: 'https://i.gkd.li/i/25929116',
          exampleUrls: 'https://e.gkd.li/cca3f65f-1441-4bd6-88da-e61c325f6340',
        },
        {
          key: 4, //字节sdk
          activityIds:
            'com.bytedance.sdk.openadsdk.stub.activity.Stub_Standard_Activity_T',
          matches:
            '@ImageView[width<85] < FrameLayout <2 FrameLayout <2 FrameLayout <2 * - FrameLayout > [text*="第三方应用" || text*="扭动" || text*="点击" || text*="上滑" || text*="省钱好物" || text*="扭一扭"]',
          snapshotUrls: 'https://i.gkd.li/i/25989677',
        },
        {
          key: 5, //字节sdk
          activityIds:
            'com.bytedance.sdk.openadsdk.stub.activity.Stub_Standard_Portrait_Activity',
          matches:
            '@Image[width<72] <<2 View <2 View < View <2 View <3 View <<8 FrameLayout <2 FrameLayout <<3 FrameLayout <3 FrameLayout <<2 [id="android:id/content"]',
          snapshotUrls: 'https://i.gkd.li/i/25991003',
        },
      ],
    },
  ],
});
