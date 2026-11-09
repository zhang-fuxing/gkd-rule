// 来源: Lin-arm/GKD_subscription src/apps/cn.wps.moffice_eng.ts
// 摘取类别: 开屏广告 / 全屏广告, 同步于 2026-11-09
// 重新导入: pnpm tsx scripts/import-ref.ts --force cn.wps.moffice_eng
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'cn.wps.moffice_eng',
  name: 'WPS Office',
  groups: [
    {
      key: 2,
      name: '全屏广告',
      rules: [
        {
          key: 0,
          fastQuery: true,
          activityIds: [
            'cn.wps.moffice.main.AfterLoginActivity',
            'com.android.packageinstaller.permission.ui.GrantPermissionsActivity',
          ],
          matches: '[vid="afterlogin_cancel"]',
          snapshotUrls: [
            'https://i.gkd.li/i/13259097',
            'https://i.gkd.li/i/12882712',
          ],
        },
        {
          key: 1,
          fastQuery: true,
          activityIds: 'cn.wps.moffice.main.local.HomeRootActivity',
          matches:
            '@TextView[clickable=true] -2 Image[text!=null] <<2 View - [id="app"] <<5 [vid="push_tips_ptr_super_webview"]',
          snapshotUrls: 'https://i.gkd.li/i/13945835',
        },
        {
          key: 2,
          fastQuery: true,
          activityIds:
            'cn.wps.moffice.plugin.cloudPage.newpage.NewCloudSettingNewActivity',
          matches: '[vid="cloud_popup_close_view"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/23786698',
        },
      ],
    },
  ],
});
