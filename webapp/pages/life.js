import React from 'react'
import LifeUpdateBlock from 'components/LifeUpdateBlock'
import LifeUpdates from '../constants/lifeUpdates'
import SectionTitle from '../components/SectionTitle'
import PageHead from '../components/PageHead'
import GetAbsoluteURLFromRelativeURL from '../utils/GetAbsoluteURLFromRelativeURL'
import GetOGImageWithText from '../utils/GetOGImageWithText'

const LifePage = () => (
  <div>
    <PageHead
      title="My Life Updates"
      description="All my major life updates"
      meta={{
        type: 'website',
        title: 'My Life Updates',
        description: 'All my major life updates',
        image: GetOGImageWithText('Life Updates'),
        url: GetAbsoluteURLFromRelativeURL('/life'),
      }}
    />
    <SectionTitle title="Life Updates" />
    {LifeUpdates.map((update) => (
      <div key={update.title} className="my-6">
        <LifeUpdateBlock
          title={update.title}
          description={update.description}
          timestamp={update.timestamp}
        />
      </div>
    ))}
  </div>
)

export default LifePage
