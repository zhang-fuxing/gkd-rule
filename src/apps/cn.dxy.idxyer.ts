// 来源: Lin-arm/GKD_subscription src/apps/cn.dxy.idxyer.ts
// 摘取类别: 开屏广告 / 全屏广告, 同步于 2026-11-09
// 重新导入: pnpm tsx scripts/import-ref.ts --force cn.dxy.idxyer
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'cn.dxy.idxyer',
  name: '丁香园',
  groups: [
    {
      key: 2,
      name: '全屏广告',
      rules: [
        {
          key: 0,
          fastQuery: true,
          activityIds: '.biz.main.MainActivity',
          matches: '[vid="iv_close"]',
          snapshotUrls: [
            'https://i.gkd.li/i/24852395',
            'https://i.gkd.li/i/24852398',
          ],
        },
        {
          key: 1,
          name: '内容对你有帮助吗-反馈页面',
          activityIds:
            'cn.dxy.drugscomm.business.medadviser.detail.MedAdviserDetailComposeActivity',
          matches:
            '[text*="有帮助吗"] + [text*="参与反馈"] +n ImageView[clickable=true][width<100 && height<100]',
          snapshotUrls: 'https://i.gkd.li/i/24995535',
        },
      ],
    },
  ],
});
