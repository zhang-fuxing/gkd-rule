---
name: gkd-rule-dev
description: 维护 gkd-rule 仓库（个人 GKD 广告跳过订阅）的专用技能。当需要从上游 Lin-arm/GKD_subscription 摘取或同步规则、新增或删除应用、切换规则类别、修复误触、排查 pnpm check/build 失败、调整全局规则黑白名单、或提交发布订阅更新时使用。
agent_created: true
---

# gkd-rule 开发指南

## 概述

本仓库是一个 GKD 订阅，**只保留「开屏广告」和「全屏广告」两类规则**，规则不手写，而是用 `scripts/import-ref.ts` 从上游 [Lin-arm/GKD_subscription](https://github.com/Lin-arm/GKD_subscription) 用 TypeScript AST 精确摘取。

因此绝大多数"改规则"的需求，正确做法是**改脚本参数并重新生成**，而不是编辑 `src/apps/*.ts`（那是生成产物，会被下次 `--all` 覆盖）。

## 不可破坏的约定

这五条是这个仓库能正常工作的前提，改动前先确认理解：

1. **`order: -10` 必须保留**。`src/subscription.ts` 遍历所有 app，把名字以「开屏广告」开头的规则组统一设为 `order = OPEN_AD_ORDER (-10)`。删掉这段，开屏规则会被其他规则阻塞、点了没反应。
2. **子场景组必须带 `ignoreGlobalGroupMatch: true`**。全局组设了 `disableIfAppGroupMatch: '开屏广告'`，语义是「该应用只要有以开屏广告开头的组，全局规则就不匹配它」。因此「开屏广告-小程序开屏广告」这类只覆盖子场景的组若不忽略，会让该 App 的主开屏失去覆盖。脚本已自动注入，不要手工删除。
3. **生成文件是 `--category` 的并集**。用窄类别重跑 `--all`（例如只传 `--category 开屏广告`）会清掉全屏广告规则。改类别时必须一次性传全。
4. **全局规则依赖黑白名单**。`src/globalDefaultApps.ts` 里 366 个黑名单包名是防误触的核心资产（微信、支付宝、美团、各类系统安装器）。删条目等于放开误触。
5. **规则文件头的来源注释不可删**。每个生成文件头三行记录了上游仓库、源文件路径与同步日期，这是《著作权法》第 24 条合理使用「应当指明作者」的要求。

## 常见任务

### 新增 / 同步应用规则

```bash
# 首次: 上游参考仓库必须在项目同级目录
git clone --depth 1 https://github.com/Lin-arm/GKD_subscription.git ../_ref/GKD_subscription

# 全量同步 (推荐的默认动作)
pnpm tsx scripts/import-ref.ts --all

# 只补某几个 (用包名更稳, 中文名可能同名多包, 如「抖音」对应两个包名)
pnpm tsx scripts/import-ref.ts com.taobao.taobao tv.danmaku.bili
```

执行完固定跑 `pnpm check` + `pnpm build`，然后提交 `src/` 与 `dist/`。

### 切换或新增规则类别

1. 改 `src/categories.ts` 注册类别（`key` 不可复用，`enable` 决定默认开关）。
2. 用 `--category` 传**全部**目标类别重新生成：

```bash
pnpm tsx scripts/import-ref.ts --all --category 开屏广告,全屏广告
```

3. 若新类别需要优先级或忽略全局规则，检查 `src/subscription.ts` 的 order 逻辑与脚本的 `addIgnoreGlobalGroupMatch`。

上游可选类别及规模：全屏广告 647、功能类 485、局部广告 378、更新提示 238、权限提示 211、开屏广告 180、分段广告 146、通知提示 72、评价提示 71、其他 67、青少年模式 9。功能类误触风险最高，权限提示可能影响功能（自动拒绝定位），默认不建议开启。

### 排查某 App 没跳过 / 出现误触

1. 先确认该 App 在 `dist/gkd.json5` 里有没有规则：`node -e` 读产物查 `apps` 数组。
2. 没有应用级规则时看是否靠全局规则覆盖：若包名在 `openAdBlackListAppIDs` 内，全局规则对该应用禁用，属于真实空缺。
3. 误触优先"关类别"而非改规则：在 GKD 里关掉「全屏广告」类别，确认问题消失后再定位到具体 App 的规则组。
4. 需要写精准规则时必须拿到快照（`https://i.gkd.li/i/xxxxx`）。截图无效——看不到 `vid` 和 `activityId`。

详细的字段语义、选择器语法与快照流程见 `references/gkd-field-notes.md`。

### 提交与发布

```bash
pnpm check && pnpm build
git add -A && git commit -m "feat: xxx" && git push
```

- 推送触发 `.github/workflows/check_fix_push.yml`：`check → format → lint → build`，然后把 `dist` 提交回仓库，各设备在 GKD 里下拉即可更新。
- 该工作流需要仓库 `Settings → Actions → General → Workflow permissions` 为 **Read and write**。
- `updateDist` 会先做 JSON 深度比较，规则无变化时输出 `No changes`、不涨版本、不产生空提交。看到 `No changes` 是正常结果，不是失败。
- commit 信息必须是 conventional commits 格式（仓库装了 commitlint pre-commit 钩子）。

## 文件地图

| 路径                              | 作用                                                      |
| --------------------------------- | --------------------------------------------------------- |
| `src/subscription.ts`             | 订阅入口；含开屏组 `order = -10` 的遍历逻辑               |
| `src/categories.ts`               | 类别注册（开屏广告 / 全屏广告）                           |
| `src/globalGroups.ts`             | 全局开屏规则，含字节 SDK 无文字按钮的兄弟节点定位         |
| `src/globalDefaultApps.ts`        | 全局规则黑白名单（上游数据，改动需谨慎）                  |
| `src/apps/<包名>.ts`              | **生成产物**，每次 `--all` 覆盖                           |
| `scripts/import-ref.ts`           | 摘取脚本，支持 `--all` `--force` `--exclude` `--category` |
| `scripts/build.ts` / `check.ts`   | 构建与校验入口                                            |
| `dist/gkd.json5`                  | 产物，GKD 读取的文件                                      |
| `.workbuddy/skills/gkd-rule-dev/` | 本技能                                                    |

## 禁止事项

- 不要手工编辑 `src/apps/*.ts`：下次 `--all` 会覆盖，改动会静默丢失。要定制就改脚本或改上游摘取逻辑。
- 不要给本仓库添加 MIT 等开源许可证：规则版权属于上游，本仓库无权授权。
- 不要把 `RAW` 订阅链接之外的内容当作可再分发物：README「规则来源与许可」一节是约束，不是装饰。
- 不要在没有 `dist` 更新的情况下声称发布完成：设备端读的是 `dist/gkd.json5`。

## 参考资源

- `references/gkd-field-notes.md` — GKD 规则字段语义、选择器语法要点、快照抓取与调试流程。
- 上游 API 文档 <https://gkd.li/api>，选择器语法 <https://gkd.li/guide/selector>，节点属性 <https://gkd.li/guide/node>。
