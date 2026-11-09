// 来源: Lin-arm/GKD_subscription src/apps/com.xfinity.digitalhome.ts
// 摘取类别: 开屏广告 / 全屏广告, 同步于 2026-11-09
// 重新导入: pnpm tsx scripts/import-ref.ts --force com.xfinity.digitalhome
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.xfinity.digitalhome',
  name: 'Xfinity',
  groups: [
    {
      key: 1,
      name: '全屏广告',
      desc: '点击关闭',
      rules: [
        {
          fastQuery: true,
          activityIds: '.features.overview.activities.MainActivity',
          matches:
            '@[clickable=true][visibleToUser=true] > [desc="close"] <<n [vid="details_modal_compose_body"]',
          exampleUrls: 'https://e.gkd.li/23c04f23-efb1-4562-a376-151ee4749e8d',
          snapshotUrls: 'https://i.gkd.li/i/18563031',
        },
      ],
    },
  ],
});
