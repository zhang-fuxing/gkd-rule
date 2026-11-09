// 来源: Lin-arm/GKD_subscription src/apps/cmb.pb.ts
// 摘取类别: 开屏广告 / 全屏广告, 同步于 2026-11-09
// 重新导入: pnpm tsx scripts/import-ref.ts --force cmb.pb
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'cmb.pb',
  name: '招商银行',
  groups: [
    {
      key: 10,
      name: '全屏广告-弹窗广告',
      rules: [
        {
          key: 0,
          activityIds:
            '.app.h5container.webviewcontainer.PBWebContainerActivity',
          matches: '[id="cover-img"] + [text="关闭推荐"]',
          snapshotUrls: 'https://i.gkd.li/i/12706022',
        },
        {
          key: 1,
          fastQuery: true,
          activityIds: 'com.pb.marketing.PopupWindowActivity',
          matches: '[desc^="活动图片"] + [vid="ivCancle"][desc="关闭"]',
          snapshotUrls: 'https://i.gkd.li/i/14208693',
        },
      ],
    },
  ],
});
