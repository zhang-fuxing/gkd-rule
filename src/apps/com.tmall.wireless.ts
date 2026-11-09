// 来源: Lin-arm/GKD_subscription src/apps/com.tmall.wireless.ts
// 摘取类别: 开屏广告 / 全屏广告, 同步于 2026-11-09
// 重新导入: pnpm tsx scripts/import-ref.ts --force com.tmall.wireless
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.tmall.wireless',
  name: '手机天猫',
  groups: [
    {
      key: 2,
      name: '全屏广告-弹窗广告',
      rules: [
        {
          activityIds: [
            '.maintab.module.TMMainTabActivity',
            '.turboweb.container.TurboWebViewActivity',
            '.webview.TMCommonWebViewActivity',
          ],
          matches:
            'Image[id=null][clickable=false] < View + Image[id=null][clickable=true]',
          snapshotUrls: [
            'https://i.gkd.li/i/13222394',
            'https://i.gkd.li/i/13222500',
            'https://i.gkd.li/i/13222510',
          ],
        },
      ],
    },
  ],
});
