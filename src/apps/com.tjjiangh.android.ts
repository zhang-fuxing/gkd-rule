// 来源: Lin-arm/GKD_subscription src/apps/com.tjjiangh.android.ts
// 摘取类别: 开屏广告 / 全屏广告, 同步于 2026-11-09
// 重新导入: pnpm tsx scripts/import-ref.ts --force com.tjjiangh.android
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.tjjiangh.android',
  name: '橘汁',
  groups: [
    {
      key: 1,
      name: '全屏广告',
      rules: [
        {
          key: 0,
          name: '腾讯广告',
          fastQuery: true,
          activityIds: 'com.hive.MainTabActivity',
          matches:
            '@ImageView[childCount=0][text=null][desc=null][id=null][visibleToUser=true][width<90 && height<90] < FrameLayout[childCount=1][text=null][desc=null][id=null][parent.childCount>3] <n FrameLayout >(2,3) [text^="立即" || text$="详情" || text^="了解" || text="去微信看看" || text$="应用" || text="进入小程序" || text="领取优惠" || text="跳转微信"]',
          snapshotUrls: 'https://i.gkd.li/i/27005905',
        },
        {
          key: 1,
          name: '京东广告',
          fastQuery: true,
          activityIds: 'com.hive.MainTabActivity',
          matches:
            '@ImageView[childCount=0][text=null][visibleToUser=true] < FrameLayout[childCount=1] <2 FrameLayout[childCount=2] <2 FrameLayout[childCount=2] <2 FrameLayout[childCount=2] - FrameLayout > [text^="扭动或点击"]',
          snapshotUrls: 'https://i.gkd.li/i/27006505',
        },
      ],
    },
  ],
});
