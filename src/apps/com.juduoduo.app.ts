// 来源: Lin-arm/GKD_subscription src/apps/com.juduoduo.app.ts
// 摘取类别: 开屏广告 / 全屏广告, 同步于 2026-11-09
// 重新导入: pnpm tsx scripts/import-ref.ts --force com.juduoduo.app
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.juduoduo.app',
  name: '剧多多',
  groups: [
    {
      key: 6,
      name: '全屏广告-弹窗广告',
      desc: '点击关闭',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          key: 0,
          matches:
            'ImageView[childCount=0][text=null] < @ViewGroup[childCount=1][clickable=true][visibleToUser=true] < ViewGroup +n ViewGroup[childCount=2] > [text="广告"]',
          snapshotUrls: 'https://i.gkd.li/i/13705650',
        },
        {
          key: 1,
          matches:
            '[vid="ksad_tk_view"] @ViewGroup[clickable=true] > [text="跳过"]',
          snapshotUrls: 'https://i.gkd.li/i/13705662',
        },
      ],
    },
  ],
});
