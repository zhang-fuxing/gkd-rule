// 来源: Lin-arm/GKD_subscription src/apps/com.zhihu.android.ts
// 摘取类别: 开屏广告 / 全屏广告, 同步于 2026-11-09
// 重新导入: pnpm tsx scripts/import-ref.ts --force com.zhihu.android
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.zhihu.android',
  name: '知乎',
  groups: [
    {
      key: -1,
      name: '开屏广告',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      actionMaximumKey: 0,
      resetMatch: 'app',
      priorityTime: 10000,
      rules: [
        {
          key: 0,
          excludeActivityIds: [
            '.app.SearchActivity',
            '.comment.ui.activity.CommentListActivity',
            '.feature.short_container_feature.ui.ShortContainerHostActivity',
          ],
          matches:
            '([vid="btn_skip"][visibleToUser=true]) || ([text*="跳过"][text.length<10][width<500 && height<300][visibleToUser=true])',
          exampleUrls: 'https://e.gkd.li/e129aaa6-bf4f-4455-9242-a6779667d814',
          snapshotUrls: [
            'https://i.gkd.li/i/18221451',
            'https://i.gkd.li/i/22714295',
          ],
          excludeSnapshotUrls: [
            'https://i.gkd.li/i/18221225',
            'https://i.gkd.li/i/23141429',
            'https://i.gkd.li/i/24229324',
          ],
        },
        {
          key: 1,
          matches:
            'TextView[width<114 && height<67] - @View[clickable=true][visibleToUser=true][width<135] <3 FrameLayout[childCount=4][getChild(1).getChild(0).childCount=3] <2 FrameLayout[childCount=2][getChild(0).width=0] < [vid="show_layout"]',
          snapshotUrls: [
            'https://i.gkd.li/i/30968922',
            'https://i.gkd.li/i/31332983',
          ],
        },
        {
          key: 2,
          matches:
            '@View[text=null][clickable=true][childCount=0][visibleToUser=true][width<200 && height<200] +(1,2) TextView[index=parent.childCount.minus(1)][childCount=0] <n FrameLayout[childCount>2][text=null][desc=null] >(n+6) [text*="第三方应用" || text*="扭动手机" || text*="点击或上滑" || text*="省钱好物" || text*="扭一扭"][visibleToUser=true]',
          snapshotUrls: 'https://i.gkd.li/i/30968922', //也符合key1
        },
      ],
    },
    {
      key: 12,
      name: '全屏广告-弹窗广告',
      desc: '点击关闭',
      fastQuery: true,
      rules: [
        {
          key: 0,
          name: '会员页弹窗广告',
          activityIds: '.app.ui.activity.MainActivity',
          matches: '[vid="dismiss"]',
          snapshotUrls: 'https://i.gkd.li/i/12707676',
        },
        {
          key: 1,
          name: '首页弹窗广告',
          activityIds: '.app.ui.activity.AdAlphaVideoActivity',
          matches: '[vid="tv_ad_close"]',
          snapshotUrls: 'https://i.gkd.li/i/14648128',
        },
        {
          key: 2,
          name: '会员页红包弹窗',
          activityIds: '.app.ui.activity.MainActivity',
          matches: '[vid="floating_close_btn"]',
          snapshotUrls: 'https://i.gkd.li/i/12647421',
        },
        {
          key: 3,
          action: 'clickCenter',
          activityIds: '.creatorcenter.CreatorCenterHostActivity',
          matches:
            'View[text="关闭"] > @[visibleToUser=true][text="关闭"] <<n [vid="webview_bg"]',
          snapshotUrls: 'https://i.gkd.li/i/14955183',
        },
      ],
    },
  ],
});
