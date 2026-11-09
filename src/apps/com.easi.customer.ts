// 来源: Lin-arm/GKD_subscription src/apps/com.easi.customer.ts
// 摘取类别: 开屏广告 / 全屏广告, 同步于 2026-11-09
// 重新导入: pnpm tsx scripts/import-ref.ts --force com.easi.customer
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.easi.customer',
  name: 'EASI',
  groups: [
    {
      key: 1,
      name: '全屏广告',
      rules: [
        {
          key: 0,
          fastQuery: true,
          activityIds: [
            'com.haya.app.pandah4a.ui.sale.home.container.HomeContainerActivity',
            'com.haya.app.pandah4a.ui.pay.success.order.PaySuccessActivity',
          ],
          matches: [
            'ViewGroup[childCount=2 || childCount=3] > [vid="iv_home_ad_close" || vid="iv_close"][clickable=true][visibleToUser=true]',
          ],
          snapshotUrls: [
            'https://i.gkd.li/i/27085660', // iv_home_ad_close_首页
            'https://i.gkd.li/i/27085659', // iv_close
            'https://i.gkd.li/i/27085658', // iv_home_ad_close_结算页
          ],
        },
      ],
    },
  ],
});
