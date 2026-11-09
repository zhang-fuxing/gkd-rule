// 来源: Lin-arm/GKD_subscription src/apps/com.boohee.one.ts
// 摘取类别: 开屏广告 / 全屏广告, 同步于 2026-11-09
// 重新导入: pnpm tsx scripts/import-ref.ts --force com.boohee.one
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.boohee.one',
  name: '薄荷健康',
  groups: [
    {
      key: 2,
      name: '全屏广告-发现页弹窗广告',
      activityIds: 'com.sensorsdata.sf.ui.view.DialogActivity',
      rules:
        'LinearLayout[childCount=2] > @ImageView[id=null][clickable=true] + ImageView',
      snapshotUrls: 'https://i.gkd.li/i/12716970',
    },
  ],
});
