// 来源: Lin-arm/GKD_subscription src/apps/com.cmbchina.ccd.pluto.cmbActivity.ts
// 摘取类别: 开屏广告 / 全屏广告, 同步于 2026-11-09
// 重新导入: pnpm tsx scripts/import-ref.ts --force com.cmbchina.ccd.pluto.cmbActivity
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.cmbchina.ccd.pluto.cmbActivity',
  name: '掌上生活',
  groups: [
    {
      key: 2,
      name: '全屏广告-首页弹窗广告',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      activityIds: ['.CMBRootActivityV2'],
      rules: '[vid="lly_pop_shell"] > [vid="img_cf_view_close"]',
      snapshotUrls: [
        'https://i.gkd.li/i/12647000',
        'https://i.gkd.li/i/13360282',
      ],
    },
  ],
});
