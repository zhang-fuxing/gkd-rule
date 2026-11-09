// 来源: Lin-arm/GKD_subscription src/apps/com.zhiliaoapp.musically.ts
// 摘取类别: 开屏广告 / 全屏广告, 同步于 2026-11-09
// 重新导入: pnpm tsx scripts/import-ref.ts --force com.zhiliaoapp.musically
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.zhiliaoapp.musically',
  name: 'TikTok',
  groups: [
    {
      key: 1,
      name: '全屏广告-弹窗广告',
      desc: '点击关闭',
      fastQuery: true,
      rules: [
        {
          key: 0,
          activityIds: 'com.ss.android.ugc.aweme.main.MainActivity',
          matches:
            'RelativeLayout[childCount=2] > @ImageView[index=1][clickable=true] <<n [id="android:id/custom"]',
          snapshotUrls: 'https://i.gkd.li/i/15144780',
        },
        {
          key: 1,
          activityIds: 'com.ss.android.ugc.aweme.main.MainActivity',
          matches:
            '@UIView[clickable=true] -3 FlattenUIText[text="Get products"]',
          snapshotUrls: 'https://i.gkd.li/i/16190364',
        },
      ],
    },
    {
      key: 4,
      name: '全屏广告-好友推荐弹窗',
      desc: '点击关闭',
      rules: [
        {
          fastQuery: true,
          activityIds: 'com.ss.android.ugc.aweme.main.MainActivity',
          matches: '@ImageView[clickable=true] - [text="关注你的好友"]',
          exampleUrls: 'https://e.gkd.li/32069d2d-032c-4278-9ead-a48a464ecdd0',
          snapshotUrls: 'https://i.gkd.li/i/16247893',
        },
      ],
    },
  ],
});
