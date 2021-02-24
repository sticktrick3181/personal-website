import React from 'react'
import PropTypes from 'prop-types'
import TopNav from '../components/TopNav'
import PageHead from '../components/PageHead'
import '../globals.css'

function MyApp(props) {
  const { Component, pageProps } = props

  return (
    <div>
      <PageHead />
      <div className="w-full mx-auto max-w-4xl">
        <div className="px-0 sm:px-4">
          <TopNav />
        </div>
        {/* content wrapper */}
        <div className="px-4 py-4 sm:py-8 md:py-12">
          <Component {...pageProps} />
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
