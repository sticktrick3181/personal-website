import React from 'react'
import PropTypes from 'prop-types'
import Head from 'next/head'
import dynamic from 'next/dynamic'
import PageHead from '../components/PageHead'
import TopNav from '../components/TopNav'
import '../globals.css'

const LoadFonts = dynamic(() => import('../components/LoadFonts'), {
  ssr: false,
})

function MyApp(props) {
  const { Component, pageProps } = props

  return (
    <>
      <PageHead />
      <Head>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>
      <LoadFonts />
      <div className="fixed w-full h-full bg-white">
        <TopNav />
        <div
          className="w-full mx-auto p-4 sm:p-8 md:p-12"
          style={{ maxWidth: '800px' }}
        >
          <Component {...pageProps} />
        </div>
      </div>
    </>
  )
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired,
}

export default MyApp
