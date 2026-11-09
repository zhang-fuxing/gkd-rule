// 来源: Lin-arm/GKD_subscription src/apps/cn.com.hkgt.gasapp.ts
// 摘取类别: 开屏广告 / 全屏广告, 同步于 2026-11-09
// 重新导入: pnpm tsx scripts/import-ref.ts --force cn.com.hkgt.gasapp
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'cn.com.hkgt.gasapp',
  name: '易捷加油',
  groups: [
    {
      key: 1,
      name: '全屏广告-弹窗广告',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          activityIds: '.dialog.BannerDialog',
          matches: 'ImageView[vid="exit"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/12744270', //旧快照
        },
      ],
    },
  ],
});
