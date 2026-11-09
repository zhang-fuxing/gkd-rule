// 来源: Lin-arm/GKD_subscription src/apps/com.baidu.tieba.ts
// 摘取类别: 开屏广告 / 全屏广告, 同步于 2026-11-09
// 重新导入: pnpm tsx scripts/import-ref.ts --force com.baidu.tieba
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.baidu.tieba',
  name: '百度贴吧',
  groups: [
    {
      key: 0,
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
          matches: 'TextView[text^="跳过"][text.length<=10]',
          snapshotUrls: [
            'https://i.gkd.li/i/12775906',
            'https://i.gkd.li/i/12566191',
            'https://i.gkd.li/i/12870916',
            'https://i.gkd.li/i/13233500',
          ],
        },
        {
          key: 1,
          fastQuery: true,
          anyMatches: [
            '@View[text=null][clickable=true][childCount=0][visibleToUser=true][width<200&&height<200] +(1,2) TextView[index=parent.childCount.minus(1)][childCount=0] <n FrameLayout[childCount>2][text=null][desc=null] >(n+6) [text*="第三方应用" || text*="扭动手机" || text*="点击或上滑" || text*="省钱好物" || text*="扭一扭"][visibleToUser=true]',
            'FrameLayout > FrameLayout[childCount>2][text=null][desc=null] > @View[text=null][clickable=true][childCount=0][visibleToUser=true][width<200&&height<200] +(1,2) TextView[index=parent.childCount.minus(1)][childCount=0][visibleToUser=true]',
          ],
          snapshotUrls: 'https://i.gkd.li/i/13322227',
        },
        {
          key: 2,
          matches:
            'TextView[text="广告"] - @LinearLayout[clickable=true] > [text="关闭"]',
          snapshotUrls: 'https://i.gkd.li/i/13168386',
        },
      ],
    },
    {
      key: 9,
      name: '全屏广告-弹窗广告',
      matchTime: 10000,
      actionMaximum: 1,
      rules: [
        {
          key: 0,
          fastQuery: true,
          activityIds: '.tblauncher.MainTabActivity',
          matches:
            'TextView[index=1][width<141 && height<141][visibleToUser=true] - [getChild(0).name$="Image"] < View < View < View < WebView < WebView < FrameLayout < [id="android:id/content"]',
          snapshotUrls: 'https://i.gkd.li/i/33748842',
        },
        {
          key: 1,
          name: '点击正下方x关闭',
          activityIds: [
            '.frs.FrsActivity',
            '.tblauncher.MainTabActivity',
            '.LogoActivity',
          ],
          matches:
            '@TextView[vid="obfuscated"][clickable=true][childCount=0][visibleToUser=true] - FrameLayout[childCount=2][getChild(1).text="广告"] < RelativeLayout[childCount=2] < [parent=null]',
          snapshotUrls: [
            'https://i.gkd.li/i/13168383',
            'https://i.gkd.li/i/13322120',
            'https://i.gkd.li/i/13328246',
          ],
        },
        {
          key: 2,
          activityIds: [
            '.tblauncher.MainTabActivity',
            'com.baidu.tbadk.browser.TBWebContainerActivity',
            '.forum.ForumActivity',
          ],
          matches:
            'WebView[text!=null] > View[childCount=1] > View[childCount=3] > @[visibleToUser=true][index=2][width<150]',
          exampleUrls: 'https://e.gkd.li/ac3d88b7-31a2-441f-a4c8-8a73eaec24b9',
          snapshotUrls: [
            'https://i.gkd.li/i/13060891',
            'https://i.gkd.li/i/16703244',
            'https://i.gkd.li/i/34382812',
          ],
          excludeSnapshotUrls: 'https://i.gkd.li/i/29640529', // [width<150]
        },
      ],
    },
    {
      key: 14,
      name: '全屏广告-会员弹窗',
      desc: '点击关闭',
      rules: [
        {
          forcedTime: 10000,
          activityIds: [
            '.tblauncher.MainTabActivity',
            'com.baidu.tbadk.browser.TBWebContainerActivity',
          ],
          matches:
            'WebView[text="会员弹窗" || text="一键签到"] >(3,4) TextView + Image[text!=null][childCount=0][visibleToUser=true]',
          exampleUrls:
            'https://m.gkd.li/57941037/dd2f2a00-e9d3-47fa-986d-09ae6180d932',
          snapshotUrls: [
            'https://i.gkd.li/i/14630806',
            'https://i.gkd.li/i/15119439',
            'https://i.gkd.li/i/15119451',
            'https://i.gkd.li/i/16426630',
          ],
        },
      ],
    },
  ],
});
