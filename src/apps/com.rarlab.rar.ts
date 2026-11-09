// 来源: Lin-arm/GKD_subscription src/apps/com.rarlab.rar.ts
// 摘取类别: 开屏广告 / 全屏广告, 同步于 2026-11-09
// 重新导入: pnpm tsx scripts/import-ref.ts --force com.rarlab.rar
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.rarlab.rar',
  name: 'RAR',
  groups: [
    {
      key: 10,
      name: '全屏广告-订购 RAR 弹窗',
      desc: '点击[放弃]',
      rules: [
        {
          fastQuery: true,
          activityIds: '.MainActivity',
          matches:
            '[text="订购" || text="訂閱"] + [text="放弃" || text="解除"]',
          snapshotUrls: [
            'https://i.gkd.li/i/12781596',
            'https://i.gkd.li/i/15801328',
          ],
        },
      ],
    },
  ],
});
