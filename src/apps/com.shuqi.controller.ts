// 来源: Lin-arm/GKD_subscription src/apps/com.shuqi.controller.ts
// 摘取类别: 开屏广告 / 全屏广告, 同步于 2026-11-09
// 重新导入: pnpm tsx scripts/import-ref.ts --force com.shuqi.controller
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.shuqi.controller',
  name: '书旗小说',
  groups: [
    {
      key: 1,
      name: '全屏广告',
      rules: [
        {
          key: 0,
          fastQuery: true,
          matchTime: 10000,
          actionMaximum: 1,
          resetMatch: 'app',
          activityIds: 'com.shuqi.home.MainActivity',
          matches: '[vid="bottomCloseImg"][visibleToUser=true]',
          exampleUrls: 'https://e.gkd.li/9cfc90dc-9afe-45ff-8ee2-f8e173af9bd9',
          snapshotUrls: 'https://i.gkd.li/i/23831956',
        },
      ],
    },
  ],
});
