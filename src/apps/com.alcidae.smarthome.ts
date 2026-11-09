// 来源: Lin-arm/GKD_subscription src/apps/com.alcidae.smarthome.ts
// 摘取类别: 开屏广告 / 全屏广告, 同步于 2026-11-09
// 重新导入: pnpm tsx scripts/import-ref.ts --force com.alcidae.smarthome
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.alcidae.smarthome',
  name: '海雀',
  groups: [
    {
      key: 1,
      name: '全屏广告-首页通知弹窗',
      desc: '点击[不再提醒]并关闭弹窗',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      activityIds: 'com.danale.video.mainpage.main.MainActivity',
      rules: [
        {
          key: 0,
          matches: '[vid="cb_not_show"][checked=false][visibleToUser=true]',
          exampleUrls: 'https://e.gkd.li/02d8846c-6753-4efe-b944-ea024f7485ad',
          snapshotUrls: 'https://i.gkd.li/i/18291310',
        },
        {
          preKeys: [0],
          matches: '[vid="ibtn_close"][visibleToUser=true]',
          exampleUrls: 'https://e.gkd.li/02d8846c-6753-4efe-b944-ea024f7485ad',
          snapshotUrls: 'https://i.gkd.li/i/18291310',
        },
      ],
    },
  ],
});
