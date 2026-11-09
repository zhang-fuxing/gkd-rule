# GKD 规则字段与选择器速查

## 规则组字段

| 字段                  | 说明                                                                                         |
| --------------------- | -------------------------------------------------------------------------------------------- |
| `key`                 | 规则组在应用内的唯一标识，客户端用它记录启用状态，**设置后不可更改**                         |
| `name`                | 组名。GKD 的分类按**名称前缀**捕获规则组，所以 `全屏广告-弹窗广告` 会归入 `全屏广告` 类别    |
| `enable`              | 默认是否启用，缺省 `true`                                                                    |
| `order`               | 匹配顺序，数字越小越先匹配；本项目开屏组统一为 `-10`                                         |
| `fastQuery`           | 只对特定格式的选择器加速；上游规则多用，改动选择器时要确认仍符合快速查询格式                 |
| `matchTime`           | 参与匹配的时间窗口（毫秒）。开屏广告靠它兜底：`10000` 表示进 App 后只在前 10 秒内匹配        |
| `actionMaximum`       | 最大执行次数，达到即休眠；配合 `resetMatch` 使用                                             |
| `resetMatch`          | 何时重置 `matchTime`/`actionMaximum`：`'activity'`（默认）/`'match'`/`'app'`。开屏用 `'app'` |
| `forcedTime`          | 在该时间内强制主动查询节点，用于 Flutter/WebView 这类不触发无障碍事件的界面                  |
| `priorityTime`        | 在该时间内作为"优先级规则"插队匹配，避免被其他规则阻塞；开屏用 `10000`                       |
| `actionCd`            | 冷却时间，默认 1000ms                                                                        |
| `actionDelay`         | 查到节点后延迟再确认执行                                                                     |
| `snapshotUrls`        | 规则对应的界面快照链接，排错时先看这些                                                       |
| `excludeSnapshotUrls` | 该规则**不应该**匹配的界面快照，用于记录误触样本                                             |

## 应用规则额外字段

- `activityIds`：界面 ID 前缀匹配，`'.MainActivity'` 等价于 `<包名>.MainActivity`。省略表示该应用所有界面。
- `excludeActivityIds`：优先级高于 `activityIds`。
- `versionCode` / `versionName`：按版本限定，用于"某版本改版后规则失效"的场景。

## 全局规则额外字段

- `matchAnyApp`：默认 `true`。
- `matchSystemApp`：默认 `false`，系统应用不匹配。
- `matchLauncher`：默认 `false`。
- `apps`：`[{ id, enable }]` 形式的应用级开关，即黑白名单。
- 全局规则组还有 `disableIfAppGroupMatch`：该应用存在指定前缀的应用级组时，整个全局组退出。

## 规则字段

| 字段                | 说明                                                                           |
| ------------------- | ------------------------------------------------------------------------------ |
| `matches`           | 一个或多个选择器，全部命中时点击最后一个选择器的目标节点                       |
| `anyMatches`        | 任一命中即点击该节点                                                           |
| `excludeMatches`    | 任一命中则整条规则不生效（防误触主力）                                         |
| `excludeAllMatches` | 全部命中才使规则失效                                                           |
| `preKeys`           | 要求同组某个规则刚刚执行过，用于"关闭 → 选原因 → 确认"的串联                   |
| `action`            | `click`（默认）/`clickNode`/`clickCenter`/`back`/`longClick`/`swipe`/`none`    |
| `position`          | 坐标点击，支持相对表达式如 `{ left: 'width * 0.2490', top: 'width * 0.0435' }` |

## 选择器要点

**节点属性**：`id` `vid` `name` `text` `desc` `clickable` `focusable` `checkable` `checked` `editable` `longClickable` `visibleToUser` `left` `top` `right` `bottom` `width` `height` `childCount` `index` `depth` `parent` `getChild(n)`，字符串有 `text.length`。

**操作符**：`=` `!=` `>` `>=` `<` `<=` `^=`（开头）`!^=` `*=`（包含）`!*=` `$=`（结尾）`!$=` `~=`（正则）`!~=`。

**关系选择器**：`+` 前置兄弟、`-` 后置兄弟、`>` 祖先、`<` 直接子节点、`<<n` 第 n 代子孙、`->` 回退查询。

**`@` 指定目标节点**：`@[vid*="close"] > [text*="跳过"]` 表示点击父节点而不是文字节点——文字节点常不可点击，必须把点击目标换成可点击的容器。

**没有 `deviceWidth`**：`global` 只能用节点自身属性，位置约束只能写绝对像素（`right>900`），换分辨率即失效。因此优先用 `text` / `width` / `height` / `clickable` / `childCount` 这类与分辨率无关的条件。

**`fastQuery` 限制**：开启后只支持特定格式的选择器；若新写的选择器不生效，先怀疑这一点。

## 快照与调试流程

1. 抓快照：GKD `设置 → 高级设置 → 悬浮窗服务`（或状态栏快捷开关 `捕获快照`），在广告出现的界面点一下。
2. 上传：GKD 内需要先填 GitHub Cookie（`高级设置 → 快照 → Github Cookie`），上传后得到 `https://i.gkd.li/i/xxxxx`。
3. 调试：把链接里的 `i.gkd.li/i/xxx` 在网页审查工具打开，用搜索框实时验证选择器，命中后可直接复制成规则。
4. 排错：在 GKD 首页「触发记录」查看某次点击由哪条规则触发、点了哪个节点；没有记录说明规则根本没匹配上。

## 判断"没跳过"的根因

| 现象             | 常见原因                                                               |
| ---------------- | ---------------------------------------------------------------------- |
| 完全无触发记录   | 规则未覆盖该 App，或 `activityIds` 与实际不符                          |
| 有记录但广告仍在 | 点到了不可点击的节点，需用 `@` 换成容器，或改 `action: 'clickCenter'`  |
| 偶尔跳过偶尔不跳 | `matchTime` 太短（广告出现晚于窗口），或节点异步渲染需要 `actionDelay` |
| 点错位置         | 选择器过宽，需补 `excludeMatches` 或加上下文关系约束                   |
