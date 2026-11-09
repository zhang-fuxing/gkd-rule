// 来源: Lin-arm/GKD_subscription src/apps/com.smk.ts
// 摘取类别: 开屏广告 / 全屏广告, 同步于 2026-11-09
// 重新导入: pnpm tsx scripts/import-ref.ts --force com.smk
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.smk',
  name: '杭州市民卡',
  groups: [
    {
      key: 3,
      name: '全屏广告-弹窗广告',
      rules: [
        {
          fastQuery: true,
          activityIds: [
            '.activity.MainActivity',
            '.activity.LaunchActivity',
            'com.tianmu.biz.activity.InterstitialActivity',
          ],
          matches:
            '[vid="iv_close_ad" || vid="tianmu_widget_iv_close"][visibleToUser=true]',
          snapshotUrls: [
            'https://i.gkd.li/i/13402584',
            'https://i.gkd.li/i/13425013',
            'https://i.gkd.li/i/23567834',
          ],
        },
      ],
    },
  ],
});
