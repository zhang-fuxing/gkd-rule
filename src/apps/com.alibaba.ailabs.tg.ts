// 来源: Lin-arm/GKD_subscription src/apps/com.alibaba.ailabs.tg.ts
// 摘取类别: 开屏广告 / 全屏广告, 同步于 2026-11-09
// 重新导入: pnpm tsx scripts/import-ref.ts --force com.alibaba.ailabs.tg
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.alibaba.ailabs.tg',
  name: '天猫精灵',
  groups: [
    {
      key: 2,
      name: '全屏广告-超级会员弹窗',
      desc: '点击关闭',
      rules: [
        {
          fastQuery: true,
          position: {
            left: 'width * 0.9444',
            top: 'width * 1.0583',
          },
          activityIds:
            'com.alibaba.ailabs.flutter.container.FlutterPaymentActivity',
          matches: 'FrameLayout > LinearLayout > [id="android:id/content"]',
          exampleUrls:
            'https://m.gkd.li/57941037/4a823639-f400-4249-81ea-f920d09317f4',
          snapshotUrls: 'https://i.gkd.li/i/14443874',
        },
      ],
    },
  ],
});
