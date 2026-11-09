// 来源: Lin-arm/GKD_subscription src/apps/com.gkid.crazyrope.ts
// 摘取类别: 开屏广告 / 全屏广告, 同步于 2026-11-09
// 重新导入: pnpm tsx scripts/import-ref.ts --force com.gkid.crazyrope
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.gkid.crazyrope',
  name: '天天跳绳',
  groups: [
    {
      key: 1,
      name: '全屏广告-会员提示',
      desc: '点击不需要',
      fastQuery: true,
      activityIds: '.ui.member.MemberDiscountsActivity',
      rules: [
        {
          matches: '[vid="btn_close"][text="暂不需要"]',
          snapshotUrls: 'https://i.gkd.li/i/12916419',
        },
      ],
    },
  ],
});
