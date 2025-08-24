// nuxt.config.ts
import Icons from 'unplugin-icons/vite' // Import the Vite plugin for unplugin-icons
import Components from 'unplugin-vue-components/vite'
import IconsResolver from 'unplugin-icons/resolver'

export default defineNuxtConfig({
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
  ],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          api: 'modern-compiler', // or "modern"
        },
      },
    },
    plugins: [
      Icons({
        // Options for unplugin-icons
        autoInstall: true, // Automatically install icon sets on demand
      }),
    ],
  },
  modules: [
    '@nuxtjs/i18n',
    'unplugin-icons/nuxt',
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
  },
})
