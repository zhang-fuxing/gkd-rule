// 来源: Lin-arm/GKD_subscription src/apps/com.qidian.QDReader.ts
// 摘取类别: 开屏广告 / 全屏广告, 同步于 2026-11-09
// 重新导入: pnpm tsx scripts/import-ref.ts --force com.qidian.QDReader
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.qidian.QDReader',
  name: '起点读书',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      actionMaximumKey: 0,
      resetMatch: 'app',
      priorityTime: 10000,
      rules: [
        {
          key: 0,
          matches: '[vid="splash_skip_button"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/33750455',
        },
        {
          key: 1,
          matches:
            '[text*="跳过"][text.length<10][clickable=true][width<500 && height<300]',
          snapshotUrls: 'https://i.gkd.li/i/33750485',
          excludeSnapshotUrls: [
            'https://i.gkd.li/i/33630317', //用 [clickable=true] 排除 跳过福利激励视频
            'https://i.gkd.li/i/33750400', //用 [clickable=true] 排除 找书时可跳过详情页
          ],
          exampleUrls: 'https://e.gkd.li/2c5cc57a-1e92-4e83-b31e-9342aa75034c',
        },
      ],
    },
    {
      key: 3,
      name: '全屏广告-弹窗广告',
      desc: '点击x掉',
      rules: [
        {
          fastQuery: true,
          activityIds: [
            '.ui.activity.MainGroupActivity', //A
            '.framework.widget.dialog.judian', //B
            '.ui.activity.BookLastPageNewActivity', //C
            'com.tencent.mm.plugin.webview.ui.tools.SDKOAuthUI', //D
          ],
          matches: '[vid="imgClose" || vid="btnClose"][visibleToUser=true]',
          snapshotUrls: [
            'https://i.gkd.li/i/12640158', //D
            'https://i.gkd.li/i/12818198', //B
            'https://i.gkd.li/i/13469004', //C
            'https://i.gkd.li/i/23210736', //A
            'https://i.gkd.li/i/23249358', //A   btnClose
          ],
          exampleUrls: 'https://e.gkd.li/79947364-3b02-4113-a7de-2c26cca14286',
        },
      ],
    },
    {
      key: 13,
      name: '全屏广告-红包弹窗',
      desc: '点击x掉',
      rules: [
        {
          fastQuery: true,
          activityIds: [
            '.ui.activity.hongbao_square.NewHongBaoSquareActivity',
            '.ui.activity.MainGroupActivity',
            '.flutter.HongBaoSquareActivity',
          ],
          matches: '[vid="rootView"] > [vid="btnHongbaoClose"]',
          snapshotUrls: [
            'https://i.gkd.li/i/13918466', // 326
            'https://i.gkd.li/i/23291755', // 422
            'https://i.gkd.li/i/28931164', // 428
          ],
          exampleUrls: 'https://e.gkd.li/a11d58b2-70fd-420c-86f1-7a11a8603ee7',
        },
      ],
    },
    {
      key: 18,
      name: '全屏广告-追更至最新章节弹窗',
      desc: '①[取消勾选]提醒 ②x掉弹窗',
      fastQuery: true,
      actionMaximum: 1,
      activityIds: '.ui.activity.QDReaderActivity',
      rules: [
        {
          key: 1,
          name: '①[取消勾选]提醒',
          matches: '[vid="switchUpdate"][checkable=true][checked=true]',
          snapshotUrls: 'https://i.gkd.li/i/34316607',
        },
        {
          key: 2,
          name: '②x掉弹窗',
          matches:
            '@[vid="ivClose"] +2 [visibleToUser=true] >2 [text="追更至最新章节"]',
          snapshotUrls: 'https://i.gkd.li/i/34316605', // [checked=false] 已取消勾选
          exampleUrls: 'https://e.gkd.li/f969ad39-da92-458f-95f6-e2939857c808',
        },
      ],
    },
  ],
});
