// 来源: Lin-arm/GKD_subscription src/apps/com.mj.mjyd.ts
// 摘取类别: 开屏广告 / 全屏广告, 同步于 2026-11-09
// 重新导入: pnpm tsx scripts/import-ref.ts --force com.mj.mjyd
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.mj.mjyd',
  name: '追漫大全',
  groups: [
    {
      key: 1,
      name: '全屏广告-弹窗广告',
      rules: [
        {
          fastQuery: true,
          activityIds:
            'com.bytedance.sdk.openadsdk.stub.activity.Stub_Standard_Activity_T',
          matches:
            '@ImageView < FrameLayout[childCount=1] <3 FrameLayout[childCount=5] <3 FrameLayout[childCount=5] >3 [text="立即下载"]',
          snapshotUrls: 'https://i.gkd.li/i/12895086',
        },
      ],
    },
  ],
});
