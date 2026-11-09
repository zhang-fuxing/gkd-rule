// 来源: Lin-arm/GKD_subscription src/apps/com.android.mediacenter.ts
// 摘取类别: 开屏广告 / 全屏广告, 同步于 2026-11-09
// 重新导入: pnpm tsx scripts/import-ref.ts --force com.android.mediacenter
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.android.mediacenter',
  name: '华为音乐',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      priorityTime: 10000,
      rules: [
        {
          key: 0,
          action: 'clickCenter',
          matches: '[text^="跳过"][text.length<=10]',
          snapshotUrls: [
            'https://i.gkd.li/i/12901417',
            'https://i.gkd.li/i/12908742',
          ],
        },
      ],
    },
    {
      key: 1,
      name: '全屏广告-VIP弹窗广告',
      desc: '点击底部圆形x图标关闭弹窗',
      activityIds: '.MainActivity',
      fastQuery: true,
      rules: '[vid="iv_close"]',
      snapshotUrls: 'https://i.gkd.li/i/12914026',
    },
  ],
});
