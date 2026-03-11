module.exports = {
  root: true,
  extends: ['@react-native', 'plugin:import/typescript', 'prettier'],
  plugins: ['import'],
  rules: {
    // TypeScript
    '@typescript-eslint/no-unused-vars': [
      'warn',
      {argsIgnorePattern: '^_', varsIgnorePattern: '^_'},
    ],

    // React Hooks
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',

    // React
    'react/no-unstable-nested-components': ['warn', {allowAsProps: true}],

    // React Native
    'react-native/no-inline-styles': 'warn',

    // No console in production
    'no-console': 'warn',

    // Import ordering
    'import/order': [
      'warn',
      {
        groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index'],
        'newlines-between': 'never',
      },
    ],
    'import/no-duplicates': 'warn',
  },
  settings: {
    'import/resolver': {
      typescript: {},
    },
  },
};
