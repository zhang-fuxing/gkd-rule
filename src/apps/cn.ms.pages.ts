// 来源: Lin-arm/GKD_subscription src/apps/cn.ms.pages.ts
// 摘取类别: 开屏广告 / 全屏广告, 同步于 2026-11-09
// 重新导入: pnpm tsx scripts/import-ref.ts --force cn.ms.pages
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'cn.ms.pages',
  name: '飞鸟听书',
  groups: [
    {
      key: 1,
      name: '全屏广告-弹窗广告',
      rules: [
        {
          key: 0,
          name: '字节广告',
          activityIds:
            'com.bytedance.sdk.openadsdk.stub.activity.Stub_Standard_Portrait_Activity',
          matches:
            '@Image[text=""] < View +n View > View > TextView[text="广告"]',
          snapshotUrls: 'https://i.gkd.li/i/13450787',
        },
        {
          key: 1,
          fastQuery: true,
          activityIds: '.ActivityLingPai',
          matches:
            'ImageView < @ViewGroup[clickable=true] < ViewGroup +n ViewGroup [text="广告"]',
          snapshotUrls: 'https://i.gkd.li/i/16136277',
        },
        {
          key: 2,
          fastQuery: true,
          activityIds: '.ActivityLingPai',
          matches: ['[text="广告"]', '[text="跳过"]'],
          snapshotUrls: 'https://i.gkd.li/i/16136271',
        },
        {
          key: 3,
          activityIds:
            'com.bytedance.sdk.openadsdk.stub.activity.Stub_Standard_Portrait_Activity',
          matches: '[text="反馈"] +3 View > [text$="跳过"]',
          snapshotUrls: 'https://i.gkd.li/i/16136260',
        },
      ],
    },
  ],
});
