// .eslintrc.js
module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true
  },
  extends: ['@nuxtjs/eslint-config-typescript', 'plugin:vue/vue3-recommended', 'prettier'],
  parserOptions: {
    parser: '@typescript-eslint/parser',
    ecmaVersion: 13,
    sourceType: 'module'
  },
  plugins: ['prettier'],
  rules: {
    'prettier/prettier': 'error',
    quotes: ['error', 'single'], // 使用單引號
    'no-console': 'warn', // 使用 console 時警告提示
    "indent": ['error', 2],
    "no-unused-vars": ["warn"]
  },
  overrides: [
      {
          "files": ["*.vue"],
      }
  ],
}
