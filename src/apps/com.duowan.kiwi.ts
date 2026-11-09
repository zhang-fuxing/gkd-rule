// 来源: Lin-arm/GKD_subscription src/apps/com.duowan.kiwi.ts
// 摘取类别: 开屏广告 / 全屏广告, 同步于 2026-11-09
// 重新导入: pnpm tsx scripts/import-ref.ts --force com.duowan.kiwi
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.duowan.kiwi',
  name: '虎牙直播',
  groups: [
    {
      key: 1,
      name: '开屏广告',
      desc: '广告画面先出现,但节点最后才加载,故触发慢实属正常',
      fastQuery: true,
      forcedTime: 10000,
      matchTime: 10000,
      actionMaximum: 1,
      actionMaximumKey: 0,
      resetMatch: 'app',
      priorityTime: 10000,
      rules: [
        {
          key: 0,
          matches: '[text*="跳过"][text.length<10][visibleToUser=true]',
          snapshotUrls: [
            'https://i.gkd.li/i/30792623',
            'https://i.gkd.li/i/30792625',
          ],
        },
        {
          // 应该只是 [text*="跳过"] 的快查属性没来得及加载,所以 key1 大概是没有机会触发的
          key: 1,
          matches: '[visibleToUser=true][text*="跳过"][text.length<10]',
          snapshotUrls: [
            'https://i.gkd.li/i/30793734',
            'https://i.gkd.li/i/30794399',
            // 'https://i.gkd.li/i/30795405',  //开屏广告节点未加载
          ],
        },
      ],
    },
    {
      key: 4,
      name: '全屏广告-弹窗广告',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          key: 0,
          activityIds: '.homepage.Homepage',
          matches: '[vid="animation_view"] + [vid="v_close"]',
          snapshotUrls: 'https://i.gkd.li/i/13625453',
        },
      ],
    },
  ],
});
