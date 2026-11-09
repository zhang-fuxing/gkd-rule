// 来源: Lin-arm/GKD_subscription src/apps/com.gamersky.ts
// 摘取类别: 开屏广告 / 全屏广告, 同步于 2026-11-09
// 重新导入: pnpm tsx scripts/import-ref.ts --force com.gamersky
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.gamersky',
  name: '游民星空',
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
          matches:
            '[text*="跳过"][text.length<10][width<500 && height<300][visibleToUser=true]',
          snapshotUrls: 'https://i.gkd.li/i/16322789',
        },
        {
          key: 1,
          fastQuery: true,
          anyMatches: [
            '@View[text=null][clickable=true][childCount=0][visibleToUser=true][width<200&&height<200] +(1,2) TextView[index=parent.childCount.minus(1)][childCount=0] <n FrameLayout[childCount>2][text=null][desc=null] >(n+6) [text*="第三方应用" || text*="扭动手机" || text*="点击或上滑" || text*="省钱好物" || text*="扭一扭"][visibleToUser=true]',
            'FrameLayout > FrameLayout[childCount>2][text=null][desc=null] > @View[text=null][clickable=true][childCount=0][visibleToUser=true][width<200&&height<200] +(1,2) TextView[index=parent.childCount.minus(1)][childCount=0][visibleToUser=true]',
          ],
          snapshotUrls: 'https://i.gkd.li/i/16333782',
        },
        {
          key: 2,
          fastQuery: true,
          matches: '[vid="ms_skipView"]', // vid="iv_notification_fragment_news" 并非跳过节点，只是位置相同
          exampleUrls: 'https://e.gkd.li/4b7fd3fe-8467-49e3-93af-64515416911c',
          snapshotUrls: 'https://i.gkd.li/i/16860311',
          excludeSnapshotUrls: 'https://i.gkd.li/i/16902939',
        },
        {
          key: 3,
          fastQuery: true,
          position: {
            left: 'width * 0.9041',
            top: 'width * 0.1598',
          },
          matches: '[vid="animation_view"][visibleToUser=true]',
          exampleUrls: 'https://e.gkd.li/6bca4f19-320d-42e4-affb-4667a8112653',
          snapshotUrls: 'https://i.gkd.li/i/17565808',
        },
      ],
    },
  ],
});
