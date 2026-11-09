// 来源: Lin-arm/GKD_subscription src/apps/com.zhiyin.qingdan.dashixiong.ts
// 摘取类别: 开屏广告 / 全屏广告, 同步于 2026-11-09
// 重新导入: pnpm tsx scripts/import-ref.ts --force com.zhiyin.qingdan.dashixiong
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.zhiyin.qingdan.dashixiong',
  name: '大师兄影视',
  groups: [
    {
      key: 1,
      name: '全屏广告-弹窗广告',
      desc: '点击关闭',
      rules: [
        {
          key: 0,
          name: '快手广告-1',
          fastQuery: true,
          activityIds: '.MainActivity',
          matches:
            '@ImageView <n ViewGroup -2 ViewGroup > ViewGroup > [text="广告"]',
          snapshotUrls: 'https://i.gkd.li/i/12843281',
        },
        {
          key: 1,
          name: '快手广告-2',
          fastQuery: true,
          activityIds: '.MainActivity',
          matches: '@ImageView[clickable=true] <3 * -2 * >2 [text="广告"]',
          snapshotUrls: 'https://i.gkd.li/i/13521143',
        },
        {
          key: 2,
          fastQuery: true,
          name: '快手广告-3',
          activityIds: '.MainActivity',
          matches: ['[text="广告"]', '[text="跳过"]'],
          snapshotUrls: 'https://i.gkd.li/i/13521140',
        },
        {
          key: 3,
          name: '腾讯广告-1',
          fastQuery: true,
          activityIds: ['.MainActivity', 'com.qq.e.ads.ADActivity'],
          matches:
            '@ImageView[childCount=0][text=null][desc=null][id=null][visibleToUser=true][width<90 && height<90] < FrameLayout[childCount=1][text=null][desc=null][id=null][parent.childCount>3] <n FrameLayout >(2,3) [text^="立即" || text$="详情" || text^="了解" || text="去微信看看" || text$="应用" || text="进入小程序" || text="领取优惠" || text="跳转微信"]',
          snapshotUrls: [
            'https://i.gkd.li/i/12843282',
            'https://i.gkd.li/i/12843345',
            'https://i.gkd.li/i/12843333',
            'https://i.gkd.li/i/13400656',
          ],
        },
        {
          key: 5,
          name: '字节广告',
          fastQuery: true,
          activityIds: '.MainActivity',
          matches: '@Image < View +n View > View > View > [text="广告"]',
          snapshotUrls: 'https://i.gkd.li/i/12843323',
        },
        {
          key: 6,
          activityIds: 'com.sigmob.sdk.base.common.TransparentAdActivity',
          matches: '[id="close_btn"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13887500',
        },
      ],
    },
  ],
});
