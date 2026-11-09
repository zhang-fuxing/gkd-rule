// 来源: Lin-arm/GKD_subscription src/apps/com.netease.cloudmusic.ts
// 摘取类别: 开屏广告 / 全屏广告, 同步于 2026-11-09
// 重新导入: pnpm tsx scripts/import-ref.ts --force com.netease.cloudmusic
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.netease.cloudmusic',
  name: '网易云音乐',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      priorityTime: 10000,
      rules: [
        {
          key: 0,
          excludeActivityIds: [
            '.music.biz.setting.activity.SettingActivity',
            '.music.biz.search.activity.SearchActivity',
            '.music.biz.rn.activity.BgMainProcessRNActivity',
          ],
          matches:
            '[text*="跳过" || text*="Skip"][text.length<10][width<500 && height<200][visibleToUser=true]',
          snapshotUrls: [
            'https://i.gkd.li/i/30857148',
            'https://i.gkd.li/i/30857149', // 'Skip' for English users.
          ],
          excludeSnapshotUrls: [
            'https://i.gkd.li/i/15092814',
            'https://i.gkd.li/i/16318423',
            'https://i.gkd.li/i/30857162',
          ],
        },
      ],
    },
    {
      key: 4,
      name: '全屏广告-弹窗广告',
      fastQuery: true,
      rules: [
        {
          key: 1,
          action: 'back',
          activityIds: [
            '.activity.MainActivity',
            '.activity.PlayerActivity',
            '.music.biz.rn.activity.LayerReactNativeActivity',
            '.music.biz.comment.activity.CommentActivity',
          ],
          excludeMatches:
            '[text="当前场景" || vid="mainDrawerContainer"][visibleToUser=true]',
          matches:
            '[vid="dsl_dialog_root" || text^="邀您开通VIP" || text^="本周已免费试听" || text^="免费听模式体验中" || text^="续费后，即可畅听" || text*="小组件到桌面" || text$="开通VIP畅听"][visibleToUser=true]',
          snapshotUrls: [
            'https://i.gkd.li/i/13804534', // [vid="dsl_dialog_root"]
            'https://i.gkd.li/i/13848913',
            'https://i.gkd.li/i/13962214',
            'https://i.gkd.li/i/14036940',
            'https://i.gkd.li/i/15047126',
            'https://i.gkd.li/i/15125892',
            'https://i.gkd.li/i/15244091',
            'https://i.gkd.li/i/23770986',
            'https://i.gkd.li/i/20097535', // 免费听模式体验中
            'https://i.gkd.li/i/20097609', // 本周已免费试听
            'https://i.gkd.li/i/20115012', // 邀您开通VIP，畅享千万级会员曲库
            'https://i.gkd.li/i/22451511', // 续费后，即可畅听TA们的歌
            'https://i.gkd.li/i/23770978', // 添加「乐评日历」小组件到桌面
            'https://i.gkd.li/i/27080453', // 含334首VIP歌曲，开通VIP畅听
          ],
          excludeSnapshotUrls: [
            'https://i.gkd.li/i/15404777',
            'https://i.gkd.li/i/20115204',
            'https://i.gkd.li/i/20159204',
            'https://i.gkd.li/i/24157914',
          ],
        },
      ],
    },
    {
      key: 5,
      name: '全屏广告-VIP弹窗',
      fastQuery: true,
      rules: [
        {
          key: 0,
          action: 'back',
          activityIds: [
            '.music.biz.rn.activity.MainProcessLayerReactNativeActivity',
            '.activity.MainActivity',
            '.activity.PlayListActivity',
            '.music.biz.rn.activity.LayerReactNativeActivity',
          ],
          matches: [
            '[text="支付宝"][visibleToUser=true]',
            '[text^="确认协议并" || text="立即开通"][visibleToUser=true]',
          ],
          snapshotUrls: [
            'https://i.gkd.li/i/13189055',
            'https://i.gkd.li/i/13260416',
            'https://i.gkd.li/i/13996787',
            'https://i.gkd.li/i/13230605',
            'https://i.gkd.li/i/14268181',
            'https://i.gkd.li/i/13391498',
            'https://i.gkd.li/i/14045917',
            'https://i.gkd.li/i/14926722',
            'https://i.gkd.li/i/16242200',
            'https://i.gkd.li/i/20097276',
            'https://i.gkd.li/i/20218350',
          ],
          excludeSnapshotUrls: 'https://i.gkd.li/i/20097306', // 正常开通会员页面
        },
        {
          key: 1,
          fastQuery: true,
          activityIds: '.music.biz.rn.activity.CashierRNActivity',
          matches:
            '[text="忍痛离开"] < @ViewGroup[clickable=true] -n * > [text$="VIP可畅享千万曲库"]',
          snapshotUrls: 'https://i.gkd.li/i/24548104',
        },
      ],
    },
  ],
});
