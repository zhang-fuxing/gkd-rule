// 来源: Lin-arm/GKD_subscription src/apps/cn.speedtest.lite.ts
// 摘取类别: 开屏广告 / 全屏广告, 同步于 2026-11-09
// 重新导入: pnpm tsx scripts/import-ref.ts --force cn.speedtest.lite
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'cn.speedtest.lite',
  name: '网速管家极速版',
  groups: [
    {
      key: 10,
      name: '全屏广告-新人专享优惠弹窗',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          activityIds: '.main.MainActivity',
          matches: '@[vid="iv_close"] - RelativeLayout >n [vid="ad_banner"]',
          snapshotUrls: 'https://i.gkd.li/i/12715511', //无vid旧快照
        },
      ],
    },
  ],
});
