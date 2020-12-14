import React from 'react'
import PropTypes from 'prop-types'
import Link from 'next/link'
import clsx from 'clsx'
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

const TopNav = ({ router }) => (
  <div className="w-full bg-indigo-100 border-b-indigo-200 py-4 px-4 sm:py-6 sm:px-6 shadow-sm">
    <Link href="/">
      <a>
        <p
          className={clsx(
            'text-base text-indigo-700',
            isActiveUrl(router, '/') ? 'activeClass' : 'baseClass'
          )}
        >
          About
        </p>
      </a>
    </Link>
  </div>
)

TopNav.propTypes = {
  router: PropTypes.object.isRequired,
}

export default withRouter(TopNav)
