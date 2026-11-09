// 来源: Lin-arm/GKD_subscription src/apps/com.seebaby.ts
// 摘取类别: 开屏广告 / 全屏广告, 同步于 2026-11-09
// 重新导入: pnpm tsx scripts/import-ref.ts --force com.seebaby
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.seebaby',
  name: '掌通家园',
  groups: [
    {
      key: 3,
      name: '全屏广告',
      desc: '点击关闭',
      rules: [
        {
          fastQuery: true,
          activityIds: [
            'com.ranfeng.adranfengsdk.biz.activity.InterstitialActivity',
            'com.tianmu.biz.activity.InterstitialActivity',
          ],
          matches:
            '[vid="ranfeng_widget_iv_close" || vid="tianmu_widget_iv_close"][clickable=true]',
          exampleUrls: 'https://e.gkd.li/0ae7b19f-6fa1-4eaf-a5b9-0dfb214541b4',
          snapshotUrls: [
            'https://i.gkd.li/i/23981370',
            'https://i.gkd.li/i/24360340',
          ],
        },
      ],
    },
  ],
});
