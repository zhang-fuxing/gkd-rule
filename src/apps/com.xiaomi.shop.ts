// 来源: Lin-arm/GKD_subscription src/apps/com.xiaomi.shop.ts
// 摘取类别: 开屏广告 / 全屏广告, 同步于 2026-11-09
// 重新导入: pnpm tsx scripts/import-ref.ts --force com.xiaomi.shop
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.xiaomi.shop',
  name: '小米商城',
  groups: [
    {
      key: 1,
      name: '全屏广告-弹窗广告',
      desc: '点击关闭',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          key: 0,
          fastQuery: true,
          activityIds: [
            'com.xiaomi.shop2.activity.MainActivity',
            '.plugin.homepage.utils.AdDialog',
          ],
          matches:
            '@ImageView[clickable=true][childCount=0][visibleToUser=true] <2 LinearLayout[childCount=2] < RelativeLayout < [id="android:id/content"]',
          snapshotUrls: [
            'https://i.gkd.li/i/12649330',
            'https://i.gkd.li/i/14393039',
          ],
        },
        {
          key: 1,
          fastQuery: true,
          activityIds: 'com.xiaomi.shop2.activity.MainActivity',
          matches:
            '@ImageView[clickable=true][childCount=0][visibleToUser=true] <2 FrameLayout[childCount=2] < [id="android:id/content"]',
          snapshotUrls: 'https://i.gkd.li/i/22550140',
        },
      ],
    },
  ],
});
