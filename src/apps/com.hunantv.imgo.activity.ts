// 来源: Lin-arm/GKD_subscription src/apps/com.hunantv.imgo.activity.ts
// 摘取类别: 开屏广告 / 全屏广告, 同步于 2026-11-09
// 重新导入: pnpm tsx scripts/import-ref.ts --force com.hunantv.imgo.activity
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.hunantv.imgo.activity',
  name: '芒果TV',
  groups: [
    {
      key: 2,
      name: '全屏广告-弹窗广告',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          key: 0,
          activityIds: '.MainActivity',
          matches: '[vid="imgPromotion"] + [vid="vClosePromotionView"]',
          snapshotUrls: 'https://i.gkd.li/i/12818464',
        },
        {
          key: 1,
          activityIds: '.MainActivity',
          matches: '@TextView[id=null][text=""] - View > Image[id="hotGif"]',
          snapshotUrls: 'https://i.gkd.li/i/12818528',
        },
        {
          key: 2,
          activityIds: '.MainActivity',
          fastQuery: true,
          matches: '[vid="ivPromotion"] + [vid="btnClose"]',
          snapshotUrls: 'https://i.gkd.li/i/13761169',
        },
      ],
    },
    {
      key: 4,
      name: '全屏广告-视频播放时的广告',
      desc: '点击[关闭广告]',
      rules: [
        {
          key: 0,
          fastQuery: true,
          activityIds: 'com.mgtv.ui.videoplay.MGVideoPlayActivity',
          matches: '[text="关闭广告"][clickable=true][visibleToUser=true]',
          exampleUrls:
            'https://m.gkd.li/57941037/386d0906-f81f-43d2-af7f-adc3ab0ea5a6',
          snapshotUrls: 'https://i.gkd.li/i/14322017',
        },
      ],
    },
  ],
});
