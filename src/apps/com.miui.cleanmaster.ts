// 来源: Lin-arm/GKD_subscription src/apps/com.miui.cleanmaster.ts
// 摘取类别: 开屏广告 / 全屏广告, 同步于 2026-11-09
// 重新导入: pnpm tsx scripts/import-ref.ts --force com.miui.cleanmaster
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.miui.cleanmaster',
  name: '垃圾清理',
  groups: [
    {
      key: 1,
      name: '全屏广告-添加桌面图标提示',
      rules: [
        {
          fastQuery: true,
          activityIds: 'com.miui.optimizecenter.MainActivity',
          matches: [
            '[text^="开启桌面图标"]',
            '[text="不需要"][clickable=true]',
          ],
          snapshotUrls: 'https://i.gkd.li/i/30698886',
        },
      ],
    },
  ],
});
