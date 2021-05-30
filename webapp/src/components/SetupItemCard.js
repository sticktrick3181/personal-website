import React from 'react'
import { ExternalLinkIcon } from '@heroicons/react/solid'

const SetupItemCard = ({
  item: { productImage, productType, productName, buyLink },
}) => (
  <a
    href={buyLink}
    target="_blank"
    rel="noopener noreferrer"
    className="bg-white p-6 shadow-xl hover:shadow-md rounded-xl h-80 flex flex-col justify-between"
  >
    <h4 className="flex flex-start flex-col text-lg">
      <span className="font-bold tracking-wide flex items-center">
        <span className="text-gray-80">{productName}</span>
        <ExternalLinkIcon className="h-6 ml-2 text-blue-500" />
      </span>
      <span className="text-gray-700">{productType}</span>
    </h4>
    <div className="flex items-center justify-center">
      <img
        src={productImage}
        alt={productName}
        width="auto"
        height="auto"
        style={{ maxHeight: '150px', maxWidth: '100%' }}
      />
    </div>
    <p />
  </a>
)

export default SetupItemCard
