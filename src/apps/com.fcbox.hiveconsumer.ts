// 来源: Lin-arm/GKD_subscription src/apps/com.fcbox.hiveconsumer.ts
// 摘取类别: 开屏广告 / 全屏广告, 同步于 2026-11-09
// 重新导入: pnpm tsx scripts/import-ref.ts --force com.fcbox.hiveconsumer
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.fcbox.hiveconsumer',
  name: '丰巢',
  groups: [
    {
      key: 7,
      name: '全屏广告',
      desc: '点击关闭',
      rules: [
        {
          fastQuery: true,
          activityIds:
            'kt.com.fcbox.hiveconsumer.app.business.main.MainActivity',
          matches: '[text*="优惠券"] + @[vid="img_close"]',
          snapshotUrls: 'https://i.gkd.li/i/22455763',
        },
        {
          fastQuery: true,
          activityIds: [
            'kt.com.fcbox.hiveconsumer.app.business.main.MainActivity',
            'kt.com.fcbox.hiveconsumer.app.business.membership.MemberCenterActivityV2',
          ],
          matches: '[vid="ivClose"]',
          snapshotUrls: [
            'https://i.gkd.li/i/22724047',
            'https://i.gkd.li/i/22724105',
          ],
        },
      ],
    },
  ],
});
