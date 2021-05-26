module.exports = {
  extends: [
    'airbnb',
    'plugin:react/recommended',
    'plugin:prettier/recommended',
    'prettier/react',
    'plugin:jsx-a11y/recommended',
  ],
  plugins: ['jsx-a11y', 'cypress'],
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module',
    allowImportExportEverywhere: true,
    ecmaFeatures: {
      jsx: true,
    },
  },
  settings: {
    'import/resolver': {
      webpack: {
        config: 'webpackalias.config.js',
      },
    },
  },
  rules: {
    'react/jsx-filename-extension': 'off', // allows .js to contain jsx
    'jsx-a11y/click-events-have-key-events': 'off', // allow all html elements to have onclick
    'jsx-a11y/anchor-is-valid': 'off', // anchors <a/> can be used as buttons
    'jsx-a11y/no-static-element-interactions': 'off', // dont enforce static elements with events require role
    'react/jsx-props-no-spreading': 'off', // lot of libraries use props spreading for customisation
    'react/jsx-wrap-multilines': 'off', // conflicts with prettier rule
    'react/forbid-prop-types': 'off', // allow proptypes.object in validation
    'react/jsx-curly-newline': 'off', // conflicts with prettier
    'react/no-danger': 'off', // expect html to be sanitized
    'react/prop-types': 'off', // for personal website prop types not required
    'dequeuniversity/anchor-is-valid': 'off', // nextjs Link will generate warnings
  },
  env: {
    browser: true,
    node: true,
    'cypress/globals': true,
  },
  globals: {
    page: true,
  },
}
