// 来源: Lin-arm/GKD_subscription src/apps/com.shark.jizhang.ts
// 摘取类别: 开屏广告 / 全屏广告, 同步于 2026-11-09
// 重新导入: pnpm tsx scripts/import-ref.ts --force com.shark.jizhang
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.shark.jizhang',
  name: '鲨鱼记账',
  groups: [
    {
      key: 1,
      name: '全屏广告-弹窗广告',
      desc: '点击关闭',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          activityIds: '.module.main.MainActivity',
          matches: '[vid="sdv_image"] + [vid="close_view"]',
          exampleUrls: 'https://e.gkd.li/1cad4c8f-fdb0-4608-8398-2c22d81d435d',
          snapshotUrls: 'https://i.gkd.li/i/12518500',
        },
      ],
    },
  ],
});
