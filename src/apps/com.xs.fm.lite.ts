// 来源: Lin-arm/GKD_subscription src/apps/com.xs.fm.lite.ts
// 摘取类别: 开屏广告 / 全屏广告, 同步于 2026-11-09
// 重新导入: pnpm tsx scripts/import-ref.ts --force com.xs.fm.lite
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.xs.fm.lite',
  name: '番茄音乐（原畅听音乐）',
  groups: [
    {
      key: 1,
      name: '全屏广告',
      rules: [
        {
          key: 0,
          fastQuery: true,
          activityIds: [
            'com.dragon.read.pages.main.MainFragmentActivity',
            'com.bytedance.polaris.impl.view.BulletSingleContainerActivity',
          ],
          matches:
            '@FlattenUIImage[clickable=true] -(1,2) FlattenUIText[text="开心收下" || text="前往领取"][visibleToUser=true]',
          snapshotUrls: [
            'https://i.gkd.li/i/25246321',
            'https://i.gkd.li/i/25246625',
            'https://i.gkd.li/i/25245765',
          ],
        },
        {
          key: 1,
          fastQuery: true,
          activityIds: 'com.dragon.read.pages.main.MainFragmentActivity',
          matches:
            '@ImageView[clickable=true] - [text="添加番茄音乐组件"][visibleToUser=true]',
          snapshotUrls: 'https://i.gkd.li/i/25246270',
        },
        {
          key: 2,
          fastQuery: true,
          activityIds: 'com.dragon.read.pages.main.MainFragmentActivity',
          matches:
            '@ImageView[clickable=true] <3 ViewGroup[childCount=3] < ViewGroup < [id="android:id/content"]',
          snapshotUrls: 'https://i.gkd.li/i/24908945',
        },
        {
          key: 3,
          fastQuery: true,
          activityIds:
            'com.bytedance.polaris.impl.view.BulletSingleContainerActivity',
          matches: '@[text="狠心离开"] - FrameLayout > [text="立即领取"]',
          snapshotUrls: 'https://i.gkd.li/i/25367580',
        },
      ],
    },
  ],
});
