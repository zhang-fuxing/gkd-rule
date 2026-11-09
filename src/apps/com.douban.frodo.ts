// 来源: Lin-arm/GKD_subscription src/apps/com.douban.frodo.ts
// 摘取类别: 开屏广告 / 全屏广告, 同步于 2026-11-09
// 重新导入: pnpm tsx scripts/import-ref.ts --force com.douban.frodo
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.douban.frodo',
  name: '豆瓣',
  groups: [
    {
      key: -1,
      name: '开屏广告',
      desc: '⚠️[跳过]广告前可能有多次无效点击,属于正常现象',
      fastQuery: true,
      matchRoot: true,
      matchTime: 10000,
      actionMaximum: 2,
      resetMatch: 'app',
      // actionMaximumKey: 0,
      priorityTime: 10000,
      rules: [
        {
          key: 0,
          matches:
            '@View[text=null][clickable=true][childCount=0][visibleToUser=true][width<200 && height<200] +(1,2) TextView[index=parent.childCount.minus(1)][childCount=0] <n FrameLayout[childCount>2][text=null][desc=null] >(n+6) [text*="第三方应用" || text*="扭动手机" || text*="点击或上滑" || text*="省钱好物" || text*="扭一扭"][visibleToUser=true]',
          snapshotUrls: 'https://i.gkd.li/i/15981630',
        },
        {
          key: 1,
          matches:
            '@[clickable=true] >2 [text*="跳过"][text.length<10][width<500 && height<300][visibleToUser=true]',
          snapshotUrls: 'https://i.gkd.li/i/26608409', // issue #110
        },
        {
          key: 2,
          excludeMatches:
            '[text="去绑定邮箱" || text="历史"][visibleToUser=true]',
          matches:
            '[text*="跳过"][text.length<10][width<500 && height<300][visibleToUser=true]',
          snapshotUrls: 'https://i.gkd.li/i/17687115',
          excludeSnapshotUrls: [
            'https://i.gkd.li/i/23283375',
            'https://i.gkd.li/i/29175754', //搜索历史
          ],
        },
        {
          key: 3,
          matches:
            '@View[width<170 && height<170] <3 FrameLayout <2 FrameLayout < [vid="sdk_view"]',
          snapshotUrls: [
            'https://i.gkd.li/i/29440951',
            'https://i.gkd.li/i/34211578',
          ],
        },
        {
          key: 4,
          matches:
            '@View[width<170 && height<170] <3 FrameLayout[childCount=3] < [vid="sdk_view"]',
          snapshotUrls: [
            'https://i.gkd.li/i/34494192',
            'https://i.gkd.li/i/34514159',
          ],
        },

        // 坐标点击的放后面, 从上往下依次点击按钮[跳过]附近的坐标, 总有一个能点中[跳过]
        {
          key: 10,
          name: '点击坐标①',
          position: {
            left: 'width * 0.875',
            top: 'width * 0.10', // 目标节点的height变化太大，不建议使用
          },
          anyMatches: [
            '[vid="ad_view"][visibleToUser=true][width>=720][childCount!=0]',
            '[vid="sdk_view"] >n [vid="animation_view"][visibleToUser=true][width>=720]',
          ],
          snapshotUrls: 'https://i.gkd.li/i/23283060', // 按钮[跳过]的位置的top在 (0.05 ~ 0.12) * 宽度1216 范围内
          excludeSnapshotUrls: 'https://i.gkd.li/i/29440952', // 白屏阶段 [vid="ad_loading_view"]
        },
        {
          key: 11,
          preKeys: [10],
          name: '点击坐标②',
          position: {
            left: 'width * 0.875',
            top: 'width * 0.135',
          },
          anyMatches: [
            // 选择器跟前面 key10 一样,只是点击位置不同
            '[vid="ad_view"][visibleToUser=true][width>=720][childCount!=0]',
            '[vid="sdk_view"] >n [vid="animation_view"][visibleToUser=true][width>=720]',
          ],
          snapshotUrls: [
            'https://i.gkd.li/i/13575257', // (旧快照) top在 (0.10 ~ 0.17) * 1080 内
            'https://i.gkd.li/i/18423724', // (0.11 ~ 0.16) * 1080
            'https://i.gkd.li/i/23982586', // (0.10 ~ 0.15) * 1224
            'https://i.gkd.li/i/23382528', // (0.11 ~ 0.14) * 1440
          ],
        },
        {
          key: 12,
          preKeys: [11],
          name: '点击坐标③',
          position: {
            left: 'width * 0.875',
            top: 'width * 0.17',
          },
          anyMatches: [
            '[vid="ad_view"][visibleToUser=true][width>=720][childCount!=0]',
            '[vid="sdk_view"] >n [vid="animation_view"][visibleToUser=true][width>=720]', //2️⃣
          ],
          snapshotUrls: [
            'https://i.gkd.li/i/13601755', // (旧快照) top在 (0.11 ~ 0.18) * 1200 内
            'https://i.gkd.li/i/23324118', // (0.13 ~ 0.20) * 1280
            'https://i.gkd.li/i/23324139', // (0.14 ~ 0.20) * 1220
            'https://i.gkd.li/i/23652259', // (0.12 ~ 0.19) * 1216
            'https://i.gkd.li/i/24191638', // (0.13 ~ 0.19) * 1260    2️⃣ (仅用[vid="sdk_view"]的话,可能误触key3漏掉的)
            'https://i.gkd.li/i/24362806', // (0.13 ~ 0.20) * 1440
          ],
        },
        {
          key: 13,
          preKeys: [12],
          name: '点击坐标④',
          position: {
            left: 'width * 0.875',
            top: 'width * 0.20',
          },
          anyMatches: [
            '[vid="ad_view"][visibleToUser=true][width>=720][childCount!=0]',
            '[vid="sdk_view"] >n [vid="animation_view"][visibleToUser=true][width>=720]',
          ],
          snapshotUrls: 'https://i.gkd.li/i/16054268', // (0.15 ~ 0.22) * 1200
        },
      ],
    },
    {
      key: 10,
      name: '全屏广告-弹窗广告',
      desc: '点击关闭',
      rules: [
        {
          key: 0,
          fastQuery: true,
          activityIds: '.subject.structure.activity.MovieActivity',
          matches:
            '@ImageView[childCount=0][text=null][desc=null][id=null][visibleToUser=true][width<90 && height<90] < FrameLayout[childCount=1][text=null][desc=null][id=null][parent.childCount>3] <n FrameLayout >(2,3) [text^="立即" || text$="详情" || text^="了解" || text="去微信看看" || text$="应用" || text="进入小程序" || text="领取优惠" || text="跳转微信"]',
          snapshotUrls: 'https://i.gkd.li/i/13195565',
        },
        {
          key: 1,
          fastQuery: true,
          matches:
            '@ImageView[childCount=0][text=null][desc=null][id=null][visibleToUser=true][width<90 && height<90] < FrameLayout[childCount=1][text=null][desc=null][id=null] <2 FrameLayout[childCount=5] + FrameLayout[childCount=2] > [text^="立即" || text$="详情" || text^="了解" || text="去逛逛" || text="去微信看看" || text$="应用" || text="进入小程序" || text="领取优惠" || text="跳转微信"]',
          snapshotUrls: 'https://i.gkd.li/i/13328126',
        },
        {
          key: 2,
          fastQuery: true,
          matches:
            '@ImageView[childCount=0][text=null][visibleToUser=true] < FrameLayout[childCount=1] <3 FrameLayout[childCount=3] < FrameLayout[childCount=2] +5 FrameLayout[childCount=4] > [text^="扭动或点击"]',
          exampleUrls: 'https://e.gkd.li/f8b1e031-3ec1-422c-9214-8350195642cd',
          snapshotUrls: 'https://i.gkd.li/i/13328126',
        },
        {
          key: 3,
          fastQuery: true,
          activityIds: '.subject.structure.activity.MovieActivity',
          matches: [
            '[text="广告"][visibleToUser=true]',
            '[vid="close"][visibleToUser=true]',
          ],
          exampleUrls: 'https://e.gkd.li/208939d0-9d7f-4a44-8e7d-5070478c15df',
          snapshotUrls: 'https://i.gkd.li/i/18631520',
        },
        {
          key: 4,
          fastQuery: true,
          activityIds: '.subject.structure.activity.MovieActivity',
          matches: [
            '[text="你发现了一枚徽章"][visibleToUser=true]',
            '[vid="confirmLayout"][visibleToUser=true]',
          ],
          exampleUrls: 'https://e.gkd.li/ca74a922-fb47-4fc8-8111-b6a66c2465ff',
          snapshotUrls: 'https://i.gkd.li/i/18717771',
        },
      ],
    },
  ],
});
