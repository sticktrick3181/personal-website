import React from 'react'
import { promises as fs } from 'fs'
// eslint-disable-next-line
import path from 'path'
import PageHead from 'components/PageHead'
import SectionTitle from 'components/SectionTitle'
import LifeUpdatesOverview from 'components/LifeUpdatesOverview'
import BlogCard from 'components/BlogCard'
import { ExternalLinkIcon } from '@heroicons/react/solid'
import { motion } from 'framer-motion'
import ExternalLink from 'components/ExternalLink'
import Link from 'next/link'

const HomePage = ({ blogs }) => {
  return (
    <div className="space-y-16">
      <PageHead />
      <section>
        <SectionTitle title="Hey!" />
        <h1 className="text-gray-900 dark:text-gray-200 text-3xl my-4">
          My name is Nishant Singh. I am a technology enthusiast who loves to
          build things. A full-stack developer by profession, I am passionate
          about the future of education &amp; software. I am currently part of
          the amazing team at&nbsp;
          <ExternalLink
            className="text-blue-700 dark:text-blue-400"
            href="https://mydukaan.io"
          >
            Dukaan
          </ExternalLink>
          . In the past I founded&nbsp;
          <ExternalLink
            className="text-blue-700 dark:text-blue-400"
            href="https://ylurn.com"
          >
            Ylurn
          </ExternalLink>
          , an Ed-Tech SaaS.
        </h1>
      </section>
      <section>
        <SectionTitle title="Life Updates" />
        <LifeUpdatesOverview />
      </section>
      <section>
        <SectionTitle title="Blogs" />
        <div className="mt-6">
          {blogs.map((blog) => (
            <div key={blog.meta.title} className="mb-6">
              <BlogCard blog={blog} />
            </div>
          ))}
        </div>
      </section>
      <section>
        <SectionTitle title="My Setup" />
        <Link href="/setup">
          <motion.a
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.1 }}
            className="mt-6 block bg-blue-100 dark:bg-blue-900 p-6 rounded-xl border-transparent hover:border-blue-500 border-2 cursor-pointer shadow-lg"
          >
            <p className="text-2xl text-gray-700 dark:text-gray-200 flex items-center">
              <span>A list of my favourite hardware and software tools</span>
              <ExternalLinkIcon className="h-6 flex-shrink-0 text-blue-500 dark:text-gray-400 ml-1" />
            </p>
          </motion.a>
        </Link>
      </section>
    </div>
  )
}

export async function getStaticProps() {
  const blogsDirectory = path.join(process.cwd(), 'src/pages/blog')
  const filenames = await fs.readdir(blogsDirectory)

  const blogs = filenames.map(async (fileName) => {
    const blogSlug = fileName.split('.')[0]
    const { meta } = await import(`./blog/${fileName}`)
    return {
      slug: blogSlug,
      meta,
    }
  })
  return {
    props: {
      blogs: await Promise.all(blogs),
    },
  }
}

export default HomePage
