// 来源: Lin-arm/GKD_subscription src/apps/com.zhx.wisdomtree.ts
// 摘取类别: 开屏广告 / 全屏广告, 同步于 2026-11-09
// 重新导入: pnpm tsx scripts/import-ref.ts --force com.zhx.wisdomtree
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.zhx.wisdomtree',
  name: '智慧树家长端',
  groups: [
    {
      key: 2,
      name: '全屏广告-弹窗广告',
      desc: '点击关闭',
      rules: [
        {
          key: 0,
          activityIds:
            'com.bytedance.sdk.openadsdk.stub.activity.Stub_Standard_Portrait_Activity',
          matches:
            '@View[childCount=1][visibleToUser=true] < View[childCount=1][visibleToUser=true] + View[childCount=1][visibleToUser=true] > [text="反馈"]',
          exampleUrls: 'https://e.gkd.li/708daddf-5d9b-4cc9-977f-ba48c3f33ba3',
          snapshotUrls: 'https://i.gkd.li/i/20074568',
        },
        {
          key: 1,
          activityIds:
            'com.bytedance.sdk.openadsdk.stub.activity.Stub_Standard_Portrait_Activity',
          matches:
            '@Image[childCount=0][text=""][width<60 && height<60] < View[childCount=1] + View +n View > View[childCount=1] > TextView[text$="广告"]',
          exampleUrls: 'https://e.gkd.li/f6c1c4ec-56d8-4c02-a66d-42a005bb196c',
          snapshotUrls: 'https://i.gkd.li/i/20095481',
        },
        {
          key: 2,
          fastQuery: true,
          activityIds: 'net.hyww.wisdomtree.parent.common.MainActivity',
          matches:
            '@ImageView[childCount=0][text=null][desc=null][id=null][visibleToUser=true][width<90 && height<90] < FrameLayout[childCount=1][text=null][desc=null][id=null] <2 FrameLayout[childCount=5] + FrameLayout[childCount=2] > [text^="立即" || text$="详情" || text^="了解" || text="去逛逛" || text="去微信看看" || text$="应用" || text="进入小程序" || text="领取优惠" || text="跳转微信"]',
          exampleUrls: 'https://e.gkd.li/c72c44bc-a16a-4929-8aa6-457893c1254f',
          snapshotUrls: 'https://i.gkd.li/i/20154496',
        },
        {
          key: 3,
          fastQuery: true,
          activityIds: 'net.hyww.wisdomtree.parent.common.MainActivity',
          matches:
            '@ImageView[childCount=0][text=null][desc=null][id=null][visibleToUser=true][width<90 && height<90] < FrameLayout[childCount=1][text=null][desc=null][id=null][parent.childCount>3] <n FrameLayout >(2,3) [text^="立即" || text$="详情" || text^="了解" || text="去微信看看" || text$="应用" || text="进入小程序" || text="领取优惠" || text="跳转微信"]',
          exampleUrls: 'https://e.gkd.li/91f3f0d3-d424-4e06-99a2-8e31dd71df41',
          snapshotUrls: 'https://i.gkd.li/i/20154499',
        },
        {
          key: 4,
          fastQuery: true,
          activityIds: 'net.hyww.wisdomtree.parent.common.MainActivity',
          matches:
            '@ImageView[childCount=0][text=null][desc=null][id=null][visibleToUser=true][width<90 && height<90] < FrameLayout[childCount=1][text=null][desc=null][id=null] - FrameLayout[childCount>2] >3 [text^="立即" || text$="应用" || text="了解更多" || text="查看详情"]',
          exampleUrls: 'https://e.gkd.li/c24edc78-83d6-4a73-a555-fd69635a92b8',
          snapshotUrls: 'https://i.gkd.li/i/20154500',
        },
      ],
    },
  ],
});
