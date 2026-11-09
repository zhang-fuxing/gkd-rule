// 来源: Lin-arm/GKD_subscription src/apps/com.clggjv.xcjfmd.ffo.ts
// 摘取类别: 开屏广告 / 全屏广告, 同步于 2026-11-09
// 重新导入: pnpm tsx scripts/import-ref.ts --force com.clggjv.xcjfmd.ffo
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.clggjv.xcjfmd.ffo',
  name: 'Lanerc',
  groups: [
    {
      key: 2,
      name: '全屏广告-弹窗广告',
      desc: '倒计时结束后点击[暂时跳过]',
      rules: [
        {
          fastQuery: true,
          matchRoot: true,
          // forcedTime: 14000, // 这个主动查询需要常驻,耗电情况未知
          activityIds: '.MainActivity',
          matches:
            '@View[desc*="\\n暂时跳过\\n"][childCount=4][desc!=null][desc.length>20] <<6 FrameLayout < [id="android:id/content"]',
          snapshotUrls: 'https://i.gkd.li/i/29703246',
          excludeSnapshotUrls: 'https://i.gkd.li/i/29703192', // 倒计时ing...
          exampleUrls: 'https://e.gkd.li/93c04052-3d24-4684-83ec-ccaf13557f22',
        },
      ],
    },
  ],
});
