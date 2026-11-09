# 广告跳过规则

个人自用的 [GKD](https://gkd.li) 订阅，跳过手机 App 的**开屏广告**和**全屏广告**。

- 订阅 id：`1937284650`（唯一，不会与其他订阅冲突）
- 规则类别：`开屏广告`（180 组）、`全屏广告`（647 组），两类均默认开启
- 规模：638 个应用、827 个规则组
- 构建产物：`dist/gkd.json5`，约 530 KB
- 不包含：更新提示、评价提示、权限提示、局部广告、分段广告、青少年模式等其它类别
- 开发方式：**AI 辅助开发**，范围与边界见「[AI 参与开发](#ai-参与开发)」

## 订阅地址

| 源                       | 地址                                                                          |
| ------------------------ | ----------------------------------------------------------------------------- |
| GitHub raw               | `https://raw.githubusercontent.com/zhang-fuxing/gkd-rule/main/dist/gkd.json5` |
| jsDelivr（国内相对可用） | `https://cdn.jsdelivr.net/gh/zhang-fuxing/gkd-rule@main/dist/gkd.json5`       |

在 GKD 的「订阅」页面点右下角 `+`，粘贴上面的地址即可导入。

> `raw.githubusercontent.com` 在大陆经常无法访问；jsDelivr 有缓存，更新可能滞后几小时。

## 多设备同步

导入一次之后，在 GKD 订阅页面**下拉即可检测更新**，所有设备都会拿到同一份规则。

同步链路是这样闭合的：

```
本地改 src/ → git push → GitHub Actions 校验+格式化+重新构建 dist → 提交回仓库
                                                                    ↓
                                                        各设备 GKD 下拉检测更新
```

**前置条件（只需设置一次）**：仓库 `Settings → Actions → General → Workflow permissions` 选择 **Read and write permissions**。否则工作流无法把构建产物提交回仓库，`dist` 就不会更新。

## 验证与排错

- **看规则有没有生效**：GKD 首页的「触发记录」会列出每次点击来自哪条规则、点了什么节点。刷新后仍无记录，说明规则没匹配上。
- **点错了（误触）**：先在「规则类别」里关掉对应类别（例如只关「全屏广告」），确认问题消失后，再把具体那个 App 的规则组单独禁用。误触的根因通常是规则选择器过于宽泛，需要补约束。
- **某个 App 没跳过**：说明它的广告按钮没有文字特征，全局规则够不着。这种情况下截图没用（看不到 `vid` 和 `activityId`），需要在广告出现时用 GKD 悬浮窗抓一次快照，拿到 `https://i.gkd.li/i/xxxxx` 链接后才能写准规则。

**完整操作流程见 [docs/how-to-add-rule.md](./docs/how-to-add-rule.md)**：从开启悬浮窗、抓快照、上传拿链接，到在审查工具里定位节点、写规则、加进项目、校验发布，以及一张排错对照表。

## 目录结构

```
src/
  subscription.ts        订阅入口（id / 名称 / 作者 / 分类 / 全局规则）
  categories.ts          规则类别：开屏广告、全屏广告
  globalGroups.ts        全局开屏规则（含字节 SDK 无文字按钮的处理）
  globalDefaultApps.ts   全局规则黑白名单数据
  apps/<包名>.ts         各应用的规则（开屏广告 + 全屏广告）
scripts/
  build.ts               构建 dist
  check.ts               类型与规则校验
  import-ref.ts          从参考仓库按类别摘取规则组
docs/
  how-to-add-rule.md     抓快照 → 定位节点 → 写规则 → 发布的完整流程
dist/
  gkd.json5              构建产物，GKD 实际读取的文件
  gkd.version.json5      版本检查文件
```

## 维护

环境要求：Node.js >= 22、pnpm >= 9。

```bash
pnpm install       # 安装依赖
pnpm check         # 类型检查 + 规则校验（选择器语法也会校验）
pnpm build         # 构建到 dist/；规则有变化时版本号自动 +1，无变化输出 No changes
pnpm format        # prettier 格式化
```

### 规则从哪来 / 怎么加

规则全部来自参考仓库 [Lin-arm/GKD_subscription](https://github.com/Lin-arm/GKD_subscription)，首次需要浅克隆到项目同级目录：

```bash
git clone --depth 1 https://github.com/Lin-arm/GKD_subscription.git ../_ref/GKD_subscription
```

**全量同步**（把上游所有带目标类别的应用一次性抽过来，会覆盖已生成的文件）：

```bash
pnpm tsx scripts/import-ref.ts --all
pnpm tsx scripts/import-ref.ts --all --exclude com.smile.gifmaker,com.tencent.mm   # 排除指定应用
pnpm tsx scripts/import-ref.ts --all --category 开屏广告,全屏广告                  # 指定类别(默认就是这两个)
pnpm format      # 必须跑: 脚本输出的是未格式化源码, 不格式化会产生大量无意义的格式差异
```

**只挑单个应用**（**推荐用包名**，中文名可能存在同名多包的情况，例如「抖音」同时对应 `com.ss.android.ugc.aweme` 和 `com.ss.android.ugc.aweme.mobile`）：

```bash
pnpm tsx scripts/import-ref.ts com.taobao.taobao com.ss.android.ugc.aweme
pnpm tsx scripts/import-ref.ts 淘宝 京东          # 也可以用中文名
pnpm tsx scripts/import-ref.ts --force 淘宝        # 覆盖已存在的文件
```

脚本用 TypeScript AST 解析参考仓库的 `defineGkdApp({...})`，按 `--category`（默认 `开屏广告,全屏广告`）挑出规则组，重新生成本项目的 `src/apps/<包名>.ts`，并在文件头写入来源信息。

> **注意**：生成文件是 `--category` 的并集。如果把类别改窄（例如只传 `--category 开屏广告`）再跑 `--all`，原有全屏广告规则会被清掉。改类别时一次性传全。

> **手工维护**：少数应用需要在摘取内容之上做本地调整（例如酷狗音乐补了「只有 `text` 没有 `desc`」的跳过按钮，并允许重试一次）。这类文件头部带 `@manual` 标记，`--all` 会自动跳过、不覆盖，输出里打印 `[SKIP] ... 本地手工维护`。要放弃本地调整、恢复上游版本：删掉该文件后重跑 `--all`。

### 同步上游更新

```bash
git -C ../_ref/GKD_subscription pull
pnpm tsx scripts/import-ref.ts --all      # 全量重新抽取
pnpm check && git push
```

参考仓库路径可用环境变量 `GKD_REF` 覆盖。

### 版本与发布

两个工作流职责不同，别搞混：

| 工作流           | 触发方式    | 作用                                                           |
| ---------------- | ----------- | -------------------------------------------------------------- |
| `check_fix_push` | 每次 `push` | 校验 → 格式化 → 构建 → 把 `dist` 提交回仓库，**日常同步靠它**  |
| `build_release`  | 手动触发    | 构建 → 提交 → 推送 → 打 tag + 建 Release，**只用于留版本记录** |

`build_release` 会先检查构建后 `dist` 是否真的有变化。内容没变（`updateDist` 输出 `No changes`）时，它会输出一条「无变更」提示并跳过提交与发布，而不是让 `git commit` 失败后被 `continue-on-error` 掩盖成一次"绿色空跑"。看到这条提示说明本来就没有新版本可发。

### 三个容易踩的坑

1. **`order: -10` 不能丢**。`src/subscription.ts` 会遍历所有 app，把名字以「开屏广告」开头的规则组统一提到最前匹配。去掉之后，开了其它规则时开屏规则可能被阻塞、点了没反应。全屏广告组保持默认 order（0），它没有冷启动时间窗口，靠 `activityIds` 保证精准。
2. **子场景规则组必须带 `ignoreGlobalGroupMatch: true`**。全局规则组设了 `disableIfAppGroupMatch: '开屏广告'`，含义是：该应用只要有以「开屏广告」开头的规则组，全局规则就不再匹配它。而像「开屏广告-小程序开屏广告」这种只覆盖子场景的组，如果不加 `ignoreGlobalGroupMatch`，会让该 App 主场景的开屏广告失去覆盖。`import-ref.ts` 已自动处理这一点。
3. **全屏广告误触风险高于开屏**。开屏广告只在冷启动后 10 秒内匹配，有天然的 `matchTime` 兜底；全屏广告随时可能弹出，只能依赖 `activityIds` 和精确选择器。如果遇到误触（点了不该点的按钮），在 GKD 里把「全屏广告」这个类别关掉即可，不影响开屏广告。

## 规则来源与许可

**使用前请先读这一节。**

- 本项目的绝大多数选择器、`activityIds` 与快照注释摘取自 [Lin-arm/GKD_subscription](https://github.com/Lin-arm/GKD_subscription)，少量由本项目补充。
- 该仓库**没有 LICENSE 文件**，并在 README 中声明「仅供学习交流使用」「禁止在国内平台传播」。按著作权法，未声明许可证即视为保留所有权利。
- 因此本仓库**仅用于本人多设备同步**，不商用、不主动向任何平台分发。仓库公开可见的唯一目的是让手机上的 GKD 能通过 raw 链接拉取规则（私有仓库的 raw 链接需要 token，GKD 无法获取）。
- 每个摘取生成的规则文件头部都保留了来源仓库、源文件路径与同步日期。这是《著作权法》第 24 条合理使用中「应当指明作者」的要求，**请勿删除**。
- 本仓库**不对这些规则主张任何许可**，也不建议他人转载使用。如需在公开项目中使用，请向原作者取得授权。
- 若原作者提出异议，会立即删除相关规则。

## AI 参与开发

本项目在开发过程中大量使用 AI 辅助，在此明确范围与责任边界。

**AI 完成的部分**

- `scripts/import-ref.ts`：基于 TypeScript AST 的规则抽取脚本
- `src/apps/*.ts`、`src/globalGroups.ts`、`src/globalDefaultApps.ts`：从上游批量摘取生成，**不是逐条手写**
- `README.md`、分类注册、CI 调整（在 `check_fix_push.yml` 中加入自动构建）
- 规则数量统计、误触风险分析、类别取舍建议

**人工负责的部分**

- 上游规则的原始编写与快照验证，由 [Lin-arm/GKD_subscription](https://github.com/Lin-arm/GKD_subscription) 的作者与贡献者完成
- 需求决策：需要哪些类别、误触容忍度、是否公开发布
- **实机验证**：AI 无法访问手机，规则是否真的点中了跳过按钮，只能靠实测反馈确认

**AI 不承担的部分**

- AI 生成的规则可能存在误判或误点。无障碍点击作用于真实设备，风险由使用者自行判断与承担。
- 版权归属与许可边界见上一节，AI 不改变这些约束。

### 配套开发技能

仓库内附带了项目级 Skill：`.workbuddy/skills/gkd-rule-dev/`，支持 Skill 的 AI 工具（如 WorkBuddy）在后续维护时可自动加载，内容包括：

- 不可破坏的五条约定：`order: -10`、`ignoreGlobalGroupMatch`、类别并集语义、黑白名单、来源注释
- 常见任务工作流：新增应用、切换类别、排查误触、提交发布
- `references/gkd-field-notes.md`：GKD 字段语义、选择器语法要点、快照抓取与排错流程

## 免责声明

规则通过 Android 无障碍服务模拟点击，存在误触的可能性（尤其是依赖节点尺寸判定位置的规则）。请自行评估风险，因使用本订阅造成的任何问题由使用者自行承担。
