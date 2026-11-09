// 来源: Lin-arm/GKD_subscription src/apps/com.tencent.qt.qtl.ts
// 摘取类别: 开屏广告 / 全屏广告, 同步于 2026-11-09
// 重新导入: pnpm tsx scripts/import-ref.ts --force com.tencent.qt.qtl
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.tencent.qt.qtl',
  name: '掌上英雄联盟',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      priorityTime: 10000,
      rules: [
        {
          action: 'clickCenter',
          matches:
            '[text*="跳过"][text.length<10][width<500 && height<300][visibleToUser=true]',
          exampleUrls: 'https://e.gkd.li/8e923c51-48e7-431c-abf8-e564761b772e',
          snapshotUrls: 'https://i.gkd.li/i/16568456',
        },
      ],
    },
    {
      key: 2,
      name: '全屏广告-弹窗广告',
      desc: '点击关闭',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          fastQuery: true,
          activityIds: [
            'com.tencent.zone.main.MainZoneHomeActivity',
            'com.tencent.zone.main.notice.NoticeActivity',
          ],
          matches: '[vid="notice_close_pic"]',
          exampleUrls: 'https://e.gkd.li/d1747892-c416-4877-a706-fb3c16e5b049',
          snapshotUrls: [
            'https://i.gkd.li/i/16581606',
            'https://i.gkd.li/i/29888372',
          ],
        },
      ],
    },
  ],
});
