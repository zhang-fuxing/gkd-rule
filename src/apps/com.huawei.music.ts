// 来源: Lin-arm/GKD_subscription src/apps/com.huawei.music.ts
// 摘取类别: 开屏广告 / 全屏广告, 同步于 2026-11-09
// 重新导入: pnpm tsx scripts/import-ref.ts --force com.huawei.music
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.huawei.music',
  name: '华为音乐',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      priorityTime: 10000,
      rules: [
        {
          fastQuery: true,
          action: 'clickCenter',
          matches:
            '[text*="跳过"][text.length<10][width<500 && height<300][visibleToUser=true]',
          snapshotUrls: 'https://i.gkd.li/i/20773821',
        },
      ],
    },
    {
      key: 8,
      name: '全屏广告-弹窗广告',
      desc: '点击关闭',
      rules: [
        {
          fastQuery: true,
          activityIds: [
            'com.android.mediacenter.PageActivity',
            'com.android.mediacenter.MainActivity',
          ],
          matches:
            'ImageView[vid="campaign_dialog_close_image_view" || vid="iv_close"][clickable=true]',
          exampleUrls:
            'https://m.gkd.li/57941037/00c83449-9809-4de8-9c7c-c6ce1b9fa2c3',
          snapshotUrls: [
            'https://i.gkd.li/i/14193738',
            'https://i.gkd.li/i/15523958',
            'https://i.gkd.li/i/24676040',
          ],
        },
      ],
    },
  ],
});
