module.exports = {
  env: {
    es6: true,
    node: true
  },
  extends: [
    'eslint:recommended',
    'plugin:import/errors',
    'plugin:import/warnings'
  ],
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module'
  },
  rules: {
    'function-paren-newline': ['error', 'consistent'],
    'no-bitwise': 0,
    'no-console': 0,
    'no-param-reassign': 0,
    'no-shadow': 0,
    'no-underscore-dangle': 0,
    quotes: ['error', 'single'],
    semi: ['error', 'always'],
    'import/no-commonjs': 'error'
  },
};
