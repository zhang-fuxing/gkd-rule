// 来源: Lin-arm/GKD_subscription src/apps/eu.smartpatient.mytherapy.ts
// 摘取类别: 开屏广告 / 全屏广告, 同步于 2026-11-09
// 重新导入: pnpm tsx scripts/import-ref.ts --force eu.smartpatient.mytherapy
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'eu.smartpatient.mytherapy',
  name: 'MyTherapy',
  groups: [
    {
      key: 1,
      name: '全屏广告',
      fastQuery: true,
      rules: [
        {
          key: 0,
          name: '形式1',
          activityIds: 'com.google.android.gms.ads.AdActivity',
          matches:
            '@Button[clickable=true] < [index=parent.childCount.minus(1)] <n View[childCount>1] <n [id="mys-content"] <<10  [id="android:id/content"]',
          snapshotUrls: [
            'https://i.gkd.li/i/26159508',
            'https://i.gkd.li/i/26159509',
            'https://i.gkd.li/i/26159510',
          ],
          exampleUrls: [
            'https://e.gkd.li/012e3aca-4d19-46e4-8873-5e4b15cec187',
            'https://e.gkd.li/631c83f3-097b-43e2-a05a-b5349ef211fc',
          ],
        },
        {
          key: 1,
          name: '形式2',
          activityIds: 'com.google.android.gms.ads.AdActivity',
          matches:
            '[desc="Interstitial close button"][visibleToUser=true] < @FrameLayout <2 [childCount=2] < [id="android:id/content"]',
          snapshotUrls: 'https://i.gkd.li/i/26646224',
          exampleUrls: 'https://e.gkd.li/5400ee80-9f09-426e-97b8-2e0e18add6a3',
        },
      ],
    },
  ],
});
