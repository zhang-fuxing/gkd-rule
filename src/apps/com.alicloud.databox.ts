// 来源: Lin-arm/GKD_subscription src/apps/com.alicloud.databox.ts
// 摘取类别: 开屏广告 / 全屏广告, 同步于 2026-11-09
// 重新导入: pnpm tsx scripts/import-ref.ts --force com.alicloud.databox
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.alicloud.databox',
  name: '阿里云盘',
  groups: [
    {
      key: 1,
      name: '全屏广告-活动弹窗',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          activityIds: '.MainActivity',
          matches:
            '@TextView[clickable=true][visibleToUser=true] - Image[text!=null] < View < View < View < WebView < WebView < [vid="webContainer"]',
          snapshotUrls: 'https://i.gkd.li/i/14235204',
        },
      ],
    },
    {
      key: 6,
      name: '全屏广告-[容量使用超限]提示',
      desc: '点击关闭',
      rules: [
        {
          fastQuery: true,
          activityIds: '.MainActivity',
          matches: ['[text="容量使用超限"]', '[vid="layout_close"]'],
          exampleUrls:
            'https://m.gkd.li/57941037/a219a480-c0a3-4064-832d-533f66995fed',
          snapshotUrls: 'https://i.gkd.li/i/15158788',
        },
      ],
    },
  ],
});
