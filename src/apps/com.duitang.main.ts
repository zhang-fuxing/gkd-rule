// 来源: Lin-arm/GKD_subscription src/apps/com.duitang.main.ts
// 摘取类别: 开屏广告 / 全屏广告, 同步于 2026-11-09
// 重新导入: pnpm tsx scripts/import-ref.ts --force com.duitang.main
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.duitang.main',
  name: '堆糖',
  groups: [
    {
      key: 4,
      name: '全屏广告-图片页弹窗广告',
      desc: '点击关闭',
      rules: [
        {
          fastQuery: true,
          activityIds: [
            '.business.display.ImageActivity',
            '.business.main.NAMainActivity',
          ],
          matches: '[vid="popUpbtnClose"]',
          snapshotUrls: [
            'https://i.gkd.li/i/13997011',
            'https://i.gkd.li/i/14332109',
          ],
        },
      ],
    },
  ],
});
