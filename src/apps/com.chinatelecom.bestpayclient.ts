// 来源: Lin-arm/GKD_subscription src/apps/com.chinatelecom.bestpayclient.ts
// 摘取类别: 开屏广告 / 全屏广告, 同步于 2026-11-09
// 重新导入: pnpm tsx scripts/import-ref.ts --force com.chinatelecom.bestpayclient
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.chinatelecom.bestpayclient',
  name: '翼支付',
  groups: [
    {
      key: 3,
      name: '全屏广告-弹窗广告',
      rules: [
        {
          key: 0,
          name: '权益页',
          fastQuery: true,
          activityIds: '.ui.MainActivity',
          matches:
            '[name$="Dialog"] >4 @[clickable=true][visibleToUser=true] - View >(1,2) [childCount=0][text=""] + Image[text!=null][childCount=0] <<n [vid="best_h5_container"]',
          snapshotUrls: [
            'https://i.gkd.li/i/13402692',
            'https://i.gkd.li/i/24428096',
          ],
        },
        {
          key: 1,
          name: '首页1',
          fastQuery: true,
          matchTime: 10000,
          actionMaximum: 1,
          resetMatch: 'app',
          activityIds: '.ui.MainActivity',
          matches:
            '[vid="iv_dialog_close_one" || vid="iv_sky_close"][visibleToUser=true]',
          snapshotUrls: [
            'https://i.gkd.li/i/13455790',
            'https://i.gkd.li/i/15369212',
            'https://i.gkd.li/i/18160066',
          ],
        },
        {
          key: 2,
          name: '首页2',
          fastQuery: true,
          matchTime: 10000,
          actionMaximum: 1,
          resetMatch: 'app',
          activityIds: 'com.alipay.mobile.nebulacore.ui.H5Activity',
          matches:
            '[text="甜橙信用卡"] >2  View[childCount=2] > @Image[clickable=true][text!=null] <<n [vid="h5_pc_container"]',
          snapshotUrls: 'https://i.gkd.li/i/13626324',
        },
        {
          key: 3,
          name: '借贷页',
          activityIds: '.ui.MainActivity',
          fastQuery: true,
          matches:
            '@[clickable=true][text=""][visibleToUser=true] <<n [vid="best_h5_container"]',
          snapshotUrls: [
            'https://i.gkd.li/i/13455929',
            'https://i.gkd.li/i/24427912',
          ],
        },
        {
          key: 4,
          name: '信用卡页面',
          activityIds: 'com.alipay.mobile.nebulacore.ui.H5Activity',
          matches:
            '[vid="h5_pc_container"] >2 bc >5 View > View >3 View[childCount=3] > @[clickable=true][width<150 && height<150][visibleToUser=true] + * + View[childCount=0]',
          snapshotUrls: [
            'https://i.gkd.li/i/13696322',
            'https://i.gkd.li/i/13696323',
          ],
          excludeSnapshotUrls: 'https://i.gkd.li/i/24420758',
        },
      ],
    },
    {
      key: 5,
      name: '全屏广告-年底积分活动弹窗',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      rules: [
        {
          activityIds: 'com.alipay.mobile.nebulacore.ui.H5Activity',
          matches:
            'View[childCount=2] > @View[index=1][clickable=true][childCount=1] > Image[childCount=0] <<n [vid="h5_pc_container"]',
          snapshotUrls: [
            'https://i.gkd.li/i/13543032',
            'https://i.gkd.li/i/13625037', //修改规则，避免在此误触
          ],
        },
      ],
    },
  ],
});
