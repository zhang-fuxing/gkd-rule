// 来源: Lin-arm/GKD_subscription src/apps/com.baidu.netdisk.samsung.ts
// 摘取类别: 开屏广告 / 全屏广告, 同步于 2026-11-09
// 重新导入: pnpm tsx scripts/import-ref.ts --force com.baidu.netdisk.samsung
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.baidu.netdisk.samsung',
  name: '百度网盘-三星版本',
  groups: [
    {
      key: 1,
      name: '全屏广告-弹窗广告',
      desc: '点击关闭',
      activityIds: 'com.baidu.netdisk.ui.MainActivity',
      rules: [
        {
          key: 0,
          fastQuery: true,
          matches: '[vid="iv_close"]',
          snapshotUrls: 'https://i.gkd.li/i/12738331',
        },
      ],
    },
  ],
});
