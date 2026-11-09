// 来源: Lin-arm/GKD_subscription src/apps/cn.luowice.anxiaojia.ts
// 摘取类别: 开屏广告 / 全屏广告, 同步于 2026-11-09
// 重新导入: pnpm tsx scripts/import-ref.ts --force cn.luowice.anxiaojia
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'cn.luowice.anxiaojia',
  name: '安小家',
  groups: [
    {
      key: 1,
      name: '全屏广告-弹窗广告',
      desc: '点击x掉',
      fastQuery: true,
      activityIds: 'com.example.anxiaojia.MainActivity',
      rules: [
        {
          key: 1,
          matches: '@[vid="leyou_tv_close"] - [vid="leyou_iv_ad"]',
          snapshotUrls: 'https://i.gkd.li/i/32037567',
        },
        {
          key: 2,
          matches:
            'ImageView - @FrameLayout[childCount=1] - LinearLayout[index=0] >3 [text*="跳转至"][text*="或"][text.length>10]',
          snapshotUrls: [
            'https://i.gkd.li/i/31909890',
            'https://i.gkd.li/i/31909892',
          ],
          exampleUrls: 'https://e.gkd.li/3e1be68a-42b7-4b76-8f37-5e1686131c07',
        },
        {
          key: 3,
          matches:
            '@[clickable=true][id*="close"] +n [visibleToUser=true] > [text="广告"]',
          snapshotUrls: 'https://i.gkd.li/i/32418085',
        },
        {
          key: 4,
          matches:
            '@View[id=""][text=null][clickable=true][width<107][height<107] - ImageView[width>540] < [childCount=2] < View < View < View < FrameLayout < [id="android:id/content"]',
          snapshotUrls: 'https://i.gkd.li/i/27126440',
        },

        // 其他 activityId
        {
          key: 10,
          forcedTime: 10000,
          activityIds: 'com.byazt.az.Stub_Standard_Portrait_Activity',
          matches:
            '@ImageView[width<71] < [visibleToUser=true] < [childCount=1] < [childCount=1] <2 [childCount=2] >6 [text="点击到落地页或三方APP"]',
          snapshotUrls: 'https://i.gkd.li/i/32418708',
        },
        {
          key: 11,
          activityIds: [
            'com.byazt.x.Stub_Standard_Portrait_Activity',
            'com.byazt.az.Stub_Standard_Portrait_Activity',
          ],
          matches:
            '@Image[width<72] < View < View - View > [visibleToUser=true][text="反馈"]', //无快查
          snapshotUrls: [
            'https://i.gkd.li/i/30507034',
            'https://i.gkd.li/i/32418089',
          ],
        },
        {
          key: 12,
          activityIds: 'cj.mobile.fw.activity.PtgInteractionPortraitActivity',
          matches: '[vid="closeAdvertLayout"]',
          snapshotUrls: 'https://i.gkd.li/i/32036987',
        },
        {
          key: 13,
          activityIds: 'com.beizi.ad.v2.activity.BeiZiNewInterstitialActivity',
          matches: '[vid="beizi_interstitial_ad_close_container_rl"]',
          snapshotUrls: 'https://i.gkd.li/i/32038130',
        },
      ],
    },
  ],
});
