// 来源: Lin-arm/GKD_subscription src/apps/com.qihoo.srouter.n300.ts
// 摘取类别: 开屏广告 / 全屏广告, 同步于 2026-11-09
// 重新导入: pnpm tsx scripts/import-ref.ts --force com.qihoo.srouter.n300
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.qihoo.srouter.n300',
  name: '360家庭防火墙',
  groups: [
    {
      key: 1,
      name: '全屏广告-弹窗广告',
      fastQuery: true,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          activityIds: 'com.ifenglian.superapp.ui.firewall.SAMainActivity',
          matches: '[vid="app_update_later_button"]',
          snapshotUrls: 'https://i.gkd.li/i/13800011',
        },
      ],
    },
  ],
});
