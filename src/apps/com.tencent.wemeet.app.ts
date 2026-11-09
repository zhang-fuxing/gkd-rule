// 来源: Lin-arm/GKD_subscription src/apps/com.tencent.wemeet.app.ts
// 摘取类别: 开屏广告 / 全屏广告, 同步于 2026-11-09
// 重新导入: pnpm tsx scripts/import-ref.ts --force com.tencent.wemeet.app
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.tencent.wemeet.app',
  name: '腾讯会议',
  groups: [
    {
      key: 4,
      name: '全屏广告',
      rules: [
        {
          fastQuery: true,
          activityIds:
            'com.tencent.wemeet.sdk.meeting.aftermeeting.AfterMeetingPictureActivity',
          matches: '[vid="btnClose"]',
          snapshotUrls: 'https://i.gkd.li/i/23787037',
        },
      ],
    },
  ],
});
