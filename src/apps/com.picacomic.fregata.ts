// 来源: Lin-arm/GKD_subscription src/apps/com.picacomic.fregata.ts
// 摘取类别: 开屏广告 / 全屏广告, 同步于 2026-11-09
// 重新导入: pnpm tsx scripts/import-ref.ts --force com.picacomic.fregata
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.picacomic.fregata',
  name: 'PicACG',
  groups: [
    {
      key: 1,
      name: '开屏广告',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      priorityTime: 10000,
      rules: [
        {
          matches: '[vid="imageButton_popup_close"]',
          exampleUrls:
            'https://m.gkd.li/83610194/2a9a1179-3a50-4317-900a-42c8197517ed',
          snapshotUrls: 'https://i.gkd.li/i/13422624',
        },
      ],
    },
  ],
});
