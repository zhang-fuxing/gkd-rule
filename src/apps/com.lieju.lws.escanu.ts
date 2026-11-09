// 来源: Lin-arm/GKD_subscription src/apps/com.lieju.lws.escanu.ts
// 摘取类别: 开屏广告 / 全屏广告, 同步于 2026-11-09
// 重新导入: pnpm tsx scripts/import-ref.ts --force com.lieju.lws.escanu
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.lieju.lws.escanu',
  name: '易视看',
  groups: [
    {
      key: 2,
      name: '全屏广告-弹窗广告',
      desc: '点击关闭',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          key: 0,
          activityIds: [
            'com.jooan.qiaoanzhilian.ali.view.main_page.NewMainDeviceListActivity',
            'com.bytedance.sdk.openadsdk.stub.activity.Stub_Standard_Portrait_Activity',
          ],
          matches:
            '@ImageView[childCount=0][text=null][desc=null][id=null][visibleToUser=true][width<90 && height<90] < FrameLayout[childCount=1][text=null][desc=null][id=null] - FrameLayout[childCount>2] >3 [text^="立即" || text$="应用" || text="了解更多" || text="查看详情"]',
          exampleUrls: 'https://e.gkd.li/4bd02512-bc63-4242-b3c5-c68d97b89f2d',
          snapshotUrls: [
            'https://i.gkd.li/i/17930503',
            'https://i.gkd.li/i/17931003',
          ],
        },
        {
          key: 1,
          activityIds:
            'com.jooan.qiaoanzhilian.ui.activity.gun_ball.GunBallCameraPlayerNewActivity',
          matches:
            '@ImageView[childCount=0][text=null][desc=null][id=null][visibleToUser=true][width<90 && height<90] < FrameLayout[childCount=1][text=null][desc=null][id=null][parent.childCount>3] <n FrameLayout >(2,3) [text^="立即" || text$="详情" || text^="了解" || text="去微信看看" || text$="应用" || text="进入小程序" || text="领取优惠" || text="跳转微信"]',
          exampleUrls: 'https://e.gkd.li/96f6fb24-37c6-4b3e-89e3-91c4279c7221',
          snapshotUrls: 'https://i.gkd.li/i/17930496',
        },
      ],
    },
  ],
});
