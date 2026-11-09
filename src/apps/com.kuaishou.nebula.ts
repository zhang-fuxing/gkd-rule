// 来源: Lin-arm/GKD_subscription src/apps/com.kuaishou.nebula.ts
// 摘取类别: 开屏广告 / 全屏广告, 同步于 2026-11-09
// 重新导入: pnpm tsx scripts/import-ref.ts --force com.kuaishou.nebula
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.kuaishou.nebula',
  name: '快手极速版',
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
          matches: '[vid="splash_skip_text"]',
          exampleUrls: 'https://e.gkd.li/5d393b9b-c327-4429-9759-8c18a097453a',
          snapshotUrls: 'https://i.gkd.li/i/17631261',
        },
      ],
    },
    {
      key: 2,
      name: '全屏广告-朋友推荐弹窗',
      rules: [
        {
          key: 0,
          fastQuery: true,
          activityIds: 'com.yxcorp.gifshow.HomeActivity',
          matches:
            '[vid="popup_view" || vid="content_wrapper"] > [vid="close_btn"][visibleToUser=true]',
          snapshotUrls: [
            'https://i.gkd.li/i/14310639',
            'https://i.gkd.li/i/15061832',
          ],
        },
      ],
    },
    {
      key: 3,
      name: '全屏广告-红包弹窗',
      fastQuery: true,
      rules: [
        {
          key: 0,
          activityIds: [
            'com.yxcorp.gifshow.HomeActivity',
            'com.yxcorp.plugin.search.SearchActivity',
          ],
          matches:
            '@[clickable=true][width<128][index=parent.childCount.minus(1)] -(1,2) ViewGroup > [text="点击立得奖励" || text^="邀请" || text="红包"]',
          exampleUrls:
            'https://m.gkd.li/101449500/f7bbd1db-f519-4ff9-96cb-4cb5b2f483a2',
          snapshotUrls: [
            'https://i.gkd.li/i/14879912', //点击立得奖励
            'https://i.gkd.li/i/15061662', //邀请4个新用户
            'https://i.gkd.li/i/25200787', //邀请新用户
            'https://i.gkd.li/i/26675794', //新人 红包
          ],
          excludeSnapshotUrls: 'https://i.gkd.li/i/26678562', // 加 [width<128][index=parent.childCount.minus(1)] 排除
        },
        {
          key: 1,
          activityIds: 'com.yxcorp.gifshow.HomeActivity',
          matches:
            '@ImageView[clickable=true][width<107 && height<107][index=0] + TextView[text$="红包"][text.length<10]',
          snapshotUrls: [
            'https://i.gkd.li/i/26678562', //邀好友得大额红包
            'https://i.gkd.li/i/28514398', //恭喜获得免费红包
          ],
        },
      ],
    },
    {
      key: 4,
      name: '全屏广告-个人主页弹窗',
      fastQuery: true,
      activityIds: 'com.yxcorp.gifshow.HomeActivity',
      rules: [
        {
          key: 1,
          matches: '[text*="挂件"] - [vid="dialog_close"]',
          snapshotUrls: 'https://i.gkd.li/i/30645708',
          exampleUrls: 'https://e.gkd.li/5379291d-3f11-46a9-a4a3-ccba8cc5a7d6',
        },
        {
          key: 2,
          matches: '[text^="恭喜"] -n [text="不再提醒"]',
          snapshotUrls: 'https://i.gkd.li/i/30645964',
          exampleUrls: 'https://e.gkd.li/381e4649-718e-40e7-9d5f-4d2dd7ad8255',
        },
      ],
    },
  ],
});
