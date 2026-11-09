// 来源: Lin-arm/GKD_subscription src/apps/com.tencent.news.ts
// 摘取类别: 开屏广告 / 全屏广告, 同步于 2026-11-09
// 重新导入: pnpm tsx scripts/import-ref.ts --force com.tencent.news
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.tencent.news',
  name: '腾讯新闻',
  groups: [
    {
      key: 2,
      name: '全屏广告-广告、活动弹窗',
      rules: [
        {
          key: 0,
          activityIds: '.activity.SplashActivity',
          matches: '@[text="关闭"] + [text="查看活动详情"]',
          snapshotUrls: 'https://i.gkd.li/i/12755872',
        },
      ],
    },
  ],
});
