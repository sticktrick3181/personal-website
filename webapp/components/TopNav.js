import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import Link from 'next/link'
import CheckAndAddDarkModeClass from 'utils/CheckAndAddDarkModeClass'
import Sun from 'icons/Sun'
import Moon from 'icons/Moon'
import Home from 'icons/Home'
import { motion } from 'framer-motion'
import DeviceMobile from 'icons/DeviceMobile'
import { withRouter } from 'next/router'

function isActiveUrl(router, baseUrl) {
  const browserUrl = router.asPath
  let result = browserUrl
  const parts = browserUrl.split('?')
  if (parts.length > 1) {
    // remove query params
    ;[result] = parts
  }
  return result === baseUrl
}

const TopNav = ({ router }) => {
  const [currentTheme, setTheme] = useState(undefined)

  useEffect(() => {
    const themeInStorage = localStorage.theme
    setTheme(themeInStorage || null)
  })

  const toggleDarkMode = () => {
    // theme options order [null,'dark', 'light']
    let finalTheme = null
    if (currentTheme === null) {
      finalTheme = 'dark'
    } else if (currentTheme === 'dark') {
      finalTheme = 'light'
    } else if (currentTheme === 'light') {
      finalTheme = null
    }
    if (finalTheme) localStorage.theme = finalTheme
    else localStorage.removeItem('theme')
    setTheme(finalTheme)
    CheckAndAddDarkModeClass()
  }

  return (
    <nav
      role="navigation"
      className="w-full py-4 sm:py-6 px-4 sm:px-0 flex items-center select-none"
    >
      <Link href="/">
        <motion.a
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
          transition={{ duration: 0.1 }}
          className={`text-base font-bold uppercase tracking-widest text-indigo-500 dark:text-indigo-500 cursor-pointer ${
            isActiveUrl(router, '/') ? 'activeClass' : 'baseClass'
          }`}
        >
          <Home className="h-8" />
        </motion.a>
      </Link>
      <div className="flex-1" />
      {currentTheme !== undefined && (
        <motion.button
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
          transition={{ duration: 0.1 }}
          type="button"
          className="outline-none focus:outline-none"
          onClick={toggleDarkMode}
          title="theme"
        >
          {currentTheme === 'dark' && <Moon className="h-8 text-indigo-500" />}
          {currentTheme === 'light' && <Sun className="h-8 text-yellow-500" />}
          {currentTheme === null && (
            <DeviceMobile className="h-8 text-blue-500" />
          )}
        </motion.button>
      )}
    </nav>
  )
}

TopNav.propTypes = {
  router: PropTypes.object.isRequired,
}

export default withRouter(TopNav)
