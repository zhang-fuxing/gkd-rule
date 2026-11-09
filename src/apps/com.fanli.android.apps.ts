// 来源: Lin-arm/GKD_subscription src/apps/com.fanli.android.apps.ts
// 摘取类别: 开屏广告 / 全屏广告, 同步于 2026-11-09
// 重新导入: pnpm tsx scripts/import-ref.ts --force com.fanli.android.apps
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.fanli.android.apps',
  name: '返利',
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
          fastQuery: true,
          activityIds:
            'com.fanli.android.module.webview.ui.activity.TransparentBrowserInnerActivity',
          matches:
            '@View[clickable=true][width<158 && height<158] <n View[childCount=4] < View < WebView < * < [vid="webviewContainer"]',
          snapshotUrls: [
            'https://i.gkd.li/i/13245808',
            'https://i.gkd.li/i/33924810',
          ],
          exampleUrls: 'https://e.gkd.li/47c6d3bf-7cff-4462-9288-1be6d2368f99',
        },
      ],
    },
  ],
});
