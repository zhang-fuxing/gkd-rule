// 来源: Lin-arm/GKD_subscription src/apps/com.upxjwb.xrq.ts
// 摘取类别: 开屏广告 / 全屏广告, 同步于 2026-11-09
// 重新导入: pnpm tsx scripts/import-ref.ts --force com.upxjwb.xrq
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.upxjwb.xrq',
  name: '番喜视频',
  groups: [
    {
      key: 1,
      name: '全屏广告',
      rules: [
        {
          key: 0,
          activityIds:
            'com.bytedance.sdk.openadsdk.stub.activity.Stub_Standard_Portrait_Activity',
          matches:
            '@Image[childCount=0][text=""][width<60 && height<60] < View[childCount=1] < * - View > [text="反馈"]',
          snapshotUrls: 'https://i.gkd.li/i/23519200',
        },
        {
          key: 1,
          activityIds:
            'com.bytedance.sdk.openadsdk.stub.activity.Stub_Standard_Portrait_Activity',
          matches:
            '[text="反馈"] +(1,2) View[childCount=1] > Image[childCount=0][text=""][width<60 && height<60]',
          exampleUrls: 'https://e.gkd.li/793d0e85-db69-4d31-bfd9-7ffbd518b962',
          snapshotUrls: 'https://i.gkd.li/i/23905532',
        },
      ],
    },
  ],
});
