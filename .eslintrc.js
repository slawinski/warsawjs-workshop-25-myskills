module.exports = {
  extends: ['airbnb', 'prettier'],

  env: {
    browser: true,
    node: true
  },

  parserOptions: {
    // Support syntax ES2018
    ecmaVersion: 2018,

    // Support syntax ES2015 Import/Export
    sourceType: 'module',

    ecmaFeatures: {
      jsx: true
    }
  },
  plugins: ['react', 'prettier'],
  rules: {
    'sort-imports': 'off',
    'no-unused-vars': 'off',
    'prettier/prettier': ['error']
  }
};
