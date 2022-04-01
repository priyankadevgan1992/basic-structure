module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: ['airbnb', 'plugin:react/recommended'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: [
    'react',
    'prettier',
    'react-hooks'],
  settings: {
    'import/resolver': {
      node: {
        moduleDirectory: ['node_modules', 'src/']
      }
    }
  },
  rules: {
    // run this command if eslintrc changes are not getting applied - npx mrm@2 lint-staged
    'react/react-in-jsx-scope': 0,
    'comma-dangle': ['error', 'never'],
    'linebreak-style': 0,
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'react/prop-types': 0
  },
  overrides: [
    {
      files: ['**/*.stories.*'],
      rules: {
        'import/no-anonymous-default-export': 'off'
      }
    }
  ]
};
