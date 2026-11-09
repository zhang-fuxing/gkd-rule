// 来源: Lin-arm/GKD_subscription src/apps/com.miui.video.ts
// 摘取类别: 开屏广告 / 全屏广告, 同步于 2026-11-09
// 重新导入: pnpm tsx scripts/import-ref.ts --force com.miui.video
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.miui.video',
  name: '小米视频',
  groups: [
    {
      key: 3,
      name: '全屏广告-弹窗广告',
      desc: '点击x掉',
      rules: [
        {
          fastQuery: true,
          activityIds: '.feature.main.MainTabActivity',
          matches: '[vid="ad_logo"] +2 ImageView[vid="v_icon"][clickable=true]',
          snapshotUrls: [
            'https://i.gkd.li/i/30749781',
            'https://i.gkd.li/i/30749782',
          ],
          exampleUrls: 'https://e.gkd.li/af353485-0109-4247-9e04-642492b3df16',
        },
      ],
    },
  ],
});
