// 来源: Lin-arm/GKD_subscription src/apps/com.netease.mail.ts
// 摘取类别: 开屏广告 / 全屏广告, 同步于 2026-11-09
// 重新导入: pnpm tsx scripts/import-ref.ts --force com.netease.mail
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.netease.mail',
  name: '网易邮箱大师',
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
          excludeMatches: '[vid="ad_skip"][clickable=false]',
          matches:
            '[text*="跳过"][text.length<10][width<500 && height<300][visibleToUser=true]',
          snapshotUrls: [
            'https://i.gkd.li/i/13195662',
            'https://i.gkd.li/i/16883928',
            'https://i.gkd.li/i/14900326', // 使用 excludeMatches 防止提前触发规则
          ],
        },
        {
          key: 1,
          fastQuery: true,
          anyMatches: [
            '@View[text=null][clickable=true][childCount=0][visibleToUser=true][width<200&&height<200] +(1,2) TextView[index=parent.childCount.minus(1)][childCount=0] <n FrameLayout[childCount>2][text=null][desc=null] >(n+6) [text*="第三方应用" || text*="扭动手机" || text*="点击或上滑" || text*="省钱好物" || text*="扭一扭"][visibleToUser=true]',
            'FrameLayout > FrameLayout[childCount>2][text=null][desc=null] > @View[text=null][clickable=true][childCount=0][visibleToUser=true][width<200&&height<200] +(1,2) TextView[index=parent.childCount.minus(1)][childCount=0][visibleToUser=true]',
          ],
          snapshotUrls: 'https://i.gkd.li/i/14046124',
        },
        {
          key: 2,
          fastQuery: true,
          position: {
            left: 'width * 0.9016',
            top: 'width * 0.1557',
          },
          matches: '[vid="animation_view"]',
          snapshotUrls: [
            'https://i.gkd.li/i/13207736',
            'https://i.gkd.li/i/14900326', // 防止提前触发规则
            'https://i.gkd.li/i/16892947', // 防止提前触发规则
          ],
        },
      ],
    },
    {
      key: 2,
      name: '全屏广告-邮件列表广告',
      activityIds: '.biz.main.MainITabActivity',
      fastQuery: true,
      rules: [
        {
          key: 0,
          matches: '[vid="ad_vip"]',
          snapshotUrls: 'https://i.gkd.li/i/12999833',
        },
        {
          preKeys: [0],
          key: 1,
          matches: '[vid="ll_delete"]',
          snapshotUrls: 'https://i.gkd.li/i/12999841',
        },
      ],
    },
  ],
});
