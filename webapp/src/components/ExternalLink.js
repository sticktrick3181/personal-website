import React from 'react'

const ExternalLink = ({ href, className, children, ...extraProps }) => (
  <a
    href={href}
    className={className || 'text-blue-700 dark:text-blue-200'}
    target="_blank"
    rel="noreferrer"
    {...extraProps}
  >
    {children}
  </a>
)

export default ExternalLink
