// 来源: Lin-arm/GKD_subscription src/apps/com.kaoshibaodian.app.ts
// 摘取类别: 开屏广告 / 全屏广告, 同步于 2026-11-09
// 重新导入: pnpm tsx scripts/import-ref.ts --force com.kaoshibaodian.app
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.kaoshibaodian.app',
  name: '考试宝',
  groups: [
    {
      key: 2,
      name: '全屏广告-弹窗广告',
      desc: '点击关闭',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          key: 0,
          fastQuery: true,
          activityIds: 'ksbd.app.home.HomeActivity',
          matches:
            '@ImageView[childCount=0][text=null][desc=null][id=null][visibleToUser=true][width<90 && height<90] < FrameLayout[childCount=1][text=null][desc=null][id=null] <2 FrameLayout[childCount=5] + FrameLayout[childCount=2] > [text^="立即" || text$="详情" || text^="了解" || text="去逛逛" || text="去微信看看" || text$="应用" || text="进入小程序" || text="领取优惠" || text="跳转微信"]',
          exampleUrls: 'https://e.gkd.li/92252573-11c8-4ce8-a0df-4c7e94b7c101',
          snapshotUrls: 'https://i.gkd.li/i/16492018',
        },
        {
          key: 1,
          fastQuery: true,
          activityIds: 'ksbd.app.lib.libOrExam.ExerciseAct',
          matches: '[vid="img_close"][visibleToUser=true]',
          exampleUrls: 'https://e.gkd.li/bc0fdaa3-a33e-48ba-83aa-28a28da60d3a',
          snapshotUrls: 'https://i.gkd.li/i/21617539',
        },
      ],
    },
  ],
});
