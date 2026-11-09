// 来源: Lin-arm/GKD_subscription src/apps/tv.danmaku.bili.ts
// 摘取类别: 开屏广告 / 全屏广告, 同步于 2026-11-09
// 重新导入: pnpm tsx scripts/import-ref.ts --force tv.danmaku.bili
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'tv.danmaku.bili',
  name: '哔哩哔哩',
  groups: [
    {
      key: -1,
      name: '开屏广告',
      matchRoot: true,
      fastQuery: true,
      //matchTime: 10000, 从桌面小组件进入哔哩哔哩观看视频后，退出返回到哔哩哔哩首页时会跳出开屏广告
      actionMaximum: 2, // 可能连续出现两次 https://github.com/AIsouler/GKD_subscription/issues/1280
      resetMatch: 'app',
      priorityTime: 10000,
      rules: [
        {
          actionCd: 500,
          matches: '[vid="count_down" || vid="skip"][visibleToUser=true]', // [text*="跳过"] 可能会误触搜索框
          snapshotUrls: [
            'https://i.gkd.li/i/16187624',
            'https://i.gkd.li/i/16484445',
          ],
        },
      ],
    },
    {
      key: 12,
      name: '全屏广告-会员弹窗',
      desc: '点击关闭',
      fastQuery: true,
      actionMaximum: 1,
      forcedTime: 10000,
      rules: [
        {
          key: 1,
          //action: 'clickCenter', 此种点击方式在部分应用版本会造成误触，需点击 clickable=true 节点
          activityIds: [
            '.MainActivityV2',
            'com.bilibili.vip.web.VipWebActivity',
            'com.bilibili.module.vip.web.VipWebActivity',
          ],
          matches:
            '@[index=parent.childCount.minus(1)][height<150][visibleToUser=true] <(1,2) View <(1,2) View <(4,5) View < View < View < WebView[text="会员中心" || text="大会员"] < WebView < [vid="webview"]',
          exampleUrls: 'https://e.gkd.li/ac6dd8ae-f18e-4f48-9184-39e4dbd832ba',
          snapshotUrls: [
            'https://i.gkd.li/i/15219142',
            'https://i.gkd.li/i/15220560',
            'https://i.gkd.li/i/15289942',
            'https://i.gkd.li/i/15328394',
            'https://i.gkd.li/i/18236032',
            'https://i.gkd.li/i/22310507',
          ],
        },
        {
          key: 4,
          activityIds: [
            '.MainActivityV2',
            'com.bilibili.vip.web.VipWebActivity',
          ],
          matches:
            'ComposeView > View[childCount=7] > @View[clickable=true][childCount=0] <<n [vid="vip_panel"]',
          exampleUrls:
            'https://m.gkd.li/57941037/a78a7719-b148-4df2-a225-f7a24be0c413',
          snapshotUrls: [
            'https://i.gkd.li/i/15523975',
            'https://i.gkd.li/i/15814146',
          ],
        },
        {
          key: 5,
          fastQuery: true,
          activityIds: 'com.bilibili.vip.web.VipWebActivity',
          matches:
            '@TextView[width<130 && height<130] - TextView[childCount=0][id="dialog-canvas"] <<n [vid="webview"]',
          snapshotUrls: 'https://i.gkd.li/i/23385023',
        },
      ],
    },
    {
      key: 13,
      name: '全屏广告-分享稿件弹窗',
      desc: '点击关闭',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          fastQuery: true,
          activityIds: '.ui.splash.ad.page.HotSplashActivity',
          matches: '[vid="poster_share_cancel"][visibleToUser=true]',
          exampleUrls:
            'https://m.gkd.li/57941037/80e5730d-6634-4a0a-9c58-c57f7ad5e58c',
          snapshotUrls: 'https://i.gkd.li/i/15858057',
        },
      ],
    },
  ],
});
