// 来源: Lin-arm/GKD_subscription src/apps/com.huawei.hidisk.ts
// 摘取类别: 开屏广告 / 全屏广告, 同步于 2026-11-09
// 重新导入: pnpm tsx scripts/import-ref.ts --force com.huawei.hidisk
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.huawei.hidisk',
  name: '云空间',
  groups: [
    {
      key: 1,
      name: '全屏广告-[升级云空间]弹窗',
      desc: '点击[放弃]/[以后再说]/[关闭]',
      fastQuery: true,
      rules: [
        {
          key: 1,
          activityIds:
            'com.huawei.android.hicloud.ui.activity.BackupNotificationActivity',
          matches: [
            '[text="免费升级云空间" || text="云空间不够了"]',
            '[text="放弃" || text="以后再说"]',
          ],
          exampleUrls: 'https://e.gkd.li/5a445ec2-e3bf-445a-be82-7c91036bd05a',
          snapshotUrls: [
            'https://i.gkd.li/i/14881774',
            'https://i.gkd.li/i/14881775',
          ],
        },
        {
          key: 2,
          activityIds:
            'com.huawei.android.hicloud.ui.activity.GuideWebViewActivity',
          matches:
            '@[clickable=true] + [visibleToUser=true][text^="equityDistri"] <<n [vid="guid_webview_mian"]',
          exampleUrls: 'https://e.gkd.li/a541bce4-3fb3-412a-8c51-d93f4eb78848',
          snapshotUrls: [
            'https://i.gkd.li/i/15523963',
            'https://i.gkd.li/i/16511513',
          ],
        },
      ],
    },
  ],
});
