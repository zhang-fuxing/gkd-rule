// 来源: Lin-arm/GKD_subscription src/apps/com.dianping.v1.ts
// 摘取类别: 开屏广告 / 全屏广告, 同步于 2026-11-09
// 重新导入: pnpm tsx scripts/import-ref.ts --force com.dianping.v1
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.dianping.v1',
  name: '大众点评',
  groups: [
    {
      key: 1,
      name: '全屏广告-主页推荐关注弹窗',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          activityIds: 'com.dianping.main.guide.SplashActivity',
          matches:
            'FrameLayout[id="android:id/content"] >2 FrameLayout > ImageView + FrameLayout[id=null][desc="关闭"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/12727011',
        },
      ],
    },
    {
      key: 4,
      name: '全屏广告-弹窗广告',
      rules: [
        {
          key: 0,
          activityIds: '.NovaMainActivity',
          fastQuery: true,
          matches: '[vid="operate_cross_icon"]',
          snapshotUrls: 'https://i.gkd.li/i/13538340',
        },
      ],
    },
  ],
});
