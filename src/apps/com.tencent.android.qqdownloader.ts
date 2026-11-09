// 来源: Lin-arm/GKD_subscription src/apps/com.tencent.android.qqdownloader.ts
// 摘取类别: 开屏广告 / 全屏广告, 同步于 2026-11-09
// 重新导入: pnpm tsx scripts/import-ref.ts --force com.tencent.android.qqdownloader
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.tencent.android.qqdownloader',
  name: '应用宝',
  groups: [
    {
      key: 2,
      name: '全屏广告-签到弹窗',
      desc: 'x掉',
      rules: [
        {
          fastQuery: true,
          actionMaximum: 1,
          resetMatch: 'app',
          // activityIds: null,
          matches:
            '@ImageView[width<78 && height<78] - FrameLayout - ImageView[width=getPrev(6).width] < FrameLayout[childCount>4][visibleToUser=true] < * < * < * < * < * < [id="android:id/content"]',
          snapshotUrls: 'https://i.gkd.li/i/32254247',
          exampleUrls: 'https://e.gkd.li/32251ef1-ea42-428d-8814-2b75cce47d57',
        },
      ],
    },
  ],
});
