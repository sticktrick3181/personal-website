import React from 'react'
import { promises as fs } from 'fs'
// eslint-disable-next-line
import path from 'path'
import PageHead from 'components/PageHead'
import SectionTitle from 'components/SectionTitle'
import LifeUpdatesOverview from 'components/LifeUpdatesOverview'
import BlogCard from 'components/BlogCard'
import ExternalLink from 'components/ExternalLink'

const HomePage = ({ blogs }) => {
  return (
    <div className="space-y-16">
      <PageHead />
      <section>
        <SectionTitle title="Hey!" />
        <p className="text-gray-900 dark:text-gray-200 text-3xl my-4">
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
        </p>
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
    </div>
  )
}

export async function getStaticProps() {
  const blogsDirectory = path.join(process.cwd(), 'pages/blog')
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
