// 来源: Lin-arm/GKD_subscription src/apps/com.luna.music.ts
// 摘取类别: 开屏广告 / 全屏广告, 同步于 2026-11-09
// 重新导入: pnpm tsx scripts/import-ref.ts --force com.luna.music
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.luna.music',
  name: '汽水音乐',
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
          anyMatches: [
            '@View[text=null][clickable=true][childCount=0][visibleToUser=true][width<200&&height<200] +(1,2) TextView[index=parent.childCount.minus(1)][childCount=0] <n FrameLayout[childCount>2][text=null][desc=null] >(n+6) [text*="第三方应用" || text*="扭动手机" || text*="点击或上滑" || text*="省钱好物" || text*="扭一扭"][visibleToUser=true]',
            'FrameLayout > FrameLayout[childCount>2][text=null][desc=null] > @View[text=null][clickable=true][childCount=0][visibleToUser=true][width<200&&height<200] +(1,2) TextView[index=parent.childCount.minus(1)][childCount=0][visibleToUser=true]',
          ],
          snapshotUrls: 'https://i.gkd.li/i/14232395',
        },
        {
          key: 1,
          fastQuery: true,
          matches: '[text^="跳过"][text.length<10][visibleToUser=true]',
          snapshotUrls: [
            'https://i.gkd.li/i/15087528',
            'https://i.gkd.li/i/15148298', // 避免误触
          ],
        },
      ],
    },
    {
      key: 2,
      name: '全屏广告-VIP弹窗',
      desc: '直接关闭所有底部半屏弹窗',
      fastQuery: true,
      activityIds: [
        'com.luna.biz.main.main.MainActivity',
        'com.luna.biz.ad.AdActivity',
      ],
      rules: [
        {
          key: 0,
          name: '底部半屏弹窗',
          action: 'back', // 使用点击方式有概率无效
          excludeMatches:
            'FlattenUIText[text="立得全天畅听" || text="立即解锁 今日畅听"][visibleToUser=true]',
          matches:
            'FlattenUIText[text="开会员听整月" || text="购买汽水会员" || text*="免费听"][visibleToUser=true]',
          exampleUrls: 'https://e.gkd.li/43099439-a0ab-4da0-a686-5c960df92607',
          snapshotUrls: [
            'https://i.gkd.li/i/13533795',
            'https://i.gkd.li/i/13660652',
            'https://i.gkd.li/i/13533797',
            'https://i.gkd.li/i/14767233',
            'https://i.gkd.li/i/16280954',
            'https://i.gkd.li/i/16342691',
            'https://i.gkd.li/i/17580823',
            'https://i.gkd.li/i/18183749',
          ],
          excludeSnapshotUrls: [
            'https://i.gkd.li/i/13613296',
            'https://i.gkd.li/i/14237527',
            'https://i.gkd.li/i/18242457',
          ],
        },
        {
          key: 2,
          name: '全屏弹窗',
          matches:
            '@LynxFlattenUI[clickable=true] -2 FlattenUIText[text="立即抢购"]',
          snapshotUrls: 'https://i.gkd.li/i/16278152',
        },
        {
          key: 3,
          name: '0.01开通7天VIP',
          action: 'clickCenter', // 无障碍点击无效
          anyMatches: [
            '@View[childCount=2][index=1] >2 [text$="天体验卡" || text^="VIP"][visibleToUser=true]', // 优先使用自身快查
            '@[text$="天体验卡" || text^="VIP" || desc$="天体验卡" || desc^="VIP"][visibleToUser=true] < [index=parent.childCount.minus(1)] <n * <2 [childCount=2] <<5 [id="android:id/content"]', // 退而求其次
          ],
          position: {
            left: 'width * 0.90',
            top: 'width * 0.09',
          },
          snapshotUrls: [
            'https://i.gkd.li/i/26757915',
            'https://i.gkd.li/i/28302150',
          ],
          exampleUrls: 'https://e.gkd.li/4cefa02b-b83e-4f68-b861-d377ea427514',
        },
      ],
    },
  ],
});
