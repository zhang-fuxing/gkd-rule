// 来源: Lin-arm/GKD_subscription src/apps/com.badmintoncn.bbs.ts
// 摘取类别: 开屏广告 / 全屏广告, 同步于 2026-11-09
// 重新导入: pnpm tsx scripts/import-ref.ts --force com.badmintoncn.bbs
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.badmintoncn.bbs',
  name: '中羽在线',
  groups: [
    {
      key: 1,
      name: '全屏广告-弹窗广告',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          key: 0,
          name: '红包弹窗',
          activityIds: 'net.duohuo.magappx.main.IndexTabActivity',
          matches: '[vid="iv_close_ad"]',
          snapshotUrls: 'https://i.gkd.li/i/13635224',
        },
      ],
    },
  ],
});
