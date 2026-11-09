// 来源: Lin-arm/GKD_subscription src/apps/com.autonavi.minimap.ts
// 摘取类别: 开屏广告 / 全屏广告, 同步于 2026-11-09
// 重新导入: pnpm tsx scripts/import-ref.ts --force com.autonavi.minimap
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.autonavi.minimap',
  name: '高德地图',
  groups: [
    {
      key: -1,
      name: '开屏广告',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      priorityTime: 10000,
      rules: [
        {
          matches:
            '[text*="跳过"][text.length<10][width<500 && height<300][visibleToUser=true]',
          exampleUrls: 'https://e.gkd.li/983cc392-1b01-4172-bc1d-2df001baeb3d',
          snapshotUrls: 'https://i.gkd.li/i/16490985',
        },
      ],
    },
    {
      key: 14,
      name: '全屏广告',
      desc: '点击关闭',
      rules: [
        {
          key: 0,
          name: '[欢迎]弹窗',
          fastQuery: true,
          activityIds: 'com.autonavi.map.activity.NewMapActivity',
          matches:
            'ViewGroup[childCount=6] >4 ViewGroup[childCount=5] > @ImageView[clickable=true] + View[text!=null] <<n [vid="fragment_container"]',
          exampleUrls:
            'https://m.gkd.li/57941037/660ef360-eee8-4fb8-9764-7a1822ccb6e9',
          snapshotUrls: [
            'https://i.gkd.li/i/14800704',
            'https://i.gkd.li/i/17079025', // add @ImageView[clickable=true]避免在此误触
          ],
        },
        {
          key: 1,
          name: '签到弹窗',
          fastQuery: true,
          activityIds: 'com.autonavi.map.activity.NewMapActivity',
          matches: '[vid="main_map_msg_dialog_close"]',
          exampleUrls:
            'https://m.gkd.li/57941037/e059109b-f4bb-4ed6-81a8-6010b51ebfd5',
          snapshotUrls: 'https://i.gkd.li/i/14809993',
        },
        {
          key: 2,
          fastQuery: true,
          activityIds: 'com.autonavi.map.activity.NewMapActivity',
          matches:
            '@ViewGroup[clickable=true] > View[visibleToUser=true][text^="关闭"] <<n [vid="mapInteractiveRelativeLayout"]',
          exampleUrls: 'https://e.gkd.li/0a4e847f-b1b0-4667-982a-43f313305139',
          snapshotUrls: 'https://i.gkd.li/i/22287641',
        },
      ],
    },
  ],
});
