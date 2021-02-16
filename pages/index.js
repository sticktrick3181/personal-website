import React from 'react'
import Lazyload from 'components/Lazyload'
import CodeIcon from '../icons/Code'

const sectionClass = 'my-4 py-4'

const SocialContactsBar = Lazyload(
  () => import('components/SocialContactsBar'),
  () => <div className="h-10" />
)

const SectionTitle = ({ title }) => (
  <div className="text-4xl font-semibold">
    <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
      {title}
    </span>
  </div>
)

const HomePage = () => {
  return (
    <div>
      <section className={sectionClass}>
        <SectionTitle title="Hey!" />
        <p className="text-gray-900 dark:text-gray-200 text-3xl my-4">
          My name is Nishant Singh. I am a technology enthusiast and I love to
          build. A full-stack developer by profession, I am passionate about the
          future of education &amp; software.
        </p>
      </section>
      <section className={sectionClass}>
        <SectionTitle title="Contact" />
        <div className="py-2">
          <SocialContactsBar />
        </div>
      </section>
      <section className={sectionClass}>
        <p>
          <a
            className="text-blue-800 dark:text-blue-200"
            href="https://github.com/inishant/personal-website"
            target="_blank"
            rel="noreferrer"
          >
            <CodeIcon className="h-4 inline-block align-middle mr-1" /> Source
            of this website
          </a>
        </p>
      </section>
    </div>
  )
}

export default HomePage
