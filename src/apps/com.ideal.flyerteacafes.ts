// 来源: Lin-arm/GKD_subscription src/apps/com.ideal.flyerteacafes.ts
// 摘取类别: 开屏广告 / 全屏广告, 同步于 2026-11-09
// 重新导入: pnpm tsx scripts/import-ref.ts --force com.ideal.flyerteacafes
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.ideal.flyerteacafes',
  name: '飞客',
  groups: [
    {
      key: 3,
      name: '全屏广告-弹窗广告',
      fastQuery: true,
      rules: [
        {
          activityIds: [
            '.ui.HomeActivity',
            '.ui.activity.thread.NormalThreadActivity',
          ],
          matches:
            '@[vid="close" || vid="iv_close"] - FrameLayout > [vid="iv_adv_tip"]',
          snapshotUrls: [
            'https://i.gkd.li/i/13466119', // 旧快照 无vid
            'https://i.gkd.li/i/27550981', // iv_close
          ],
        },
      ],
    },
  ],
});
