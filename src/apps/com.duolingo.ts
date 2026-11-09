// 来源: Lin-arm/GKD_subscription src/apps/com.duolingo.ts
// 摘取类别: 开屏广告 / 全屏广告, 同步于 2026-11-09
// 重新导入: pnpm tsx scripts/import-ref.ts --force com.duolingo
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.duolingo',
  name: 'Duolingo',
  groups: [
    {
      key: 1,
      name: '全屏广告-试用会员',
      desc: '点击[算了吧]',
      rules: [
        {
          fastQuery: true,
          activityIds: '.splash.LaunchActivity',
          matches: '[text="算了吧"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/30885277',
          exampleUrls: 'https://e.gkd.li/366f8f0e-fbfe-4892-8fc6-84ab44e4230a',
        },
      ],
    },
  ],
});
