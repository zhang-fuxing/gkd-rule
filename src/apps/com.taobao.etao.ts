// 来源: Lin-arm/GKD_subscription src/apps/com.taobao.etao.ts
// 摘取类别: 开屏广告 / 全屏广告, 同步于 2026-11-09
// 重新导入: pnpm tsx scripts/import-ref.ts --force com.taobao.etao
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.taobao.etao',
  name: '一淘',
  groups: [
    {
      key: 2,
      name: '全屏广告-弹窗广告',
      fastQuery: true,
      activityIds: '.app.homev4.HomeV4Activity',
      rules: [
        {
          key: 0,
          matches:
            '@ImageView[width<150 && height<150] <2 FrameLayout < [vid="dialog_container"]',
          snapshotUrls: 'https://i.gkd.li/i/30859236',
        },
        {
          key: 1,
          matches:
            'ImageView[width<150 && height<150] < @[clickable=true] + [vid="dialog_container"]',
          snapshotUrls: 'https://i.gkd.li/i/30859577',
        },
        {
          key: 2,
          matches:
            '@View[id=null][visibleToUser=true][width<150 && height<150][parent.childCount=3] <<n [vid="dialog_container"]',
          snapshotUrls: 'https://i.gkd.li/i/30859628',
        },
        {
          key: 3,
          activityIds: '.app.home.view.NewHomeActivity',
          matches:
            'ImageView[width<150 && height<150] < @RelativeLayout[clickable=true][childCount=1] <2 [childCount=2] < [id="android:id/content"]',
          snapshotUrls: 'https://i.gkd.li/i/30859526', //旧快照,无快查 (已转成webp截图)
        },
      ],
    },
  ],
});
