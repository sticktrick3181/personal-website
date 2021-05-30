import React from 'react'
import PropTypes from 'prop-types'

const SectionTitle = ({ title, spacingClasses }) => (
  <h2 className={`text-4xl font-semibold ${spacingClasses}`}>
    <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 via-pink-500 to-red-500">
      {title}
    </span>
  </h2>
)

SectionTitle.defaultProps = {
  spacingClasses: 'mt-8 mb-4',
}

SectionTitle.defaultProps = {
  title: PropTypes.string.isRequired,
  spacingClasses: PropTypes.string,
}

export default SectionTitle
