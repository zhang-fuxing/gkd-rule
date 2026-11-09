// 来源: Lin-arm/GKD_subscription src/apps/com.baidu.BaiduMap.ts
// 摘取类别: 开屏广告 / 全屏广告, 同步于 2026-11-09
// 重新导入: pnpm tsx scripts/import-ref.ts --force com.baidu.BaiduMap
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.baidu.BaiduMap',
  name: '百度地图',
  groups: [
    {
      key: -1,
      name: '开屏广告',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      actionMaximumKey: 0,
      priorityTime: 10000,
      rules: [
        {
          key: 0,
          matches:
            '[text*="跳过"][text.length<10][width<500 && height<300][visibleToUser=true]',
          exampleUrls: 'https://e.gkd.li/f03b3648-757a-48e3-bd3b-098f8293edbf',
          snapshotUrls: 'https://i.gkd.li/i/16556555',
        },
        {
          key: 1,
          matches: '[vid="ms_skipView"][visibleToUser=true]',
          exampleUrls: 'https://e.gkd.li/cd89ffb7-6cd3-4978-b3d6-ef5ece2769d0',
          snapshotUrls: 'https://i.gkd.li/i/23742641',
        },
      ],
    },
    {
      key: 10,
      name: '全屏广告',
      rules: [
        {
          fastQuery: true,
          activityIds: 'com.baidu.baidumaps.MapsActivity',
          matches: '[vid="img_close"][visibleToUser=true]',
          snapshotUrls: 'https://i.gkd.li/i/22616256',
        },
      ],
    },
  ],
});
