// 来源: Lin-arm/GKD_subscription src/apps/com.google.android.youtube.ts
// 摘取类别: 开屏广告 / 全屏广告, 同步于 2026-11-09
// 重新导入: pnpm tsx scripts/import-ref.ts --force com.google.android.youtube
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.google.android.youtube',
  name: 'YouTube',
  groups: [
    {
      key: 0,
      name: '全屏广告-视频播放-跳过广告',
      rules: [
        {
          fastQuery: true,
          key: 0,
          activityIds: [
            'com.google.android.apps.youtube.app.watchwhile.WatchWhileActivity',
            'com.google.android.apps.youtube.app.watchwhile.MainActivity',
          ],
          matches: '[vid="skip_ad_button" || vid="modern_skip_ad_text"]',
          snapshotUrls: [
            'https://i.gkd.li/i/13797491',
            'https://i.gkd.li/i/12565261',
            'https://i.gkd.li/i/13705106',
          ],
        },
      ],
    },
    {
      key: 1,
      name: '全屏广告-视频播放-赞助商广告',
      fastQuery: true,
      activityIds: [
        'com.google.android.apps.youtube.app.watchwhile.WatchWhileActivity',
        'com.google.android.apps.youtube.app.watchwhile.MainActivity',
      ],
      rules: [
        {
          key: 0,
          matches:
            '@[clickable=true][index>0][desc="关闭广告面板" || desc="Close ad panel" || desc="隐藏广告"] <<(10-n) [vid="panel_header"]',
          snapshotUrls: [
            'https://i.gkd.li/i/13797491',
            'https://i.gkd.li/i/13705106', // 纯id？
            'https://i.gkd.li/i/14784199',
            'https://i.gkd.li/i/27373744',
            'https://i.gkd.li/i/27373748',
            'https://i.gkd.li/i/33054103',
          ],
          exampleUrls: [
            'https://e.gkd.li/e1655855-8497-4b92-8919-4fdb4f6f00b1',
            'https://e.gkd.li/d024797b-88c5-4ab4-aa53-433b1889eaf1',
          ],
        },
      ],
    },
    {
      key: 3,
      name: '全屏广告-会员广告',
      fastQuery: true,
      activityIds:
        'com.google.android.apps.youtube.app.watchwhile.MainActivity',
      rules: [
        {
          key: 0,
          name: '视频',
          matches:
            '[!(getChild(0).getChild(0).desc="Image attachment")] + @[desc="不用了，谢谢" || desc="关闭" || desc="我暂时不要" || desc="Close" || desc="No thanks" || desc="I’ll pass this time"][clickable=true] <3 ViewGroup <<(-n+8) [vid="bottom_ui_container" || vid="custom"]',
          snapshotUrls: [
            'https://i.gkd.li/i/13797512',
            'https://i.gkd.li/i/19578085',
            'https://i.gkd.li/i/25865404',
            'https://i.gkd.li/i/28486200',
          ],
          // excludeSnapshotUrls: 'https://i.gkd.li/i/21978683',
          exampleUrls: 'https://e.gkd.li/1292c8c9-26e3-4053-bec4-e5ebe50cde8e',
        },
        {
          key: 1,
          name: '开屏', // 疑似开屏，但有可能不是
          matches:
            '[!(getChild(0).getChild(0).desc="Image attachment")] + @[desc="不用了，谢谢" || desc="关闭" || desc="我暂时不要" || desc="Close" || desc="No thanks"][visibleToUser=true] -n ImageView < * < [vid="custom"]',
          snapshotUrls: [
            'https://i.gkd.li/i/18017075',
            'https://i.gkd.li/i/18549944',
          ],
          // excludeSnapshotUrls: 'https://i.gkd.li/i/21978683',
          exampleUrls: 'https://e.gkd.li/11cdf5b2-97a8-42f0-a2eb-dc1cb2c98ac1',
        },
      ],
    },
    {
      key: 13,
      name: '全屏广告-Shorts-赞助商广告',
      desc: '[赞助商Ad]视频自动划掉',
      rules: [
        {
          fastQuery: true,
          activityIds:
            'com.google.android.apps.youtube.app.watchwhile.MainActivity',
          matches:
            '[text="赞助商广告"] <<3 [desc$="广告"] <<2 [childCount<=2] <2 * <<3 [vid="reel_player_delegated_overlay"]',
          action: 'swipe',
          swipeArg: {
            start: {
              left: 'width * 0.5',
              top: 'width * 1.5',
            },
            end: {
              left: 'width * 0.6',
              top: 'width * 1.0',
            },
            duration: 114,
          },
          snapshotUrls: 'https://i.gkd.li/i/27376863',
          exampleUrls: 'https://e.gkd.li/a144a709-4fa2-492a-9776-a78a1e45b1e4',
        },
      ],
    },
  ],
});
