// 来源: Lin-arm/GKD_subscription src/apps/com.youdao.dict.ts
// 摘取类别: 开屏广告 / 全屏广告, 同步于 2026-11-09
// 重新导入: pnpm tsx scripts/import-ref.ts --force com.youdao.dict
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.youdao.dict',
  name: '网易有道词典',
  groups: [
    {
      key: 2,
      name: '全屏广告-弹窗广告',
      rules: [
        {
          key: 0,
          name: '首页-弹窗广告',
          fastQuery: true,
          activityIds: [
            '.activity.MainActivity',
            '.activity.DictSplashActivity',
          ],
          matches: '@ImageView[vid="iv_close_bt"]',
          snapshotUrls: [
            'https://i.gkd.li/i/12893419',
            'https://i.gkd.li/i/13263801',
          ],
        },
        {
          key: 1,
          name: '学习页面-弹窗广告',
          fastQuery: true,
          activityIds: [
            '.edu.main.MainPopDialog',
            '.activity.MainActivity',
            '.activity.DictQueryActivity',
          ],
          matches: '[vid="iv_close"]',
          snapshotUrls: [
            'https://i.gkd.li/i/12893450',
            'https://i.gkd.li/i/16859556',
            'https://i.gkd.li/i/20602998',
          ],
        },
        {
          key: 2,
          name: '抽奖机会-弹窗广告',
          fastQuery: true,
          activityIds: [
            '.activity.DictSplashActivity',
            '.activity.DictHotBootSplashActivity',
          ],
          matches: '[vid="skip_bottom_view"]',
          snapshotUrls: [
            'https://i.gkd.li/i/13931202',
            'https://i.gkd.li/i/14064647',
          ],
        },
        {
          key: 3,
          fastQuery: true,
          name: '首页-礼包弹窗',
          activityIds: '.activity.MainActivity',
          matches: '[vid="image"] + [vid="close"]',
          snapshotUrls: 'https://i.gkd.li/i/14296482',
        },
        {
          key: 4,
          activityIds: '.activity.DictQueryActivity',
          matches:
            '@[vid="iv_cancel"][visibleToUser=true] - [vid="fl_video_container"]',
          exampleUrls: 'https://e.gkd.li/342a587e-bf0d-42e9-8c16-3c0b53240e5a',
          snapshotUrls: 'https://i.gkd.li/i/18051512',
        },
      ],
    },
    {
      key: 4,
      name: '全屏广告-VIP弹窗',
      fastQuery: true,
      rules: [
        {
          key: 0,
          activityIds: [
            '.vip.activity.RecallSevenDayVipActivity',
            '.vip.activity.SecondShowNewUserSevenDayVipActivity',
            '.activity.DictQueryActivity',
            '.vip.activity.FirstShowNewUserSevenDayVipActivity',
            '.activity.MainActivity',
          ],
          matches: 'ImageView[vid="iv_close"][clickable=true]',
          snapshotUrls: [
            'https://i.gkd.li/i/13263706',
            'https://i.gkd.li/i/14381735',
            'https://i.gkd.li/i/16929322',
            'https://i.gkd.li/i/22275220',
            'https://i.gkd.li/i/30662836',
          ],
        },
        {
          key: 1,
          activityIds: 'com.youdao.feature_ai.AiMainActivity',
          matches: '[vid="aiv_guide_cancel"][visibleToUser=true]',
          exampleUrls: 'https://e.gkd.li/7bfd334a-38a0-4251-966c-1df55c168425',
          snapshotUrls: 'https://i.gkd.li/i/16426631',
        },
      ],
    },
    {
      key: 10,
      name: '全屏广告-开学福利弹窗',
      desc: '点击[不要再提醒我]-点击关闭',
      fastQuery: true,
      actionMaximum: 1,
      resetMatch: 'app',
      activityIds: '.activity.MainActivity',
      rules: [
        {
          key: 0,
          matches: '[text="不要再提醒我"][checked=false]',
          exampleUrls:
            'https://m.gkd.li/57941037/f665b390-2ef6-47be-8246-99632b24c5de',
          snapshotUrls: 'https://i.gkd.li/i/14586448',
        },
        {
          preKeys: 0,
          key: 1,
          matches: '[vid="dialog_close_btn"]',
          exampleUrls:
            'https://m.gkd.li/57941037/f665b390-2ef6-47be-8246-99632b24c5de',
          snapshotUrls: 'https://i.gkd.li/i/14586448',
        },
      ],
    },
  ],
});
