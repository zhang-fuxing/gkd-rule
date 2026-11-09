// 来源: Lin-arm/GKD_subscription src/apps/com.oray.sunlogin.ts
// 摘取类别: 开屏广告 / 全屏广告, 同步于 2026-11-09
// 重新导入: pnpm tsx scripts/import-ref.ts --force com.oray.sunlogin
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.oray.sunlogin',
  name: '向日葵远程控制',
  groups: [
    {
      key: -1,
      name: '开屏广告',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      actionMaximumKey: 0,
      priorityTime: 10000,
      rules: [
        {
          key: 0,
          fastQuery: true,
          matches:
            '[vid="tobid_splash_skip_text" || vid="ms_skipView"][visibleToUser=true]',
          exampleUrls: 'https://e.gkd.li/f41b0367-9161-4329-987d-b2d0ad9ec233',
          snapshotUrls: [
            'https://i.gkd.li/i/17004919',
            'https://i.gkd.li/i/22056539',
          ],
        },
        {
          key: 1,
          fastQuery: true,
          matches:
            '[text*="跳过"][text.length<10][width<500 && height<300][visibleToUser=true]',
          snapshotUrls: 'https://i.gkd.li/i/22861457',
        },
        {
          key: 2,
          fastQuery: true,
          matches:
            '@View[clickable=true][childCount=0][visibleToUser=true] +(2,3) LinearLayout >2 [vid="sig_ad_privacy_ll"]',
          snapshotUrls: [
            'https://i.gkd.li/i/22863334',
            'https://i.gkd.li/i/25626004',
          ],
        },
      ],
    },
    {
      key: 0,
      name: '全屏广告-瓜子会员弹窗',
      desc: '点击右上角[关闭]',
      rules: [
        {
          fastQuery: true,
          activityIds: ['.application.Main', '.dialog.ShareDialog'],
          matches: '[vid="close"][text="关闭"]',
          snapshotUrls: [
            'https://i.gkd.li/i/13195950',
            'https://i.gkd.li/i/12910411',
            'https://i.gkd.li/i/13197454', //如果没有text条件则会和这一条误触
          ],
        },
      ],
    },
    {
      key: 4,
      name: '全屏广告-远程控制结束后的广告',
      desc: '点击关闭',
      rules: [
        {
          fastQuery: true,
          activityIds: '.application.Main',
          matches: '@[vid="close"][visibleToUser=true] - [vid="ll_remote_end"]',
          exampleUrls: 'https://e.gkd.li/104ba188-b4cd-4922-b27e-f654085eb163',
          snapshotUrls: 'https://i.gkd.li/i/17782893',
        },
      ],
    },
  ],
});
