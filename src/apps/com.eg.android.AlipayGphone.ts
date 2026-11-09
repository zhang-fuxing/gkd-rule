// 来源: Lin-arm/GKD_subscription src/apps/com.eg.android.AlipayGphone.ts
// 摘取类别: 开屏广告 / 全屏广告, 同步于 2026-11-09
// 重新导入: pnpm tsx scripts/import-ref.ts --force com.eg.android.AlipayGphone
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.eg.android.AlipayGphone',
  name: '支付宝',
  groups: [
    {
      key: 0,
      name: '全屏广告-关闭花呗升级弹窗',
      fastQuery: true,
      rules: [
        {
          key: 1,
          activityIds: [
            'com.alipay.android.msp.ui.views.MspContainerActivity',
            'com.alipay.android.msp.ui.views.MspUniRenderActivity',
          ],
          matches: [
            '[text="根据相关法律法规要求，请尽快完成花呗升级"]',
            'FrameLayout > FrameLayout  > FrameLayout > [text="关闭"]',
          ],
          snapshotUrls: [
            'https://i.gkd.li/i/13183946',
            'https://i.gkd.li/i/12826077',
          ],
        },
        {
          key: 2,
          activityIds: 'com.alipay.android.msp.ui.views.MspContainerActivity',
          matches: [
            '[text*="花呗服务"]',
            '@[clickable=true] >2 [text="暂不升级，继续付款"]',
          ],
          snapshotUrls: [
            'https://i.gkd.li/i/13631362',
            'https://i.gkd.li/i/13857535',
          ],
        },
        {
          key: 3,
          activityIds:
            'com.alipay.mobile.nebulax.xriver.activity.XRiverActivity',
          excludeActivityIds:
            'com.alipay.mobile.nebulax.xriver.activity.XRiverActivity$', //排除小游戏、子小程序的, 防止阻塞
          matches:
            '@Image[width<90] - [text="花呗服务升级"] <<3 Dialog <2 View < View[index=parent.childCount.minus(1)] <n WebView <<4 [id="com.alipay.multiplatform.phone.xriver_integration:id/h5_pc_container"]',
          snapshotUrls: 'https://i.gkd.li/i/25000603',
        },
      ],
    },
    {
      key: 4,
      name: '全屏广告-小组件弹窗',
      desc: '点击[关闭/近期不再提醒我]',
      rules: [
        {
          key: 0,
          fastQuery: true,
          activityIds: 'com.alipay.android.msp.ui.views.MspContainerActivity',
          matches: [
            '[text="设置支付宝小组件"]',
            '@[clickable=true] > [text="关闭"]',
          ],
          snapshotUrls: 'https://i.gkd.li/i/13327349',
        },
        {
          key: 1,
          fastQuery: true,
          activityIds:
            'com.alipay.mobile.nebulax.xriver.activity.XRiverActivity',
          excludeActivityIds:
            'com.alipay.mobile.nebulax.xriver.activity.XRiverActivity$', //排除小游戏、子小程序的, 防止阻塞
          matches:
            '@Image[width<80 && height<80][visibleToUser=true] < View < View < View < View < WebView[text*="半浮层容器"] < WebView <2 * < * < [id="android:id/content"]',
          snapshotUrls: 'https://i.gkd.li/i/27384135',
        },
        {
          key: 2,
          activityIds: [
            'com.alipay.mobile.nebulax.integration.mpaas.activity.NebulaActivity$Main',
            'com.alipay.mobile.nebulax.xriver.activity.XRiverActivity',
          ],
          excludeActivityIds:
            'com.alipay.mobile.nebulax.xriver.activity.XRiverActivity$', //排除小游戏、子小程序的, 防止阻塞
          matches: '[text^="去"][text.length>2] + [text="近期不再提醒我"]',
          exampleUrls: 'https://e.gkd.li/de3df4c8-6ab4-45a0-aec5-0fbdfa75e823',
          snapshotUrls: [
            // 弹窗中的文字和图片每隔几秒切换
            'https://i.gkd.li/i/16427922',
            'https://i.gkd.li/i/22984695',
            'https://i.gkd.li/i/22984696',
            'https://i.gkd.li/i/24981728',
          ],
        },
      ],
    },
    {
      key: 11,
      name: '全屏广告-借呗消费信贷协议',
      desc: '点击X',
      rules: [
        {
          activityIds:
            'com.alipay.mobile.nebulax.integration.mpaas.activity.NebulaActivity$Main',
          matches:
            '[text="同意协议并刷脸验证"] < * -4 * >2 Image[visibleToUser=true]',
          snapshotUrls: 'https://i.gkd.li/i/13915022',
        },
      ],
    },
    {
      key: 13,
      name: '全屏广告-弹窗广告',
      desc: '点击关闭',
      fastQuery: true,
      rules: [
        {
          key: 0,
          activityIds: '.AlipayLogin',
          matches:
            '@ImageView[desc="关闭"][clickable=true] < LinearLayout - [id="com.alipay.mobile.advertisement:id/standardlayer_contentview"][desc="推荐广告"]',
          snapshotUrls: [
            'https://i.gkd.li/i/14034152',
            'https://i.gkd.li/i/26184718',
          ],
        },
        {
          key: 1,
          forcedTime: 10000, //主动查询10秒
          activityIds: [
            'com.alipay.mobile.nebulax.integration.mpaas.activity.NebulaActivity$Main',
            'com.alipay.mobile.nebulax.xriver.activity.XRiverActivity',
          ],
          excludeActivityIds:
            'com.alipay.mobile.nebulax.xriver.activity.XRiverActivity$', //排除小游戏、子小程序的, 防止阻塞
          matches:
            '@TextView[id=desc][text=""][visibleToUser=true][width<110][height<110][top>getPrev(1).height.div(2)][left<getPrev(1).width.div(2)][right>getPrev(1).width.div(2)] <(2,3) View[childCount>1] <<n [id="com.alipay.mobile.nebula:id/h5_pc_container"]',
          /**
           * [top>getPrev(1).height.div(2)] ：top大于 1/2的屏幕高度，即限制目标节点在下半屏
           * [left<getPrev(1).width.div(2)][right>getPrev(1).width.div(2)] ：其内的 getPrev(1).width.div(2) 是屏幕的竖中线，即要求 屏幕的竖中线 像串烤串一样穿过目标节点
           */
          exampleUrls: 'https://e.gkd.li/ebbd606a-0e21-4fc5-b0c3-49e4d87d065c',
          snapshotUrls: [
            'https://i.gkd.li/i/16812751',
            'https://i.gkd.li/i/29666442',
            'https://i.gkd.li/i/29814861',
            'https://i.gkd.li/i/30511870',
          ],
          excludeSnapshotUrls: 'https://i.gkd.li/i/29814461', // 用 [left<getPrev(1).width.div(2)][right>getPrev(1).width.div(2)] 排除
        },
        {
          key: 2,
          activityIds:
            'com.alipay.mobile.nebulax.xriver.activity.XRiverActivity',
          excludeActivityIds:
            'com.alipay.mobile.nebulax.xriver.activity.XRiverActivity$', //排除小游戏、子小程序的, 防止阻塞
          matches:
            '@[text*="跳过"] + [visibleToUser=true][text^="账单分期还"] <<n [id="com.alipay.mobile.nebula:id/h5_pc_container"]',
          exampleUrls: 'https://e.gkd.li/cc064c84-75a9-4447-b01b-9d5597515093',
          snapshotUrls: 'https://i.gkd.li/i/18409779',
        },
        {
          key: 3,
          activityIds:
            'com.alipay.mobile.nebulax.xriver.activity.XRiverActivity',
          excludeActivityIds:
            'com.alipay.mobile.nebulax.xriver.activity.XRiverActivity$', //排除小游戏、子小程序的, 防止阻塞
          matches: 'Image[visibleToUser=true][text="关闭弹屏"]',
          snapshotUrls: 'https://i.gkd.li/i/22531246',
        },
        {
          key: 4,
          activityIds: '.AlipayLogin',
          matches:
            '@[text="我知道了"][clickable=true] -n [text^="用碰一下支付"]',
          snapshotUrls: 'https://i.gkd.li/i/24563264',
        },
        {
          key: 5,
          name: '⑤坐标点击x掉',
          activityIds: '.AlipayLogin',
          position: {
            left: 'width * 0.5',
            top: 'width * 1.3792',
          },
          matches:
            'View[width=getPrev(2).width][height=getPrev(2).height] < ViewGroup - * ->2 @ImageView < [visibleToUser=true] < FrameLayout - View < ViewGroup[childCount=3] < * < * < * < FrameLayout - [vid="alipaylogin_layout"]',
          snapshotUrls: 'https://i.gkd.li/i/26526026',
        },
      ],
    },
    {
      key: 14,
      name: '全屏广告-支付后的推荐弹窗',
      desc: '点击关闭',
      fastQuery: true,
      activityIds: 'com.alipay.android.msp.ui.views.MspContainerActivity',
      rules: [
        {
          key: 0,
          matches: [
            '[text$="推荐你"][visibleToUser=true]',
            '@[clickable=true] > [text="关闭"]',
          ],
          exampleUrls:
            'https://m.gkd.li/57941037/8daecaeb-35f0-4f3a-8d5a-a19098a992d5',
          snapshotUrls: [
            'https://i.gkd.li/i/14060628',
            'https://i.gkd.li/i/14893122',
            'https://i.gkd.li/i/15050300',
            'https://i.gkd.li/i/20684144',
          ],
        },
        {
          key: 1,
          name: '花呗开通提示',
          matches: [
            '[text*="花呗"][text^="开通" || text^="下次支付"]',
            '@[clickable=true] > [text="关闭"]',
          ],
          snapshotUrls: [
            'https://i.gkd.li/i/27007114',
            'https://i.gkd.li/i/31612291',
          ],
        },
      ],
    },
    {
      key: 17,
      name: '全屏广告-关闭免密支付广告',
      actionMaximum: 1,
      rules: [
        {
          key: 0,
          fastQuery: true,
          activityIds: 'com.alipay.android.msp.ui.views.MspContainerActivity',
          matches:
            '@[checked=true] < FrameLayout - [text*="免密"][text$="支付"]',
          exampleUrls: 'https://e.gkd.li/7c789099-9b6f-40a2-bc3b-c73b30891cf0',
          snapshotUrls: [
            'https://i.gkd.li/i/14630824', // 关闭前
            'https://i.gkd.li/i/14630825', // 关闭后
            'https://i.gkd.li/i/17107841',
          ],
        },
        {
          key: 1,
          fastQuery: true,
          activityIds: 'com.alipay.android.msp.ui.views.MspContainerActivity',
          matches: [
            '[text^="开通"][text$="免密支付" || text*="极速付款"][visibleToUser=true]',
            '@[clickable=true] > [text="不感兴趣"][visibleToUser=true]',
          ],
          exampleUrls: 'https://e.gkd.li/c8388cd5-a97f-4683-9ef1-2caa0a24de91',
          snapshotUrls: [
            'https://i.gkd.li/i/19449399',
            'https://i.gkd.li/i/30699230',
          ],
        },
      ],
    },
    {
      key: 23,
      name: '全屏广告-[银行卡还款服务升级]弹窗',
      desc: '点击[放弃升级，直接付款]',
      rules: [
        {
          fastQuery: true,
          activityIds:
            'com.alipay.mobile.nebulax.xriver.activity.XRiverActivity',
          matches: '@[clickable=true] >2 [text="放弃升级，直接付款"]',
          exampleUrls:
            'https://m.gkd.li/57941037/1b788a34-68f6-43c0-8be4-e13cb8221852',
          snapshotUrls: 'https://i.gkd.li/i/16106615',
        },
      ],
    },
    {
      ignoreGlobalGroupMatch: true,
      key: 24,
      name: '开屏广告-小程序开屏广告',
      desc: '①点击[跳过] ②坐标点击[关闭]',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'match',
      priorityTime: 10000,
      activityIds: 'com.alipay.mobile.nebulax.xriver.activity.XRiverActivity$', // 通配小程序、小游戏
      rules: [
        {
          key: 1,
          name: '①点击[跳过]',
          matches:
            '@View[id=null][text=null][childCount=0][visibleToUser=true] < ViewGroup[id=null][text=null][childCount=1][index=parent.childCount.minus(1)] <(7,8) ViewGroup <2 ViewGroup < ViewGroup < LinearLayout < RelativeLayout <(1,2) [id="android:id/content"]',
          exampleUrls: 'https://e.gkd.li/a243e31f-f1b5-4689-8d1a-c53250be651e',
          snapshotUrls: [
            'https://i.gkd.li/i/17141999',
            'https://i.gkd.li/i/28130319',
          ],
        },
        {
          key: 2,
          name: '②坐标点击[关闭]',
          position: {
            left: 'width * 0.2490',
            top: 'width * 0.0435',
          },
          matches:
            'View[width=getPrev(5).width] - @ViewGroup[childCount=1][height<150][getChild(0).name$=".View"][visibleToUser=true] < [childCount>3] < ViewGroup < LinearLayout < RelativeLayout <2 [id="android:id/content"][childCount=2]',
          snapshotUrls: [
            'https://i.gkd.li/i/28133622',
            'https://i.gkd.li/i/28337298',
          ],
        },
      ],
    },
  ],
});
