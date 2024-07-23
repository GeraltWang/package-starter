import antfu from '@antfu/eslint-config'
import { FlatCompat } from '@eslint/eslintrc'

const compat = new FlatCompat()

export default antfu({
  // Enable stylistic formatting rules
  // stylistic: true,

  // Or customize the stylistic rules
  stylistic: {
    indent: 2, // 4, or 'tab'
    quotes: 'single', // or 'double'
    jsx: true,
  },

  // TypeScript and Vue are auto-detected, you can also explicitly enable them:
  typescript: true,
  vue: true,

  // Disable jsonc and yaml support
  jsonc: false,
  yaml: false,
  // formatters: {
  //   css: true,
  //   html: true,
  // },

  // `.eslintignore` is no longer supported in Flat config, use `ignores` instead
  ignores: ['node_modules', 'dist', '!.vscode', '!.github', '!.devcontainer'],
}, {
  rules: {
    'no-console': 'off',
    'unused-imports/no-unused-vars': 'off',
    'regexp/no-unused-capturing-group': 'off',
    'antfu/top-level-function': 'off',
    'antfu/consistent-list-newline': 'off',
    'jsdoc/require-returns-description': 'off',
  },
}, ...compat.config({
  // extends: ['./.eslintrc-auto-import.json'],
  // globals: {
  //   __APP_INFO__: true,
  //   process: true,
  // },
}))
