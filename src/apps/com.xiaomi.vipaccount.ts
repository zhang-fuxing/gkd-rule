// 来源: Lin-arm/GKD_subscription src/apps/com.xiaomi.vipaccount.ts
// 摘取类别: 开屏广告 / 全屏广告, 同步于 2026-11-09
// 重新导入: pnpm tsx scripts/import-ref.ts --force com.xiaomi.vipaccount
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.xiaomi.vipaccount',
  name: '小米社区',
  groups: [
    {
      key: 3,
      name: '全屏广告-签到弹窗',
      rules: [
        {
          activityIds: '.newbrowser.NormalWebActivity',
          matches: '[text="签到赢权益"] +n Image[text*="cancel_circle"]',
          snapshotUrls: 'https://i.gkd.li/i/13328271',
        },
      ],
    },
    {
      key: 4,
      name: '全屏广告-公告板弹窗',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          activityIds: [
            '.ui.home.page.HomeFrameActivity',
            '.newbrowser.NormalWebActivity',
          ],
          anyMatches: [
            '[desc="公告版弹窗"] +2 [vid="close"]',
            '[desc="公告版弹窗"] + ViewGroup[vid="image_container"] > [vid="close"]',
          ],
          exampleUrls: 'https://e.gkd.li/46e16bc5-2f13-408e-9c34-927a13ba3e9c',
          snapshotUrls: [
            'https://i.gkd.li/i/13400617',
            'https://i.gkd.li/i/24289621',
          ],
        },
      ],
    },
  ],
});
