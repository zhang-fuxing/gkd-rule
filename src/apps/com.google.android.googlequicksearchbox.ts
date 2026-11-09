// 来源: Lin-arm/GKD_subscription src/apps/com.google.android.googlequicksearchbox.ts
// 摘取类别: 开屏广告 / 全屏广告, 同步于 2026-11-09
// 重新导入: pnpm tsx scripts/import-ref.ts --force com.google.android.googlequicksearchbox
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.google.android.googlequicksearchbox',
  name: 'Google',
  groups: [
    {
      key: 1,
      name: '全屏广告-Gemini-个性化Tip',
      desc: '试用新功能举例对话(浪费Token)',
      fastQuery: true,
      matchTime: 16000,
      actionMaximum: 2,
      resetMatch: 'app',
      rules: [
        {
          key: 0,
          activityIds:
            'com.google.android.apps.search.assistant.surfaces.voice.robin.main.MainActivity',
          matches:
            '[text^="Gemini 现在可以根据"] <<4 [vid*="main_scroll_view"] + [vid*="_bottom_buttons_container"] > [text="关闭"][clickable=true][visibleToUser=true]',
          exampleUrls: 'https://e.gkd.li/71341a5d-d722-47a0-a6d9-5fa65d550791',
          snapshotUrls: 'https://i.gkd.li/i/25823279',
        },
      ],
    },
  ],
});
