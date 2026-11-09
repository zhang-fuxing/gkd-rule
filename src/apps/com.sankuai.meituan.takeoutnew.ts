// 来源: Lin-arm/GKD_subscription src/apps/com.sankuai.meituan.takeoutnew.ts
// 摘取类别: 开屏广告 / 全屏广告, 同步于 2026-11-09
// 重新导入: pnpm tsx scripts/import-ref.ts --force com.sankuai.meituan.takeoutnew
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.sankuai.meituan.takeoutnew',
  name: '美团外卖',
  groups: [
    {
      key: 3,
      name: '全屏广告-弹窗广告',
      rules: [
        {
          key: 0,
          activityIds:
            'com.sankuai.waimai.bussiness.order.detail.WMOrderDetailActivity',
          matches:
            '@ImageView[clickable=true] - FrameLayout > FrameLayout > FrameLayout TextView[text="点我领取"]',
          snapshotUrls: 'https://i.gkd.li/i/13175526',
        },
        {
          key: 1,
          fastQuery: true,
          activityIds: 'com.sankuai.waimai.business.page.homepage.MainActivity',
          matches:
            'ImageView < @[clickable=true] - FrameLayout >5 [text="外卖神券"][visibleToUser=true]',
          snapshotUrls: 'https://i.gkd.li/i/25865139',
          exampleUrls: 'https://e.gkd.li/b82ac99a-4902-453f-a59d-a11bf55560aa',
        },
      ],
    },
  ],
});
