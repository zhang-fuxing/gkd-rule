// 来源: Lin-arm/GKD_subscription src/apps/com.pleasure.trace_wechat.ts
// 摘取类别: 开屏广告 / 全屏广告, 同步于 2026-11-09
// 重新导入: pnpm tsx scripts/import-ref.ts --force com.pleasure.trace_wechat
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.pleasure.trace_wechat',
  name: '微拾',
  groups: [
    {
      key: 11,
      name: '全屏广告-弹窗广告',
      rules: [
        {
          activityIds:
            'com.bytedance.sdk.openadsdk.stub.activity.Stub_Standard_Portrait_Activity',
          matches: '[text="反馈"] -2 @View > Image',
          snapshotUrls: 'https://i.gkd.li/i/13479468',
        },
      ],
    },
  ],
});
