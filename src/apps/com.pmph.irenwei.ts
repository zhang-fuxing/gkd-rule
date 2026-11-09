// 来源: Lin-arm/GKD_subscription src/apps/com.pmph.irenwei.ts
// 摘取类别: 开屏广告 / 全屏广告, 同步于 2026-11-09
// 重新导入: pnpm tsx scripts/import-ref.ts --force com.pmph.irenwei
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.pmph.irenwei',
  name: '人卫',
  groups: [
    {
      key: 1,
      name: '全屏广告-抽奖弹窗',
      desc: '点击关闭',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          activityIds: 'com.pmph.main.ad.AdActivity',
          matches: '[vid="iv_close"]',
          snapshotUrls: 'https://i.gkd.li/i/13897421',
        },
      ],
    },
  ],
});
