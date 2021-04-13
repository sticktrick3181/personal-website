import React, { useEffect } from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import TopNav from 'components/TopNav'
import Head from 'next/head'
import Lazyload from 'components/Lazyload'
import analyticsService from 'utils/analyticsService'
import { useRouter } from 'next/router'
import '../globals.css'

const Footer = Lazyload(() => import('components/Footer'))

// setup axe in development immediately
if (process.env.NODE_ENV !== 'production' && typeof window !== 'undefined') {
  import('@axe-core/react').then((module) => {
    const axe = module.default
    axe(React, ReactDOM, 1000)
  })
}

function MyApp(props) {
  const router = useRouter()
  const { Component, pageProps } = props

  useEffect(() => {
    const currentPath = router.pathname
    analyticsService.incrementViews(currentPath)

    const handleRouteChange = (url) => {
      const cleanedPath = url.split('?')[0]
      analyticsService.incrementViews(cleanedPath)
    }

    router.events.on('routeChangeStart', handleRouteChange)

    // If the component is unmounted, unsubscribe
    // from the event with the `off` method:
    return () => {
      router.events.off('routeChangeStart', handleRouteChange)
    }
  }, [])

  return (
    <div>
      <Head>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>
      <div className="w-full mx-auto max-w-3xl">
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
