// used so that eslint can use same config

// eslint-disable-next-line import/no-extraneous-dependencies
const path = require('path')

module.exports = {
  resolve: {
    alias: {
      components: path.resolve(__dirname, 'components/'),
      utils: path.resolve(__dirname, 'utils/'),
      constants: path.resolve(__dirname, 'constants/'),
      icons: path.resolve(__dirname, 'icons/'),
    },
  },
}
