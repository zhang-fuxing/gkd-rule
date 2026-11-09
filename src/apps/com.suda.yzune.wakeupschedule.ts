// 来源: Lin-arm/GKD_subscription src/apps/com.suda.yzune.wakeupschedule.ts
// 摘取类别: 开屏广告 / 全屏广告, 同步于 2026-11-09
// 重新导入: pnpm tsx scripts/import-ref.ts --force com.suda.yzune.wakeupschedule
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.suda.yzune.wakeupschedule',
  name: 'WakeUp课程表',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      actionMaximumKey: 0,
      resetMatch: 'app',
      priorityTime: 10000,
      rules: [
        {
          key: 0,
          matches:
            '[text*="跳过"][text.length<10][width<500 && height<300][visibleToUser=true]',
        },
        {
          key: 1,
          matches:
            '@ImageView[visibleToUser=true][width<156 && height<156] < * < [width>1000] +2 ViewGroup >2 [text="广告"]',
          snapshotUrls: 'https://i.gkd.li/i/33348748',
        },
      ],
    },
    {
      key: 4,
      name: '全屏广告',
      rules: [
        {
          fastQuery: true,
          activityIds: '.schedule.ScheduleActivity',
          matches: '[vid="iv_close"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/25769013',
        },
      ],
    },
  ],
});
