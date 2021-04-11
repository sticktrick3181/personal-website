import React from 'react'
import PropTypes from 'prop-types'

const SectionTitle = ({ title }) => (
  <h2 className="text-4xl font-semibold mt-8 mb-4">
    <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 via-pink-500 to-red-500">
      {title}
    </span>
  </h2>
)

SectionTitle.defaultProps = {
  title: PropTypes.string.isRequired,
}

export default SectionTitle
