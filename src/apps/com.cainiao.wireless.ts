// 来源: Lin-arm/GKD_subscription src/apps/com.cainiao.wireless.ts
// 摘取类别: 开屏广告 / 全屏广告, 同步于 2026-11-09
// 重新导入: pnpm tsx scripts/import-ref.ts --force com.cainiao.wireless
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.cainiao.wireless',
  name: '菜鸟',
  groups: [
    {
      key: 1,
      name: '全屏广告-弹窗广告',
      rules: [
        {
          key: 0,
          fastQuery: true,
          forcedTime: 10000,
          activityIds:
            'com.taobao.cainiao.logistic.ui.view.LogisticDetailActivity',
          matches:
            '[vid="draw_dialog_iv_close" || vid="package_import_ad_dialog_iv_close"]',
          snapshotUrls: [
            'https://i.gkd.li/i/16118156',
            'https://i.gkd.li/i/22570634',
          ],
        },
        {
          key: 1,
          activityIds:
            'com.alipay.mobile.nebulax.integration.mpaas.activity.NebulaActivity$Main',
          matches:
            'View[childCount=4] > Image + View + Image + View[text.length>0][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13042279',
        },
        {
          key: 2,
          fastQuery: true,
          activityIds: '.homepage.view.activity.HomePageActivity',
          matches:
            'View[clickable=true] > @[text="关闭"] + [visibleToUser=true][text="活动"] <<n [vid="browser_fragment_layout"]',
          snapshotUrls: 'https://i.gkd.li/i/14033859',
        },
        {
          key: 3,
          fastQuery: true,
          activityIds: '.homepage.view.activity.HomePageActivity',
          matches: '[vid="dialog_full_image_close"]',
          snapshotUrls: 'https://i.gkd.li/i/13842492',
        },
        {
          key: 4,
          fastQuery: true,
          activityIds: '.homepage.view.activity.HomePageActivity',
          matches:
            '@[text="关闭"] + [visibleToUser=true][text="活动"] <<n [vid="browser_fragment_layout"]',
          snapshotUrls: 'https://i.gkd.li/i/14033859',
        },
        {
          key: 5,
          fastQuery: true,
          activityIds:
            'com.taobao.cainiao.logistic.ui.view.LogisticDetailActivity',
          matches: '[vid="cn_bottom_sheet_close"]',
          snapshotUrls: 'https://i.gkd.li/i/16118155',
        },
        {
          key: 6,
          fastQuery: true,
          activityIds: '.homepage.view.activity.HomePageActivity',
          matches:
            '[desc="恭喜你获得" || desc="你想买的"] - @ImageView[id=null][text=null][clickable=true][visibleToUser=true][width<150&&height<150] <2 FrameLayout <2 FrameLayout < FrameLayout < [vid="fl_guide_ad_get_reward_dialog_dx_container"]',
          snapshotUrls: [
            'https://i.gkd.li/i/22441306',
            'https://i.gkd.li/i/22570632',
          ],
        },
        {
          key: 7,
          fastQuery: true,
          activityIds:
            'com.taobao.cainiao.logistic.ui.view.LogisticDetailActivity',
          matches:
            'Image[childCount=0][width<100 && height<100] < @View[clickable=true][childCount=1] - Image[childCount=0][text="超时享"] <<n [vid="browser_fragment_layout"]',
          snapshotUrls: 'https://i.gkd.li/i/24099845',
        },
        {
          key: 8,
          fastQuery: true,
          activityIds:
            'com.taobao.cainiao.logistic.ui.view.LogisticDetailActivity',
          matches:
            '@Image[clickable=true][width<100 && height<100] +3 * > [childCount=0][text="开心收下"] <<n [vid="browser_fragment_layout"]',
          snapshotUrls: 'https://i.gkd.li/i/28173171',
        },
      ],
    },
  ],
});
