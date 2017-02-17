module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module'
  },
  // https://github.com/feross/standard/blob/master/RULES.md#javascript-standard-style
  // extends: 'standard',
  // extends: 'airbnb',
  extends: 'airbnb-base',

  // required to lint *.vue files
  plugins: [
    'html'
  ],

  env: {
    "browser": true,
    "node": true,
  },
  // check if imports actually resolve
  'settings': {
    'import/resolver': {
      'webpack': {
        'config': 'build/webpack.base.config.js'
      }
    }
  },
  // add your custom rules here
  'rules': {
    // don't require .vue extension when importing
    'import/extensions': ['error', 'always', {
      'js': 'never',
      'vue': 'never'
    }],
    "no-shadow": 0,
    "no-param-reassign": 0,
    "no-console": 0,
    "no-unused-vars": [ "error", { "args": "none" }],
    "no-underscore-dangle": ["error", { "allow": ["__INITIAL_STATE__"] }],
    // allow paren-less arrow functions
    'arrow-parens': 0,
    // allow async-await
    'generator-star-spacing': 0,
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0
  }
}
