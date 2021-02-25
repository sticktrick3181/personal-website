import React from 'react'
import Head from 'next/head'
import PropTypes from 'prop-types'

const MAIN_TITLE = 'Nishant Singh'
const MAIN_DESCRIPTION = 'Technology enthusiast, Full-Stack Developer'

const PageHead = ({ card, title, description }) => {
  return (
    <Head>
      <title>{title}</title>
      {Boolean(description) && (
        <meta name="description" content={description} />
      )}
      {Boolean(card) && (
        <>
          <meta property="og:title" content={card.title} />
          <meta property="og:type" content={card.type} />
          <meta property="og:url" content={card.url} />
          <meta property="og:image" content={card.image} />
          <meta property="og:description" content={card.description} />
          <meta name="twitter:card" content="summary" />
          <meta name="twitter:site" content="@inishant" />
          <meta name="twitter:creator" content="@inishant" />
        </>
      )}
    </Head>
  )
}

PageHead.defaultProps = {
  card: {
    type: 'website',
    title: MAIN_TITLE,
    description: MAIN_DESCRIPTION,
    image: 'https://nishant-singh.com/picture.png',
    url: 'https://nishant-singh.com',
  },
  title: MAIN_TITLE,
  description: MAIN_DESCRIPTION,
}

PageHead.propTypes = {
  card: PropTypes.object,
  title: PropTypes.string,
  description: PropTypes.string,
}

export default PageHead
