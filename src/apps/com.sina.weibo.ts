// 来源: Lin-arm/GKD_subscription src/apps/com.sina.weibo.ts
// 摘取类别: 开屏广告 / 全屏广告, 同步于 2026-11-09
// 重新导入: pnpm tsx scripts/import-ref.ts --force com.sina.weibo
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.sina.weibo',
  name: '微博',
  groups: [
    {
      key: 8,
      name: '全屏广告-弹窗广告',
      fastQuery: true,
      rules: [
        {
          key: 3,
          activityIds: '.feed.MPDialogActivity',
          matches:
            'WebView[text="Wbox"] > View[childCount=1] >(1,2) View[childCount=2] > @TextView[clickable=true][visibleToUser=true][childCount=0][index=1][width<200] <<n [vid="container"]',
          snapshotUrls: [
            'https://i.gkd.li/i/14969848',
            'https://i.gkd.li/i/16944794',
            'https://i.gkd.li/i/19807700',
          ],
        },
        {
          key: 4,
          activityIds: '.feed.MPDialogActivity',
          matches:
            '@Image[text="close"] < View[childCount=4] <2 * <<n [vid="container"]',
          snapshotUrls: 'https://i.gkd.li/i/14033735',
        },
      ],
    },
  ],
});
