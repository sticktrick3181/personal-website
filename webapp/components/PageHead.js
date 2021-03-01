import React from 'react'
import Head from 'next/head'
import PropTypes from 'prop-types'
import GetAbsoluteURLFromRelativeURL from 'utils/GetAbsoluteURLFromRelativeURL'

const MAIN_TITLE = 'Nishant Singh'
const MAIN_DESCRIPTION = 'Technology enthusiast, Full-stack developer'

const PageHead = ({ meta, title, description }) => {
  return (
    <Head>
      <title>{title}</title>
      {Boolean(description) && (
        <meta name="description" content={description} />
      )}
      <meta name="author" content="Nishant Singh" />
      <meta property="og:site_name" content="Nishant Singh" />
      <meta property="og:locale" content="en" />
      <meta name="twitter:creator" content="@inishant" />
      <meta name="twitter:meta" content="summary" />
      <meta name="twitter:site" content="@inishant" />
      {Boolean(meta) && (
        <>
          {Boolean(meta.title) && (
            <meta property="og:title" content={meta.title} />
          )}
          {Boolean(meta.type) && (
            <meta property="og:type" content={meta.type} />
          )}
          {Boolean(meta.url) && <meta property="og:url" content={meta.url} />}
          {Boolean(meta.image) && (
            <meta property="og:image" content={meta.image} />
          )}
          {Boolean(meta.description) && (
            <meta property="og:description" content={meta.description} />
          )}
          <meta name="twitter:card" content="summary_large_image" />
        </>
      )}
    </Head>
  )
}

PageHead.defaultProps = {
  meta: {
    type: 'website',
    title: MAIN_TITLE,
    description: MAIN_DESCRIPTION,
    image: GetAbsoluteURLFromRelativeURL('/images/picture.png'),
    url: 'https://nishant-singh.com',
  },
  title: MAIN_TITLE,
  description: MAIN_DESCRIPTION,
}

PageHead.propTypes = {
  meta: PropTypes.object,
  title: PropTypes.string,
  description: PropTypes.string,
}

export default PageHead
