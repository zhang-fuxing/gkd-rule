// 来源: Lin-arm/GKD_subscription src/apps/com.huawei.wallet.ts
// 摘取类别: 开屏广告 / 全屏广告, 同步于 2026-11-09
// 重新导入: pnpm tsx scripts/import-ref.ts --force com.huawei.wallet
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.huawei.wallet',
  name: '华为钱包',
  groups: [
    {
      key: 2,
      name: '全屏广告-小额免密支付弹窗',
      desc: '点击关闭',
      rules: [
        {
          fastQuery: true,
          activityIds:
            'com.huawei.petalpay.userapp.function.withhold.view.activity.PetalPayGuideSmallFreePwdActivity',
          matches: ['[text="开通小额免密支付"]', '[vid="title_close_btn"]'],
          exampleUrls: 'https://e.gkd.li/7fcdf7d8-d9db-4b30-840d-3f656f645fe3',
          snapshotUrls: 'https://i.gkd.li/i/16397908',
        },
      ],
    },
  ],
});
