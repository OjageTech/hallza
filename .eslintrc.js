module.exports = {
    env: {
      browser: true,
      es2021: true,
    },
    extends: [
      'plugin:react/recommended',
      'airbnb',
      'plugin:@typescript-eslint/recommended',
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
      ecmaFeatures: {
        jsx: true,
      },
      ecmaVersion: 'latest',
      sourceType: 'module',
    },
    plugins: [
      'react',
      '@typescript-eslint',
    ],
    settings: {
      'import/resolver': {
        typescript: {},
      },
    },
    rules: {
      'linebreak-style': 0,
      'no-console': 0,
      'no-restricted-globals': 0,
      'react/no-unescaped-entities': 0,
      'react/display-name': 0,
      'import/no-anonymous-default-export': 0,
      'no-underscore-dangle': 0,
      'import/prefer-default-export': 0,
      'react/jsx-filename-extension': ['warn', { extensions: ['.tsx'] }],
      'import/extensions': ['error', 'ignorePackages', { ts: 'never', tsx: 'never' }],
      'react/function-component-definition': 0,
      'react/react-in-jsx-scope': 0,
      'react/jsx-props-no-spreading': 0,
      '@typescript-eslint/no-explicit-any': 0,
      'max-len': 0,
      'no-param-reassign': 0,
    },
  };
  