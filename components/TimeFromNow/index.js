import React from 'react'
import Lazyload from 'components/Lazyload'
import TimeFromNowSkeleton from 'components/skeletons/TimeFromNow'

export default Lazyload(
  () => import('./Component'),
  () => <TimeFromNowSkeleton />
)
