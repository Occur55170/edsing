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
