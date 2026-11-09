// 来源: Lin-arm/GKD_subscription src/apps/cn.net.dascom.xrbridge.ts
// 摘取类别: 开屏广告 / 全屏广告, 同步于 2026-11-09
// 重新导入: pnpm tsx scripts/import-ref.ts --force cn.net.dascom.xrbridge
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'cn.net.dascom.xrbridge',
  name: '新睿桥牌',
  groups: [
    {
      key: 1,
      name: '全屏广告',
      desc: '点击x掉',
      rules: [
        {
          fastQuery: true,
          activityIds: '.ui.MainTabsActivity',
          matches: '[vid="iv_close"][clickable=true]',
          snapshotUrls: [
            'https://i.gkd.li/i/27314278', // 无 activityId,仅供参考
            'https://i.gkd.li/i/27316178',
          ],
        },
      ],
    },
  ],
});
