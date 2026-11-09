// 来源: Lin-arm/GKD_subscription src/apps/com.zb.sph.zaobaosingapore.ts
// 摘取类别: 开屏广告 / 全屏广告, 同步于 2026-11-09
// 重新导入: pnpm tsx scripts/import-ref.ts --force com.zb.sph.zaobaosingapore
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.zb.sph.zaobaosingapore',
  name: '联合早报',
  groups: [
    {
      key: 1,
      name: '开屏广告',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      priorityTime: 10000,
      rules: [
        {
          activityIds: 'com.google.android.gms.ads.AdActivity',
          matches:
            '[id="mys-content"] > View[childCount=2] > View[index=1][childCount=1] > Button[clickable=true][childCount=0][visibleToUser=true][text=""]',
          exampleUrls: 'https://e.gkd.li/6892e4e4-a765-415d-9c23-5587472b6f6e',
          snapshotUrls: 'https://i.gkd.li/i/18297111',
        },
      ],
    },
  ],
});
