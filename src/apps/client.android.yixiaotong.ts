// 来源: Lin-arm/GKD_subscription src/apps/client.android.yixiaotong.ts
// 摘取类别: 开屏广告 / 全屏广告, 同步于 2026-11-09
// 重新导入: pnpm tsx scripts/import-ref.ts --force client.android.yixiaotong
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'client.android.yixiaotong',
  name: '乐校通',
  groups: [
    {
      key: 1,
      name: '全屏广告-弹窗广告',
      rules: [
        {
          key: 0,
          name: '腾讯广告',
          fastQuery: true,
          activityIds: '.v3.ui.appcontrol.bath.BathDetailActivity',
          matches:
            '@ImageView[childCount=0][text=null][desc=null][id=null][visibleToUser=true][width<90 && height<90] < FrameLayout[childCount=1][text=null][desc=null][id=null][parent.childCount>3] <n FrameLayout >(2,3) [text^="立即" || text$="详情" || text^="了解" || text="去微信看看" || text$="应用" || text="进入小程序" || text="领取优惠" || text="跳转微信"]',
          snapshotUrls: 'https://i.gkd.li/i/13055837',
        },
        {
          key: 1,
          name: '快手广告-1',
          activityIds: '.v3.ui.appcontrol.bath.BathDetailActivity',
          matches:
            '[id$="ksad_tk_view"] >n ViewGroup + * > @ViewGroup[clickable=true] > ImageView[width<48]',
          snapshotUrls: 'https://i.gkd.li/i/13060116',
        },
        {
          key: 2,
          name: '快手广告-2',
          fastQuery: true,
          matches:
            'ImageView[childCount=0][text=null] < @ViewGroup[childCount=1][clickable=true][visibleToUser=true] < ViewGroup +n ViewGroup[childCount=2] > [text="广告"]',
          snapshotUrls: 'https://i.gkd.li/i/13625511',
        },
      ],
    },
  ],
});
