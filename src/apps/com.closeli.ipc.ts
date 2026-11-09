// 来源: Lin-arm/GKD_subscription src/apps/com.closeli.ipc.ts
// 摘取类别: 开屏广告 / 全屏广告, 同步于 2026-11-09
// 重新导入: pnpm tsx scripts/import-ref.ts --force com.closeli.ipc
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.closeli.ipc',
  name: 'Eyeplus',
  groups: [
    {
      key: 1,
      name: '全屏广告-弹窗广告',
      desc: '点击关闭',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          fastQuery: true,
          activityIds: 'com.arcsoft.closeli.dhmain2.main.NewMainActivity',
          matches: '@[vid="iv_close"] - [vid="iv_ads"]',
          exampleUrls: 'https://e.gkd.li/2f4b9b69-06bb-4d7e-9607-4e1ebb57322b',
          snapshotUrls: 'https://i.gkd.li/i/18070447',
        },
      ],
    },
  ],
});
