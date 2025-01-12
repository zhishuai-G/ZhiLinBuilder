# ZhiLinBuilder

ZhiLinBuilder 是一个基于 React 和 Ant Design 的可视化页面构建器。

## 项目结构

src/
├── pages/                       # 页面组件
│   ├── builder/                 # 构建器主要功能
│   │   └── componentArea/       # 组件区域
│   │       ├── components/      # 可拖拽组件
│   │       │   ├── Icon/       # 图标组件
│   │       │   │   ├── Icon.tsx
│   │       │   │   └── index.tsx
│   │       │   ├── Avatar/     # 头像组件
│   │       │   │   ├── Avatar.tsx
│   │       │   │   └── index.tsx
│   │       │   ├── Button/     # 按钮组件
│   │       │   ├── Card/       # 卡片组件
│   │       │   ├── Carousel/   # 轮播组件
│   │       │   ├── FloatButton/# 浮动按钮
│   │       │   ├── Form/       # 表单组件
│   │       │   ├── Input/      # 输入框组件
│   │       │   ├── Badge/      # 徽标组件
│   │       │   └── Checkbox/   # 复选框组件
│   │       └── hooks/          # 自定义 hooks
│   │           └── useAntIcon.tsx  # 图标加载 hook
│   └── modal/                   # 模态框组件
│       ├── IconSelect/         # 图标选择器
│       │   ├── index.tsx
│       │   ├── iconMap.json    # 图标映射配置
│       │   └── style.less      # 样式文件
│       └── ActionModal/        # 动作配置器
├── store/                       # Redux 状态管理
│   ├── index.tsx               # Store 配置
│   └── slices/                 # Redux 切片
│       └── comSlice.tsx        # 组件状态管理
├── types/                       # TypeScript 类型定义
│   └── common.d.ts             # 通用类型声明
├── utils/                       # 工具函数
│   └── nodeUtils.ts            # 节点操作工具
├── vite.config.ts              # Vite 配置文件
├── tsconfig.json               # TypeScript 配置
├── tsconfig.node.json          # Node TypeScript 配置
└── package.json                # 项目依赖配置

## 使用说明

### 基础使用

1. 组件拖拽
   - 从左侧组件库拖拽组件到画布
   - 组件可以自由调整位置和大小

2. 属性配置
   - 点击组件后在右侧面板配置属性
   - 支持样式、事件等配置

3. 图标选择
   - 点击图标组件可打开图标选择器
   - 支持预览和搜索图标

### 高级功能

1. 组件嵌套
   - 支持组件拖拽嵌套
   - 自动调整父子组件关系

2. 状态管理
   - 使用 Redux 管理组件树状态
   - 支持撤销/重做操作

## 技术栈

- **前端框架**: React 18
- **开发语言**: TypeScript 5
- **UI 框架**: Ant Design 5
- **状态管理**: Redux Toolkit
- **构建工具**: Vite
- **样式处理**: Less
- **代码规范**: ESLint + Prettier

## 注意事项

1. 类型安全
   - 避免使用 `any` 类型
   - 为所有组件定义 Props 接口
   - 使用 TypeScript 的严格模式

2. 性能优化
   - 使用 React.memo 优化渲染
   - 避免不必要的状态更新
   - 合理使用 useCallback 和 useMemo

3. 代码风格
   - 遵循项目的 ESLint 规则
   - 使用函数组件和 Hooks
   - 保持代码简洁和可读性

## 贡献指南

### 提交 PR 流程

1. Fork 项目
2. 创建特性分支

3. 提交代码
```bash
git commit -m 'feat: add some feature'
```

4. 推送到远程
```bash
git push origin feature/your-feature-name
```

5. 创建 Pull Request

### 代码提交规范

- feat: 新功能
- fix: 修复问题
- docs: 文档修改
- style: 代码格式修改
- refactor: 代码重构
- test: 测试用例修改
- chore: 其他修改

### 开发流程

1. 创建 Issue 描述功能或问题
2. 等待维护者确认和讨论
3. 开发功能或修复问题
4. 提交 Pull Request
5. 等待代码审查和合并

## 许可证

[MIT License](LICENSE)

