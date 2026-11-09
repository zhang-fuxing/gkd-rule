// 来源: Lin-arm/GKD_subscription src/apps/com.realtech.xiaocan.ts
// 摘取类别: 开屏广告 / 全屏广告, 同步于 2026-11-09
// 重新导入: pnpm tsx scripts/import-ref.ts --force com.realtech.xiaocan
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.realtech.xiaocan',
  name: '小蚕霸王餐',
  groups: [
    {
      key: 1,
      name: '全屏广告-弹窗广告',
      actionCd: 300,
      activityIds: '.MainActivity',
      rules: [
        {
          key: 0,
          fastQuery: true,
          matches: '[vid="box_custom"] >2 [vid="ivClose"][clickable=true]',
          snapshotUrls: [
            'https://i.gkd.li/i/31689742',
            'https://i.gkd.li/i/31689746',
          ],
        },
        {
          key: 1,
          matches:
            'View[childCount=3] > View + ImageView + ImageView[clickable=true][childCount=0]',
          snapshotUrls: 'https://i.gkd.li/i/13694864',
        },
      ],
    },
  ],
});
