// 来源: Lin-arm/GKD_subscription src/apps/gov.pianzong.androidnga.ts
// 摘取类别: 开屏广告 / 全屏广告, 同步于 2026-11-09
// 重新导入: pnpm tsx scripts/import-ref.ts --force gov.pianzong.androidnga
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'gov.pianzong.androidnga',
  name: 'NGA玩家社区',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      matchRoot: true,
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      priorityTime: 10000,
      rules: [
        {
          matches:
            '[vid="tv_tiaoguo" || vid="iv_tg_ad" || vid="tv_skip"][visibleToUser=true]',
          exampleUrls: 'https://e.gkd.li/d7520bc7-588b-4654-b6aa-d2736ac200bf',
          snapshotUrls: [
            'https://i.gkd.li/i/13798686',
            'https://i.gkd.li/i/17082872',
            'https://i.gkd.li/i/17082897',
            'https://i.gkd.li/i/17082899',
            'https://i.gkd.li/i/23432463',
          ],
        },
      ],
    },
    {
      key: 4,
      name: '全屏广告-弹窗广告',
      desc: '点击关闭',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          fastQuery: true,
          activityIds: 'com.donews.nga.activitys.MainActivity',
          matches:
            '[vid="iv_homedialog_close" || vid="iv_close"][visibleToUser=true]',
          exampleUrls:
            'https://m.gkd.li/57941037/346f4485-82a7-4cf3-aab3-1fe6c9bb23af',
          snapshotUrls: [
            'https://i.gkd.li/i/14126934',
            'https://i.gkd.li/i/21158044',
          ],
        },
      ],
    },
  ],
});
