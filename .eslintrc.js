module.exports = {
  env: {
    browser: true,
    es6: true,
    jest: true,
  },
  extends: ['airbnb', 'prettier'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  overrides: [
    {
      files: [
        "**/*.spec.js",
        "**/*.spec.jsx"
      ],
      env: {
        jest: true
      }
    }
  ],
  plugins: ['prettier', '@typescript-eslint'],
  settings: {
    'import/resolver': {
      node: {
        moduleDirectory: ['node_modules', 'src/'],
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
      'eslint-import-resolver-typescript': true,
    },
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
    react: {
      version: 'detect',
    },
  },
  rules: {
    'prettier/prettier': 'error',
    'import/prefer-default-export': 'off',
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
      },
    ],
    'import/order': 'off',
    camelcase: 'off',

    'jsx-a11y/label-has-associated-control': 'off',
    'react/no-array-index-key': 'off',
    'react/no-did-update-set-state': 'off',
    'react/no-unescaped-entities': ['error', { forbid: ['>', '}'] }],
    'react/require-default-props': 'off',
    'react/state-in-constructor': 'off',
    'react/static-property-placement': ['off'],
    'react/prop-types': ['off'],
    'no-nested-ternary': 'off',
    'no-use-before-define': 'off',
    'no-shadow': 'off',
    'react/default-props-match-prop-types': [
      'error',
      { allowRequiredDefaults: true },
    ],

    'react/destructuring-assignment': 'off',

    'import/named': ['off'],
    'import/namespace': ['off'],
    'import/default': ['off'],
    'import/no-named-as-default-member': ['off'],
    'import/no-named-as-default': ['off'],
    'import/no-cycle': ['off'],
    'import/no-unused-modules': ['off'],
    'import/no-deprecated': ['off'],
    'import/no-extraneous-dependencies': ['off'],
    '@typescript-eslint/no-use-before-define': 'off',
    'react/jsx-filename-extension': [1, { extensions: ['.tsx', '.ts'] }],
    'no-unused-vars': ['off'],
    'react/function-component-definition': ['off']
  },
};
