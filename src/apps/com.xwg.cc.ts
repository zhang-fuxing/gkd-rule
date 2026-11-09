// 来源: Lin-arm/GKD_subscription src/apps/com.xwg.cc.ts
// 摘取类别: 开屏广告 / 全屏广告, 同步于 2026-11-09
// 重新导入: pnpm tsx scripts/import-ref.ts --force com.xwg.cc
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.xwg.cc',
  name: '希望谷',
  groups: [
    {
      key: 1,
      name: '全屏广告',
      rules: [
        {
          fastQuery: true,
          activityIds: '.ui.other.YLHAdvertActivity',
          matches:
            '@ImageView[childCount=0][text=null][visibleToUser=true] < FrameLayout[childCount=1] <2 FrameLayout[childCount=2] <2 FrameLayout[childCount=2] <2 FrameLayout[childCount=2] - FrameLayout > [text^="扭动或点击"]',
          exampleUrls: 'https://e.gkd.li/ed6e343a-7a53-4d22-84b8-a2da1da5b241',
          snapshotUrls: 'https://i.gkd.li/i/23228410',
        },
      ],
    },
  ],
});
