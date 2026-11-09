// 来源: Lin-arm/GKD_subscription src/apps/com.huawei.android.totemweather.ts
// 摘取类别: 开屏广告 / 全屏广告, 同步于 2026-11-09
// 重新导入: pnpm tsx scripts/import-ref.ts --force com.huawei.android.totemweather
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.huawei.android.totemweather',
  name: '华为天气',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      priorityTime: 10000,
      rules: [
        {
          action: 'clickCenter', // 根据 https://github.com/gkd-kit/subscription/pull/1180#issuecomment-1767735683 反馈，此处使用 clickCenter 事件。
          matches: '[id="com.huawei.hms.ads.uiengine:id/hiad_skip_text"]',
          snapshotUrls: [
            'https://i.gkd.li/i/12928975',
            'https://i.gkd.li/i/13226636',
          ],
        },
      ],
    },
  ],
});
