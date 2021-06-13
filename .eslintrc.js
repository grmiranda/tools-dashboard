module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: ['plugin:vue/essential', '@vue/airbnb'],
  parserOptions: {
    parser: 'babel-eslint'
  },
  rules: {
    'no-underscore-dangle': 'off',
    camelcase: 'off',
    'comma-dangle': ['error', 'only-multiline'],
    semi: ['error', 'never'],
    'arrow-parens': ['error', 'as-needed'],
    'object-curly-newline': ['error', { multiline: true, consistent: true }],
    'consistent-return': 'off',
    'no-console': [
      process.env.NODE_ENV === 'production' ? 'error' : 'warn',
      {
        allow: ['warn', 'info', 'error']
      }
    ],
    'prefer-rest-params': 'off',
    quotes: ['error', 'single', { avoidEscape: true }],
    'generator-star-spacing': 'off',
    'one-var': 'error',
    'prefer-promise-reject-errors': 'off',
    // allow debugger during development only
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off'
  }
}
