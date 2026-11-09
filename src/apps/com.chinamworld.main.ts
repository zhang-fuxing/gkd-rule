// 来源: Lin-arm/GKD_subscription src/apps/com.chinamworld.main.ts
// 摘取类别: 开屏广告 / 全屏广告, 同步于 2026-11-09
// 重新导入: pnpm tsx scripts/import-ref.ts --force com.chinamworld.main
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.chinamworld.main',
  name: '中国建设银行',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      priorityTime: 10000,
      rules: [
        {
          fastQuery: true,
          matches: [
            '[vid="ll_load"][visibleToUser=true]',
            '[vid="skip"][visibleToUser=true]',
          ],
          exampleUrls: 'https://e.gkd.li/69567942-f5a1-40f0-b4b6-7f8bf2348052',
          snapshotUrls: 'https://i.gkd.li/i/20649289',
        },
      ],
    },
    {
      key: 1,
      name: '全屏广告-弹窗广告',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          fastQuery: true,
          activityIds: 'com.ccb.start.view.startdialog.StartDialogActivity',
          matches: [
            '[vid="tip_view_pager"][visibleToUser=true]',
            '[vid="close"][visibleToUser=true]',
          ],
          exampleUrls: 'https://e.gkd.li/d1f24a66-8d46-4c0d-9ca9-ac5b540a6548',
          snapshotUrls: 'https://i.gkd.li/i/20649291',
        },
      ],
    },
  ],
});
