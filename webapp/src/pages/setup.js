import React from 'react'
import sortBy from 'lodash.sortby'
import HardwareItemCard from 'components/HardwareItemCard'
import PluginItemCard from 'components/PluginItemCard'
import SectionTitle from '../components/SectionTitle'
import PageHead from '../components/PageHead'
import GetAbsoluteURLFromRelativeURL from '../utils/GetAbsoluteURLFromRelativeURL'
import GetOGImageWithText from '../utils/GetOGImageWithText'
import ContentfulClient from '../services/contentful'

const HARDWARE_TYPE_CONTENTFUL_ID = '4ExCC6hE8NMFFHhHPaPmry'
const PLUGINS_TYPE_CONTENTFUL_ID = '3dd3Oity1BqIEzxvK1RTHB'

const LifePage = ({ itemTypes }) => {
  const getSectionForItemType = (itemType) => {
    // this part is hardcoded for now
    // hardcodes the mapping of item type to component
    return (
      <div>
        {itemType.id === HARDWARE_TYPE_CONTENTFUL_ID && (
          <div className="grid grid-cols-2 gap-8">
            {itemType.items.map((item) => (
              <div key={item.productName} className="col-span-2 md:col-span-1">
                <HardwareItemCard item={item} />
              </div>
            ))}
          </div>
        )}
        {itemType.id === PLUGINS_TYPE_CONTENTFUL_ID && (
          <div className="grid grid-cols-2 gap-8">
            {itemType.items.map((item) => (
              <div key={item.productName} className="col-span-2 md:col-span-1">
                <PluginItemCard item={item} />
              </div>
            ))}
          </div>
        )}
      </div>
    )
  }

  return (
    <div className="space-y-10 lg:space-y-16">
      <PageHead
        title="My Setup"
        description="All the tools I use and love"
        meta={{
          type: 'website',
          title: 'My Setup',
          description: 'All the tools I use and love',
          image: GetOGImageWithText('My Tools'),
          url: GetAbsoluteURLFromRelativeURL('/setup'),
        }}
      />
      <section>
        <h1 className="text-6xl font-bold tracking-wider text-gray-800 dark:text-gray-100">
          My Setup
        </h1>
        <p className="text-2xl text-gray-500 dark:text-gray-400 mt-2">
          A list of my favorite hardware and software tools.
        </p>
      </section>
      {itemTypes.map((currentItemType) => (
        <section key={currentItemType.name}>
          <div className="mb-6">
            <SectionTitle title={currentItemType.name} spacingClasses="m-0" />
          </div>
          {getSectionForItemType(currentItemType)}
        </section>
      ))}
    </div>
  )
}

export const getStaticProps = async () => {
  const SETUP_ITEM_ID = 'mySetup'
  const SETUP_TYPE_ID = 'setupTypes'
  const { items } = await ContentfulClient.getEntries()

  const allItemTypes = sortBy(
    items
      .filter((item) => item.sys.contentType.sys.id === SETUP_TYPE_ID)
      .map((i) => ({ ...i.fields, items: [], id: i.sys.id })),
    [(elem) => elem.orderIndex]
  )

  const allItems = sortBy(
    items
      .filter((item) => item.sys.contentType.sys.id === SETUP_ITEM_ID)
      .map((i) => ({
        ...i.fields,
        image: i.fields.image.fields.file.url,
        setupType: i.fields.setupType.fields.name,
        id: i.sys.id,
      })),
    [(elem) => elem.orderIndex]
  )

  allItems.forEach((item) => {
    const matchedType = allItemTypes.filter((i) => i.name === item.setupType)[0]
    if (matchedType) matchedType.items.push(item)
  })

  console.log(JSON.stringify(allItemTypes))

  return {
    props: {
      itemTypes: allItemTypes,
    },
    revalidate: 10,
  }
}

export default LifePage
