// 来源: Lin-arm/GKD_subscription src/apps/com.jingdong.app.mall.ts
// 摘取类别: 开屏广告 / 全屏广告, 同步于 2026-11-09
// 重新导入: pnpm tsx scripts/import-ref.ts --force com.jingdong.app.mall
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.jingdong.app.mall',
  name: '京东',
  groups: [
    {
      key: 0,
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
          excludeActivityIds: 'com.jd.lib.search.view.Activity.SearchActivity',
          matches:
            '[text*="跳过"][text.length<10][width<500 && height<300][visibleToUser=true]',
          snapshotUrls: 'https://i.gkd.li/i/16323111',
          excludeSnapshotUrls: 'https://i.gkd.li/i/16323115',
        },
        {
          key: 1,
          excludeActivityIds: 'com.jd.lib.search.view.Activity.SearchActivity',
          matches:
            '[text*="跳过"][text.length<10][width<500 && height<300][visibleToUser=true]',
          snapshotUrls: 'https://i.gkd.li/i/17602356', // "跳过" 节点不支持fastQuery
          excludeSnapshotUrls: 'https://i.gkd.li/i/16323115',
        },
      ],
    },
    {
      key: 5,
      name: '全屏广告-弹窗广告',
      rules: [
        {
          key: 0,
          activityIds: '.MainFrameActivity',
          matches: '@FrameLayout[clickable=true] > [desc="关闭"]',
          excludeMatches:
            '[text="确定" || text="加入购物车" || text*="购买" || text*="下单"][visibleToUser=true]',
          snapshotUrls: [
            'https://i.gkd.li/i/13165721',
            'https://i.gkd.li/i/15364514',
          ],
          excludeSnapshotUrls: 'https://i.gkd.li/i/18455760', //避免在activityIds为null时误触
        },
        {
          key: 1,
          fastQuery: true,
          activityIds: [
            'com.jd.lib.cashier.complete.view.CashierCompleteActivity',
            'com.jd.lib.jshop.jshop.JshopMainShopActivity',
          ],
          matches: '[vid="close"][desc="关闭页面"]',
          snapshotUrls: [
            'https://i.gkd.li/i/13218034',
            'https://i.gkd.li/i/14927060',
          ],
        },
        {
          key: 2,
          fastQuery: true,
          activityIds: [
            '.MainFrameActivity',
            'com.jd.lib.jshop.jshop.JshopMainShopActivity',
          ],
          excludeMatches: [
            'ImageView[desc="关闭页面"] - [text="优惠券"]',
            'TextView[text="退换/售后"][id=null]',
            '[text="立即购买"][visibleToUser=true]',
          ],
          matches:
            '[desc="关闭页面" || desc="关闭按钮"][clickable=true][visibleToUser=true]',
          snapshotUrls: [
            'https://i.gkd.li/i/13241883',
            'https://i.gkd.li/i/13258996',
            'https://i.gkd.li/i/13336847', // 增加excludeMatches: 'ImageView[desc="关闭页面"] - [text="优惠券"]', 避免在该快照误触
            'https://i.gkd.li/i/15416926',
            'https://i.gkd.li/i/15862131',
            'https://i.gkd.li/i/16818580', // 增加excludeMatches: 'TextView[text="退换/售后"]', 避免在刚刚打开该快照页面时误触（此时activityId并未改变）
            'https://i.gkd.li/i/24170046', // 增加excludeMatches: '[text="立即购买"][visibleToUser=true]', 避免在该快照误触
          ],
        },
        {
          key: 3,
          fastQuery: true,
          matchTime: 10000,
          actionMaximum: 1,
          resetMatch: 'app',
          action: 'back',
          activityIds: '.MainFrameActivity',
          matches: '[text^="惊喜福利来袭"][visibleToUser=true]',
          exampleUrls: 'https://e.gkd.li/580d3cb5-503e-47a9-ba88-056e91c2f084',
          snapshotUrls: 'https://i.gkd.li/i/17974166',
        },
      ],
    },
    {
      key: 12,
      name: '全屏广告-购物车页面支付成功弹窗广告',
      desc: '自动点击正下方的"x"',
      rules: [
        {
          fastQuery: true,
          activityIds: 'com.jd.lib.cart.ShoppingCartNewActivity',
          matches: '@ImageView - ViewGroup >2 TextView[text="查看订单"]',
          snapshotUrls: 'https://i.gkd.li/i/13446362',
        },
      ],
    },
    {
      key: 13,
      name: '全屏广告-加入购物车后出现的弹窗',
      desc: '点击[继续逛]',
      rules: [
        {
          fastQuery: true,
          activityIds: 'com.jd.lib.productdetail.ProductDetailActivity',
          matches: '[text="继续逛"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/15047243',
        },
      ],
    },
  ],
});
