# 项目规范与配置指南

本文档总结了项目的所有规范化配置，确保团队协作的一致性和代码质量。

## 📋 目录

1. [代码质量工具](#代码质量工具)
2. [Git 规范](#git 规范)
3. [项目结构](#项目结构)
4. [开发工作流](#开发工作流)
5. [最佳实践](#最佳实践)

---

## 代码质量工具

### 1. ESLint

**配置文件**: `eslint.config.js`

**功能**:
- TypeScript 类型安全 linting
- React Hooks 规则检查
- 代码风格统一
- 未使用变量检测

**命令**:
```bash
npm run lint        # 检查代码
npm run lint:fix    # 自动修复
```

**规则亮点**:
- `@typescript-eslint/consistent-type-imports`: 强制使用 `import type`
- `@typescript-eslint/no-explicit-any`: 警告使用 `any` 类型
- `no-console`: 限制 console 使用（允许 warn/error）
- `prefer-const`: 优先使用 const

### 2. Prettier

**配置文件**: `.prettierrc`

**配置**:
```json
{
  "semi": false,
  "singleQuote": true,
  "tabWidth": 2,
  "useTabs": false,
  "trailingComma": "es5",
  "printWidth": 100,
  "endOfLine": "lf"
}
```

**命令**:
```bash
npm run format        # 格式化代码
npm run format:check  # 检查格式
```

### 3. TypeScript

**配置文件**: `tsconfig.json`

**特性**:
- 严格模式 (`strict: true`)
- 路径别名 (`@/*` → `src/*`)
- 未使用变量检查
- 无 fallthrough case

### 4. EditorConfig

**配置文件**: `.editorconfig`

**作用**: 统一不同编辑器的代码风格（缩进、换行、编码等）

---

## Git 规范

### 1. Commit Message 规范

**工具**: Commitlint

**配置文件**: `.commitlintrc.json`

**格式**:
```
<type>(<scope>): <subject>
```

**Type 类型**:
| 类型 | 说明 |
|------|------|
| feat | 新功能 |
| fix | Bug 修复 |
| docs | 文档变更 |
| style | 代码格式（不影响代码运行） |
| refactor | 重构（既非新功能也非修复 bug） |
| perf | 性能优化 |
| test | 测试相关 |
| build | 构建系统或外部依赖 |
| ci | CI/CD 配置 |
| chore | 其他不修改源代码的改动 |
| revert | 回滚 |

**示例**:
```bash
feat(counter): add reset functionality
fix(api): handle network errors properly
docs(readme): update installation instructions
```

**工具**:
```bash
# 安装后使用
npm run commit  # 如果有 commitizen 配置
```

### 2. Git Hooks

**工具**: Husky + lint-staged

**配置文件**: `.husky/`, `package.json`

**Hooks**:

#### pre-commit
在提交前自动执行：
```bash
lint-staged
```

**lint-staged 配置**:
```json
{
  "*.{ts,tsx}": ["eslint --fix", "prettier --write"],
  "*.{js,jsx}": ["eslint --fix", "prettier --write"],
  "*.{css,scss,md,json}": ["prettier --write"]
}
```

#### commit-msg
在提交信息提交前验证：
```bash
commitlint --edit $1
```

### 3. .gitignore

**忽略文件**:
- `node_modules/`
- `dist/`, `build/`
- `.env*` 环境变量文件
- `.vscode/`, `.idea/` 编辑器配置
- `*.log` 日志文件
- 缓存文件

---

## 项目结构

```
src/
├── app/                    # 应用层
│   ├── providers/          # 全局 Provider
│   └── router/             # 路由配置
│
├── pages/                  # 页面层
│   ├── home/
│   └── about/
│
├── features/               # 业务功能模块
│   ├── counter/
│   ├── todo/
│   └── api-example/
│
├── entities/               # 领域实体
│   ├── user/
│   └── post/
│
├── shared/                 # 通用能力
│   ├── components/
│   ├── hooks/
│   ├── utils/
│   ├── constants/
│   ├── types/
│   └── ui/                 # UI 组件库
│
├── api/                    # API 层
│   ├── client/
│   └── modules/
│
├── config/                 # 配置文件
├── test/                   # 测试配置
└── assets/                 # 静态资源
```

**依赖规则**:
- 下层不依赖上层
- `app → pages → features → entities → shared`

---

## 开发工作流

### 1. 初始化

```bash
# 安装依赖
npm install

# 启动开发服务器
npm run dev
```

### 2. 开发流程

```bash
# 1. 创建新分支
git checkout -b feat/your-feature

# 2. 编码（自动 lint 和 format）
# 保存文件时，pre-commit hook 会自动执行

# 3. 提交代码
git add .
git commit -m "feat: your commit message"
# commit-msg hook 会验证格式

# 4. 测试
npm run test
npm run test:watch

# 5. 检查代码质量
npm run lint
npm run format:check
```

### 3. 构建发布

```bash
# 构建生产版本
npm run build

# 预览生产构建
npm run preview

# 查看测试覆盖率
npm run test:coverage
```

### 4. 测试 UI

```bash
# 打开 Vitest UI
npm run test:ui
```

---

## 最佳实践

### 1. 代码规范

✅ **推荐**:
```typescript
// 使用 type 导入
import type { User } from '@/entities/user'

// 使用 const 代替 let
const count = 0

// 使用明确的类型
function debounce<T extends (...args: unknown[]) => unknown>(
  func: T,
  wait: number
)

// 忽略不需要的变量
catch (_error) { ... }
```

❌ **避免**:
```typescript
// 不使用 any
function process(data: any) { ... }

// 不使用 var
var temp = 123

// 不必要的 console.log
console.log('debug')

// 未使用的导入
import { UnusedComponent } from './UnusedComponent'
```

### 2. 组件命名

- 文件命名：`PascalCase.tsx` (如 `Counter.tsx`)
- 组件导出：使用命名导出
- 索引文件：统一出口 (`index.ts`)

### 3. 测试规范

```typescript
import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'

describe('ComponentName', () => {
  it('should do something', () => {
    // 测试代码
  })
})
```

### 4. 目录约定

- 组件放在同名目录下
- 使用 `index.ts` 统一导出
- 测试文件与被测试文件放在一起 (`Component.test.tsx`)

---

## 快速参考

### 常用命令

```bash
# 开发
npm run dev              # 启动开发服务器

# 代码质量
npm run lint             # ESLint 检查
npm run lint:fix         # ESLint 自动修复
npm run format           # Prettier 格式化
npm run format:check     # 检查格式

# 测试
npm run test             # 运行测试
npm run test:watch       # 监视模式
npm run test:coverage    # 测试覆盖率
npm run test:ui          # Vitest UI

# 构建
npm run build            # 生产构建
npm run preview          # 预览构建
```

### Git 命令

```bash
# 创建功能分支
git checkout -b feat/feature-name

# 提交（会自动运行 lint-staged）
git add .
git commit -m "feat: description"

# 修复分支
git checkout -b fix/bug-description
```

---

## 更新日志

所有配置更新记录在 [CHANGELOG.md](./CHANGELOG.md)。

## 贡献指南

详见 [CONTRIBUTING.md](./CONTRIBUTING.md)。
