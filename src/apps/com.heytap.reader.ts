// 来源: Lin-arm/GKD_subscription src/apps/com.heytap.reader.ts
// 摘取类别: 开屏广告 / 全屏广告, 同步于 2026-11-09
// 重新导入: pnpm tsx scripts/import-ref.ts --force com.heytap.reader
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.heytap.reader',
  name: '阅读',
  groups: [
    {
      key: 2,
      name: '全屏广告-首页弹窗广告',
      rules: [
        {
          fastQuery: true,
          activityIds: 'com.zhangyue.iReader.bookshelf.ui.ActivityBookShelf',
          matches:
            '[id="com.zhangyue.commonplugin:id/dialog_welfare_card_close"]',
          exampleUrls: 'https://e.gkd.li/76f226bb-fcd4-439a-9eed-520a9c35a0c0',
          snapshotUrls: 'https://i.gkd.li/i/19890575',
        },
      ],
    },
  ],
});
