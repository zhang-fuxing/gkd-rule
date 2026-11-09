// 来源: Lin-arm/GKD_subscription src/apps/com.ss.android.ugc.aweme.ts
// 摘取类别: 开屏广告 / 全屏广告, 同步于 2026-11-09
// 重新导入: pnpm tsx scripts/import-ref.ts --force com.ss.android.ugc.aweme
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.ss.android.ugc.aweme',
  name: '抖音',
  groups: [
    {
      key: -1,
      name: '开屏广告',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      priorityTime: 10000,
      rules: [
        {
          fastQuery: true,
          excludeActivityIds: '.search.activity.SearchResultActivity',
          matches:
            '[text*="跳过"][text.length<10][width<500 && height<300][visibleToUser=true]',
          exampleUrls: 'https://e.gkd.li/202942ce-259c-4b9d-b3b3-06afbac8145f',
          snapshotUrls: 'https://i.gkd.li/i/13216121',
          excludeSnapshotUrls: 'https://i.gkd.li/i/17811608',
        },
      ],
    },
    {
      key: 13,
      name: '全屏广告-小组件弹窗',
      desc: '点击x掉',
      rules: [
        {
          fastQuery: true,
          activityIds: [
            '.main.MainActivity',
            '.live.LiveDummyActivity',
            '.search.activity.SearchResultActivity',
          ],
          matches:
            '@ImageView[clickable=true][width<173] <2 [childCount>3] > [text^="添加" || text^="开启"][text*="桌面"]',
          snapshotUrls: [
            'https://i.gkd.li/i/13669682', //添加抖音商城到桌面
            'https://i.gkd.li/i/14740312', //添加抖音商城到桌面
            'https://i.gkd.li/i/14325749', //开启搜索组件到桌面
            'https://i.gkd.li/i/18009276', //添加火花桌面小组件
          ],
          exampleUrls: 'https://e.gkd.li/c3980f6b-5459-45fe-b317-5bdc561319dc',
        },
      ],
    },
    {
      key: 15,
      name: '全屏广告',
      desc: '点击[不感兴趣/知道了]',
      fastQuery: true,
      activityIds: '.main.MainActivity',
      rules: [
        {
          key: 0,
          matches:
            '@[clickable=true][text="不感兴趣"] +(1,2) FlattenUIText[text="不感兴趣"]',
          snapshotUrls: [
            'https://i.gkd.li/i/13800207',
            'https://i.gkd.li/i/13996724',
            'https://i.gkd.li/i/20035670',
          ],
        },
        {
          key: 1,
          matches: '[name!$="ImageView"] + [text="不感兴趣"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/14661956',
          excludeSnapshotUrls: 'https://i.gkd.li/i/23833191', // [name!$="ImageView"]
        },
        {
          key: 2,
          activityIds: [
            '.live.LiveDummyActivity',
            '.commerce.sdk.MallContainerActivity',
            'com.bytedance.android.shopping.store.tabkit.container.TabKitActivity',
          ],
          matches: '[text*="首页商城"] +n FlattenUIText[text="知道了"]',
          snapshotUrls: [
            'https://i.gkd.li/i/14533732',
            'https://i.gkd.li/i/14969825',
            'https://i.gkd.li/i/14969835',
          ],
        },
      ],
    },
    {
      key: 22,
      name: '全屏广告-汽水音乐VIP',
      desc: '点击关闭',
      rules: [
        {
          key: 0,
          fastQuery: true,
          activityIds: [
            '.dsp.MusicLunaActivity',
            '.dsp.playpage.singlepage.subpage.MusicDspSubPlayerActivity',
          ],
          matches:
            'ScrollView - @ImageView[index=1][childCount=0][visibleToUser=true][width<100][height<100] <2 View < View < ViewGroup < ViewGroup < [id="android:id/content"]',
          exampleUrls: 'https://e.gkd.li/4c57ee77-2189-4b3b-be0b-430fac8853c2',
          snapshotUrls: [
            'https://i.gkd.li/i/18100285',
            'https://i.gkd.li/i/18100454',
            'https://i.gkd.li/i/18100477',
          ],
        },
      ],
    },
    {
      key: 36,
      name: '全屏广告-视频流-是广告认可不?[上滑]',
      desc: '问你刚才是不是广告?-> 划掉',
      rules: [
        {
          fastQuery: true,
          activityIds: '.detail.ui.DetailActivity',
          matches:
            'UIText[text="你认为这个内容是【广告】吗？"][visibleToUser=true]',
          swipeArg: {
            start: {
              x: 'screenWidth/2',
              y: 'screenHeight * 0.6',
            },
            end: {
              x: 'screenWidth/2',
              y: 'screenHeight * 0.3',
            },
            duration: 200, //滑动时长
          },
          snapshotUrls: 'https://i.gkd.li/i/29401376',
          exampleUrls: 'https://e.gkd.li/bd652ced-a3a8-4cbc-aae7-e309dcbfeb8e',
        },
      ],
    },
  ],
});
