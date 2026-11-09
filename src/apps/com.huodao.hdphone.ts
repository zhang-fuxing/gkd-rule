// 来源: Lin-arm/GKD_subscription src/apps/com.huodao.hdphone.ts
// 摘取类别: 开屏广告 / 全屏广告, 同步于 2026-11-09
// 重新导入: pnpm tsx scripts/import-ref.ts --force com.huodao.hdphone
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.huodao.hdphone',
  name: '找靓机',
  groups: [
    {
      key: 1,
      name: '全屏广告-超级补贴日弹窗',
      desc: '点击关闭',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          matches: '[vid="iv_adv"] + [vid="dialog_close"]',
          snapshotUrls: 'https://i.gkd.li/i/13927567',
        },
      ],
    },
  ],
});
