// 来源: Lin-arm/GKD_subscription src/apps/com.ncatC200000V260710.T000218.ts
// 摘取类别: 开屏广告 / 全屏广告, 同步于 2026-11-09
// 重新导入: pnpm tsx scripts/import-ref.ts --force com.ncatC200000V260710.T000218
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.ncatC200000V260710.T000218',
  name: '网飞猫',
  groups: [
    {
      key: 1,
      name: '全屏广告',
      desc: '视频详情页广告',
      fastQuery: true,
      activityIds: 'com.salmon.film.video.ui.detail.VodDetailActivity',
      rules: [
        {
          key: 0,
          name: '暂停视频时的广告',
          matches: '[text="广告"] - [vid="pause_close"]',
          snapshotUrls: 'https://i.gkd.li/i/29900521',
        },
        {
          key: 1,
          name: '观看新视频时的提示',
          matches: '@[childCount=2] > ImageView + [vid="image_arrow"]',
          snapshotUrls: 'https://i.gkd.li/i/29900516',
        },
      ],
    },
  ],
});
