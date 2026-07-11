# Collegium Cassellianum

《龙族》卡塞尔学院守夜人社区邮件情报后台 —— 响应式双端 UI。

- PC 大屏桌面端 + 手机竖屏移动端
- 学院主题（羊皮纸办公风）/ 作战主题（暗调紧急风）一键切换
- 邮件标记、回复、删除警告弹窗

## 在线预览

部署地址：https://lxl1234-lxl.github.io/Collegium-Cassellianum/

## 本地开发

```bash
npm install
npm run dev
```

## 本地打包单文件 HTML

```bash
npm run build
python scripts/patch_html.py
```

生成 `卡塞尔学院守夜人社区.html`，可传到手机浏览器打开。

## 部署到 GitHub Pages

### 自动部署（推荐）

1. 在 GitHub 创建仓库 `Collegium-Cassellianum`。
2. 将本项目代码 push 到 `main` 分支。
3. 进入仓库 **Settings → Pages → Source**，选择 **GitHub Actions**。
4. 之后每次 push 到 `main` 分支，`.github/workflows/deploy.yml` 会自动构建并部署。

### 手动部署

```bash
npm run deploy
```

这会把 `dist` 目录推送到 `gh-pages` 分支。

## 项目结构

```
src/
  components/    # UI 组件
  data/          # 邮件、联系人数据
  hooks/         # 主题 hook
  pages/         # 页面
  store/         # Zustand 状态管理
public/          # 静态资源
scripts/         # 本地构建脚本
dist/            # 构建输出（GitHub Pages 部署目录）
```

## 安全说明

- 本项目不含任何 API Key、Token 或后端服务。
- `.gitignore` 已排除 `node_modules`、`dist`、`.env` 等文件。
- 请勿在仓库中提交任何个人密钥或凭据。
