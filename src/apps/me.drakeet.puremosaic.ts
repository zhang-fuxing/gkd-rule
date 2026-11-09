// 来源: Lin-arm/GKD_subscription src/apps/me.drakeet.puremosaic.ts
// 摘取类别: 开屏广告 / 全屏广告, 同步于 2026-11-09
// 重新导入: pnpm tsx scripts/import-ref.ts --force me.drakeet.puremosaic
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'me.drakeet.puremosaic',
  name: '纯纯打码',
  groups: [
    {
      key: 1,
      name: '全屏广告-解锁高级功能',
      desc: '点击[不]',
      rules: [
        {
          fastQuery: true,
          activityIds: [
            '.MainActivity',
            'me.iwf.photopicker.PhotoPickerActivity',
          ],
          matches: ['[text="解锁高级功能"]', '[text="不"]'],
          snapshotUrls: [
            'https://i.gkd.li/i/16761630',
            'https://i.gkd.li/i/16761818',
          ],
        },
      ],
    },
  ],
});
