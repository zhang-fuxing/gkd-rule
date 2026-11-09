// 来源: Lin-arm/GKD_subscription src/apps/cn.honor.qinxuan.ts
// 摘取类别: 开屏广告 / 全屏广告, 同步于 2026-11-09
// 重新导入: pnpm tsx scripts/import-ref.ts --force cn.honor.qinxuan
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'cn.honor.qinxuan',
  name: '荣耀亲选',
  groups: [
    {
      key: 1,
      name: '全屏广告-首页弹窗广告',
      desc: '点击关闭',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          activityIds: '.MainActivity',
          matches: '[vid="iv_close_dlg"]',
          snapshotUrls: 'https://i.gkd.li/i/13930613', //无vid旧快照
        },
      ],
    },
  ],
});
