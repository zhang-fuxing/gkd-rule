import type { RawApp, RawAppGroup } from '@gkd-kit/api';
import { defineGkdSubscription } from '@gkd-kit/define';
import { batchImportApps } from '@gkd-kit/tools';
import categories from './categories';
import globalGroups, { OPEN_AD_ORDER } from './globalGroups';

const apps = await batchImportApps(`${import.meta.dirname}/apps`);
const rawApps: RawApp[] = [];
apps.forEach((appConfig) => {
  // 开屏广告类规则组需要在冷启动时优先匹配, 统一提到最前面的 order
  appConfig.groups?.forEach((g: RawAppGroup) => {
    if (g.name.startsWith('开屏广告')) {
      g.order = OPEN_AD_ORDER;
    }
  });
  rawApps.push(appConfig);
});

export default defineGkdSubscription({
  // 订阅唯一 id, 填一个较大的随机数字, 不要与其它订阅重复
  id: 1937284650,
  name: '广告跳过规则',
  version: 0,
  author: 'zhangfx',
  checkUpdateUrl: './gkd.version.json5',
  supportUri: 'https://github.com/zhang-fuxing/gkd-rule',
  categories,
  globalGroups,
  apps: rawApps,
});
