// 来源: Lin-arm/GKD_subscription src/apps/com.ygkj.chelaile.standard.ts
// 摘取类别: 开屏广告 / 全屏广告, 同步于 2026-11-09
// 重新导入: pnpm tsx scripts/import-ref.ts --force com.ygkj.chelaile.standard
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.ygkj.chelaile.standard',
  name: '车来了',
  groups: [
    {
      key: 3,
      name: '全屏广告-弹窗广告',
      desc: '点击关闭',
      rules: [
        {
          key: 0,
          fastQuery: true,
          activityIds:
            'dev.xesam.chelaile.app.module.line.gray.LineDetailActivity',
          matches:
            '@ImageView[clickable=true][childCount=0][width<100&&height<100][visibleToUser=true] <n * >3 [text="反馈"]',
          exampleUrls: 'https://e.gkd.li/4ab8665e-026f-4101-8299-0300708c91c1',
          snapshotUrls: [
            'https://i.gkd.li/i/16812335',
            'https://i.gkd.li/i/21120116',
          ],
        },
        {
          key: 1,
          fastQuery: true,
          activityIds: 'dev.xesam.chelaile.app.module.PanelHostActivity',
          matches:
            '@ImageView[childCount=0][text=null][visibleToUser=true] < FrameLayout[childCount=1] <2 FrameLayout[childCount=2] <2 FrameLayout[childCount=2] <2 FrameLayout[childCount=2] - FrameLayout > [text^="扭动或点击"]',
          snapshotUrls: 'https://i.gkd.li/i/20502977',
        },
        {
          key: 2,
          fastQuery: true,
          activityIds: 'dev.xesam.chelaile.app.module.PanelHostActivity',
          matches:
            '@ImageView[childCount=0][text=null][desc=null][id=null][visibleToUser=true][width<90 && height<90] < FrameLayout[childCount=1][text=null][desc=null][id=null] <2 FrameLayout[childCount=5] + FrameLayout[childCount=2] > [text^="立即" || text$="详情" || text^="了解" || text="去逛逛" || text="去微信看看" || text$="应用" || text="进入小程序" || text="领取优惠" || text="跳转微信"]',
          exampleUrls: 'https://e.gkd.li/76d02bfa-6d04-4005-b5aa-30ecfdd3cd84',
          snapshotUrls: 'https://i.gkd.li/i/21139548',
        },
        {
          key: 3,
          fastQuery: true,
          activityIds: 'dev.xesam.chelaile.app.module.PanelHostActivity',
          matches:
            '@ViewGroup[childCount=1][visibleToUser=true][width<100 && height<100] + ViewGroup > [text="反馈"]',
          exampleUrls: 'https://e.gkd.li/1f1c3315-d245-404b-ad16-554583b16283',
          snapshotUrls: 'https://i.gkd.li/i/21120146',
        },
      ],
    },
  ],
});
