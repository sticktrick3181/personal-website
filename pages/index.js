import React from 'react'
import Lazyload from 'components/Lazyload'
import { promises as fs } from 'fs'
// eslint-disable-next-line
import path from 'path'
import SectionTitle from 'components/SectionTitle'
import BlogCard from 'components/BlogCard'
import CodeIcon from 'icons/Code'

const sectionClass = 'my-4 py-4'

const SocialContactsBar = Lazyload(
  () => import('components/SocialContactsBar'),
  () => <div className="h-10" />
)

const HomePage = ({ blogs }) => {
  return (
    <div>
      <section className={sectionClass}>
        <SectionTitle title="Hey!" />
        <p className="text-gray-900 dark:text-gray-200 text-3xl my-4">
          My name is Nishant Singh. I am a technology enthusiast and I love to
          build things. A full-stack developer by profession, I am passionate
          about the future of education &amp; software. I also founded&nbsp;
          <a
            className="text-blue-700 dark:text-blue-400"
            href="https://ylurn.com"
            target="_blank"
            rel="noreferrer"
          >
            Ylurn
          </a>
          , an Ed-Tech SaaS.
        </p>
      </section>
      <section className={sectionClass}>
        <SectionTitle title="Blogs" />
        <div className="mt-4">
          {blogs.map((blog) => (
            <BlogCard key={blog.meta.title} blog={blog} />
          ))}
        </div>
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
            <CodeIcon className="h-6 inline-block align-middle mr-1" /> Source
            of this website
          </a>
        </p>
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
