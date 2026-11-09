// 来源: Lin-arm/GKD_subscription src/apps/com.maxhom.weibu.ts
// 摘取类别: 开屏广告 / 全屏广告, 同步于 2026-11-09
// 重新导入: pnpm tsx scripts/import-ref.ts --force com.maxhom.weibu
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.maxhom.weibu',
  name: '暮瑟',
  groups: [
    {
      key: 4,
      name: '全屏广告-漂流瓶页面提示弹窗',
      rules: [
        {
          key: 0,
          fastQuery: true,
          activityIds: [
            '.tool.home.activity.ToolBottleActivity',
            '.tool.home.activity.NewMainActivity',
          ],
          matches: '[vid="ivClose"]',
          snapshotUrls: [
            'https://i.gkd.li/i/13377649',
            'https://i.gkd.li/i/13457015',
          ],
        },
        {
          key: 1,
          fastQuery: true,
          activityIds: '.tool.home.activity.NewMainActivity',
          matches:
            '@ImageView[childCount=0][visibleToUser=true] < FrameLayout[childCount=1] + FrameLayout >2 [text="立即下载"]',
          snapshotUrls: 'https://i.gkd.li/i/13377611',
        },
      ],
    },
  ],
});
