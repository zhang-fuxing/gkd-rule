// 来源: Lin-arm/GKD_subscription src/apps/com.yaxisvip.pubgtool.iueg.ts
// 摘取类别: 开屏广告 / 全屏广告, 同步于 2026-11-09
// 重新导入: pnpm tsx scripts/import-ref.ts --force com.yaxisvip.pubgtool.iueg
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.yaxisvip.pubgtool.iueg',
  name: '次元城动画',
  groups: [
    {
      key: 2,
      name: '全屏广告',
      rules: [
        {
          activityIds:
            'com.bytedance.sdk.openadsdk.stub.activity.Stub_Standard_Portrait_Activity',
          matches:
            '@Image[childCount=0][text=""] < View[childCount=1] < View[childCount=1] - View[childCount=1] > [text="反馈"][visibleToUser=true]',
          snapshotUrls: 'https://i.gkd.li/i/24331009',
        },
      ],
    },
  ],
});
