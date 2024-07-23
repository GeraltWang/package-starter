import antfu from '@antfu/eslint-config'

export default antfu({
  regexp: false,
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
    'vue/one-component-per-file': 'off',
  },
})
