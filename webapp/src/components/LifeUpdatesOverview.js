import React from 'react'
import Link from 'next/link'
import LifeUpdateBlock from 'components/LifeUpdateBlock'
import ExternalLink from '../icons/ExternalLink'
import LifeUpdates from '../constants/lifeUpdates'

const LifeUpdatesBlock = () => (
  <div className="relative rounded-2xl shadow-md bg-white dark:bg-gray-700 cursor-pointer">
    <div className="px-6 pt-6 pb-3">
      <LifeUpdateBlock
        title={LifeUpdates[0].title}
        description={LifeUpdates[0].description}
        timestamp={LifeUpdates[0].timestamp}
      />
    </div>
    <div className="px-6 pt-3 pb-6">
      <LifeUpdateBlock
        title={LifeUpdates[1].title}
        description={LifeUpdates[1].description}
        timestamp={LifeUpdates[1].timestamp}
      />
    </div>
    <div className="h-10 w-full bg-transparent" />
    <div className="h-32 absolute w-full left-0 right-0 -mt-32 rounded-b-2xl flex items-center justify-center bg-gradient-to-t pt-6 via-white from-white dark:from-gray-700 dark:via-gray-700">
      <Link href="/life" passHref>
        <button
          type="button"
          className="w-full h-full text-xl font-bold flex items-center justify-center text-gray-700 dark:text-gray-300 outline-none focus:outline-none"
        >
          <span className="mr-1 text-sm tracking-wider uppercase">
            See all updates
          </span>
          <ExternalLink className="h-4" />
        </button>
      </Link>
    </div>
  </div>
)

export default LifeUpdatesBlock
