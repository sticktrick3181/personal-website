// used so that eslint can use same config

// eslint-disable-next-line import/no-extraneous-dependencies
const path = require('path')

module.exports = {
  resolve: {
    alias: {
      components: path.resolve(__dirname, 'src/components/'),
      utils: path.resolve(__dirname, 'src/utils/'),
      constants: path.resolve(__dirname, 'src/constants/'),
      icons: path.resolve(__dirname, 'src/icons/'),
    },
  },
}
