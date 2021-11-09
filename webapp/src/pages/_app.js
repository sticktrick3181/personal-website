import React, { useEffect } from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import TopNav from 'components/TopNav'
import Head from 'next/head'
import Lazyload from 'components/Lazyload'
import analyticsService from 'utils/analyticsService'
import { useRouter } from 'next/router'
import { AnimatePresence, motion } from 'framer-motion'
import '../globals.css'

const Footer = Lazyload(() => import('components/Footer'))

const PAGE_TRANSITION_DELAY_SECONDS = 0.5

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
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
        <link rel="manifest" href="/manifest.json" />
      </Head>
      <div className="w-full mx-auto max-w-3xl">
        <div className="px-0 sm:px-4">
          <TopNav />
        </div>
        {/* content wrapper */}
        <AnimatePresence>
          <motion.main
            key={router.route}
            transition={{ duration: PAGE_TRANSITION_DELAY_SECONDS }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -1000, opacity: 0 }}
            role="main"
            className="px-4 py-4 sm:py-8 md:py-12 min-h-screen"
          >
            <Component {...pageProps} />
          </motion.main>
        </AnimatePresence>
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
