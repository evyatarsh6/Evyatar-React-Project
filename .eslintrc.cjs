// module.exports = {
//   root: true,
//   env: {
//     node: true,
//     browser: true,
//     es2020: true
// },
//   extends: [
//     'eslint:recommended',
//     'plugin:react/recommended',
//     'plugin:react/jsx-runtime',
//     'plugin:react-hooks/recommended',
//   ],
//   ignorePatterns: ['dist/' , "node_modules/"],
//   parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
//   settings: { react: { version: '18.2' } },
//   plugins: ['react-refresh'],
//   rules: {
//     'react-refresh/only-export-components': [
//       'warn',
//       { allowConstantExport: true },
//     ],
//     "no-unused-vars": ["warn", { "vars": "all", "args": "after-used", "ignoreRestSiblings": false }],
//     "react/prop-types": "off"
//   },
// }



module.exports = {
  root: true,
  env: {
    node: true,
    browser: true,
    es2020: true
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
  ],
  ignorePatterns: ['dist/', 'node_modules/'],
  parserOptions: {
    ecmaVersion: 2022, // Update to a specific version of ECMAScript
    sourceType: 'module'
  },
  settings: {
    react: {
      version: 'detect' // Use 'detect' to automatically detect the installed React version
    }
  },
  plugins: ['react-refresh'],
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    'no-unused-vars': [
      'warn',
      { vars: 'all', args: 'after-used', ignoreRestSiblings: false }
    ],
    'react/prop-types': 'off'
  }
};
