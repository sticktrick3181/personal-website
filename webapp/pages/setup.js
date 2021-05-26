import React from 'react'
import SectionTitle from '../components/SectionTitle'
import PageHead from '../components/PageHead'
import SetupItemCard from '../components/SetupItemCard'
import GetAbsoluteURLFromRelativeURL from '../utils/GetAbsoluteURLFromRelativeURL'
import GetOGImageWithText from '../utils/GetOGImageWithText'
import ContentfulClient from '../services/contentful'

const LifePage = ({ list }) => (
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
    <section>
      <SectionTitle title="Hardware" className="m-0" />
      <div className="grid grid-cols-2 gap-8">
        {list.map((item) => (
          <div key={item.productName} className="col-span-2 md:col-span-1">
            <SetupItemCard item={item} />
          </div>
        ))}
      </div>
    </section>
    <section>
      <SectionTitle title="VSCode Plugins" className="m-0" />
      <p className="text-lg text-gray-500">Coming soon...</p>
    </section>
  </div>
)

export const getStaticProps = async () => {
  const { items } = await ContentfulClient.getEntries()
  const list = items.map((i) => i.fields)
  return {
    props: {
      list,
    },
    revalidate: 10,
  }
}

export default LifePage
