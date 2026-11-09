// 来源: Lin-arm/GKD_subscription src/apps/net.csdn.csdnplus.ts
// 摘取类别: 开屏广告 / 全屏广告, 同步于 2026-11-09
// 重新导入: pnpm tsx scripts/import-ref.ts --force net.csdn.csdnplus
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'net.csdn.csdnplus',
  name: 'CSDN',
  groups: [
    {
      key: 4,
      name: '全屏广告-弹窗广告',
      desc: '点击【x】',
      rules: [
        {
          fastQuery: true,
          activityIds: '.activity.MainActivity',
          matches:
            'LinearLayout[childCount=2] > [vid="img_cancel"][clickable=true][visibleToUser=true]',
          snapshotUrls: 'https://i.gkd.li/i/25171470',
          exampleUrls: 'https://e.gkd.li/3debb965-7773-4160-b172-15dc052ac6c9',
        },
      ],
    },
  ],
});
