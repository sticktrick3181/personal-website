import React from 'react'
import { promises as fs } from 'fs'
// eslint-disable-next-line
import path from 'path'
import PageHead from 'components/PageHead'
import SectionTitle from 'components/SectionTitle'
import BlogCard from 'components/BlogCard'

const sectionClass = 'my-4 py-4'

const HomePage = ({ blogs }) => {
  return (
    <div>
      <PageHead />
      <section className={sectionClass}>
        <SectionTitle title="Hey!" />
        <p className="text-gray-900 dark:text-gray-200 text-3xl my-4">
          My name is Nishant Singh. I am a technology enthusiast who loves to
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
