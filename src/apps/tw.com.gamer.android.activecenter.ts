// 来源: Lin-arm/GKD_subscription src/apps/tw.com.gamer.android.activecenter.ts
// 摘取类别: 开屏广告 / 全屏广告, 同步于 2026-11-09
// 重新导入: pnpm tsx scripts/import-ref.ts --force tw.com.gamer.android.activecenter
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'tw.com.gamer.android.activecenter',
  name: '巴哈姆特',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      priorityTime: 10000,
      rules: [
        {
          matches:
            '@ImageButton[desc="Interstitial close button"][visibleToUser=true] < FrameLayout <2 RelativeLayout < [id="android:id/content"]',
          snapshotUrls: 'https://i.gkd.li/i/14292691',
        },
      ],
    },
  ],
});
