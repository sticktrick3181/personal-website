import React from 'react'
import PropTypes from 'prop-types'

const SectionTitle = ({ title }) => (
  <div className="text-4xl font-semibold">
    <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 via-pink-500 to-red-500">
      {title}
    </span>
  </div>
)

SectionTitle.defaultProps = {
  title: PropTypes.string.isRequired,
}

export default SectionTitle
