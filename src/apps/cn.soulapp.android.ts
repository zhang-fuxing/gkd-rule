// 来源: Lin-arm/GKD_subscription src/apps/cn.soulapp.android.ts
// 摘取类别: 开屏广告 / 全屏广告, 同步于 2026-11-09
// 重新导入: pnpm tsx scripts/import-ref.ts --force cn.soulapp.android
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'cn.soulapp.android',
  name: 'Soul',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      priorityTime: 10000,
      rules: [
        {
          key: 0,
          fastQuery: true,
          action: 'clickCenter', // 该快照action: 'click' 无效
          matches:
            '[text*="跳过"][text.length<10][width<500 && height<300][visibleToUser=true]',
          snapshotUrls: 'https://i.gkd.li/i/20139575',
        },
        {
          key: 1,
          matches:
            '[text*="跳过"][text.length<10][width<500 && height<300][visibleToUser=true]',
          snapshotUrls: 'https://i.gkd.li/i/20139739',
        },
      ],
    },
    {
      key: 7,
      name: '全屏广告-送礼开聊会话',
      desc: '自动点击先不聊了',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      rules: [
        {
          activityIds: '.component.chat.ConversationActivity',
          matches: '[vid="cl_gift_normal"] > TextView[vid="tv_btn_close"]',
          snapshotUrls: 'https://i.gkd.li/i/19448971',
        },
      ],
    },
    {
      key: 8,
      name: '全屏广告-推荐页领金币',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      rules: [
        {
          activityIds: '.component.startup.main.MainActivity',
          matches: '[vid="tslAdLayout"] [vid="tv_cancel"]',
          exampleUrls: 'https://e.gkd.li/f721ac73-f66c-45ca-8660-0c3e57845fd9',
          snapshotUrls: 'https://i.gkd.li/i/21900487',
        },
      ],
    },
  ],
});
