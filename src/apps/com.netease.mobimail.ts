// 来源: Lin-arm/GKD_subscription src/apps/com.netease.mobimail.ts
// 摘取类别: 开屏广告 / 全屏广告, 同步于 2026-11-09
// 重新导入: pnpm tsx scripts/import-ref.ts --force com.netease.mobimail
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.netease.mobimail',
  name: '网易邮箱',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      actionMaximumKey: 0,
      priorityTime: 10000,
      rules: [
        {
          key: 0,
          fastQuery: true,
          matches: '[text*="跳过"][text.length<=10][!(vid="ad_skip")]',
          snapshotUrls: [
            'https://i.gkd.li/i/12686132',
            'https://i.gkd.li/i/13328441',
            'https://i.gkd.li/i/13800060',
          ],
        },
        {
          key: 1,
          fastQuery: true,
          anyMatches: [
            '@View[text=null][clickable=true][childCount=0][visibleToUser=true][width<200&&height<200] +(1,2) TextView[index=parent.childCount.minus(1)][childCount=0] <n FrameLayout[childCount>2][text=null][desc=null] >(n+6) [text*="第三方应用" || text*="扭动手机" || text*="点击或上滑" || text*="省钱好物" || text*="扭一扭"][visibleToUser=true]',
            'FrameLayout > FrameLayout[childCount>2][text=null][desc=null] > @View[text=null][clickable=true][childCount=0][visibleToUser=true][width<200&&height<200] +(1,2) TextView[index=parent.childCount.minus(1)][childCount=0][visibleToUser=true]',
          ],
          snapshotUrls: 'https://i.gkd.li/i/12686093',
        },
        {
          key: 2,
          fastQuery: true,
          matches: '[vid="ad_skip"][clickable=true]',
          snapshotUrls: [
            'https://i.gkd.li/i/12667519',
            'https://i.gkd.li/i/13328425', // 限定 [clickable=true] 防止误触假的跳过按钮
          ],
        },
      ],
    },
  ],
});
