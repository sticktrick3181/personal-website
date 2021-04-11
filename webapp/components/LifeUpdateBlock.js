import React from 'react'
import TimeFromNow from 'components/TimeFromNow'

const LifeUpdateBlock = ({ title, description, timestamp }) => (
  <div>
    <p className="text-lg font-bold text-gray-800 dark:text-gray-100">
      {title}
    </p>
    <p className="text-lg text-gray-700 dark:text-gray-200">{description}</p>
    <div className="text-gray-500 dark:text-gray-400">
      <TimeFromNow value={timestamp} />
    </div>
  </div>
)

export default LifeUpdateBlock
