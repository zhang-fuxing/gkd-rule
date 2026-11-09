// 来源: Lin-arm/GKD_subscription src/apps/com.chaozh.iReader.dj.ts
// 摘取类别: 开屏广告 / 全屏广告, 同步于 2026-11-09
// 重新导入: pnpm tsx scripts/import-ref.ts --force com.chaozh.iReader.dj
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.chaozh.iReader.dj',
  name: '得间免费小说',
  groups: [
    {
      key: 6,
      name: '全屏广告-红包弹窗',
      desc: 'x掉',
      rules: [
        {
          fastQuery: true,
          activityIds: 'com.zhangyue.iReader.bookshelf.ui.ActivityBookShelf',
          matches: [
            '[text$="红包"]',
            '[vid="Id_withdraw_close"][clickable=true]',
          ],
          snapshotUrls: 'https://i.gkd.li/i/25996310',
        },
      ],
    },
    {
      key: 7,
      name: '全屏广告-书籍推荐',
      desc: 'x掉',
      rules: [
        {
          fastQuery: true,
          activityIds: 'com.zhangyue.iReader.recommend.NovelRecommendActivity',
          matches: [
            '[vid="tv_info"][text$="万人在读"]',
            '@[clickable=true] < [vid="toolbar"]',
          ],
          snapshotUrls: 'https://i.gkd.li/i/25996367',
          exampleUrls: 'https://e.gkd.li/6d933308-c067-46af-8015-0e9178ce3f44',
        },
      ],
    },
  ],
});
