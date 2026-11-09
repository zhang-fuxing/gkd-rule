// 来源: Lin-arm/GKD_subscription src/apps/com.lucky.luckyclient.ts
// 摘取类别: 开屏广告 / 全屏广告, 同步于 2026-11-09
// 重新导入: pnpm tsx scripts/import-ref.ts --force com.lucky.luckyclient
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.lucky.luckyclient',
  name: '瑞幸咖啡',
  groups: [
    {
      key: 2,
      name: '全屏广告-超值换购弹窗',
      desc: '关闭超值换购弹窗',
      rules: [
        {
          fastQuery: true,
          activityIds: '.preview2.OrderPreviewActivity2',
          matches: '[vid="close_iv"][visibleToUser=true]',
          snapshotUrls: 'https://i.gkd.li/i/12922834',
        },
      ],
    },
    {
      key: 3,
      name: '全屏广告-优惠卷领取提示',
      desc: '按下返回键关闭优惠卷领取提示',
      rules: [
        {
          activityIds: 'com.luckin.client.main.FirstActivity',
          action: 'back',
          matches: '[vid="webcontent"]',
          snapshotUrls: 'https://i.gkd.li/i/13164114',
        },
      ],
    },
  ],
});
