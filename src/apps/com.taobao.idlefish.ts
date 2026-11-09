// 来源: Lin-arm/GKD_subscription src/apps/com.taobao.idlefish.ts
// 摘取类别: 开屏广告 / 全屏广告, 同步于 2026-11-09
// 重新导入: pnpm tsx scripts/import-ref.ts --force com.taobao.idlefish
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.taobao.idlefish',
  name: '闲鱼',
  groups: [
    {
      key: 4,
      name: '全屏广告',
      desc: '点击关闭',
      rules: [
        {
          key: 0,
          activityIds: '.maincontainer.activity.MainActivity',
          matches:
            'WebView[text="Rax App"] > [id="root"] >(3,6) View[index=parent.childCount.minus(1)][clickable=true]',
          snapshotUrls: [
            'https://i.gkd.li/i/14551046',
            'https://i.gkd.li/i/24981766',
          ],
        },
        {
          key: 1,
          fastQuery: true,
          activityIds: '.search_implement.SearchResultActivity',
          matches:
            '@[index=parent.childCount.minus(1)][clickable=true][width<250][height<250] <n View <<6 m0 <<6 [vid="fish_layer_container_id"]',
          snapshotUrls: 'https://i.gkd.li/i/23125419',
        },
        {
          key: 2,
          fastQuery: true,
          activityIds:
            'com.idlefish.flutterbridge.flutterboost.boost.FishFlutterBoostActivity',
          matches:
            '@[clickable=true][width<200] <<(4,6) View[id="root"] <<(5,8) [vid="fish_layer_container_id"]',
          snapshotUrls: [
            'https://i.gkd.li/i/23183586',
            'https://i.gkd.li/i/25796344',
          ],
        },
      ],
    },
  ],
});
