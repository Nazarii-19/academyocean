module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:vue/recommended',
    'plugin:prettier/recommended'
  ],
  overrides: [
    {
      env: {
        node: true
      },
      files: ['.eslintrc.{js,cjs}'],
      parserOptions: {
        sourceType: 'script'
      }
    }
  ],
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: '@typescript-eslint/parser',
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: ['@typescript-eslint', 'vue'],
  rules: {
    'prettier/prettier': [
      'warn',
      {
        endOfLine: 'auto'
      }
    ],
    '@typescript-eslint/no-var-requires': 'off',
    '@typescript-eslint/ban-types': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    'vue/multi-word-component-names': 'off',
    'vue/no-reserved-component-names': 'off',
    'no-var': 'error',
    'no-undef': 'off',
    'prefer-const': 'warn',
    'no-console': 'warn'
  }
}
