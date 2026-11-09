// 来源: Lin-arm/GKD_subscription src/apps/com.weico.international.ts
// 摘取类别: 开屏广告 / 全屏广告, 同步于 2026-11-09
// 重新导入: pnpm tsx scripts/import-ref.ts --force com.weico.international
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.weico.international',
  name: '微博轻享版',
  groups: [
    {
      key: -1,
      name: '开屏广告',
      fastQuery: true,
      matchTime: 10000,
      actionCd: 500,
      actionMaximum: 3, // https://github.com/Lin-arm/GKD_subscription/issues/324
      resetMatch: 'app',
      actionMaximumKey: 0,
      priorityTime: 10000,
      rules: [
        {
          key: 0,
          order: -1,
          anyMatches: [
            '@[clickable=true][visibleToUser=true] + ViewGroup > [text="跳过"]',
            '@[clickable=true] - [text*="跳过"][text.length<10][width<500 && height<300][visibleToUser=true]', // https://github.com/AIsouler/GKD_subscription/issues/1024
          ],
          snapshotUrls: [
            'https://i.gkd.li/i/14549281',
            'https://i.gkd.li/i/14549328', // 小窗模式下全局规则触发无效
            'https://i.gkd.li/i/18792649', // visibleToUser=false
            'https://i.gkd.li/i/20990401',
          ],
        },
        {
          key: 1,
          excludeMatches: [
            '@[clickable=true] - [text*="跳过"][text.length<10][width<500 && height<300][visibleToUser=true]',
            '@[clickable=true][visibleToUser=true] + ViewGroup > [text="跳过"]',
          ],
          matches:
            '[text*="跳过"][text.length<10][width<500 && height<300][visibleToUser=true]',
          snapshotUrls: [
            'https://i.gkd.li/i/14661654',
            'https://i.gkd.li/i/14661622',
          ],
        },
      ],
    },
  ],
});
