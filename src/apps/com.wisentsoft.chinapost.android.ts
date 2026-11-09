// 来源: Lin-arm/GKD_subscription src/apps/com.wisentsoft.chinapost.android.ts
// 摘取类别: 开屏广告 / 全屏广告, 同步于 2026-11-09
// 重新导入: pnpm tsx scripts/import-ref.ts --force com.wisentsoft.chinapost.android
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.wisentsoft.chinapost.android',
  name: '中国邮政',
  groups: [
    {
      key: 1,
      name: '全屏广告-首页弹窗',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          matches:
            '@ImageView[clickable=true] <2 LinearLayout <3 ViewGroup < [vid="ll_main"]',
          snapshotUrls: 'https://i.gkd.li/i/15914347',
        },
      ],
    },
  ],
});
