// 来源: Lin-arm/GKD_subscription src/apps/com.yikaobang.yixue.ts
// 摘取类别: 开屏广告 / 全屏广告, 同步于 2026-11-09
// 重新导入: pnpm tsx scripts/import-ref.ts --force com.yikaobang.yixue
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.yikaobang.yixue',
  name: '医考帮',
  groups: [
    {
      key: 1,
      name: '全屏广告-弹窗广告',
      desc: '点击x掉',
      rules: [
        {
          fastQuery: true,
          activityIds: 'com.psychiatrygarden.activity.HomePageNewActivity',
          matches: 'ImageView[vid="close"]',
          snapshotUrls: [
            'https://i.gkd.li/i/13425853', // 无vid旧快照
            'https://i.gkd.li/i/28434183',
          ],
        },
      ],
    },
  ],
});
