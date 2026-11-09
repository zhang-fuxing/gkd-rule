// 来源: Lin-arm/GKD_subscription src/apps/com.dailyyoga.inc.ts
// 摘取类别: 开屏广告 / 全屏广告, 同步于 2026-11-09
// 重新导入: pnpm tsx scripts/import-ref.ts --force com.dailyyoga.inc
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.dailyyoga.inc',
  name: '每日瑜伽',
  groups: [
    {
      key: 1,
      name: '全屏广告',
      rules: [
        {
          fastQuery: true,
          activityIds: '.session.fragment.UploadSessionResultActivity',
          matches:
            '[visibleToUser=true] - [vid="iv_close"][visibleToUser=true]',
          exampleUrls: 'https://e.gkd.li/3395e6cc-6776-4c86-ac6d-4411faced360',
          snapshotUrls: 'https://i.gkd.li/i/21563972',
          excludeSnapshotUrls: 'https://i.gkd.li/i/21705377',
        },
      ],
    },
  ],
});
