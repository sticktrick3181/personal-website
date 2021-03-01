import React from 'react'
import PropTypes from 'prop-types'
import formatDistanceToNow from 'date-fns/formatDistanceToNow'

const TimeFromNow = ({ value, ...extraProps }) => (
  <span {...extraProps}>
    {value ? formatDistanceToNow(new Date(value), { addSuffix: true }) : ''}
  </span>
)

TimeFromNow.defaultProps = {
  value: null,
}

TimeFromNow.propTypes = {
  value: PropTypes.any,
}

export default TimeFromNow
