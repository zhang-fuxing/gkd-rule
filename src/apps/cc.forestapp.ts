// 来源: Lin-arm/GKD_subscription src/apps/cc.forestapp.ts
// 摘取类别: 开屏广告 / 全屏广告, 同步于 2026-11-09
// 重新导入: pnpm tsx scripts/import-ref.ts --force cc.forestapp
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'cc.forestapp',
  name: 'Forest',
  groups: [
    {
      key: 1,
      name: '全屏广告',
      desc: '结束一次种植后概率弹出',
      rules: [
        {
          activityIds: 'com.google.android.gms.ads.AdActivity',
          matches: 'Button[clickable=true][desc="Skip" || desc="Close"]',
          snapshotUrls: [
            'https://i.gkd.li/i/33598870',
            'https://i.gkd.li/i/33598865',
          ],
          exampleUrls: 'https://e.gkd.li/fa5e8255-df84-4f36-b54f-c31a4331abdb',
        },
      ],
    },
  ],
});
