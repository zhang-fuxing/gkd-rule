// 来源: Lin-arm/GKD_subscription src/apps/com.sec.android.app.samsungapps.ts
// 摘取类别: 开屏广告 / 全屏广告, 同步于 2026-11-09
// 重新导入: pnpm tsx scripts/import-ref.ts --force com.sec.android.app.samsungapps
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.sec.android.app.samsungapps',
  name: '(三星)应用商店',
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
          action: 'clickCenter',
          matches: '[vid="skip"][visibleToUser=true]',
          snapshotUrls: [
            'https://i.gkd.li/i/14810528',
            'https://i.gkd.li/i/18329468',
          ],
        },
      ],
    },
    {
      key: 2,
      name: '全屏广告-[大家还下载了]弹窗',
      desc: '点击关闭',
      rules: [
        {
          fastQuery: true,
          activityIds: '.detail.activity.ContentDetailActivity',
          matches:
            '@[desc="关闭"][clickable=true] - [vid="tv_detail_related_other_opp_title_layout"][visibleToUser=true]',
          exampleUrls: 'https://e.gkd.li/de1b9cc4-c47e-456a-b975-5eefaedb5e42',
          snapshotUrls: 'https://i.gkd.li/i/18209149',
        },
      ],
    },
    {
      key: 3,
      name: '全屏广告-应用推荐广告',
      desc: '点击[今天不要再显示]',
      rules: [
        {
          fastQuery: true,
          activityIds: '.SamsungAppsMainActivity',
          matches:
            '@[clickable=true] > [vid="do_not_show_again_area_text"][visibleToUser=true]',
          snapshotUrls: 'https://i.gkd.li/i/22320803',
          exampleUrls: 'https://e.gkd.li/37b29a88-d564-4ef6-9ab3-ff88954c87fc',
        },
      ],
    },
  ],
});
