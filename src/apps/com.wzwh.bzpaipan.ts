// 来源: Lin-arm/GKD_subscription src/apps/com.wzwh.bzpaipan.ts
// 摘取类别: 开屏广告 / 全屏广告, 同步于 2026-11-09
// 重新导入: pnpm tsx scripts/import-ref.ts --force com.wzwh.bzpaipan
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.wzwh.bzpaipan',
  name: '问真八字排盘',
  groups: [
    {
      key: 3,
      name: '全屏广告',
      rules: [
        {
          fastQuery: true,
          activityIds: 'com.qq.e.ads.PortraitADActivity',
          matches:
            '@ImageView[clickable=true] < LinearLayout[childCount=1] <2 FrameLayout[childCount=2] < [id="android:id/content"][childCount=1]',
          snapshotUrls: 'https://i.gkd.li/i/13162912',
        },
      ],
    },
  ],
});
