// 来源: Lin-arm/GKD_subscription src/apps/com.bide.haoyoukan.buhaokan.kanbukan.hiiik.ts
// 摘取类别: 开屏广告 / 全屏广告, 同步于 2026-11-09
// 重新导入: pnpm tsx scripts/import-ref.ts --force com.bide.haoyoukan.buhaokan.kanbukan.hiiik
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.bide.haoyoukan.buhaokan.kanbukan.hiiik',
  name: '追剧喵',
  groups: [
    {
      key: 2,
      name: '全屏广告',
      desc: '点击关闭',
      rules: [
        {
          fastQuery: true,
          matches:
            '@ImageView[childCount=0][text=null][desc=null][id=null][visibleToUser=true][width<90 && height<90] < FrameLayout[childCount=1][text=null][desc=null][id=null][parent.childCount>3] <n FrameLayout >(2,3) [text^="立即" || text$="详情" || text^="了解" || text="去微信看看" || text$="应用" || text="进入小程序" || text="领取优惠" || text="跳转微信"]',
          exampleUrls: 'https://e.gkd.li/cd3a468f-0768-4fd6-952b-c0d5a9769486',
          snapshotUrls: 'https://i.gkd.li/i/23598268',
        },
      ],
    },
  ],
});
