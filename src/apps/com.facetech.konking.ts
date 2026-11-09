// 来源: Lin-arm/GKD_subscription src/apps/com.facetech.konking.ts
// 摘取类别: 开屏广告 / 全屏广告, 同步于 2026-11-09
// 重新导入: pnpm tsx scripts/import-ref.ts --force com.facetech.konking
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.facetech.konking',
  name: '人民日报',
  groups: [
    {
      key: 1,
      name: '全屏广告-弹窗广告',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          activityIds:
            'com.bytedance.sdk.openadsdk.stub.activity.Stub_Standard_Portrait_Activity',
          matches:
            '@Image[text=""] < View +n View > View > TextView[text="广告"]',
          snapshotUrls: 'https://i.gkd.li/i/12841081',
        },
      ],
    },
  ],
});
