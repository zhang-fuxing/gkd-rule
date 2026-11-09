// 来源: Lin-arm/GKD_subscription src/apps/info.muge.appshare.ts
// 摘取类别: 开屏广告 / 全屏广告, 同步于 2026-11-09
// 重新导入: pnpm tsx scripts/import-ref.ts --force info.muge.appshare
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'info.muge.appshare',
  name: 'AppShare',
  groups: [
    {
      key: 0,
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
            '@View[text=null][clickable=true][childCount=0][visibleToUser=true][width<200&&height<200] +(1,2) TextView[index=parent.childCount.minus(1)][childCount=0] <n FrameLayout[childCount>2][text=null][desc=null] >(n+6) [text*="第三方应用" || text*="扭动手机" || text*="点击或上滑" || text*="省钱好物" || text*="扭一扭"][visibleToUser=true]',
          snapshotUrls: [
            'https://i.gkd.li/i/13842826',
            'https://i.gkd.li/i/13939089',
            'https://i.gkd.li/i/14260635',
          ],
        },
        {
          key: 1,
          matches:
            '@[clickable=true][height<100] - [text*="跳过"][text.length<10]',
          snapshotUrls: 'https://i.gkd.li/i/14553551',
        },
        {
          key: 2,
          matches:
            '@[clickable=true][width<130 && height<130] <(1,2) [childCount=2] >2 [text="跳过"][visibleToUser=true]',
          snapshotUrls: [
            'https://i.gkd.li/i/15269380',
            'https://i.gkd.li/i/15285908',
            'https://i.gkd.li/i/15520277',
            'https://i.gkd.li/i/28050329',
          ],
        },
        {
          key: 3,
          matches:
            '@ImageView[width<138 && height<138] < * < ViewGroup +(2,3) [childCount=1] >2 [text="广告"][visibleToUser=true]',
          snapshotUrls: [
            'https://i.gkd.li/i/28050314',
            'https://i.gkd.li/i/28050323',
          ],
        },
      ],
    },
    {
      key: 4,
      name: '全屏广告-弹窗广告',
      desc: '广告展示率低于20%时出现的广告',
      rules: [
        {
          key: 0,
          fastQuery: true,
          matches: 'View[vid="v_jump"][clickable=true]',
          exampleUrls:
            'https://m.gkd.li/57941037/6b1d7b37-edd7-499f-a8b0-ecba24ef2c44',
          snapshotUrls: 'https://i.gkd.li/i/14181146',
        },
        {
          key: 1,
          fastQuery: true,
          activityIds: '.view.main.MainActivity',
          matches:
            '@ImageView[childCount=0][text=null][desc=null][id=null][visibleToUser=true][width<90 && height<90] < FrameLayout[childCount=1][text=null][desc=null][id=null] <2 FrameLayout[childCount=5] + FrameLayout[childCount=2] > [text^="立即" || text$="详情" || text^="了解" || text="去逛逛" || text="去微信看看" || text$="应用" || text="进入小程序" || text="领取优惠" || text="跳转微信"]',
          exampleUrls: 'https://e.gkd.li/f89eea71-55f0-4c27-a4b0-79ac5296becd',
          snapshotUrls: 'https://i.gkd.li/i/15209619',
        },
        {
          key: 2,
          activityIds:
            'com.bytedance.sdk.openadsdk.stub.activity.Stub_Standard_Portrait_Activity',
          matches:
            '[text="反馈"] <n * > @View[childCount=1][index=0 || index=1] > Image[text=""]',
          exampleUrls:
            'https://m.gkd.li/57941037/155fdf95-1f5a-4bf3-a8e7-161e6bfe7bbf',
          snapshotUrls: [
            'https://i.gkd.li/i/15209618',
            'https://i.gkd.li/i/15282994',
          ],
        },
        {
          key: 3,
          fastQuery: true,
          activityIds: '.view.main.MainActivity',
          matches:
            '@ImageView[childCount=0][text=null][desc=null][id=null][visibleToUser=true][width<90 && height<90] < FrameLayout[childCount=1][text=null][desc=null][id=null][parent.childCount>3] <n FrameLayout >(2,3) [text^="立即" || text$="详情" || text^="了解" || text="去微信看看" || text$="应用" || text="进入小程序" || text="领取优惠" || text="跳转微信"]',
          exampleUrls: 'https://e.gkd.li/b4d9d653-a4ad-4e4f-a8f5-30b1485547b5',
          snapshotUrls: 'https://i.gkd.li/i/15211765',
        },
        {
          key: 4,
          fastQuery: true,
          activityIds: '.MainActivity',
          matches:
            '@ImageView < FrameLayout - * >2 [text^="立即" || text$="详情" || text^="了解" || text="去微信看看" || text$="应用" || text="进入小程序" || text="领取优惠" || text="跳转微信"][visibleToUser=true]',
          snapshotUrls: 'https://i.gkd.li/i/26151106',
          exampleUrls: 'https://e.gkd.li/2fc699c4-e377-4a54-b798-17f831f5a9f7',
        },
        {
          key: 5,
          name: '应用详情弹窗-x掉',
          fastQuery: true,
          activityIds: 'com.byazt.fl.Stub_Standard_Activity_T',
          matches:
            '@ImageView[text=null][clickable=true] + [text="应用详情"][visibleToUser=true]',
          snapshotUrls: 'https://i.gkd.li/i/26277526',
        },
      ],
    },
  ],
});
