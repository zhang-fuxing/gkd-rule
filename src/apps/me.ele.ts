// 来源: Lin-arm/GKD_subscription src/apps/me.ele.ts
// 摘取类别: 开屏广告 / 全屏广告, 同步于 2026-11-09
// 重新导入: pnpm tsx scripts/import-ref.ts --force me.ele
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'me.ele',
  name: '饿了么',
  groups: [
    {
      key: 2,
      name: '全屏广告-红包弹窗',
      rules: [
        {
          key: 0,
          name: '红包弹窗1',
          fastQuery: true,
          activityIds: [
            '.component.pops2.Pops2MistDialog',
            '.component.webcontainer.view.AppUCWebActivity',
            '.application.ui.Launcher.LauncherActivity',
            '.application.ui.GeneralSettingsActivity',
            '.shopdetailv2.ShopDetailV2Activity',
            '.foodchannel.page.WMChannelNativeActivity',
          ],
          anyMatches: [
            '@ImageView[childCount=0][clickable=true][index=parent.childCount.minus(1)] - ViewGroup[childCount=2] < ViewGroup[childCount=2] < [vid="id_magex_mistview"]',
            '@ImageView[childCount=0][clickable=true][index=parent.childCount.minus(1)] - ViewGroup[childCount=2] < [vid="id_magex_mistview"]',
          ],
          snapshotUrls: [
            'https://i.gkd.li/i/12650238',
            'https://i.gkd.li/i/13294893',
            'https://i.gkd.li/i/13331361',
            'https://i.gkd.li/i/13362974',
            'https://i.gkd.li/i/13376008',
            'https://i.gkd.li/i/13710581',
            'https://i.gkd.li/i/15148480',
          ],
          excludeSnapshotUrls: 'https://i.gkd.li/i/17858192',
        },
        {
          key: 1,
          name: '红包弹窗2',
          activityIds: '.newretail.pack.ui.activity.PackActivity',
          matches: '[desc$="今日红包"] +n [desc$="关闭"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/12650713',
        },
        {
          key: 2,
          name: '红包弹窗3',
          fastQuery: true,
          matches:
            '@ViewGroup[index=2][clickable=true][childCount=0][index=parent.childCount.minus(1)] <3 ViewGroup[childCount=3] < ViewGroup[childCount=1] < ViewGroup[vid="id_magex_mist_view"]',
          exampleUrls: 'https://e.gkd.li/a933d63b-14b2-4c91-bdd9-0ba578da6bff',
          snapshotUrls: 'https://i.gkd.li/i/14472929',
          excludeSnapshotUrls: [
            'https://i.gkd.li/i/16346727', // 误触 add [childCount=0]
            'https://i.gkd.li/i/17858192',
          ],
        },
      ],
    },
    {
      key: 4,
      name: '全屏广告-活动弹窗',
      fastQuery: true,
      rules: [
        {
          key: 1,
          activityIds: [
            '.component.pops2.Pops2MistDialog',
            '.newbooking.checkout.entrypoint.WMCheckoutActivity',
            '.application.ui.Launcher.LauncherActivity',
            '.android.emagex.container.EMagexActivity',
          ],
          matches:
            '@ImageView[clickable=true] <2 [vid="id_magex_mistview"][childCount=2]',
          snapshotUrls: [
            'https://i.gkd.li/i/12726709',
            'https://i.gkd.li/i/13476719',
            'https://i.gkd.li/i/13523508',
            'https://i.gkd.li/i/13685037',
            'https://i.gkd.li/i/14050401',
          ],
        },
        {
          key: 2,
          activityIds: '.application.ui.Launcher.LauncherActivity',
          matches:
            '[vid="fl_render_e_shop"] + FrameLayout >n ViewGroup[childCount=6] > View[index=5]',
          snapshotUrls: [
            'https://i.gkd.li/i/13476611',
            'https://i.gkd.li/i/13523541',
          ],
        },
        {
          key: 3,
          activityIds: '.application.ui.Launcher.LauncherActivity',
          matches: 'ViewGroup[clickable=true] - TextView[text="放弃"]',
          snapshotUrls: [
            'https://i.gkd.li/i/13710574',
            'https://i.gkd.li/i/13710591',
          ],
        },
        {
          key: 4,
          activityIds: '.pha.shell.ui.ElePhaActivity',
          matches:
            'WebView >4 View[childCount=2] > @View[clickable=true] > Image[childCount=0] <<n [vid="pha_view_pager_root_view"]',
          snapshotUrls: 'https://i.gkd.li/i/15443153',
        },
      ],
    },
    {
      key: 5,
      name: '全屏广告-付款后弹窗广告',
      rules: [
        {
          fastQuery: true,
          activityIds: '.component.pops2.TransparentAppWebActivity',
          matches:
            'View[childCount=2] > View[childCount=2] > @Button[text="关闭"][clickable=true] <<n [vid="inside_web_view"]',
          snapshotUrls: 'https://i.gkd.li/i/13205301',
        },
      ],
    },
    {
      key: 6,
      name: '全屏广告-吃货卡续费弹窗',
      rules: [
        {
          fastQuery: true,
          activityIds: '.component.webcontainer.view.AppUCWebActivity',
          matches:
            '@View[clickable=true] + View >2 [visibleToUser=true][text*="立即续费"] <<n [vid="inside_web_view"]',
          snapshotUrls: 'https://i.gkd.li/i/13295007',
        },
      ],
    },
  ],
});
