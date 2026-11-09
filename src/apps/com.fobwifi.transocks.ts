// 来源: Lin-arm/GKD_subscription src/apps/com.fobwifi.transocks.ts
// 摘取类别: 开屏广告 / 全屏广告, 同步于 2026-11-09
// 重新导入: pnpm tsx scripts/import-ref.ts --force com.fobwifi.transocks
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.fobwifi.transocks',
  name: 'Transocks',
  groups: [
    {
      key: 1,
      name: '全屏广告-VIP弹窗',
      desc: '点击[Finish]',
      rules: [
        {
          fastQuery: true,
          activityIds: '.ui.main.MainActivity',
          matches:
            '@[text="Finish"] +n [visibleToUser=true] >(1,3) [text*="VIP"]',
          snapshotUrls: 'https://i.gkd.li/i/32761426',
          exampleUrls: 'https://e.gkd.li/1c8008a7-bd3b-4c0d-a287-ef9ab4a10fb6',
        },
      ],
    },
  ],
});
