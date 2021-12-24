module.exports = {
  extends: [
    'airbnb-typescript',
    'airbnb/hooks',
    'plugin:@typescript-eslint/recommended',
    'plugin:jest/recommended',
  ],
  plugins: ['react', '@typescript-eslint', 'jest', 'import'],
  env: {
    browser: true,
    es6: true,
    jest: true,
  },
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
    project: './tsconfig.json',
  },
  rules: {
    'import/export': [0],
    'max-len': [2, {
      'code': 200,
    }],
    'max-lines': [1, { 'max': 200 }],
    'no-console': [0],
    'semi': [2, 'always'],
    'react/jsx-props-no-spreading': [0],
    'react/jsx-max-props-per-line': [2, { 'maximum': 1 }],
    'react/jsx-indent-props': [2, 2],
    'react/jsx-first-prop-new-line': [2, 'multiline'],
    'react/jsx-closing-bracket-location': [2, 'tag-aligned'],
    'import/prefer-default-export': [0],
  },
}
