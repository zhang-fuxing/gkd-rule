// 来源: Lin-arm/GKD_subscription src/apps/cn.net.shizheng.study.ts
// 摘取类别: 开屏广告 / 全屏广告, 同步于 2026-11-09
// 重新导入: pnpm tsx scripts/import-ref.ts --force cn.net.shizheng.study
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'cn.net.shizheng.study',
  name: '365时政',
  groups: [
    {
      key: 1,
      name: '全屏广告-首页弹窗广告',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          activityIds: 'cn.dingwei.cloud_classroom.MainActivity',
          matches:
            'View[childCount=2] > ImageView[id=""] + Button[id=""][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/12708731',
        },
      ],
    },
  ],
});
