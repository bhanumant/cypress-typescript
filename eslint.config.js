import js from '@eslint/js';

export default [
  js.configs.recommended,
  {
    files: ['**/*.js'],
    rules: {
      indent: ['error', 2],
      'no-multiple-empty-lines': ['error', { max: 1 }],
      semi: ['error', 'always'],
      'no-console': 'error',
    },
  },
];