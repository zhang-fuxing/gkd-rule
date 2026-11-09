// 来源: Lin-arm/GKD_subscription src/apps/com.citywithincity.ecard.ts
// 摘取类别: 开屏广告 / 全屏广告, 同步于 2026-11-09
// 重新导入: pnpm tsx scripts/import-ref.ts --force com.citywithincity.ecard
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.citywithincity.ecard',
  name: 'e通卡',
  groups: [
    {
      key: 1,
      name: '全屏广告-弹窗广告',
      desc: '点击x掉',
      rules: [
        {
          fastQuery: true,
          actionMaximum: 1, // 防止重复点击
          activityIds: '.EntryActivity',
          matches:
            '@ImageView[visibleToUser=true][width<119 && height<119] < [childCount=1] <2 ViewGroup < ViewGroup <2 [childCount=2] < ViewGroup < FrameLayout < [id="android:id/content"]',
          snapshotUrls: 'https://i.gkd.li/i/28448307',
        },
      ],
    },
  ],
});
