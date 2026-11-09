// 来源: Lin-arm/GKD_subscription src/apps/com.chinamobile.mcloud.ts
// 摘取类别: 开屏广告 / 全屏广告, 同步于 2026-11-09
// 重新导入: pnpm tsx scripts/import-ref.ts --force com.chinamobile.mcloud
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.chinamobile.mcloud',
  name: '中国移动云盘',
  groups: [
    {
      key: 2,
      name: '全屏广告-弹窗广告',
      rules: [
        {
          key: 0,
          fastQuery: true,
          matchTime: 10000,
          actionMaximum: 1,
          resetMatch: 'app',
          activityIds: [
            '.client.ui.MenuActivity',
            '.client.ui.CustomScanActivity',
            'com.mcloud.login.ui.ConfirmLoginTvActivity',
          ],
          matches: '[vid="iv_close"]',
          snapshotUrls: [
            'https://i.gkd.li/i/13627826',
            'https://i.gkd.li/i/14549523',
            'https://i.gkd.li/i/14732062',
          ],
        },
        {
          key: 1,
          fastQuery: true,
          activityIds: '.client.ui.MenuActivity',
          matches:
            '@Image[clickable=true] < View -3 [text="马上领取"] < View < View < View < WebView < WebView < FrameLayout < [id="android:id/content"]',
          snapshotUrls: 'https://i.gkd.li/i/13627832',
        },
      ],
    },
    {
      key: 4,
      name: '全屏广告-请求开启自动备份弹窗',
      desc: '点击关闭',
      rules: [
        {
          fastQuery: true,
          activityIds: '.client.ui.MenuActivity',
          matches:
            '[text="开启自动备份"] +4 [text="暂不设置"][visibleToUser=true]',
          snapshotUrls: 'https://i.gkd.li/i/13627830',
        },
      ],
    },
  ],
});
