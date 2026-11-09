// 来源: Lin-arm/GKD_subscription src/apps/com.dasjkjfd.mgd.ts
// 摘取类别: 开屏广告 / 全屏广告, 同步于 2026-11-09
// 重新导入: pnpm tsx scripts/import-ref.ts --force com.dasjkjfd.mgd
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.dasjkjfd.mgd',
  name: '橘汁',
  groups: [
    {
      key: 2,
      name: '全屏广告',
      fastQuery: true,
      activityIds: [
        'com.hive.MainTabActivity',
        'com.hive.module.player.PlayDetailActvity',
      ],
      rules: [
        {
          key: 0,
          name: '向下找',
          matches:
            '@ImageView[vid=null][text=null][width<88 && height<88] < FrameLayout[childCount=1] - FrameLayout >n  [text$="了解更多内容" || text="立即打开"]',
          snapshotUrls: 'https://i.gkd.li/i/32193904', // 主页
          exampleUrls: 'https://e.gkd.li/3d8c82b7-49bb-4105-85a9-32b50fa28d36',
        },
        {
          key: 1,
          name: '向上找',
          matches:
            '@ImageView[vid=null][text=null][width<88 && height<88] < FrameLayout[childCount=1] + FrameLayout >n  [text$="了解更多内容" || text="立即打开"]',
          snapshotUrls: 'https://i.gkd.li/i/32194584', // 播放页
          exampleUrls: 'https://e.gkd.li/cc89f931-daf3-41be-bae4-54e471c601ee',
        },
      ],
    },
    {
      key: 3,
      name: '全屏广告-插屏广告',
      desc: '视频暂停时出现, 点击[跳过/关闭]',
      rules: [
        {
          fastQuery: true,
          activityIds: [
            'com.windmill.sdk.widget.InterstitialView',
            'com.windmill.sdk.host.stub.StubActivityStandard_', //通配
          ],
          matches:
            '@[clickable=true] > [text*="跳过" || text="关闭"][text.length<8]',
          snapshotUrls: [
            'https://i.gkd.li/i/32318689',
            'https://i.gkd.li/i/33745185',
            'https://i.gkd.li/i/33745188',
          ],
          exampleUrls: 'https://e.gkd.li/67e9c8a2-f9ed-477b-ae46-39f493035a20',
        },
      ],
    },
  ],
});
