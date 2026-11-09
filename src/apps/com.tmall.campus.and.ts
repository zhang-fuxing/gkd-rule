// 来源: Lin-arm/GKD_subscription src/apps/com.tmall.campus.and.ts
// 摘取类别: 开屏广告 / 全屏广告, 同步于 2026-11-09
// 重新导入: pnpm tsx scripts/import-ref.ts --force com.tmall.campus.and
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.tmall.campus.and',
  name: '天猫校园',
  groups: [
    {
      key: 7,
      name: '全屏广告',
      rules: [
        {
          fastQuery: true,
          activityIds: [
            '.main.MainActivity',
            'com.tmall.campus.bizwebview.ui.CampusWebActivity',
          ],
          matches: '[vid="close_btn" || vid="iv_close"][clickable=true]',
          snapshotUrls: [
            'https://i.gkd.li/i/22399316',
            'https://i.gkd.li/i/22425649',
          ],
        },
      ],
    },
  ],
});
