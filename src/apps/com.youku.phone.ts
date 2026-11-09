// 来源: Lin-arm/GKD_subscription src/apps/com.youku.phone.ts
// 摘取类别: 开屏广告 / 全屏广告, 同步于 2026-11-09
// 重新导入: pnpm tsx scripts/import-ref.ts --force com.youku.phone
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.youku.phone',
  name: '优酷视频',
  groups: [
    {
      key: 3,
      name: '全屏广告-视频推荐弹窗',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          activityIds: 'com.youku.vip.wrapper.VipHomeActivity',
          matches: '[vid="closeView"][desc="关闭弹层"]',
          snapshotUrls: 'https://i.gkd.li/i/12701029',
        },
      ],
    },
    {
      key: 4,
      name: '全屏广告-视频播放时的广告',
      desc: '点击[关闭广告]',
      rules: [
        {
          key: 0,
          fastQuery: true,
          activityIds: 'com.youku.ui.activity.DetailActivity',
          matches: '[text="关闭广告"][visibleToUser=true]',
          exampleUrls:
            'https://m.gkd.li/57941037/529c75b6-1a97-4765-856b-dd4d4c810207',
          snapshotUrls: 'https://i.gkd.li/i/14321401',
        },
        {
          key: 1,
          fastQuery: true,
          activityIds: 'com.youku.ui.activity.DetailActivity',
          matches: '[vid="xadsdk_pause_ad_close"]',
          exampleUrls:
            'https://m.gkd.li/57941037/42773084-a7db-4e70-878d-6a5eacd5ecb2',
          snapshotUrls: 'https://i.gkd.li/i/14321469',
        },
      ],
    },
  ],
});
