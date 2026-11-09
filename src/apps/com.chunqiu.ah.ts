// 来源: Lin-arm/GKD_subscription src/apps/com.chunqiu.ah.ts
// 摘取类别: 开屏广告 / 全屏广告, 同步于 2026-11-09
// 重新导入: pnpm tsx scripts/import-ref.ts --force com.chunqiu.ah
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.chunqiu.ah',
  name: 'AH视频',
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
          matches: '[text^="跳过"][text.length<10]',
          snapshotUrls: [
            'https://i.gkd.li/i/13264387',
            'https://i.gkd.li/i/13264381',
          ],
        },
        {
          key: 1,
          fastQuery: true,
          matches: '@ImageView - [text="|"]',
          snapshotUrls: 'https://i.gkd.li/i/13264377',
        },
        {
          key: 2,
          fastQuery: true,
          anyMatches: [
            '@View[text=null][clickable=true][childCount=0][visibleToUser=true][width<200&&height<200] +(1,2) TextView[index=parent.childCount.minus(1)][childCount=0] <n FrameLayout[childCount>2][text=null][desc=null] >(n+6) [text*="第三方应用" || text*="扭动手机" || text*="点击或上滑" || text*="省钱好物" || text*="扭一扭"][visibleToUser=true]',
            'FrameLayout > FrameLayout[childCount>2][text=null][desc=null] > @View[text=null][clickable=true][childCount=0][visibleToUser=true][width<200&&height<200] +(1,2) TextView[index=parent.childCount.minus(1)][childCount=0][visibleToUser=true]',
          ],
          snapshotUrls: 'https://i.gkd.li/i/15258457',
        },
      ],
    },
    {
      key: 1,
      name: '全屏广告-弹窗广告',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          key: 0,
          fastQuery: true,
          activityIds: 'com.androlua.LuaActivity',
          matches:
            '@ImageView[childCount=0][text=null][desc=null][id=null][visibleToUser=true][width<90 && height<90] < FrameLayout[childCount=1][text=null][desc=null][id=null][parent.childCount>3] <n FrameLayout >(2,3) [text^="立即" || text$="详情" || text^="了解" || text="去微信看看" || text$="应用" || text="进入小程序" || text="领取优惠" || text="跳转微信"]',
          snapshotUrls: [
            'https://i.gkd.li/i/13264383',
            'https://i.gkd.li/i/13852448',
          ],
        },
        {
          key: 1,
          activityIds:
            'com.bytedance.sdk.openadsdk.stub.activity.Stub_Standard_Portrait_Activity',
          matches:
            '[text="反馈"] -4 @View[visibleToUser=true] > Image[childCount=0]',
          snapshotUrls: 'https://i.gkd.li/i/15258557',
        },
        {
          key: 2,
          fastQuery: true,
          activityIds: 'com.androlua.LuaActivity',
          matches: '[text="我已知晓"][clickable=true][visibleToUser=true]',
          snapshotUrls: 'https://i.gkd.li/i/13852430',
        },
      ],
    },
  ],
});
