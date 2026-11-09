// 来源: Lin-arm/GKD_subscription src/apps/com.smile.gifmaker.ts
// 摘取类别: 开屏广告 / 全屏广告, 同步于 2026-11-09
// 重新导入: pnpm tsx scripts/import-ref.ts --force com.smile.gifmaker
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.smile.gifmaker',
  name: '快手',
  groups: [
    {
      key: 10,
      name: '全屏广告-红包弹窗',
      desc: '点击关闭',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      activityIds: 'com.yxcorp.gifshow.HomeActivity',
      rules: [
        {
          key: 1,
          name: '老友回归红包弹窗',
          matches:
            '@ImageView[id=null][clickable=true] + ViewGroup > [text!=null] + [text!=null]',
          snapshotUrls: [
            'https://i.gkd.li/i/12708649',
            'https://i.gkd.li/i/12708660',
          ],
        },
        {
          key: 2,
          name: '限时高额奖励弹窗',
          matches:
            '@ImageView[id=null][clickable=true] < ViewGroup + ViewGroup >2 [text="立即领取"]',
          snapshotUrls: 'https://i.gkd.li/i/12708681',
        },
        {
          key: 3,
          name: '新人红包弹窗',
          fastQuery: true,
          activityIds: 'com.yxcorp.plugin.search.SearchActivity', //搜索页
          matches:
            'ImageView[width<128] < [childCount=1] < @[clickable=true] - HorizontalScrollView >5 [text="恭喜你获得"]',
          snapshotUrls: 'https://i.gkd.li/i/32433383',
        },
      ],
    },
    {
      key: 14,
      name: '全屏广告-直播间广告',
      rules: [
        {
          fastQuery: true,
          action: 'back',
          activityIds:
            'com.kuaishou.live.core.basic.activity.LiveSlideActivity',
          matches: '[visibleToUser=true][text="幸运奖池"] <<n [vid="webView"]',
          exampleUrls:
            'https://m.gkd.li/57941037/338df1c2-8789-435b-8970-c837b00fc0f5',
          snapshotUrls: 'https://i.gkd.li/i/15629334',
        },
      ],
    },
  ],
});
