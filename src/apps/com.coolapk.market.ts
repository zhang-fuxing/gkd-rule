// 来源: Lin-arm/GKD_subscription src/apps/com.coolapk.market.ts
// 摘取类别: 开屏广告 / 全屏广告, 同步于 2026-11-09
// 重新导入: pnpm tsx scripts/import-ref.ts --force com.coolapk.market
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.coolapk.market',
  name: '酷安',
  groups: [
    {
      key: -1,
      name: '开屏广告',
      fastQuery: true,
      matchTime: 10000,
      resetMatch: 'app',
      priorityTime: 10000,
      excludeActivityIds: [
        // '.view.search.', // 在搜索页面禁用
        '.view.feed.', // 在动态页面禁用
        '.view.node.DynamicNodePageActivity',
      ],
      rules: [
        {
          key: 0,
          actionMaximum: 1,
          matches:
            '@View[text=null][clickable=true][childCount=0][visibleToUser=true][width<200&&height<200] +(1,2) TextView[index=parent.childCount.minus(1)][childCount=0] <n FrameLayout[childCount>2][text=null][desc=null] >(n+6) [text*="第三方应用" || text*="扭动手机" || text*="点击或上滑" || text*="省钱好物" || text*="扭一扭" || text*="Shake"]',
          snapshotUrls: [
            'https://i.gkd.li/i/13247610',
            'https://i.gkd.li/i/13264779',
            'https://i.gkd.li/i/13826359',
            'https://i.gkd.li/i/13827095',
            'https://i.gkd.li/i/32639518',
          ],
        },
        {
          key: 1,
          actionMaximum: 1,
          matches:
            'TextView - @View[clickable=true][width<200] <(2,3) FrameLayout <2 FrameLayout < FrameLayout < [vid="ad_container"]',
          snapshotUrls: 'https://i.gkd.li/i/30529874',
        },
        {
          key: 2,
          actionCd: 300, //可能需点击多次,让二次触发快点
          actionMaximum: 5, // issues#252
          excludeMatches: '[text*="搜索"]',
          matches:
            '[text*="跳过" || text*="Skip"][!(vid="text_view" || vid="title_view")][text.length<10][width<500 && height<300][visibleToUser=true]',
          snapshotUrls: [
            'https://i.gkd.li/i/12917990',
            'https://i.gkd.li/i/13211392',
            'https://i.gkd.li/i/23097140',
            'https://i.gkd.li/i/25498455', //Eng
            'https://i.gkd.li/i/26328668', // .view.splash.SplashAdActivity
          ],
          excludeSnapshotUrls: [
            'https://i.gkd.li/i/13247733', //排除 vid="text_view" , 搜索页 .view.splash.SplashAdActivity
            'https://i.gkd.li/i/13296816', //排除 vid="title_view"
            'https://i.gkd.li/i/18245546', //排除 vid="title_view"
            'https://i.gkd.li/i/33674023', //排除 vid="title_view"
          ],
        },
        {
          key: 3,
          actionMaximum: 1,
          actionMaximumKey: 0,
          matches:
            '@ImageView[childCount=0] < ViewGroup < ViewGroup +(2,3) ViewGroup >2 [text="广告"][visibleToUser=true]',
          snapshotUrls: [
            'https://i.gkd.li/i/27078867',
            'https://i.gkd.li/i/27380329',
          ],
        },
      ],
    },
  ],
});
