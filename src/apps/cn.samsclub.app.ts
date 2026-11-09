// 来源: Lin-arm/GKD_subscription src/apps/cn.samsclub.app.ts
// 摘取类别: 开屏广告 / 全屏广告, 同步于 2026-11-09
// 重新导入: pnpm tsx scripts/import-ref.ts --force cn.samsclub.app
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'cn.samsclub.app',
  name: '山姆会员商店',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      actionMaximumKey: 0,
      priorityTime: 10000,
      rules: [
        {
          key: 0,
          matches:
            '@ImageView[clickable=true] <2 [vid="advertising_container"]',
          snapshotUrls: 'https://i.gkd.li/i/13609106', //无vid旧快照
        },
        {
          key: 1,
          matches: '@ImageView[vid="close_view"]',
          snapshotUrls: 'https://i.gkd.li/i/15879369',
        },
      ],
    },
  ],
});
