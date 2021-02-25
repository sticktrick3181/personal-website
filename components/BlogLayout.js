import React from 'react'
import PropTypes from 'prop-types'
import PageHead from 'components/PageHead'
import TimeFromNow from 'components/TimeFromNow'
import Image from 'next/image'

const BlogLayout = ({ children, card }) => (
  <div className="prose prose-xl dark:prose-light">
    <PageHead title={card.title} card={card} />
    <h1 className="text-3xl md:text-5xl">{card.title}</h1>
    <div className="text-sm flex items-center">
      <Image
        src="/images/picture.png"
        layout="fixed"
        className="rounded-full"
        height={40}
        width={40}
      />
      <div className="ml-2">
        <p className="font-bold m-0">Nishant Singh</p>
        <span className="mr-1">Published</span>
        <TimeFromNow value={card.createdOn} />
      </div>
    </div>
    {children}
  </div>
)

BlogLayout.propTypes = {
  card: PropTypes.object.isRequired,
  children: PropTypes.node.isRequired,
}

export default BlogLayout
