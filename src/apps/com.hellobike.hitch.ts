// 来源: Lin-arm/GKD_subscription src/apps/com.hellobike.hitch.ts
// 摘取类别: 开屏广告 / 全屏广告, 同步于 2026-11-09
// 重新导入: pnpm tsx scripts/import-ref.ts --force com.hellobike.hitch
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.hellobike.hitch',
  name: '哈啰顺风车',
  groups: [
    {
      key: 1,
      name: '全屏广告-弹窗广告',
      desc: '点击x掉',
      rules: [
        {
          fastQuery: true,
          activityIds: 'com.hellobike.atlas.business.portal.PortalActivity',
          matches:
            'View[width>prev.width.times(5)] + @Image[text.length>0][visibleToUser=true][width<150 && height<150] <<n [vid="phWebLayout"]',
          snapshotUrls: [
            'https://i.gkd.li/i/30825123',
            'https://i.gkd.li/i/30825109',
          ],
          exampleUrls: 'https://e.gkd.li/c816f503-5740-4e50-a5c8-6da03bb04af5',
        },
      ],
    },
  ],
});
