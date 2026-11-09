// 来源: Lin-arm/GKD_subscription src/apps/com.ct.client.ts
// 摘取类别: 开屏广告 / 全屏广告, 同步于 2026-11-09
// 重新导入: pnpm tsx scripts/import-ref.ts --force com.ct.client
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.ct.client',
  name: '中国电信',
  groups: [
    {
      key: -1,
      name: '开屏广告',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      priorityTime: 10000,
      rules: [
        {
          matches:
            '[text*="跳过"][text.length<10][width<500 && height<300][visibleToUser=true]',
          snapshotUrls: [
            'https://i.gkd.li/i/15084759',
            'https://i.gkd.li/i/15079224', // 全局规则在此页面误触
          ],
        },
      ],
    },
    {
      key: 3,
      name: '全屏广告-浮窗广告',
      desc: '会出现在首页、查询办理页面',
      fastQuery: true,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          activityIds: [
            '.common.ConfirmDialogActivity',
            '.activity.MainActivity',
          ],
          matches: '[vid="rlActivity"] > [vid="close"]',
          snapshotUrls: [
            'https://i.gkd.li/i/12819676',
            'https://i.gkd.li/i/15104434',
          ],
        },
      ],
    },
    {
      key: 4,
      name: '全屏广告-弹窗广告',
      // fastQuery: true, 实机测试使用无法跳过
      activityIds: '.common.webview.OnlineBusinessWebkitActivity',
      rules: 'Image[text="tishi-close"]',
      snapshotUrls: 'https://i.gkd.li/i/12913804',
    },
  ],
});
