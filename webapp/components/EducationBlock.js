import React from 'react'
import PropTypes from 'prop-types'

const EducationBlock = ({ title, institute, duration, grade }) => (
  <div className="bg-white dark:bg-gray-800 px-6 py-4 rounded-xl shadow-lg print:rounded-none print:shadow-none print:px-0">
    <h4 className="m-0 flex items-center">
      <span>{title}</span>
      <span className="flex-1" />
      <small className="ml-4 text-base">{duration}</small>
    </h4>
    <p className="text-blue-700 dark:text-blue-300 m-0 flex items-center">
      <span>{institute}</span>
      <span className="flex-1" />
      <span className="text-base">{grade}</span>
    </p>
  </div>
)

EducationBlock.propTypes = {
  title: PropTypes.string.isRequired,
}

export default EducationBlock
