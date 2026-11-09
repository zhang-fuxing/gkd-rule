/**
 * 从参考仓库 (默认 ../_ref/GKD_subscription) 中挑选指定类别的规则组,
 * 生成到本项目 src/apps/<包名>.ts
 *
 * 用法:
 *   pnpm tsx scripts/import-ref.ts --all                  # 导入全部应用 (默认类别: 开屏广告,全屏广告)
 *   pnpm tsx scripts/import-ref.ts --all --exclude com.tencent.mm,tv.danmaku.bili
 *   pnpm tsx scripts/import-ref.ts --all --category 开屏广告        # 只取某个类别
 *   pnpm tsx scripts/import-ref.ts com.taobao.taobao      # 只导入指定包名
 *   pnpm tsx scripts/import-ref.ts 淘宝 抖音               # 也可以用中文名
 *   pnpm tsx scripts/import-ref.ts --force 淘宝            # 覆盖已存在的文件
 *
 * 注意: 生成的文件包含 --category 指定类别的并集, 未指定的类别不会写入
 *       所以切换类别时要一次性传全 (如 --category 开屏广告,全屏广告), 否则原有类别会丢失
 *       --all 是同步语义, 会覆盖 src/apps 下已生成的文件 (手工修改会丢失)
 * 环境变量 GKD_REF 可指定参考仓库路径
 */
import fs from 'node:fs';
import path from 'node:path';
import ts from 'typescript';

const rootDir = path.resolve(import.meta.dirname, '..');
const refRoot =
  process.env.GKD_REF ?? path.resolve(rootDir, '../_ref/GKD_subscription');
const refAppsDir = path.join(refRoot, 'src', 'apps');
const outAppsDir = path.join(rootDir, 'src', 'apps');

/** 默认摘取的规则类别, 顺序即分类顺序 */
const DEFAULT_CATEGORIES = ['开屏广告', '全屏广告'];

const argv = process.argv.slice(2);
const force = argv.includes('--force');
const all = argv.includes('--all');

// --exclude 支持 --exclude=a,b 和 --exclude a,b 两种写法, 可传包名或中文名
const excludeInline = argv
  .find((it) => it.startsWith('--exclude='))
  ?.slice('--exclude='.length);
const excludeIdx = argv.indexOf('--exclude');
const excludeValue =
  excludeInline ?? (excludeIdx >= 0 ? (argv[excludeIdx + 1] ?? '') : '');
const excludes = new Set(
  excludeValue
    .split(',')
    .map((it) => it.trim())
    .filter(Boolean),
);

// --category 指定要摘取的类别, 支持逗号分隔
const categoryInline = argv
  .find((it) => it.startsWith('--category='))
  ?.slice('--category='.length);
const categoryIdx = argv.indexOf('--category');
const categoryValue =
  categoryInline ?? (categoryIdx >= 0 ? (argv[categoryIdx + 1] ?? '') : '');
const categories = categoryValue
  ? categoryValue
      .split(',')
      .map((it) => it.trim())
      .filter(Boolean)
  : DEFAULT_CATEGORIES;

const targets = argv.filter(
  (it, i) =>
    !it.startsWith('--') &&
    !(excludeIdx >= 0 && i === excludeIdx + 1) &&
    !(categoryIdx >= 0 && i === categoryIdx + 1),
);

if (!fs.existsSync(refAppsDir)) {
  console.error(`[ERROR] 参考仓库不存在: ${refAppsDir}`);
  console.error(
    '        先执行: git clone --depth 1 https://github.com/Lin-arm/GKD_subscription.git ../_ref/GKD_subscription',
  );
  process.exit(1);
}
if (!all && targets.length === 0) {
  console.error('[ERROR] 请传入应用包名/中文名, 或用 --all 导入全部应用');
  process.exit(1);
}

/** 组名是否属于要摘取的类别 (按前缀匹配, 与 GKD 的分类捕获规则一致) */
function matchCategory(groupName: string) {
  return categories.some((c) => groupName.startsWith(c));
}

/** 从对象字面量中取属性名的赋值节点 */
function getProp(obj: ts.ObjectLiteralExpression, name: string) {
  for (const prop of obj.properties) {
    if (
      ts.isPropertyAssignment(prop) &&
      ts.isIdentifier(prop.name) &&
      prop.name.text === name
    ) {
      return prop.initializer;
    }
  }
  return undefined;
}

/** 取 defineGkdApp({...}) 的参数对象 */
function getAppObject(
  sourceFile: ts.SourceFile,
): ts.ObjectLiteralExpression | undefined {
  let found: ts.ObjectLiteralExpression | undefined;
  const visit = (node: ts.Node) => {
    if (found) return;
    if (
      ts.isCallExpression(node) &&
      ts.isIdentifier(node.expression) &&
      node.expression.text === 'defineGkdApp'
    ) {
      const arg = node.arguments[0];
      if (arg && ts.isObjectLiteralExpression(arg)) {
        found = arg;
        return;
      }
    }
    ts.forEachChild(node, visit);
  };
  visit(sourceFile);
  return found;
}

type ParsedApp = {
  file: string;
  id: string;
  name: string;
  groups: { name: string; text: string }[];
  /** 该文件里所有规则组名称, 用于提示 */
  allGroupNames: string[];
};

function parseAppFile(file: string): ParsedApp | undefined {
  const source = fs.readFileSync(file, 'utf-8');
  const sourceFile = ts.createSourceFile(
    file,
    source,
    ts.ScriptTarget.Latest,
    true,
  );
  const appObj = getAppObject(sourceFile);
  if (!appObj) return undefined;

  const idNode = getProp(appObj, 'id');
  const nameNode = getProp(appObj, 'name');
  const groupsNode = getProp(appObj, 'groups');
  if (!ts.isStringLiteral(idNode as ts.Node)) return undefined;

  const id = (idNode as ts.StringLiteral).text;
  const name =
    nameNode && ts.isStringLiteral(nameNode as ts.Node)
      ? (nameNode as ts.StringLiteral).text
      : id;

  const groupTexts: { name: string; text: string }[] = [];
  const allGroupNames: string[] = [];

  if (groupsNode && ts.isArrayLiteralExpression(groupsNode)) {
    for (const el of groupsNode.elements) {
      if (!ts.isObjectLiteralExpression(el)) continue;
      const gNameNode = getProp(el, 'name');
      const gName =
        gNameNode && ts.isStringLiteral(gNameNode as ts.Node)
          ? (gNameNode as ts.StringLiteral).text
          : '';
      if (gName) allGroupNames.push(gName);
      if (matchCategory(gName)) {
        groupTexts.push({
          name: gName,
          text: source.slice(el.getStart(sourceFile), el.getEnd()),
        });
      }
    }
  }
  return { file, id, name, groups: groupTexts, allGroupNames };
}

/** 在参考仓库中按中文名查找应用文件, 同一名称可能有多个包名 (如 抖音), 全部返回 */
function findFilesByName(name: string): string[] {
  const files: string[] = [];
  for (const fileName of fs.readdirSync(refAppsDir)) {
    if (!fileName.endsWith('.ts')) continue;
    const full = path.join(refAppsDir, fileName);
    if (parseAppFile(full)?.name === name) files.push(full);
  }
  return files;
}

/** 原文件的缩进基准是 4 空格, 首行需要补齐缩进, 其余行保持原样 */
function reindent(text: string) {
  return text
    .split('\n')
    .map((line, i) => (i === 0 ? `    ${line}` : line))
    .join('\n');
}

/**
 * 名字不是精确的「开屏广告」而是「开屏广告-xxx」时, 说明它只覆盖某个子场景
 * (如 小程序开屏、用户协议), 不能让它顶掉全局开屏规则
 * 否则会触发 disableIfAppGroupMatch, 导致该应用主场景的开屏广告失去覆盖
 * 其它类别的组与全局开屏规则无关, 原样返回
 */
function addIgnoreGlobalGroupMatch(text: string, groupName: string) {
  if (!groupName.startsWith('开屏广告')) return text;
  if (groupName === '开屏广告') return text;
  if (text.includes('ignoreGlobalGroupMatch')) return text;
  // 对象字面量以 '{' 开头, 紧随其后插入属性
  return `{\n      ignoreGlobalGroupMatch: true,${text.slice(1)}`;
}

const now = new Date().toISOString().slice(0, 10);
let imported = 0;
let overwritten = 0;
let excludedCount = 0;
let manualKept = 0;
const problems: string[] = [];

/** 手工维护标记: 文件头部含此串时, --all 不会覆盖它 */
const MANUAL_MARK = '@manual';

/** 把解析好的应用写成本项目的规则文件 */
function writeApp(parsed: ParsedApp, opts: { force: boolean; label?: string }) {
  const outFile = path.join(outAppsDir, `${parsed.id}.ts`);
  const existed = fs.existsSync(outFile);
  if (existed && !opts.force) {
    problems.push(
      `${opts.label ?? parsed.id} (${parsed.name}): ${parsed.id}.ts 已存在, 加 --force 覆盖`,
    );
    return;
  }
  // --all 会传 force, 但带 @manual 标记的文件是手工维护的, 默认跳过
  if (existed && opts.force) {
    const old = fs.readFileSync(outFile, 'utf-8');
    if (old.includes(MANUAL_MARK)) {
      manualKept += 1;
      console.log(
        `[SKIP] ${parsed.id} (${parsed.name}): 本地手工维护 (${MANUAL_MARK}), 未覆盖`,
      );
      return;
    }
  }

  const content = `// 来源: Lin-arm/GKD_subscription src/apps/${parsed.id}.ts
// 摘取类别: ${categories.join(' / ')}, 同步于 ${now}
// 重新导入: pnpm tsx scripts/import-ref.ts --force ${parsed.id}
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: '${parsed.id}',
  name: '${parsed.name}',
  groups: [
${parsed.groups
  .map((g) => reindent(addIgnoreGlobalGroupMatch(g.text, g.name)))
  .join(',\n')},
  ],
});
`;
  fs.writeFileSync(outFile, content);
  if (existed) {
    overwritten += 1;
  } else {
    imported += 1;
    console.log(
      `[OK] ${parsed.id} (${parsed.name}), ${parsed.groups.length} 个规则组`,
    );
  }
}

if (all) {
  // 全量同步: 扫描参考仓库所有应用文件, 只挑出带开屏规则组的
  const files = fs.readdirSync(refAppsDir).filter((it) => it.endsWith('.ts'));
  console.log(`[INFO] 扫描 ${files.length} 个参考文件...`);
  for (const fileName of files) {
    const parsed = parseAppFile(path.join(refAppsDir, fileName));
    if (!parsed) {
      problems.push(`${fileName}: 解析 defineGkdApp 失败`);
      continue;
    }
    if (parsed.groups.length === 0) continue;
    if (excludes.has(parsed.id) || excludes.has(parsed.name)) {
      excludedCount += 1;
      continue;
    }
    // --all 是同步语义, 默认覆盖已生成的文件
    writeApp(parsed, { force: true });
  }
} else {
  for (const target of targets) {
    const looksLikePkg = target.includes('.');
    const candidates = looksLikePkg
      ? [path.join(refAppsDir, `${target}.ts`)].filter((it) =>
          fs.existsSync(it),
        )
      : findFilesByName(target);

    if (candidates.length === 0) {
      problems.push(`${target}: 参考仓库中找不到对应应用`);
      continue;
    }
    if (candidates.length > 1) {
      const ids = candidates.map((it) => path.basename(it, '.ts')).join(' / ');
      console.log(
        `[INFO] ${target} 对应多个包名: ${ids}, 优先选择含目标类别的那个`,
      );
    }

    // 同名多个包名时, 优先选真正带开屏规则的那个
    const parsedList = candidates
      .map((it) => parseAppFile(it))
      .filter((it): it is ParsedApp => Boolean(it));
    const parsed =
      parsedList.find((it) => it.groups.length > 0) ?? parsedList[0];

    if (!parsed) {
      problems.push(`${target}: 解析 defineGkdApp 失败`);
      continue;
    }
    if (parsed.groups.length === 0) {
      problems.push(
        `${target} (${parsed.name}): 无「${categories.join('/')}」规则组, 现有分组: ${parsed.allGroupNames.join(' / ') || '(空)'}`,
      );
      continue;
    }
    writeApp(parsed, { force, label: target });
  }
}

if (problems.length > 0) {
  console.log('\n[WARN]');
  for (const p of problems) console.log(`  - ${p}`);
}
console.log(
  `\n完成: 新增 ${imported} 个, 覆盖 ${overwritten} 个, 手工保留 ${manualKept} 个, 排除 ${excludedCount} 个, 跳过/失败 ${problems.length} 个`,
);
