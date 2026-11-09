// 来源: Lin-arm/GKD_subscription src/apps/com.tencent.gamehelper.pg.ts
// 摘取类别: 开屏广告 / 全屏广告, 同步于 2026-11-09
// 重新导入: pnpm tsx scripts/import-ref.ts --force com.tencent.gamehelper.pg
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.tencent.gamehelper.pg',
  name: '和平营地',
  groups: [
    {
      key: 1,
      name: '全屏广告',
      desc: '①选中[不再提示] ②点击[x]掉',
      fastQuery: true,
      activityIds: 'com.tencent.gamehelper.ui.main.MainActivity',
      rules: [
        {
          key: 0,
          name: '①选中[不再提示]',
          matches: '@CheckBox[checked=false] + [text="不再提示"]',
          snapshotUrls: 'https://i.gkd.li/i/26953259',
          exampleUrls: 'https://e.gkd.li/f5d3e4e4-2cb8-4c01-bf14-604788ae8ab3',
        },
        {
          key: 1,
          name: '②点击[x]掉',
          matches: '[vid="closebtn"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/26953259',
        },
      ],
    },
  ],
});
