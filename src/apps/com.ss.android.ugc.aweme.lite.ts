// 来源: Lin-arm/GKD_subscription src/apps/com.ss.android.ugc.aweme.lite.ts
// 摘取类别: 开屏广告 / 全屏广告, 同步于 2026-11-09
// 重新导入: pnpm tsx scripts/import-ref.ts --force com.ss.android.ugc.aweme.lite
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.ss.android.ugc.aweme.lite',
  name: '抖音极速版',
  groups: [
    {
      key: 8,
      name: '全屏广告-朋友推荐弹窗',
      fastQuery: true,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          activityIds: 'com.ss.android.ugc.aweme.main.MainActivity',
          matches: '[text="朋友推荐"] +2 [vid="close"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13650523',
        },
      ],
    },
    {
      key: 11,
      name: '全屏广告',
      rules: [
        {
          key: 0,
          activityIds:
            'com.ss.android.ugc.aweme.live.LiveDummyHybridTransparentActivity',
          matches:
            '@Image[clickable=true][text!=null][width<100 && height<100] +4 View >2 [text="同意协议并查看额度"][visibleToUser=true]',
          snapshotUrls: 'https://i.gkd.li/i/23558501',
        },
        {
          key: 1,
          fastQuery: true,
          activityIds: 'com.ss.android.ugc.aweme.main.MainActivity',
          matches:
            '@UIView[text="不感兴趣"][clickable=true] +2 FlattenUIText[text="不感兴趣"]',
          snapshotUrls: 'https://i.gkd.li/i/24123937',
        },
        {
          key: 2,
          fastQuery: true,
          matchRoot: true,
          activityIds: 'com.ss.android.ugc.aweme.main.MainActivity',
          matches:
            '@ImageView[id=null][text=null][width<100][height<100] < ViewGroup[childCount>1] <2 LinearLayout < HorizontalScrollView < ScrollView < [childCount=1] < [childCount=1] < [childCount=1] < [childCount=1] < [childCount=1] < [childCount=1] < [childCount=1] < [vid="action_bar_root"]',
          snapshotUrls: [
            'https://i.gkd.li/i/25547227',
            'https://i.gkd.li/i/28449818',
          ],
        },
      ],
    },
    {
      key: 12,
      name: '全屏广告-添加桌面小组件',
      desc: 'x掉',
      rules: [
        {
          fastQuery: true,
          activityIds: 'com.ss.android.ugc.aweme.main.MainActivity',
          matches: '@ImageView[clickable=true] - [text$="桌面小组件"]',
          snapshotUrls: 'https://i.gkd.li/i/25208769',
        },
      ],
    },
  ],
});
