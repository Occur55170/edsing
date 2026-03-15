// nuxt.config.ts
import Icons from 'unplugin-icons/vite'

export default defineNuxtConfig({
  app: {
    head: {
      link: [
        { href: '/img/favicon.ico', rel: 'shortcut icon' },
        { href: 'https://fonts.googleapis.com', rel: 'preconnect' },
        { crossorigin: 'anonymous', href: 'https://fonts.gstatic.com', rel: 'preconnect' },
        { href: 'https://fonts.googleapis.com/css2?family=Noto+Sans+TC:wght@100..900&display=swap', rel: 'stylesheet' },
      ],
    },
    // 替換為你的 repository 名稱，前後都要有斜線
    baseURL: '/edsing/',
    // 避開預設的 _nuxt 避免 Jekyll 抓不到資源
    buildAssetsDir: 'assets',
  },
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  typescript: {
    typeCheck: true,
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  css: [
    '~/assets/css/main.scss',
    'animate.css/animate.min.css',
  ],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          api: 'modern-compiler', // or "modern"
          additionalData: '@use "~/assets/css/global.scss" as *;',
        },
      },
    },
    plugins: [
      Icons({
        autoInstall: true,
      }),
    ],
    // build: {
    //   rollupOptions: {
    //     output: {
    //       // JS 檔案加上時間戳 Hash
    //       chunkFileNames: `_nuxt/[name].[hash].${Date.now()}.js`,
    //       entryFileNames: `_nuxt/[name].[hash].${Date.now()}.js`,
    //       // CSS 與其他資產
    //       assetFileNames: `_nuxt/[name].[hash].${Date.now()}.[ext]`,
    //     },
    //   },
    // },
  },
  modules: [
    '@nuxtjs/i18n',
    'unplugin-icons/nuxt',
    '@nuxtjs/device',
  ],
  i18n: {
    langDir: './locales',
    locales: [
      {
        code: 'en',
        iso: 'en-US',
        file: 'en.json',
      },
      {
        code: 'zh-tw',
        iso: 'zh-TW',
        file: 'zh.json',
      },
    ],
    defaultLocale: 'zh-tw',
    detectBrowserLanguage: false,
    strategy: 'no_prefix',
  },
})
