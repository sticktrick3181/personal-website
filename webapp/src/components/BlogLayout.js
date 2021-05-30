import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import PageHead from 'components/PageHead'
import TimeFromNow from 'components/TimeFromNow'
import { withRouter } from 'next/router'
import GetAbsoluteURLFromRelativeURL from 'utils/GetAbsoluteURLFromRelativeURL'
import GetOGImageWithText from 'utils/GetOGImageWithText'
import Image from 'next/image'
import analyticsService from 'utils/analyticsService'

const BlogLayout = ({ children, meta, router }) => {
  const [views, setViews] = useState(null)

  useEffect(() => {
    analyticsService.getViews(router.pathname).then((data) => setViews(data))
  }, [])

  return (
    <div className="prose prose-xl dark:prose-light">
      <PageHead
        title={meta.title}
        meta={{
          type: 'article',
          url: GetAbsoluteURLFromRelativeURL(router.pathname),
          image: GetOGImageWithText('Nishant Singh • Blog'),
          ...meta,
        }}
      />
      <h1 className="text-3xl md:text-5xl">{meta.title}</h1>
      <div className="text-sm flex items-center">
        <Image
          src="/images/picture-circle.png"
          layout="fixed"
          className="rounded-full"
          height={40}
          width={40}
        />
        <div className="ml-2">
          <p className="font-bold m-0">Nishant Singh</p>
          <span>Published&nbsp;</span>
          <TimeFromNow value={meta.createdOn} />
        </div>
      </div>
      {children}
      {Boolean(views) && (
        <div className="mt-20">
          <p className="text-gray-800 uppercase font-semibold tracking-wider text-base dark:text-blue-200 flex items-center">
            <span>{`${views} views`}</span>
          </p>
        </div>
      )}
    </div>
  )
}

BlogLayout.propTypes = {
  meta: PropTypes.object.isRequired,
  children: PropTypes.node.isRequired,
  router: PropTypes.object.isRequired,
}

export default withRouter(BlogLayout)
