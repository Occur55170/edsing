# Edsing 官方網站

[edsing.com](https://edsing.com) 官方網站專案，使用 [Nuxt 3](https://nuxt.com) 開發，並部署至 GitHub Pages。

## 技術棧

- **框架**: Nuxt 3 + Vue 3 (TypeScript)
- **樣式**: Tailwind CSS + SCSS
- **多語系**: [@nuxtjs/i18n](https://i18n.nuxtjs.org/)（繁體中文 / 英文，預設為繁體中文）
- **動畫**: animate.css
- **裝置偵測**: [@nuxtjs/device](https://github.com/nuxt-modules/device)
- **表單/驗證**: zod、@emailjs/browser
- **部署**: [gh-pages](https://github.com/tschaub/gh-pages)

## 專案結構

```
pages/          # 網站頁面（首頁、公司介紹、聯絡我們、鎢鋼硬/軟質、高速鋼、稀有金屬等）
components/     # 共用元件
layouts/        # 版面配置
composables/    # 共用邏輯 (composables)
i18n/locales/   # 多語系翻譯檔 (en.json / zh.json)
assets/css/     # 全域樣式 (SCSS)
public/         # 靜態資源（圖片、favicon 等）
server/         # server 端邏輯
```

## 開發環境設置

安裝相依套件：

```bash
npm install
```

啟動本地開發伺服器（預設 `http://localhost:3000`）：

```bash
npm run dev
```

## 建置與預覽

建置正式環境版本（會將 `.htaccess` 一併複製到輸出目錄）：

```bash
npm run build
```

本地預覽建置結果：

```bash
npm run preview
```

靜態產生（SSG）：

```bash
npm run generate
```

## Lint

```bash
npm run lint       # 檢查
npm run lint:fix    # 自動修正
```

## 部署

專案透過 `gh-pages` 部署到 GitHub Pages，會將 `.output/public`（含 dotfiles，如 `.nojekyll`）推送到 `gh-pages` 分支：

```bash
npm run deploy
```

> `nuxt.config.ts` 中的 `app.baseURL` 設定為 `/edsing/`，如果 repository 名稱或部署路徑改變，記得同步更新。

## 相關文件

- [Nuxt 文件](https://nuxt.com/docs/getting-started/introduction)
- [部署文件](https://nuxt.com/docs/getting-started/deployment)
