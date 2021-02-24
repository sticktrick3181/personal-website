import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import Link from 'next/link'
import CheckAndAddDarkModeClass from 'utils/CheckAndAddDarkModeClass'
import Sun from 'icons/Sun'
import Moon from 'icons/Moon'
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
  const [isDarkMode, setIsDarkMode] = useState(null)

  useEffect(() => {
    setIsDarkMode(document.documentElement.classList.contains('dark'))
  })

  const toggleDarkMode = () => {
    if (isDarkMode) {
      localStorage.theme = 'light'
    } else {
      localStorage.theme = 'dark'
    }
    setIsDarkMode(!isDarkMode)
    CheckAndAddDarkModeClass()
  }

  return (
    <div className="w-full py-4 sm:py-6 px-4 sm:px-0 flex items-center">
      <Link href="/">
        <a
          className={`text-base font-bold uppercase tracking-wider text-indigo-700 dark:text-indigo-300 ${
            isActiveUrl(router, '/') ? 'activeClass' : 'baseClass'
          }`}
        >
          Home
        </a>
      </Link>
      <div className="flex-1" />
      {isDarkMode !== null && (
        <button
          type="button"
          className="outline-none focus:outline-none"
          onClick={toggleDarkMode}
        >
          {isDarkMode ? (
            <Moon className="h-6 text-indigo-500" />
          ) : (
            <Sun className="h-6 text-yellow-500" />
          )}
        </button>
      )}
    </div>
  )
}

TopNav.propTypes = {
  router: PropTypes.object.isRequired,
}

export default withRouter(TopNav)
