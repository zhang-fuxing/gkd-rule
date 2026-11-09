// 来源: Lin-arm/GKD_subscription src/apps/com.xiaomi.youpin.ts
// 摘取类别: 开屏广告 / 全屏广告, 同步于 2026-11-09
// 重新导入: pnpm tsx scripts/import-ref.ts --force com.xiaomi.youpin
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.xiaomi.youpin',
  name: '小米有品',
  groups: [
    {
      key: 1,
      name: '全屏广告-弹窗广告',
      rules: [
        {
          activityIds: '.globalpopwindow.popwindow.PopWindowActivity',
          matches:
            'WebView[text="有品"] > View > View[childCount=2] > Image[index=1][visibleToUser=true]',
          snapshotUrls: [
            'https://i.gkd.li/i/14964897',
            'https://i.gkd.li/i/12836727',
          ],
        },
      ],
    },
  ],
});
