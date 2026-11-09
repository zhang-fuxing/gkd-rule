// 来源: Lin-arm/GKD_subscription src/apps/com.apkpure.aegon.ts
// 摘取类别: 开屏广告 / 全屏广告, 同步于 2026-11-09
// 重新导入: pnpm tsx scripts/import-ref.ts --force com.apkpure.aegon
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.apkpure.aegon',
  name: 'APKPure',
  groups: [
    {
      key: 1,
      name: '全屏广告-热门推荐关闭',
      desc: '关闭应用推广',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          activityIds: '.main.activity.MainTabActivity',
          matches:
            '@RelativeLayout[clickable=true][visibleToUser=true] - [text="精选必备好应用"] <2 RelativeLayout < LinearLayout < [id="android:id/content"]',
          snapshotUrls: 'https://i.gkd.li/i/13466647',
        },
      ],
    },
    {
      key: 5,
      name: '全屏广告-弹窗广告',
      desc: '点击关闭',
      rules: [
        {
          fastQuery: true,
          matchTime: 10000,
          activityIds: '.main.activity.MainTabActivity',
          matches:
            'ImageView[childCount=0][text=null] < @LinearLayout[clickable=true][visibleToUser=true] < LinearLayout < LinearLayout < LinearLayout < RelativeLayout < [id="android:id/content"]',
          exampleUrls: 'https://e.gkd.li/10d6f26e-cbd1-4159-914b-68c39ff05436',
          snapshotUrls: 'https://i.gkd.li/i/18587607',
        },
        {
          key: 1,
          fastQuery: true,
          matchTime: 10000,
          activityIds: '.main.activity.AppManagerActivity',
          matches:
            '@ImageView[index=0][childCount=0][clickable=true][visibleToUser=true] < ViewGroup[childCount=2] < [id="android:id/content"]',
          exampleUrls: 'https://e.gkd.li/b8201abb-359e-4fc8-82de-0e3784278cd2',
          snapshotUrls: 'https://i.gkd.li/i/18587646',
        },
        {
          key: 2,
          activityIds: '.v2.app.detail.AppDetailV2Activity',
          matches:
            '@ImageView[childCount=0][clickable=true][visibleToUser=true] - [text="正在下载" || text="正在更新"]',
          exampleUrls: 'https://e.gkd.li/214effcb-76c5-4cc0-b4c8-40c805331fe8',
          snapshotUrls: [
            'https://i.gkd.li/i/18587702',
            'https://i.gkd.li/i/18587507',
          ],
        },
        {
          key: 3,
          fastQuery: true,
          activityIds: '.plugin.runtime.PluginDefaultProxyActivity',
          matches:
            '@ImageView[clickable=true] <2 RelativeLayout[childCount=2] - FrameLayout >5 [text="广告"][visibleToUser=true]',
          snapshotUrls: 'https://i.gkd.li/i/24605359',
        },
      ],
    },
  ],
});
