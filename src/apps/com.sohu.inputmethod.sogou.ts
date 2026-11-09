// 来源: Lin-arm/GKD_subscription src/apps/com.sohu.inputmethod.sogou.ts
// 摘取类别: 开屏广告 / 全屏广告, 同步于 2026-11-09
// 重新导入: pnpm tsx scripts/import-ref.ts --force com.sohu.inputmethod.sogou
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.sohu.inputmethod.sogou',
  name: '搜狗输入法',
  groups: [
    {
      key: 1,
      name: '开屏广告',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      priorityTime: 10000,
      rules: [
        {
          key: 0,
          // 跳过节点位置与通知栏重合，需点击 clickable=true 的节点 https://github.com/AIsouler/GKD_subscription/issues/900
          fastQuery: true,
          matches:
            '@[clickable=true] > [text="跳过"][text.length<10][visibleToUser=true]',
          exampleUrls: 'https://e.gkd.li/d310d2a0-4795-421d-82da-f3855fb7288b',
          snapshotUrls: 'https://i.gkd.li/i/20138053',
        },
        {
          key: 1,
          fastQuery: true,
          matches:
            '@[clickable=true][text^="跳过"] - [text="广告"][text.length<10][visibleToUser=true]',
          exampleUrls: 'https://e.gkd.li/aa7e78f0-0cfe-490d-8d41-f3e41b906610',
          snapshotUrls: 'https://i.gkd.li/i/25897923',
        },
      ],
    },
  ],
});
