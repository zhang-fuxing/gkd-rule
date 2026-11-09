// 来源: Lin-arm/GKD_subscription src/apps/com.xueqiu.fund.ts
// 摘取类别: 开屏广告 / 全屏广告, 同步于 2026-11-09
// 重新导入: pnpm tsx scripts/import-ref.ts --force com.xueqiu.fund
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.xueqiu.fund',
  name: '雪球基金',
  groups: [
    {
      key: 1,
      name: '全屏广告-基金页面弹窗广告',
      desc: '点击关闭',
      rules: [
        {
          fastQuery: true,
          activityIds: '.commonlib.FundHomeActivityV2',
          matches: '[vid="image_cancel"]',
          exampleUrls:
            'https://m.gkd.li/57941037/c43d58ab-a18c-4249-bc35-1c7aeab4c3ff',
          snapshotUrls: 'https://i.gkd.li/i/14163901',
        },
      ],
    },
  ],
});
