// 来源: Lin-arm/GKD_subscription src/apps/com.duoduo.cimoc.su.ts
// 摘取类别: 开屏广告 / 全屏广告, 同步于 2026-11-09
// 重新导入: pnpm tsx scripts/import-ref.ts --force com.duoduo.cimoc.su
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.duoduo.cimoc.su',
  name: '速映影院',
  groups: [
    {
      key: 1,
      name: '全屏广告-首页弹窗广告',
      desc: '点击关闭',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          fastQuery: true,
          activityIds: '.MainActivity',
          matches:
            'ImageView[childCount=0][text=null] < @ViewGroup[childCount=1][clickable=true][visibleToUser=true] < ViewGroup +n ViewGroup[childCount=2] > [text="广告"]',
          snapshotUrls: 'https://i.gkd.li/i/13999281',
        },
      ],
    },
  ],
});
