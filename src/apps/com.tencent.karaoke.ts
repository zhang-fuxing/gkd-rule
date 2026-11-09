// 来源: Lin-arm/GKD_subscription src/apps/com.tencent.karaoke.ts
// 摘取类别: 开屏广告 / 全屏广告, 同步于 2026-11-09
// 重新导入: pnpm tsx scripts/import-ref.ts --force com.tencent.karaoke
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.tencent.karaoke',
  name: '全民K歌',
  groups: [
    {
      key: 2,
      name: '全屏广告-弹窗广告',
      rules: [
        {
          key: 1,
          name: '活动弹窗',
          activityIds: '.module.splash.ui.SplashBaseActivity',
          matches:
            'ViewGroup[childCount=0] < @ViewGroup[clickable=true][childCount=1] - ViewGroup > [desc*="双十一"]',
          snapshotUrls: 'https://i.gkd.li/i/13363281',
        },
      ],
    },
  ],
});
