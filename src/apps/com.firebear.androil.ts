// 来源: Lin-arm/GKD_subscription src/apps/com.firebear.androil.ts
// 摘取类别: 开屏广告 / 全屏广告, 同步于 2026-11-09
// 重新导入: pnpm tsx scripts/import-ref.ts --force com.firebear.androil
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.firebear.androil',
  name: '小熊油耗',
  groups: [
    {
      key: 1,
      name: '全屏广告',
      desc: '来自第三方SDK"穿山甲"',
      activityIds:
        'com.bytedance.sdk.openadsdk.stub.activity.Stub_Standard_Portrait_Activity',
      rules: [
        {
          key: 0,
          name: '点击右上角x',
          matches: '[text="反馈"] +2 View > Image',
          snapshotUrls: [
            'https://i.gkd.li/i/12754919',
            'https://i.gkd.li/i/13324698',
          ],
        },
        {
          key: 1,
          name: '点击右上角[数字s|跳过]',
          matches: '[text="广告"] + View >4 [text="| 跳过"]',
          snapshotUrls: ['https://i.gkd.li/i/12864214'],
        },
        {
          key: 2,
          name: '点击右上角x (2)',
          matches: '[id="com.byted.pangle.m:id/tt_reward_full_count_down"]',
          snapshotUrls: ['https://i.gkd.li/i/13175439'],
        },
      ],
    },
  ],
});
