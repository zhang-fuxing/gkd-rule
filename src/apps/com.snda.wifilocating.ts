// 来源: Lin-arm/GKD_subscription src/apps/com.snda.wifilocating.ts
// 摘取类别: 开屏广告 / 全屏广告, 同步于 2026-11-09
// 重新导入: pnpm tsx scripts/import-ref.ts --force com.snda.wifilocating
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.snda.wifilocating',
  name: 'WiFi万能钥匙',
  groups: [
    {
      key: 1,
      name: '全屏广告-弹窗广告',
      desc: '点击关闭',
      rules: [
        {
          key: 0,
          fastQuery: true,
          activityIds: 'com.lantern.start.main.activity.HomeMainActivity',
          matches: '[vid="interstitial_close_iv"]',
          snapshotUrls: 'https://i.gkd.li/i/14032794',
        },
        {
          key: 1,
          activityIds:
            'com.bytedance.sdk.openadsdk.stub.activity.Stub_Standard_Portrait_Activity',
          matches: '[text="反馈"] + View[visibleToUser=true]',
          snapshotUrls: 'https://i.gkd.li/i/14256643',
        },
        {
          key: 2,
          fastQuery: true,
          activityIds: 'com.zm.wfsdk.core.activity.WfInterstitialActivity',
          matches:
            '@[vid="wf_interstitial_close_iv"] < * >5 [vid="wf_interstitial_action_tv"]',
          snapshotUrls: [
            'https://i.gkd.li/i/14927523',
            'https://i.gkd.li/i/15320417',
          ],
        },
        {
          key: 3,
          fastQuery: true,
          activityIds: 'com.wifitutu.ui.main.MainActivity',
          matches:
            '@ImageView[childCount=0][text=null][desc=null][id=null][visibleToUser=true][width<90 && height<90] < FrameLayout[childCount=1][text=null][desc=null][id=null][parent.childCount>3] <n FrameLayout >(2,3) [text^="立即" || text$="详情" || text^="了解" || text="去微信看看" || text$="应用" || text="进入小程序" || text="领取优惠" || text="跳转微信"]',
          snapshotUrls: 'https://i.gkd.li/i/14964913',
        },
      ],
    },
    {
      key: 2,
      name: '全屏广告-连接WiFi后弹出的广告',
      desc: '点击关闭',
      rules: [
        {
          key: 0,
          fastQuery: true,
          activityIds: 'com.wifitutu.ui.tools.SpeedUpBActivity',
          matches: '[vid="native_express_close_proxy"]',
          snapshotUrls: 'https://i.gkd.li/i/14622506',
        },
      ],
    },
  ],
});
