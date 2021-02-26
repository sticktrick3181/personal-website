import React from 'react'
import PropTypes from 'prop-types'

const JobExperienceBlock = ({ title, stack, description, duration }) => (
  <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
    <h4 className="m-0 flex items-center">
      <span>{title}</span>
      <small className="ml-4">({duration})</small>
    </h4>
    <p className="text-blue-700 dark:text-blue-300 m-0">{stack}</p>
    <p className="text-base m-0">{description}</p>
  </div>
)

JobExperienceBlock.propTypes = {
  title: PropTypes.string.isRequired,
}

export default JobExperienceBlock
