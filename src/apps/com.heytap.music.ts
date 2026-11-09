// 来源: Lin-arm/GKD_subscription src/apps/com.heytap.music.ts
// 摘取类别: 开屏广告 / 全屏广告, 同步于 2026-11-09
// 重新导入: pnpm tsx scripts/import-ref.ts --force com.heytap.music
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.heytap.music',
  name: '音乐',
  groups: [
    {
      key: 2,
      name: '全屏广告-弹窗广告',
      desc: '点击关闭',
      rules: [
        {
          fastQuery: true,
          activityIds: [
            'com.allsaints.ad.sjy.reward.SRewardLoadingActivity',
            'com.allsaints.music.MainActivity',
          ],
          matches: [
            '[vid="btnFreeListening"][visibleToUser=true]',
            '[vid="close"][visibleToUser=true]',
          ],
          snapshotUrls: [
            'https://i.gkd.li/i/16200623',
            'https://i.gkd.li/i/21175600',
          ],
        },
      ],
    },
  ],
});
