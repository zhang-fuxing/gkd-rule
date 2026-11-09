// 来源: Lin-arm/GKD_subscription src/apps/com.github.eprendre.tingshu.ts
// 摘取类别: 开屏广告 / 全屏广告, 同步于 2026-11-09
// 重新导入: pnpm tsx scripts/import-ref.ts --force com.github.eprendre.tingshu
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.github.eprendre.tingshu',
  name: '我的听书',
  groups: [
    {
      key: 2,
      name: '全屏广告-弹窗广告',
      desc: '点击关闭',
      rules: [
        {
          key: 0,
          name: '快手广告',
          fastQuery: true,
          activityIds: '.ui.SplashActivity',
          matches: [
            '[text="广告"]',
            '@ImageView[clickable=true] - [text="|"] - [text$="s"]',
          ],
          snapshotUrls: 'https://i.gkd.li/i/13625303',
        },
      ],
    },
  ],
});
