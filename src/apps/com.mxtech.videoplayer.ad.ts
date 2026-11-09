// 来源: Lin-arm/GKD_subscription src/apps/com.mxtech.videoplayer.ad.ts
// 摘取类别: 开屏广告 / 全屏广告, 同步于 2026-11-09
// 重新导入: pnpm tsx scripts/import-ref.ts --force com.mxtech.videoplayer.ad
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.mxtech.videoplayer.ad',
  name: 'MX 播放器',
  groups: [
    {
      key: 1,
      name: '全屏广告-谷歌广告',
      activityIds: '.ActivityMediaList',
      rules: [
        {
          matches:
            '[desc="Advertisement"] + View >(2) View + Button[clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/12642204',
        },
      ],
    },
  ],
});
