import { defineGkdCategories } from '@gkd-kit/define';

export default defineGkdCategories([
  {
    // 分类按名称前缀捕获规则组, 如「开屏广告-1」「开屏广告-小程序开屏广告」
    key: 1,
    name: '开屏广告',
    enable: true,
  },
  {
    // 弹窗类广告, 随时可能出现, 没有冷启动时间窗口兜底, 误触风险高于开屏
    // 上游默认关闭, 本项目按需开启; 若觉得误触频繁可在 GKD 规则类别里关掉
    key: 2,
    name: '全屏广告',
    enable: true,
  },
]);
