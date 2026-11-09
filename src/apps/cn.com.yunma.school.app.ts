// 来源: Lin-arm/GKD_subscription src/apps/cn.com.yunma.school.app.ts
// 摘取类别: 开屏广告 / 全屏广告, 同步于 2026-11-09
// 重新导入: pnpm tsx scripts/import-ref.ts --force cn.com.yunma.school.app
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'cn.com.yunma.school.app',
  name: '易校园',
  groups: [
    {
      key: 3,
      name: '全屏广告',
      desc: '点击关闭',
      rules: [
        {
          fastQuery: true,
          activityIds: 'com.anythink.basead.ui.ATPortraitTranslucentActivity',
          matches: '[vid="anythink_myoffer_btn_close_id"][visibleToUser=true]',
          exampleUrls: 'https://e.gkd.li/3ddc6da8-7bbf-43f8-8d79-1fabe1180fea',
          snapshotUrls: 'https://i.gkd.li/i/23475779',
        },
      ],
    },
  ],
});
