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
    // ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: [
    'react'
  ],
  rules: {
    // Possible Errors
    'no-console': 'warn', // Disallow the use of console

    // Stylistic Issues
    'indent': ['error', 2], // Enforce consistent indentation (2 spaces)
    'semi': ['error', 'always'], // Require or disallow semicolons instead of ASI
    'quotes': ['error', 'single'], // Enforce the consistent use of single quotes

    // Best Practices
    'eqeqeq': ['error', 'always'], // Require the use of === and !==

    // Variables
    'no-unused-vars': 'warn', // Disallow unused variables

    // ES6
    'arrow-spacing': 'error', // Require consistent spacing before and after the arrow in arrow functions
    'no-useless-computed-key': 'error', // Disallow unnecessary computed property keys in object literals
    'no-var': 'error', // Require let or const instead of var
    'prefer-const': 'error', // Require const declarations for variables that are never reassigned after declared

    // React plugin rules (if you're using React)
    'react/jsx-uses-react': 'error',
    'react/jsx-uses-vars': 'error'
  }
}
