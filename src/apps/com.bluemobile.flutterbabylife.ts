// 来源: Lin-arm/GKD_subscription src/apps/com.bluemobile.flutterbabylife.ts
// 摘取类别: 开屏广告 / 全屏广告, 同步于 2026-11-09
// 重新导入: pnpm tsx scripts/import-ref.ts --force com.bluemobile.flutterbabylife
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.bluemobile.flutterbabylife',
  name: '宝宝生活记录',
  groups: [
    {
      key: 1,
      name: '全屏广告-弹窗广告',
      matchTime: 10000,
      actionMaximum: 1,
      rules: [
        {
          key: 0,
          name: '字节SDK',
          activityIds:
            'com.bytedance.sdk.openadsdk.stub.activity.Stub_Standard_Portrait_Activity',
          matches:
            '@Image[childCount=0][text=""][width<60 && height<60] < View[childCount=1] + View +n View > View[childCount=1] > TextView[text$="广告"]',
          snapshotUrls: 'https://i.gkd.li/i/13632639',
        },
      ],
    },
  ],
});
