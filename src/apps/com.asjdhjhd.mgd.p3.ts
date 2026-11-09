// 来源: Lin-arm/GKD_subscription src/apps/com.asjdhjhd.mgd.p3.ts
// 摘取类别: 开屏广告 / 全屏广告, 同步于 2026-11-09
// 重新导入: pnpm tsx scripts/import-ref.ts --force com.asjdhjhd.mgd.p3
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.asjdhjhd.mgd.p3',
  name: '橘汁',
  groups: [
    {
      key: 1,
      name: '全屏广告',
      rules: [
        {
          fastQuery: true,
          activityIds:
            'com.windmill.sdk.host.stub.StubActivityStandard_TL_Portrait',
          matches:
            '@ImageView[visibleToUser=true][width<78] < [childCount=1] +2 FrameLayout >2 [text="立即下载"]',
          snapshotUrls: 'https://i.gkd.li/i/34303867',
          exampleUrls: 'https://e.gkd.li/c080c336-c36e-4001-8fd1-c2ec0ef0a1da',
        },
      ],
    },
  ],
});
