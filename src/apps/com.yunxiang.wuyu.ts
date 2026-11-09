// 来源: Lin-arm/GKD_subscription src/apps/com.yunxiang.wuyu.ts
// 摘取类别: 开屏广告 / 全屏广告, 同步于 2026-11-09
// 重新导入: pnpm tsx scripts/import-ref.ts --force com.yunxiang.wuyu
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.yunxiang.wuyu',
  name: '特狗APP',
  groups: [
    {
      key: 3,
      name: '全屏广告-弹窗广告',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      activityIds: '.MainActivity',
      rules: [
        {
          key: 1,
          name: '"x"型',
          matches:
            'ImageView < @ViewGroup[clickable=true] < ViewGroup +n ViewGroup [text="广告"]',
          snapshotUrls: 'https://i.gkd.li/i/13455628',
        },
        {
          key: 2,
          name: '"跳过"型',
          matches: [
            'TextView[text="广告"]',
            '@ViewGroup > TextView[text="跳过"]',
          ],
          snapshotUrls: 'https://i.gkd.li/i/13455629',
        },
      ],
    },
  ],
});
