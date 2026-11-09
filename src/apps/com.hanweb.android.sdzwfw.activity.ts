// 来源: Lin-arm/GKD_subscription src/apps/com.hanweb.android.sdzwfw.activity.ts
// 摘取类别: 开屏广告 / 全屏广告, 同步于 2026-11-09
// 重新导入: pnpm tsx scripts/import-ref.ts --force com.hanweb.android.sdzwfw.activity
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.hanweb.android.sdzwfw.activity',
  name: '爱山东',
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
          matches:
            '@[clickable=true] > [text*="关闭" || text*="跳过"][text.length<10]',
          snapshotUrls: [
            'https://i.gkd.li/i/13407227',
            'https://i.gkd.li/i/30527745',
          ],
        },
      ],
    },
  ],
});
