// 来源: Lin-arm/GKD_subscription src/apps/com.gotokeep.keep.ts
// 摘取类别: 开屏广告 / 全屏广告, 同步于 2026-11-09
// 重新导入: pnpm tsx scripts/import-ref.ts --force com.gotokeep.keep
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.gotokeep.keep',
  name: 'Keep',
  groups: [
    {
      key: 2,
      name: '全屏广告-首页弹窗广告',
      desc: '点击关闭',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          key: 0,
          activityIds: '.refactor.business.main.activity.MainActivity',
          matches: '[vid="imgCloseHomePageDialog"]',
          snapshotUrls: 'https://i.gkd.li/i/13761641',
        },
      ],
    },
    {
      key: 4,
      name: '全屏广告-运动购页面-弹窗广告',
      rules: [
        {
          key: 0,
          activityIds: '.refactor.business.main.activity.MainActivity',
          matches:
            'ImageView + LinearLayout > ImageView[id=null][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/12706111',
        },
        {
          key: 1,
          activityIds: '.refactor.business.main.activity.MainActivity',
          matches: '[vid="contentContainer"] + [vid="closeImageView"]',
          snapshotUrls: 'https://i.gkd.li/i/13766358',
        },
      ],
    },
    {
      key: 5,
      name: '全屏广告-请求开启通知权限弹窗',
      actionMaximum: 1,
      resetMatch: 'app',
      fastQuery: true,
      rules: '@[text="暂不开启"] +2 [text="开启通知权限"]',
      snapshotUrls: 'https://i.gkd.li/i/13761671',
    },
  ],
});
