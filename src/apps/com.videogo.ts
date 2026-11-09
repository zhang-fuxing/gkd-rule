// 来源: Lin-arm/GKD_subscription src/apps/com.videogo.ts
// 摘取类别: 开屏广告 / 全屏广告, 同步于 2026-11-09
// 重新导入: pnpm tsx scripts/import-ref.ts --force com.videogo
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.videogo',
  name: '萤石云视频',
  groups: [
    {
      key: 7,
      name: '全屏广告-弹窗广告',
      fastQuery: true,
      activityIds: ['.main.MainTabActivity', '.login.LoadingActivity'],
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          key: 0,
          action: 'back',
          matches: 'TextView[text="了解并试用服务"][visibleToUser=true]',
          snapshotUrls: 'https://i.gkd.li/i/15338834',
        },
        {
          key: 1,
          action: 'back',
          matches: '[text="新机礼包专享"][visibleToUser=true]',
          exampleUrls: 'https://e.gkd.li/b9045305-ce34-43f7-ab86-b48a672281cb',
          snapshotUrls: [
            'https://i.gkd.li/i/18843418',
            'https://i.gkd.li/i/20139706',
          ],
        },
      ],
    },
  ],
});
