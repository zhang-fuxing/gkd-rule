// 来源: Lin-arm/GKD_subscription src/apps/com.maque.app.ts
// 摘取类别: 开屏广告 / 全屏广告, 同步于 2026-11-09
// 重新导入: pnpm tsx scripts/import-ref.ts --force com.maque.app
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.maque.app',
  name: '麻雀省钱',
  groups: [
    {
      key: 1,
      name: '全屏广告-首页活动弹窗',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          activityIds: 'com.uzmap.pkg.EntranceActivity',
          matches:
            'ViewGroup[childCount=2] > ImageView[clickable=true] + ViewGroup[clickable=true][childCount=1] > ImageView[id=null][clickable=false]',
          snapshotUrls: 'https://i.gkd.li/i/12640100',
        },
      ],
    },
  ],
});
