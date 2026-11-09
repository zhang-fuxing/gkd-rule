// 来源: Lin-arm/GKD_subscription src/apps/io.hyperate.hyperateandroid.ts
// 摘取类别: 开屏广告 / 全屏广告, 同步于 2026-11-09
// 重新导入: pnpm tsx scripts/import-ref.ts --force io.hyperate.hyperateandroid
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'io.hyperate.hyperateandroid',
  name: 'HypeRate',
  groups: [
    {
      key: 1,
      name: '全屏广告',
      rules: [
        {
          activityIds: '.MainActivity',
          matches:
            '@Image[childCount=0][text.length>0] < View[childCount=1] - View[childCount=1] > [text="Customize Now"][visibleToUser=true]',
          exampleUrls: 'https://e.gkd.li/a9ee995f-1a7e-4663-86aa-b56a71e2ed5a',
          snapshotUrls: 'https://i.gkd.li/i/23598900',
        },
      ],
    },
  ],
});
