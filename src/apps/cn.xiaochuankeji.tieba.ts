// 来源: Lin-arm/GKD_subscription src/apps/cn.xiaochuankeji.tieba.ts
// 摘取类别: 开屏广告 / 全屏广告, 同步于 2026-11-09
// 重新导入: pnpm tsx scripts/import-ref.ts --force cn.xiaochuankeji.tieba
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'cn.xiaochuankeji.tieba',
  name: '最右',
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
          matches:
            '[text*="跳过"][text.length<10][width<500 && height<300][visibleToUser=true]',
          snapshotUrls: [
            'https://i.gkd.li/i/15858014',
            'https://i.gkd.li/i/15858024',
          ],
        },
        {
          key: 1,
          fastQuery: true,
          anyMatches: [
            '@View[text=null][clickable=true][childCount=0][visibleToUser=true][width<200&&height<200] +(1,2) TextView[index=parent.childCount.minus(1)][childCount=0] <n FrameLayout[childCount>2][text=null][desc=null] >(n+6) [text*="第三方应用" || text*="扭动手机" || text*="点击或上滑" || text*="省钱好物" || text*="扭一扭"][visibleToUser=true]',
            'FrameLayout > FrameLayout[childCount>2][text=null][desc=null] > @View[text=null][clickable=true][childCount=0][visibleToUser=true][width<200&&height<200] +(1,2) TextView[index=parent.childCount.minus(1)][childCount=0][visibleToUser=true]',
          ],
          snapshotUrls: 'https://i.gkd.li/i/15858023',
        },
        {
          key: 2,
          position: {
            left: 'width * 0.8903',
            top: 'width * 0.1342',
          },
          matches: '[vid="contentView"][visibleToUser=true]',
          snapshotUrls: [
            'https://i.gkd.li/i/15856190',
            'https://i.gkd.li/i/15858008',
          ],
        },
        {
          key: 3,
          fastQuery: true,
          activityIds: '.media.browse.MediaActivity',
          matches:
            'RelativeLayout[childCount=7] > @[vid="ms_skipView"][visibleToUser=true] + LinearLayout[vid="ms_shakeRoot"] > [text*="点击按钮"] ',
          exampleUrls: 'https://e.gkd.li/4958c49b-32d2-4b99-865a-e39fb7183b98',
          snapshotUrls: 'https://i.gkd.li/i/25619083',
        },
      ],
    },
  ],
});
