// 来源: Lin-arm/GKD_subscription src/apps/com.wan.tools.ts
// 摘取类别: 开屏广告 / 全屏广告, 同步于 2026-11-09
// 重新导入: pnpm tsx scripts/import-ref.ts --force com.wan.tools
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.wan.tools',
  name: '下载工具箱',
  groups: [
    {
      key: 3,
      name: '全屏广告-开通会员弹窗',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          activityIds: 'com.one.downloadtools.ui.activity.HomeActivity',
          matches: ['[text^="开通会员"]', '[text="暂不"]'],
          snapshotUrls: 'https://i.gkd.li/i/13392112',
        },
      ],
    },
  ],
});
