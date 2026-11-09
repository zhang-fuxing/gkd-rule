// 来源: Lin-arm/GKD_subscription src/apps/com.growing.topwidgets.ts
// 摘取类别: 开屏广告 / 全屏广告, 同步于 2026-11-09
// 重新导入: pnpm tsx scripts/import-ref.ts --force com.growing.topwidgets
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.growing.topwidgets',
  name: '万能小组件 Top Widgets',
  groups: [
    {
      key: 2,
      name: '全屏广告-弹窗广告',
      desc: '点击关闭',
      rules: [
        {
          key: 0,
          fastQuery: true,
          activityIds: 'com.baidu.mobads.sdk.api.MobRewardVideoActivity',
          matches:
            '@ImageView[clickable=true][visibleToUser=true] <(2,3,4) * >(2,3,4) [text="反馈"]',
          snapshotUrls: [
            'https://i.gkd.li/i/14945552',
            'https://i.gkd.li/i/15286451',
            'https://i.gkd.li/i/16703279',
          ],
        },
        {
          key: 1,
          fastQuery: true,
          matchTime: 10000,
          actionMaximum: 1,
          resetMatch: 'app',
          matches:
            '@ImageView[childCount=0][text=null][desc=null][id=null][visibleToUser=true][width<90 && height<90] < FrameLayout[childCount=1][text=null][desc=null][id=null] - FrameLayout[childCount>2] >3 [text^="立即" || text$="应用" || text="了解更多" || text="查看详情"]',
          snapshotUrls: 'https://i.gkd.li/i/14964868',
        },
      ],
    },
  ],
});
