const withMDX = require('@next/mdx')({ extension: /\.mdx?$/ })

// nextjs will treat .md .mdx files as page files (pages dir)
module.exports = withMDX({
  pageExtensions: ['js', 'jsx', 'md', 'mdx'],
})
