// 来源: Lin-arm/GKD_subscription src/apps/com.wallstreetcn.news.ts
// 摘取类别: 开屏广告 / 全屏广告, 同步于 2026-11-09
// 重新导入: pnpm tsx scripts/import-ref.ts --force com.wallstreetcn.news
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.wallstreetcn.news',
  name: '华尔街见闻',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      priorityTime: 10000,
      rules: [
        {
          fastQuery: true,
          matches:
            '@[vid="iv_jump_parent" || vid="iv_jump"] -2 [text="广告"][visibleToUser=true]',
          exampleUrls: 'https://e.gkd.li/94576b14-ad13-4fae-8d49-6b6d1b5096a7',
          snapshotUrls: [
            'https://i.gkd.li/i/14525329',
            'https://i.gkd.li/i/20430632',
          ],
        },
      ],
    },
  ],
});
