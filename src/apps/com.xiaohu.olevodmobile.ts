// 来源: Lin-arm/GKD_subscription src/apps/com.xiaohu.olevodmobile.ts
// 摘取类别: 开屏广告 / 全屏广告, 同步于 2026-11-09
// 重新导入: pnpm tsx scripts/import-ref.ts --force com.xiaohu.olevodmobile
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.xiaohu.olevodmobile',
  name: '欧乐影院',
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
          matches: '@[vid="init_time_text"] + [text="跳过"]', // 这个 app 的开屏广告需要点击倒计时按钮才能跳过
          snapshotUrls: 'https://i.gkd.li/i/12826256',
        },
      ],
    },
  ],
});
