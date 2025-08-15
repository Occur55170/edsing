// .eslintrc.js
module.exports = {
  root: true,
  extends: [
    '@nuxtjs/eslint-config-typescript',
    'plugin:vue/vue3-recommended' // ← 確保這行有
  ],
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: 'module',
    parser: '@typescript-eslint/parser'
  },
  rules: { // 自訂規則
    quotes: ['error', 'single'], // 使用單引號
    '@typescript-eslint/no-unused-vars': 'warn',
    'no-irregular-whitespace': ['error', { skipStrings: false }],
    'no-multi-spaces': 'warn', // 不允許多餘的空格
    'space-before-blocks': ['warn', 'always'], // 大括號前要有空格
    'keyword-spacing': ['error', { before: true, after: true }], // 關鍵字前後要空格（如 if、else）
    'space-infix-ops': 'warn', // 運算子周圍要有空格（如 a + b）
    'block-spacing': ['warn', 'always'], // 大括號內部要有空格
    'comma-spacing': ['warn', { before: false, after: true }], // 逗號後面要有空格
    'array-bracket-spacing': ['warn', 'never'], // 陣列括號內不允許空格
    'object-curly-spacing': ['warn', 'always'], // 物件大括號內要有空格
    'no-console': 'off', // 關閉 no-console 規則，允許使用 console
    'vue/multi-word-component-names': 'off'
  }
}
