// 来源: Lin-arm/GKD_subscription src/apps/com.miHoYo.hkrpg.ts
// 摘取类别: 开屏广告 / 全屏广告, 同步于 2026-11-09
// 重新导入: pnpm tsx scripts/import-ref.ts --force com.miHoYo.hkrpg
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.miHoYo.hkrpg',
  name: '崩坏：星穹铁道',
  groups: [
    {
      ignoreGlobalGroupMatch: true,
      key: 0,
      name: '开屏广告-用户协议',
      desc: '不接受怎么玩?', // 每次更新都需要重新同意
      fastQuery: true,
      matchTime: 16000,
      actionMaximum: 1,
      resetMatch: 'app',
      priorityTime: 16000,
      rules: [
        {
          activityIds: 'com.combosdk.module.ua.ProtocolActivity',
          matches:
            '[text^="用户协议"] +2 LinearLayout > [text="拒绝"] + [text="接受"][clickable=true][visibleToUser=true]',
          exampleUrls: 'https://e.gkd.li/c5ce0381-bef9-4b0b-90e4-786166d3afc0',
          snapshotUrls: 'https://i.gkd.li/i/25823587',
        },
      ],
    },
  ],
});
