// 来源: Lin-arm/GKD_subscription src/apps/com.wuba.zhuanzhuan.ts
// 摘取类别: 开屏广告 / 全屏广告, 同步于 2026-11-09
// 重新导入: pnpm tsx scripts/import-ref.ts --force com.wuba.zhuanzhuan
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.wuba.zhuanzhuan',
  name: '转转',
  groups: [
    {
      key: 2,
      name: '全屏广告-弹窗广告',
      desc: '点击关闭',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          key: 0,
          activityIds:
            'com.zhuanzhuan.module.reach.channel.impl.uicode.ReachDialogActivity',
          matches:
            '[id="android:id/content"] > ViewGroup[childCount=3] >2 ViewGroup[childCount>1] > ImageView[clickable=true][index=parent.childCount.minus(1)]',
          snapshotUrls: [
            'https://i.gkd.li/i/14927441',
            'https://i.gkd.li/i/15140820',
          ],
        },
      ],
    },
  ],
});
