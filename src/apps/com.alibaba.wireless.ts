// 来源: Lin-arm/GKD_subscription src/apps/com.alibaba.wireless.ts
// 摘取类别: 开屏广告 / 全屏广告, 同步于 2026-11-09
// 重新导入: pnpm tsx scripts/import-ref.ts --force com.alibaba.wireless
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.alibaba.wireless',
  name: '阿里巴巴',
  groups: [
    {
      key: 2,
      name: '全屏广告-首页弹窗广告',
      desc: '点击关闭',
      rules: [
        {
          fastQuery: true,
          actionMaximum: 1,
          resetMatch: 'app',
          activityIds: '.launch.home.V5HomeActivity',
          matches:
            '@Image[text*="FXa-124-124"][visibleToUser=true] <<n [vid="v_yacht_float_cell"]',
          snapshotUrls: [
            'https://i.gkd.li/i/13683509',
            'https://i.gkd.li/i/13683510',
          ],
        },
      ],
    },
  ],
});
