// 来源: Lin-arm/GKD_subscription src/apps/com.jiaohua_browser.ts
// 摘取类别: 开屏广告 / 全屏广告, 同步于 2026-11-09
// 重新导入: pnpm tsx scripts/import-ref.ts --force com.jiaohua_browser
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.jiaohua_browser',
  name: 'JMComic2',
  groups: [
    {
      key: 1,
      name: '全屏广告',
      desc: '关闭选择路线后的全屏广告',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          fastQuery: true,
          activityIds: '.MainActivity',
          matches:
            'ViewGroup[childCount=2] > @ViewGroup[clickable=true][visibleToUser=true] > [text=""]',
          exampleUrls: 'https://e.gkd.li/447bea41-2771-4a57-8436-82da37d0b3b2',
          snapshotUrls: 'https://i.gkd.li/i/20709992',
          excludeSnapshotUrls: 'https://i.gkd.li/i/20718812',
        },
      ],
    },
  ],
});
