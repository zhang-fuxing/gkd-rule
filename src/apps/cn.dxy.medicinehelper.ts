// 来源: Lin-arm/GKD_subscription src/apps/cn.dxy.medicinehelper.ts
// 摘取类别: 开屏广告 / 全屏广告, 同步于 2026-11-09
// 重新导入: pnpm tsx scripts/import-ref.ts --force cn.dxy.medicinehelper
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'cn.dxy.medicinehelper',
  name: '用药助手',
  groups: [
    {
      key: 5,
      name: '全屏广告',
      rules: [
        {
          fastQuery: true,
          activityIds:
            'cn.dxy.drugscomm.business.guide.detail.GuideDetailComposeActivity',
          matches:
            '[text^="开通会员后"] -n @ImageView[clickable=true][width<100] <2 View <<4 [id="android:id/content"]',
          snapshotUrls: 'https://i.gkd.li/i/25247659',
        },
      ],
    },
  ],
});
