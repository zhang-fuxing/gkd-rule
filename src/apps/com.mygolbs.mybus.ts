// 来源: Lin-arm/GKD_subscription src/apps/com.mygolbs.mybus.ts
// 摘取类别: 开屏广告 / 全屏广告, 同步于 2026-11-09
// 重新导入: pnpm tsx scripts/import-ref.ts --force com.mygolbs.mybus
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.mygolbs.mybus',
  name: '掌上公交',
  groups: [
    {
      key: 2,
      name: '全屏广告-弹窗广告',
      desc: '点击关闭',
      rules: [
        {
          key: 0,
          fastQuery: true,
          activityIds: [
            '.mapsearch.poisearch.PoiSearchActivity',
            '.LoginActivity',
          ],
          matches:
            '@ImageView[childCount=0][text=null][desc=null][id=null][visibleToUser=true][width<90 && height<90] < FrameLayout[childCount=1][text=null][desc=null][id=null][parent.childCount>3] <n FrameLayout >(2,3) [text^="立即" || text$="详情" || text^="了解" || text="去微信看看" || text$="应用" || text="进入小程序" || text="领取优惠" || text="跳转微信"]',
          snapshotUrls: [
            'https://i.gkd.li/i/12790762',
            'https://i.gkd.li/i/14587392',
          ],
        },
        {
          key: 1,
          fastQuery: true,
          activityIds:
            'com.bytedance.sdk.openadsdk.stub.activity.Stub_Standard_Portrait_Activity',
          matches:
            'ImageView[childCount=0] < LinearLayout < @LinearLayout[clickable=true] - * > [text="反馈"]',
          exampleUrls:
            'https://m.gkd.li/57941037/ec768f05-5431-4684-af40-a7987dff2ec6',
          snapshotUrls: 'https://i.gkd.li/i/14546373',
        },
        {
          key: 2,
          fastQuery: true,
          activityIds: 'com.qq.e.ads.ADActivity',
          matches:
            '@ImageView[clickable=true][visibleToUser=true] - [text="国货大牌 新年必囤"]',
          exampleUrls:
            'https://m.gkd.li/57941037/f7dc0b47-b37f-409a-aebe-4aaa844aa897',
          snapshotUrls: 'https://i.gkd.li/i/14587397',
        },
        {
          key: 3,
          fastQuery: true,
          activityIds: ['.NewHomePageActivity', '.RTimeActivity'],
          matches:
            '@ImageView[childCount=0][text=null][desc=null][id=null][visibleToUser=true][width<90 && height<90] < FrameLayout[childCount=1][text=null][desc=null][id=null][parent.childCount>3] <n FrameLayout >(2,3) [text^="立即" || text$="详情" || text^="了解" || text="去微信看看" || text$="应用" || text="进入小程序" || text="领取优惠" || text="跳转微信"]',
          snapshotUrls: [
            'https://i.gkd.li/i/14219270',
            'https://i.gkd.li/i/14572506',
          ],
        },
      ],
    },
  ],
});
