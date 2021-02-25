import React from 'react'
import PropTypes from 'prop-types'
import TopNav from 'components/TopNav'
import PageHead from 'components/PageHead'
import Head from 'next/head'
import Lazyload from 'components/Lazyload'
import '../globals.css'

const Footer = Lazyload(() => import('components/Footer'))

function MyApp(props) {
  const { Component, pageProps } = props

  return (
    <div>
      <Head>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>
      <PageHead />
      <div className="w-full mx-auto max-w-4xl">
        <div className="px-0 sm:px-4">
          <TopNav />
        </div>
        {/* content wrapper */}
        <div className="px-4 py-4 sm:py-8 md:py-12 min-h-screen">
          <Component {...pageProps} />
        </div>
        <div>
          <Footer />
        </div>
      </div>
    </div>
  )
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired,
}

export default MyApp
