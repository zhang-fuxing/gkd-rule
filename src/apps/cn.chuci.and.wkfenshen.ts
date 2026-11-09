// 来源: Lin-arm/GKD_subscription src/apps/cn.chuci.and.wkfenshen.ts
// 摘取类别: 开屏广告 / 全屏广告, 同步于 2026-11-09
// 重新导入: pnpm tsx scripts/import-ref.ts --force cn.chuci.and.wkfenshen
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'cn.chuci.and.wkfenshen',
  name: '猴子分身',
  groups: [
    {
      key: 1,
      name: '全屏广告-购买会员弹窗',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          activityIds: '.ActMain',
          matches: ['[vid="dialog_local_buy_btn"]', '[vid="action_close"]'],
          snapshotUrls: 'https://i.gkd.li/i/13226988',
        },
      ],
    },
  ],
});
