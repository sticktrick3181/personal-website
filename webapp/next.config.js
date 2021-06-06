const withMDX = require('@next/mdx')({ extension: /\.mdx?$/ })
const withPWA = require('next-pwa')
const runtimeCaching = require('next-pwa/cache')

// nextjs will treat .md .mdx files as page files (pages dir)
module.exports = withPWA(
  withMDX({
    pageExtensions: ['js', 'jsx', 'md', 'mdx'],
    pwa: {
      dest: 'public',
      runtimeCaching,
    },
  })
)
