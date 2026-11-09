// 来源: Lin-arm/GKD_subscription src/apps/com.sdu.didi.psnger.ts
// 摘取类别: 开屏广告 / 全屏广告, 同步于 2026-11-09
// 重新导入: pnpm tsx scripts/import-ref.ts --force com.sdu.didi.psnger
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.sdu.didi.psnger',
  name: '滴滴出行',
  groups: [
    {
      key: 3,
      name: '全屏广告-弹窗广告',
      desc: '点击关闭',
      rules: [
        {
          fastQuery: true,
          matchTime: 10000,
          actionMaximum: 1,
          resetMatch: 'app',
          activityIds: 'com.didi.sdk.app.MainActivity',
          matches: '[vid="popClose"][desc="关闭弹窗"][visibleToUser=true]',
          exampleUrls: 'https://e.gkd.li/432c28dd-2489-47cf-a975-4ef2e4704615',
          snapshotUrls: 'https://i.gkd.li/i/18173921',
        },
      ],
    },
    {
      key: 4,
      name: '全屏广告-[升级一键付款]弹窗',
      desc: '点击[跳过]',
      rules: [
        {
          fastQuery: true,
          activityIds: 'com.didi.sdk.app.MainActivity',
          matches: [
            '[text="升级一键付款"][visibleToUser=true]',
            '[text="跳过"][visibleToUser=true]',
          ],
          exampleUrls: 'https://e.gkd.li/effbc440-02c9-40a6-b72e-a7df401c985c',
          snapshotUrls: 'https://i.gkd.li/i/18409807',
        },
      ],
    },
  ],
});
