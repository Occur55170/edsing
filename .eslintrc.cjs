module.exports = {
  root: true,
  extends: [
    '@nuxtjs/eslint-config-typescript',
    'plugin:vue/vue3-recommended',
  ],
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: 'module',
    parser: '@typescript-eslint/parser',
  },
  rules: {
    // =========================
    // JS / TS 基本格式
    // =========================
    quotes: ['error', 'single'], // 使用單引號
    '@typescript-eslint/no-unused-vars': 'warn',

    'no-irregular-whitespace': ['error', { skipStrings: false }],
    'no-multi-spaces': 'warn', // 不允許多餘空格（一般 JS/TS）

    'space-before-blocks': ['warn', 'always'], // if () { 這種大括號前空格
    'keyword-spacing': ['warn', { before: true, after: true }], // if / else / for 關鍵字空格
    'space-infix-ops': 'warn', // a + b
    'block-spacing': ['warn', 'always'], // { foo }
    'comma-spacing': ['warn', { before: false, after: true }], // , 後空格
    'array-bracket-spacing': ['warn', 'never'], // [1, 2]
    'object-curly-spacing': ['warn', 'always'], // { foo: 1 }

    // 建議補上這幾條，專門處理空格更完整
    'key-spacing': ['warn', { beforeColon: false, afterColon: true }], // { foo: 1 }
    'space-in-parens': ['warn', 'never'], // fn(a, b)
    'arrow-spacing': ['warn', { before: true, after: true }], // () => {}
    'template-curly-spacing': ['warn', 'never'], // `${foo}`
    'rest-spread-spacing': ['warn', 'never'], // ...args
    'computed-property-spacing': ['warn', 'never'], // obj[key]
    'func-call-spacing': ['warn', 'never'], // fn()

    'no-console': 'off',

    // =========================
    // Vue 規則
    // =========================
    'vue/multi-word-component-names': 'off',

    // 關掉這條，避免你 template 屬性換行一直被煩
    'vue/first-attribute-linebreak': 'off',

    // 建議也關掉這條，避免 class 很長時一直被迫一行一個屬性
    'vue/max-attributes-per-line': 'off',

    // 你目前最容易被這條搞到 13 spaces / 10 spaces
    // 如果你想專心處理空格而不是 template 縮排，建議先關掉
    'vue/html-indent': 'off',

    // 保留自閉合規則
    'vue/html-self-closing': ['error', {
      html: {
        void: 'always', // <img />
        normal: 'never', // <div></div>
        component: 'always', // <MyComp />
      },
    }],

    // 建議補這條：HTML 右尖括號換行規則，避免 template 排版混亂
    'vue/html-closing-bracket-newline': 'off',

    // 建議補這條：多餘空白（Vue template 內也很常見）
    'vue/no-multi-spaces': 'warn',

    // 建議補這條：屬性之間空格
    'vue/no-spaces-around-equal-signs-in-attribute': 'warn',

    'space-before-function-paren': ['warn', 'never'],

    // =========================
    // 尾逗號
    // =========================
    'comma-dangle': [
      'warn',
      {
        arrays: 'always-multiline',
        objects: 'always-multiline',
        imports: 'always-multiline',
        exports: 'always-multiline',
        functions: 'never',
      },
    ],
  },
}
