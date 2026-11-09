// 来源: Lin-arm/GKD_subscription src/apps/npgl.jsitcx.xlpqi.ts
// 摘取类别: 开屏广告 / 全屏广告, 同步于 2026-11-09
// 重新导入: pnpm tsx scripts/import-ref.ts --force npgl.jsitcx.xlpqi
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'npgl.jsitcx.xlpqi',
  name: 'NP管理器',
  groups: [
    {
      key: 1,
      name: '全屏广告-弹窗广告',
      rules: [
        {
          key: 0,
          activityIds:
            'com.bytedance.sdk.openadsdk.stub.activity.Stub_Standard_Portrait_Activity',
          matches: '[text$="跳过"]',
          snapshotUrls: 'https://i.gkd.li/i/12799926',
        },
        {
          key: 1,
          activityIds:
            'com.bytedance.sdk.openadsdk.stub.activity.Stub_Standard_Portrait_Activity',
          matches:
            '@Image[id=null][text=""] < View + View +n [text="反馈"] +n View > View > TextView[text="广告"]',
          snapshotUrls: [
            'https://i.gkd.li/i/12799942',
            'https://i.gkd.li/i/12800095',
          ],
        },
      ],
    },
  ],
});
