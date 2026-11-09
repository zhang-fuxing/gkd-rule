// 来源: Lin-arm/GKD_subscription src/apps/com.jingyao.easybike.ts
// 摘取类别: 开屏广告 / 全屏广告, 同步于 2026-11-09
// 重新导入: pnpm tsx scripts/import-ref.ts --force com.jingyao.easybike
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.jingyao.easybike',
  name: '哈啰',
  groups: [
    {
      key: 10,
      name: '全屏广告-弹窗广告',
      rules: [
        {
          key: 0,
          fastQuery: true,
          activityIds: [
            'com.hellobike.ads.widget.insert.dialog.HBAdvertDialog',
            'com.hellobike.atlas.business.portal.PortalActivity',
            'com.hellobike.hitch.business.homenew.HitchHomeActivity',
            'com.hellobike.business.hitch.common.home.HLPHHomeActivity',
          ],
          matches: '[vid="actionDialogClose"]',
          snapshotUrls: [
            'https://i.gkd.li/i/12650090',
            'https://i.gkd.li/i/16503613',
            'https://i.gkd.li/i/23407810',
            'https://i.gkd.li/i/29299383',
          ],
        },
        {
          key: 1,
          fastQuery: true,
          matchTime: 10000,
          actionMaximum: 1,
          resetMatch: 'app',
          activityIds:
            'com.hellobike.evehicle.business.main.EVehicleHomeManagerActivity',
          matches: '[vid="lottie_view"] < ViewGroup + [vid="btn_close"]',
          snapshotUrls: 'https://i.gkd.li/i/12650163',
        },
        {
          key: 2,
          activityIds: 'com.alipay.mobile.nebulacore.ui.H5Activity',
          matches:
            '[text="订单完成"] >(2) View[childCount=2] > Image[id=null][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/12684673',
        },
        {
          key: 3,
          activityIds: 'com.hellobike.atlas.business.portal.PortalActivity',
          matches: '[desc="去使用"] + Button[text=null][visibleToUser=true]',
          snapshotUrls: 'https://i.gkd.li/i/12739316',
        },
        {
          key: 4,
          fastQuery: true,
          activityIds:
            'com.hellobike.moped.platform.offline.web.OhoRealmWebActivity',
          matches:
            '@Image[childCount=0][text!=null] - View[childCount=1] > Image[childCount=0][text!=null] <<n [vid="webContainer"]',
          exampleUrls: 'https://e.gkd.li/c6364646-6d3c-4b2e-80b9-0b356d4cd8b7',
          snapshotUrls: 'https://i.gkd.li/i/23415363',
        },
      ],
    },
    {
      key: 11,
      name: '全屏广告-关闭公众号提醒',
      rules: [
        {
          fastQuery: true,
          activityIds:
            'com.hellobike.hitch.business.match.temp.HitchDriverTempMatchActivity',
          matches: '[text*="公众号"] - [vid="ivClose"]',
          snapshotUrls: 'https://i.gkd.li/i/30827751',
          exampleUrls: 'https://e.gkd.li/84f6f033-7686-439a-b50e-87a2c8409ddf',
        },
      ],
    },
  ],
});
