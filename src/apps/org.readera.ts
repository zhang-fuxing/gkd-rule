// 来源: Lin-arm/GKD_subscription src/apps/org.readera.ts
// 摘取类别: 开屏广告 / 全屏广告, 同步于 2026-11-09
// 重新导入: pnpm tsx scripts/import-ref.ts --force org.readera
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'org.readera',
  name: 'ReadEra',
  groups: [
    {
      key: 2,
      name: '全屏广告',
      rules: [
        {
          fastQuery: true,
          activityIds: '.MainActivity',
          matches:
            '@[desc="关闭"][clickable=true] < * +n * >4 [text^="高级版"]',
          snapshotUrls: 'https://i.gkd.li/i/24335645',
        },
      ],
    },
    {
      key: 3,
      name: '全屏广告-高级版',
      desc: '注意：此规则会关闭手动打开的高级版开通界面，但该界面有时会自动弹出',
      rules: [
        {
          fastQuery: true,
          activityIds: '.MainActivity',
          matches:
            '@[desc="关闭"][clickable=true] < * + * >5 [text="ReadEra Premium"]',
          snapshotUrls: 'https://i.gkd.li/i/24981838',
        },
      ],
    },
  ],
});
