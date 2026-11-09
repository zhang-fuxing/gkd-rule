// 来源: Lin-arm/GKD_subscription src/apps/com.paget96.batteryguru.ts
// 摘取类别: 开屏广告 / 全屏广告, 同步于 2026-11-09
// 重新导入: pnpm tsx scripts/import-ref.ts --force com.paget96.batteryguru
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.paget96.batteryguru',
  name: 'Battery Guru',
  groups: [
    {
      key: 2,
      name: '全屏广告',
      desc: '点击关闭',
      rules: [
        {
          key: 0,
          activityIds: 'com.google.android.gms.ads.AdActivity',
          matches:
            '[id="ad_container"] >3 [id="video_container"] >3 Button[clickable=true][childCount=0][id=null][text=""][visibleToUser=true]',
          exampleUrls: 'https://e.gkd.li/40c72a7b-3e68-496f-a993-43ab9c759cbd',
          snapshotUrls: 'https://i.gkd.li/i/23417592',
        },
        {
          key: 1,
          activityIds: '.activities.IntroActivity',
          matches:
            '@Button[clickable=true][childCount=0][id=null] < View[childCount=1] <3 View - [id="app-interstitial-slot"] >2 [id="abgcp"]',
          snapshotUrls: 'https://i.gkd.li/i/23416244',
        },
      ],
    },
  ],
});
