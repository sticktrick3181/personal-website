import React from 'react'
import PropTypes from 'prop-types'
import TopNav from '../components/TopNav'
import PageHead from '../components/PageHead'
import '../globals.css'

function MyApp(props) {
  const { Component, pageProps } = props

  return (
    <div className="fixed w-full h-full bg-white dark:bg-gray-800">
      <PageHead />
      <TopNav />
      <div className="w-full mx-auto p-4 sm:p-8 md:p-12 max-w-4xl">
        <Component {...pageProps} />
      </div>
    </div>
  )
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired,
}

export default MyApp
