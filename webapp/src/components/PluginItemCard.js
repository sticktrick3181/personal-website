import React from 'react'
import { ExternalLinkIcon } from '@heroicons/react/solid'

const PluginItemCard = ({
  item: { image, productType, productName, buyLink },
}) => (
  <a
    href={buyLink}
    target="_blank"
    rel="noopener noreferrer"
    className="bg-white dark:bg-gray-800 p-6 shadow-xl hover:shadow-md rounded-xl h-40 flex flex-row items-center"
  >
    {/* eslint-disable-next-line */}
    <img
      src={image}
      alt={productName}
      width="auto"
      height="auto"
      style={{ maxHeight: '50px', maxWidth: '100%' }}
    />
    <h4 className="flex flex-start flex-col text-lg px-4">
      <span className="font-bold tracking-wide flex items-center">
        <span className="text-gray-800 dark:text-gray-200">{productName}</span>
        <ExternalLinkIcon className="h-6 ml-2 flex-shrink-0 text-blue-500" />
      </span>
      <span className="text-gray-700 dark:text-gray-400">{productType}</span>
    </h4>
  </a>
)

export default PluginItemCard
