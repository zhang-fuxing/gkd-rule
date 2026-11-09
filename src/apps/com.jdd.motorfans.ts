// 来源: Lin-arm/GKD_subscription src/apps/com.jdd.motorfans.ts
// 摘取类别: 开屏广告 / 全屏广告, 同步于 2026-11-09
// 重新导入: pnpm tsx scripts/import-ref.ts --force com.jdd.motorfans
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.jdd.motorfans',
  name: '摩托范',
  groups: [
    {
      key: 1,
      name: '全屏广告-弹窗广告',
      fastQuery: true,
      rules: [
        {
          key: 0,
          activityIds: [
            '.modules.detail.DetailActivity2',
            '.search.SearchMainActivity',
            '.modules.base.FragmentContainerActivity',
            '.message.ChatDetailActivity',
            '.MTMainActivity',
          ],
          matches: '[vid="ad_content"] >n [vid="iv_close"]',
          snapshotUrls: [
            'https://i.gkd.li/i/12798654',
            'https://i.gkd.li/i/12878843',
            'https://i.gkd.li/i/12913956',
            'https://i.gkd.li/i/13188861',
            'https://i.gkd.li/i/14546613',
          ],
        },
        {
          key: 2,
          activityIds: ['.MTMainActivity', '.modules.detail.DetailActivity2'],
          matches:
            '[vid="iv_right_top_close" || vid="ad_close"][visibleToUser=true]',
          exampleUrls: 'https://e.gkd.li/0f4b8d7d-fda4-43ee-b892-3a85d6dae278',
          snapshotUrls: [
            'https://i.gkd.li/i/12826288', // 无vid旧快照
            'https://i.gkd.li/i/17002101',
            'https://i.gkd.li/i/17078108',
            'https://i.gkd.li/i/20918047',
          ],
        },
      ],
    },
    {
      key: 3,
      name: '全屏广告-文章内容页面弹窗广告',
      activityIds: '.modules.zone.search.ZoneInsideSearchActivity',
      rules: [
        {
          key: 0,
          name: '点x按钮',
          matches: '[vid="iv_close"]',
          snapshotUrls: 'https://i.gkd.li/i/12888087',
        },
      ],
    },
  ],
});
