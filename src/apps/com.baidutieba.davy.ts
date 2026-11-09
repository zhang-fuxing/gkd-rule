// 来源: Lin-arm/GKD_subscription src/apps/com.baidutieba.davy.ts
// 摘取类别: 开屏广告 / 全屏广告, 同步于 2026-11-09
// 重新导入: pnpm tsx scripts/import-ref.ts --force com.baidutieba.davy
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.baidutieba.davy',
  name: '贴吧一键签到大师',
  groups: [
    {
      key: 1,
      name: '全屏广告-内部弹窗广告',
      activityIds: 'com.davy.commonlibrary.utils.DialogUtil',
      rules: [
        {
          matches: '[vid="exit"]',
          snapshotUrls: 'https://i.gkd.li/i/12504289',
        },
        {
          matches: '[vid="mimo_interstitial_close_img"]',
          snapshotUrls: 'https://i.gkd.li/i/12504291',
        },
      ],
    },
  ],
});
