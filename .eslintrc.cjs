module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'plugin:react/recommended',
    'standard'
  ],
  overrides: [
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: [
    'react'
  ],
  rules: {
    'no-unused-vars': ['warn', { vars: 'all', args: 'after-used', ignoreRestSiblings: false }],
    'react/prop-types': 'off',
    // 'arrow-parens': ['error', 'as-needed'],
    'eol-last': ['error', 'always'],
    'arrow-body-style': ['error', 'as-needed'],
    semi: ['error', 'never']
  }
}
