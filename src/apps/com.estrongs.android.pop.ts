// 来源: Lin-arm/GKD_subscription src/apps/com.estrongs.android.pop.ts
// 摘取类别: 开屏广告 / 全屏广告, 同步于 2026-11-09
// 重新导入: pnpm tsx scripts/import-ref.ts --force com.estrongs.android.pop
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.estrongs.android.pop',
  name: 'ES文件浏览器',
  groups: [
    {
      key: 0,
      name: '全屏广告-弹窗广告',
      rules: [
        {
          key: 0,
          fastQuery: true,
          activityIds: 'com.fighter.loader.view.InteractTemplateAdDialog',
          matches: '[vid="iv_close"]',
          snapshotUrls: 'https://i.gkd.li/i/12509667',
        },
        {
          key: 1,
          fastQuery: true,
          activityIds: '.view.FileExplorerActivity',
          matches:
            '@ImageView[childCount=0][text=null][desc=null][id=null][visibleToUser=true][width<90 && height<90] < FrameLayout[childCount=1][text=null][desc=null][id=null][parent.childCount>3] <n FrameLayout >(2,3) [text^="立即" || text$="详情" || text^="了解" || text="去微信看看" || text$="应用" || text="进入小程序" || text="领取优惠" || text="跳转微信"]',
          snapshotUrls: 'https://i.gkd.li/i/12509669',
        },
        {
          key: 2,
          fastQuery: true,
          activityIds: [
            '.app.openscreenad.HomeBackSplashActivity',
            '.app.PopVideoPlayer',
            '.view.FileExplorerActivity',
          ],
          matches: '[vid="ad_close"][visibleToUser=true]',
          exampleUrls: 'https://e.gkd.li/3632e624-28bf-45fd-bb52-a7ee9a644b7a',
          snapshotUrls: [
            'https://i.gkd.li/i/18072076',
            'https://i.gkd.li/i/18072078',
            'https://i.gkd.li/i/24684475',
          ],
        },
      ],
    },
  ],
});
