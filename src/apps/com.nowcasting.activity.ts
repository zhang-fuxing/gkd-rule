// 来源: Lin-arm/GKD_subscription src/apps/com.nowcasting.activity.ts
// 摘取类别: 开屏广告 / 全屏广告, 同步于 2026-11-09
// 重新导入: pnpm tsx scripts/import-ref.ts --force com.nowcasting.activity
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.nowcasting.activity',
  name: '彩云天气',
  groups: [
    {
      key: 1,
      name: '全屏广告-VIP弹窗广告',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          fastQuery: true,
          activityIds: '.WeatherActivity',
          matches: '[vid="iv_close"]',
          snapshotUrls: 'https://i.gkd.li/i/13405130',
        },
      ],
    },
    {
      key: 2,
      name: '全屏广告-弹窗广告',
      fastQuery: true,
      activityIds: '.WeatherActivity',
      rules: [
        {
          key: 0,
          matches:
            '@ImageView[childCount=0][text=null][desc=null][id=null][visibleToUser=true][width<90 && height<90] < FrameLayout[childCount=1][text=null][desc=null][id=null][parent.childCount>3] <n FrameLayout >(2,3) [text^="立即" || text$="详情" || text^="了解" || text="去微信看看" || text$="应用" || text="进入小程序" || text="领取优惠" || text="跳转微信"]',
          snapshotUrls: [
            'https://i.gkd.li/i/13405131',
            'https://i.gkd.li/i/14814345',
          ],
        },
        {
          key: 1,
          matches:
            'ImageView[childCount=0] < @ViewGroup[clickable=true][childCount=1] < ViewGroup <5 ViewGroup + ViewGroup [text="广告"]',
          snapshotUrls: 'https://i.gkd.li/i/14814374',
        },
        {
          key: 2,
          matches: '[vid="entrance_image"] + [vid="close"]',
          exampleUrls: 'https://e.gkd.li/bd53a023-f83a-45ae-b58e-c7369f29bb2e',
          snapshotUrls: 'https://i.gkd.li/i/16965108',
        },
      ],
    },
  ],
});
