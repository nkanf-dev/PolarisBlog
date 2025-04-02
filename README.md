# Polaris Blog

一个使用 React、TypeScript 和 Tailwind CSS 构建的简单博客应用。

## 功能特性

- 简洁、响应式设计，基于 Tailwind CSS
- GitHub Pages 部署集成

## 技术栈

- **前端框架:** React 19 与 TypeScript
- **路由管理:** React Router v7
- **样式设计:** Tailwind CSS v4
- **构建工具:** Vite
- **包管理器:** Bun
- **代码检查:** Biome
- **部署方式:** GitHub Actions 自动化部署到 GitHub Pages

## 开始使用

### 前提条件

- Bun

### 安装步骤

1. 克隆仓库:
   ```bash
   git clone https://github.com/nkanf-dev/PolarisBlog.git
   cd PolarisBlog
   ```

2. 安装依赖:
   ```bash
   bun install
   ```

3. 启动开发服务器:
   ```bash
   bun run dev
   ```

4. 打开浏览器并访问 `http://localhost:5173/`

## 项目结构

- `/src` - 主要源代码
  - `/components` - 可复用的 UI 组件
  - `/pages` - 不同路由的页面组件
  - `App.tsx` - 主应用组件
  - `main.tsx` - 应用入口点
- `/public` - 静态资源

## 部署

本项目已配置使用 GitHub Actions 自动部署到 GitHub Pages。

### 手动部署

要手动部署:

```bash
bun run deploy
```

### 自动部署

推送到 `main` 分支将触发 GitHub Actions 工作流，自动构建并部署站点到 GitHub Pages。

## 贡献

1. Fork 仓库
2. 创建功能分支 (`git checkout -b feature/amazing-feature`)
3. 提交更改 (`git commit -m '添加某个令人惊叹的功能'`)
4. 推送到分支 (`git push origin feature/amazing-feature`)
5. 开启 Pull Request

## 许可证

本项目采用 MIT 许可证 - 详情请参阅 LICENSE 文件。

## 致谢

- React 团队提供的出色框架
- Tailwind CSS 提供的实用优先的 CSS 框架
- Vite 提供的高速构建工具