import { defineGkdGlobalGroups } from '@gkd-kit/define';
import * as appList from './globalDefaultApps';

// 开屏广告类规则组的匹配优先级, 数字越小越先匹配
export const OPEN_AD_ORDER = -10;

// 来源: Lin-arm/GKD_subscription (src/globalGroups.ts 的「开屏广告-全局」), 2026-11-09 同步
// 选择器与排除规则均带快照校验, 修改前请先看对应 snapshotUrls
export default defineGkdGlobalGroups([
  {
    key: 0,
    name: '开屏广告-全局',
    desc: '关闭打开应用时的开屏广告',
    order: OPEN_AD_ORDER,
    fastQuery: true,
    // 开屏广告只在冷启动后短时间内出现
    matchTime: 10000,
    actionMaximum: 2,
    resetMatch: 'app',
    // Flutter/WebView 应用不触发无障碍事件, 需主动轮询
    forcedTime: 10000,
    actionCdKey: 0,
    actionMaximumKey: 0,
    // 冷启动时优先匹配, 避免被应用内其它规则阻塞
    priorityTime: 10000,
    // 该应用已有以 "开屏广告" 开头的应用级规则组时, 此全局组自动让位
    disableIfAppGroupMatch: '开屏广告',
    rules: [
      {
        key: 0,
        // 防止误触
        excludeMatches:
          '([text="Submit" || text="书签" || text="NEXT" || text="覆盖" || text*="阅读并同意" || text="跳过空白"][visibleToUser=true]) || ([text*="搜索" || text="历史记录" || text$="在搜"][text.length>3 && text.length<7][visibleToUser=true]) || ([text$="设置" || text*="跳过片"][text.length<10][visibleToUser=true]) || ([text^="选择"][text*="偏好" || text*="兴趣" || text*="喜好" || text*="行业"][text.length<10][visibleToUser=true])',
        anyMatches: [
          '[text*="跳过"][text.length<10][width<500 && height<300][visibleToUser=true]',
          '@[name$="View" || name$="LinearLayout"][clickable=true][childCount<2][width<300 && height<200] - [text="互动广告"][visibleToUser=true]',
          '[childCount=0][visibleToUser=true][width<500 && height<300][(text.length<10 && (text*="跳过" || text*="跳 过" || text*="跳過" || text~="(?is).*skip.*") && text!*="视频" && text!*="片头" && text!*="片尾") || (vid~="(?is).*skip.*" && vid!~="(?is).*video.*" && vid!~="(?is).*head.*" && vid!~="(?is).*tail.*" && !(text="帮助") && !(text="取消") && !(text*="退出")) || id$="tt_splash_skip_btn" || (desc.length<10 && (desc*="跳过" || desc*="跳過" || desc~="(?is).*skip.*"))]',
        ],
        snapshotUrls: [
          // 互动开屏广告
          'https://i.gkd.li/i/21617612',
          'https://i.gkd.li/i/23557410',

          // text*="跳 过"
          'https://i.gkd.li/i/13421452',

          'https://i.gkd.li/i/24097095', // width<500
          'https://i.gkd.li/i/24766641', // height<300

          // 避免被excludeMatches匹配
          'https://i.gkd.li/i/24330969', // [text="搜索运单或服务"] 加 text.length<7 后被排除
          'https://i.gkd.li/i/24541384', // [text="设置"] 加 [visibleToUser=true] 后被排除
          'https://i.gkd.li/i/24588777', // 原先 [text*="隐私协议"] 会匹配,已删除
        ],
        excludeSnapshotUrls: [
          // 避免误触
          'https://i.gkd.li/i/19952277', // text="Submit"
          'https://i.gkd.li/i/23122415', // text="书签"
          'https://i.gkd.li/i/23225609', // text="NEXT"
          'https://i.gkd.li/i/27801562', // text="覆盖"
          'https://i.gkd.li/i/22634992', // text*="阅读并同意" , (text.length=40)
          'https://i.gkd.li/i/32416687', // text="跳过空白"
          'https://i.gkd.li/i/20946730', // text$="设置" text*="跳过片"
          'https://i.gkd.li/i/23741801', // text$="设置"
          'https://i.gkd.li/i/23741779', // text$="设置"
          'https://i.gkd.li/i/23051921', // [text^="选择"]  偏好
          'https://i.gkd.li/i/23742770', // [text^="选择"]  兴趣
          'https://i.gkd.li/i/23743049', // [text^="选择"]  喜好
          'https://i.gkd.li/i/23052289', // [text^="选择"]  行业

          // anyMatches 中的排除
          'https://i.gkd.li/i/15079224', // !(text*="退出")
          'https://i.gkd.li/i/17108010', // !(text="帮助")
          'https://i.gkd.li/i/18265000', // !(text="取消")
          'https://i.gkd.li/i/20949002', // vid!~="(?is).*video.*"
          'https://i.gkd.li/i/21617520', // text!*="视频"
          'https://i.gkd.li/i/25039297', // text*="跳过片"、text!*="片头"、text!*="片尾"、vid!~="(?is).*head.*"、vid!~="(?is).*tail.*"
        ],
      },
      {
        key: 1, // 字节SDK
        anyMatches: [
          '@View[text=null][clickable=true][childCount=0][visibleToUser=true][width<200&&height<200] +(1,2) TextView[index=parent.childCount.minus(1)][childCount=0] <n FrameLayout[childCount>2][text=null][desc=null] >(n+6) [text*="第三方应用" || text*="扭动手机" || text*="点击或上滑" || text*="省钱好物" || text*="扭一扭"][visibleToUser=true]',
          'FrameLayout > FrameLayout[childCount>2][text=null][desc=null] > @View[text=null][clickable=true][childCount=0][visibleToUser=true][width<200&&height<200] +(1,2) TextView[index=parent.childCount.minus(1)][childCount=0][visibleToUser=true]',
        ],
        snapshotUrls: [
          'https://i.gkd.li/i/19685971', // +(1,2)
          'https://i.gkd.li/i/19701216', // +(1,2)
          'https://i.gkd.li/i/20262130',
          'https://i.gkd.li/i/20768349',
          'https://i.gkd.li/i/20883248', // >(n+6)
          'https://i.gkd.li/i/23549504', // text*="扭一扭"
        ],
      },
    ],
    apps: [...appList.openAdBlackListAppIDs]
      .map((id) => ({ id, enable: false }))
      .concat(
        [...appList.openAdWhiteListAppIDs].map((id) => ({ id, enable: true })),
      ),
  },
]);
