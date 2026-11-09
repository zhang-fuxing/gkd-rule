// 来源: Lin-arm/GKD_subscription src/apps/com.sankuai.meituan.dispatch.crowdsource.ts
// 摘取类别: 开屏广告 / 全屏广告, 同步于 2026-11-09
// 重新导入: pnpm tsx scripts/import-ref.ts --force com.sankuai.meituan.dispatch.crowdsource
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.sankuai.meituan.dispatch.crowdsource',
  name: '美团众包',
  groups: [
    {
      key: 1,
      name: '全屏广告-弹窗广告',
      rules: [
        {
          key: 0,
          fastQuery: true,
          activityIds: [
            'com.meituan.banma.main.activity.MainActivity',
            'com.meituan.banma.main.activity.ImageAdActivity',
          ],
          matches: '[vid="image_ad_close"]',
          snapshotUrls: [
            'https://i.gkd.li/i/13694935',
            'https://i.gkd.li/i/14818737',
          ],
        },
      ],
    },
  ],
});
