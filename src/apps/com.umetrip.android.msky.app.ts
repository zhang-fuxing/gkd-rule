// 来源: Lin-arm/GKD_subscription src/apps/com.umetrip.android.msky.app.ts
// 摘取类别: 开屏广告 / 全屏广告, 同步于 2026-11-09
// 重新导入: pnpm tsx scripts/import-ref.ts --force com.umetrip.android.msky.app
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.umetrip.android.msky.app',
  name: '航旅纵横',
  groups: [
    {
      key: 12,
      name: '全屏广告',
      rules: [
        {
          fastQuery: true,
          matchTime: 10000,
          actionMaximum: 1,
          resetMatch: 'app',
          matches:
            '@ImageView[clickable=true][childCount=0][visibleToUser=true][width=height] < FrameLayout <2 FrameLayout <3 FrameLayout < [vid="operation_dialog_weex_view"]',
          snapshotUrls: 'https://i.gkd.li/i/24706615',
        },
      ],
    },
  ],
});
