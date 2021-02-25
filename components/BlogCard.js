import React from 'react'
import PropTypes from 'prop-types'
import Link from 'next/link'
import TimeFromNow from 'components/TimeFromNow'

const BlogCard = ({ blog }) => (
  <Link href={`blog/${blog.slug}`}>
    <div className="p-6 rounded-2xl bg-white dark:bg-gray-700 shadow-md hover:shadow-xl cursor-pointer border-2 border-transparent hover:border-blue-500">
      <p className="text-xl text-gray-800 dark:text-gray-200">
        {blog.meta.title}
      </p>
      <p className="text-base text-gray-600 dark:text-gray-400">
        <TimeFromNow value={blog.meta.createdOn} />
      </p>
    </div>
  </Link>
)

BlogCard.propTypes = {
  blog: PropTypes.object.isRequired,
}

export default BlogCard
