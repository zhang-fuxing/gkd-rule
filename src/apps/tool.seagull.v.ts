// 来源: Lin-arm/GKD_subscription src/apps/tool.seagull.v.ts
// 摘取类别: 开屏广告 / 全屏广告, 同步于 2026-11-09
// 重新导入: pnpm tsx scripts/import-ref.ts --force tool.seagull.v
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'tool.seagull.v',
  name: '海鸥加速器',
  groups: [
    {
      key: 2,
      name: '全屏广告-谷歌广告',
      rules: [
        {
          key: 0,
          name: '谷歌广告-1',
          activityIds: [
            'io.github.trojan_gfw.igniter.MainActivity',
            'com.google.android.gms.ads.AdActivity',
          ],
          matches:
            '[desc="OPEN" || desc="開啟"] - @View[clickable=true][visibleToUser=true] > [text="关闭"]',
          snapshotUrls: [
            'https://i.gkd.li/i/13426255',
            'https://i.gkd.li/i/13459399',
          ],
        },
        {
          key: 1,
          name: '谷歌广告-2',
          activityIds: 'com.google.android.gms.ads.AdActivity',
          matches:
            '@Button[clickable=true][childCount=0] < View[childCount=1] <2 View[childCount=2] - View >3 [desc="開啟"]',
          snapshotUrls: 'https://i.gkd.li/i/13476799',
        },
        {
          key: 2,
          name: '谷歌广告-3',
          activityIds: 'com.google.android.gms.ads.AdActivity',
          matches: '[desc="Interstitial close button"]',
          snapshotUrls: 'https://i.gkd.li/i/13476579',
        },
      ],
    },
  ],
});
