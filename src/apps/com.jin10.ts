// 来源: Lin-arm/GKD_subscription src/apps/com.jin10.ts
// 摘取类别: 开屏广告 / 全屏广告, 同步于 2026-11-09
// 重新导入: pnpm tsx scripts/import-ref.ts --force com.jin10
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.jin10',
  name: '金十数据',
  groups: [
    {
      key: 2,
      name: '全屏广告-弹窗广告',
      desc: '点击x掉',
      rules: [
        {
          fastQuery: true,
          activityIds: '.lgd.biz.MainActivity',
          matches:
            '[id$="iv_body" || id$="iv_pic" || vid="body_ad"] <n [visibleToUser=true] > [vid="iv_close"]',
          snapshotUrls: [
            'https://i.gkd.li/i/12706045', //旧快照 iv_body
            'https://i.gkd.li/i/12706047', //旧快照 iv_pic
            'https://i.gkd.li/i/31375320', // body_ad
          ],
        },
      ],
    },
  ],
});
