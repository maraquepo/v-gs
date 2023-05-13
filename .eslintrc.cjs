/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
  root: true,
  plugin: ['node'],
  extends: [
    'plugin:vue/vue3-recommended',
    'eslint:recommended',
    '@vue/eslint-config-prettier',
    'plugin:node/recommended'
  ],
  parserOptions: {
    ecmaVersion: 'latest'
  }
}
