// 来源: Lin-arm/GKD_subscription src/apps/cn.xiaochuankeji.zuiyouLite.ts
// 摘取类别: 开屏广告 / 全屏广告, 同步于 2026-11-09
// 重新导入: pnpm tsx scripts/import-ref.ts --force cn.xiaochuankeji.zuiyouLite
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'cn.xiaochuankeji.zuiyouLite',
  name: '皮皮搞笑',
  groups: [
    {
      key: -1,
      name: '开屏广告',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      actionMaximumKey: 0,
      priorityTime: 10000,
      rules: [
        {
          key: 0,
          fastQuery: true,
          anyMatches: [
            '@View[text=null][clickable=true][childCount=0][visibleToUser=true][width<200&&height<200] +(1,2) TextView[index=parent.childCount.minus(1)][childCount=0] <n FrameLayout[childCount>2][text=null][desc=null] >(n+6) [text*="第三方应用" || text*="扭动手机" || text*="点击或上滑" || text*="省钱好物" || text*="扭一扭"][visibleToUser=true]',
            'FrameLayout > FrameLayout[childCount>2][text=null][desc=null] > @View[text=null][clickable=true][childCount=0][visibleToUser=true][width<200&&height<200] +(1,2) TextView[index=parent.childCount.minus(1)][childCount=0][visibleToUser=true]',
          ],
          snapshotUrls: 'https://i.gkd.li/i/14546304',
        },
        {
          key: 1,
          fastQuery: true,
          matches: '[text*="跳过"][text.length<=10]',
          snapshotUrls: [
            'https://i.gkd.li/i/12745095',
            'https://i.gkd.li/i/13387320',
          ],
        },
        {
          key: 2,
          fastQuery: true,
          position: {
            left: 'width * 0.8778',
            top: 'width * 0.1667',
          },
          matches:
            '[id$="spalsh_ad_view"] >4 [id$="native_container"] >2 [vid="contentView"]', // 避免选中其他开屏广告节点
          exampleUrls:
            'https://m.gkd.li/57941037/485963ab-07b1-412a-a932-badc50cb2688',
          snapshotUrls: 'https://i.gkd.li/i/13399391',
        },
      ],
    },
  ],
});
