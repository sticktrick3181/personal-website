import React from 'react'
import { ExternalLinkIcon } from '@heroicons/react/solid'

const SetupItemCard = ({
  item: { productImage, productType, productName, buyLink },
}) => (
  <a
    href={buyLink}
    target="_blank"
    rel="noopener noreferrer"
    className="bg-white dark:bg-gray-800 block p-6 shadow-xl hover:shadow-md rounded-xl h-80"
  >
    <div>
      <h4 className="flex flex-start flex-col text-lg">
        <span className="font-bold tracking-wide flex items-center">
          <span className="text-gray-800 dark:text-gray-200">
            {productName}
          </span>
          <ExternalLinkIcon className="h-6 ml-2 text-blue-500" />
        </span>
        <span className="text-gray-700 dark:text-gray-300">{productType}</span>
      </h4>
      <div className="flex items-center justify-center mt-4">
        <img
          src={productImage}
          alt={productName}
          width="auto"
          height="auto"
          style={{ maxHeight: '150px', maxWidth: '100%' }}
        />
      </div>
    </div>
  </a>
)

export default SetupItemCard
