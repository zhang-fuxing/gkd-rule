// 来源: Lin-arm/GKD_subscription src/apps/com.hyww.wisdomtree.ts
// 摘取类别: 开屏广告 / 全屏广告, 同步于 2026-11-09
// 重新导入: pnpm tsx scripts/import-ref.ts --force com.hyww.wisdomtree
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.hyww.wisdomtree',
  name: '智慧树',
  groups: [
    {
      key: 1,
      name: '全屏广告',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          key: 0,
          name: '百度广告',
          fastQuery: true,
          activityIds: 'com.baidu.mobads.sdk.api.MobRewardVideoActivity',
          matches:
            '@ImageView[clickable=true][childCount=0] + RelativeLayout >(1,2) [text="反馈"]',
          snapshotUrls: [
            'https://i.gkd.li/i/13799876',
            'https://i.gkd.li/i/13852024',
          ],
        },
      ],
    },
  ],
});
