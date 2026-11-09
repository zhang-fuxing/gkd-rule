// 来源: Lin-arm/GKD_subscription src/apps/com.xingin.xhs.ts
// 摘取类别: 开屏广告 / 全屏广告, 同步于 2026-11-09
// 重新导入: pnpm tsx scripts/import-ref.ts --force com.xingin.xhs
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.xingin.xhs',
  name: '小红书',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      actionMaximumKey: 0,
      priorityTime: 10000,
      rules: [
        {
          key: 0,
          excludeActivityIds: [
            'com.xingin.alioth.search.GlobalSearchActivity', //搜索结果页
            'com.xingin.growth.ob.FloatingObPageActivity',
            'com.xingin.matrix.notedetail.NoteDetailActivity', //笔记详情页
            'com.xingin.matrix.detail.activity.DetailFeedActivity', //视频页
          ],
          excludeMatches:
            '[text="首页" || text="选择兴趣推荐更精准" || text="相关搜索"][visibleToUser=true]',
          matches:
            '[text*="跳过" || text^="Skip Ad"][text.length<10][!(vid="tv_user_name")][visibleToUser=true]',
          exampleUrls: 'https://e.gkd.li/9733ada7-4961-4a9f-b48d-3398ecd05508',
          snapshotUrls: [
            'https://i.gkd.li/i/17452158',
            'https://i.gkd.li/i/22951606', // 英语版
          ],
          excludeSnapshotUrls: [
            'https://i.gkd.li/i/19035037', // 相关搜索
            'https://i.gkd.li/i/20585457', // 选择兴趣推荐更精准
            'https://i.gkd.li/i/21937254', // vid="tv_user_name"
            'https://i.gkd.li/i/28885475', // 相关搜索
          ],
        },
        {
          key: 1,
          matches: '[vid="splash_count_down_view"]',
          exampleUrls: 'https://e.gkd.li/6ed22307-ce1d-479e-8a8d-a6fe4ffa614c',
          snapshotUrls: [
            'https://i.gkd.li/i/17109105',
            'https://i.gkd.li/i/17108010', // 全局规则在此误触
          ],
        },
      ],
    },
    {
      key: 4,
      name: '全屏广告-优惠券弹窗',
      rules: [
        {
          key: 0,
          fastQuery: true,
          activityIds: 'com.xingin.reactnative.ui.XhsReactTranslucentActivity',
          matches:
            '@ImageView[visibleToUser=true] < * -2 * > [text="你有新人券待领取"]',
          snapshotUrls: 'https://i.gkd.li/i/14391484',
        },
      ],
    },
  ],
});
