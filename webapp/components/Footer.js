import React, { useState, useEffect } from 'react'
import ExternalLink from 'icons/ExternalLink'
import Link from 'next/link'
import SocialContactsBar from 'components/SocialContactsBar'
import analyticsService from 'utils/analyticsService'

const Footer = () => {
  const [views, setViews] = useState(null)

  useEffect(() => {
    analyticsService.getViews().then((data) => setViews(data))
  }, [])

  return (
    <footer role="contentinfo" className="mt-40">
      <div
        className="w-screen relative left-1/2 right-1/2 h-0.5 bg-gray-200 dark:bg-gray-800"
        style={{
          marginLeft: '-50vw',
          marginRight: '-50vw',
        }}
      />
      <div className="pt-20 pb-40 px-4">
        <div className="grid grid-cols-2 gap-4">
          <div className="col-span-2 md:col-span-1 mb-10">
            <div>
              <p className="text-gray-700 mb-4 uppercase text-base font-semibold tracking-widest dark:text-gray-200">
                Find me on the internet
              </p>
              <div>
                <SocialContactsBar />
              </div>
            </div>
          </div>
          <div className="col-span-2 md:col-span-1 mb-10 space-y-4">
            <div>
              <a
                className="text-blue-800 uppercase font-semibold tracking-widest text-base dark:text-blue-200 flex items-center"
                href="https://github.com/inishant/personal-website"
                target="_blank"
                rel="noreferrer"
              >
                <span>Code for this website</span>
                <ExternalLink className="h-6 inline-block align-middle ml-1" />
              </a>
            </div>
            <div>
              <Link href="/resume">
                <a className="text-blue-800 uppercase font-semibold tracking-widest text-base dark:text-blue-200 flex items-center">
                  <span>Resume</span>
                </a>
              </Link>
            </div>
            {Boolean(views) && (
              <div>
                <p className="text-gray-800 uppercase font-semibold tracking-widest text-base dark:text-blue-200 flex items-center">
                  <span>{`${views} views`}</span>
                </p>
              </div>
            )}
          </div>
        </div>
        {/* <div className="grid grid-cols-2 gap-4">
          <div className="col-span-2 md:col-span-1 mb-10">
            <div>
              <p className="text-gray-700 uppercase text-base font-semibold tracking-widest dark:text-gray-200">
                THIS WEBSITE IS BUILT USING
              </p>
            </div>
          </div>
        </div> */}
      </div>
    </footer>
  )
}

export default Footer
