module.exports = {
  env: {
    es6: true,
    node: true
  },
  extends: ['plugin:@typescript-eslint/recommended', 'standard'],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly'
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 11,
    sourceType: 'module'
  },
  plugins: ['@typescript-eslint'],
  rules: {
    camelcase: 0,
    '@typescript-eslint/no-namespace': 'off',
    'padded-blocks': [0, { allowSingleLineBlocks: true }]
  }
}
