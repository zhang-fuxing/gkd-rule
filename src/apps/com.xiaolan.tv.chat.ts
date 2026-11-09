// 来源: Lin-arm/GKD_subscription src/apps/com.xiaolan.tv.chat.ts
// 摘取类别: 开屏广告 / 全屏广告, 同步于 2026-11-09
// 重新导入: pnpm tsx scripts/import-ref.ts --force com.xiaolan.tv.chat
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.xiaolan.tv.chat',
  name: '真不卡',
  groups: [
    {
      key: 4,
      name: '全屏广告-弹窗广告',
      desc: '点击关闭',
      rules: [
        {
          activityIds:
            'com.bytedance.sdk.openadsdk.stub.activity.Stub_Standard_Portrait_Activity',
          matches:
            '[text="反馈"] + @View[childCount=1] > Image[childCount=0][text=""]',
          exampleUrls: 'https://e.gkd.li/bbb19188-567d-4e5c-8ffd-f9576b5e1188',
          snapshotUrls: 'https://i.gkd.li/i/16476933',
        },
      ],
    },
  ],
});
