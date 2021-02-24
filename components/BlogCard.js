import React from 'react'
import PropTypes from 'prop-types'
import Link from 'next/link'

const BlogCard = ({ blog }) => (
  <Link href={`blog/${blog.slug}`}>
    <div className="p-6 rounded-2xl bg-white dark:bg-gray-700 shadow-lg hover:shadow-sm cursor-pointer">
      <p className="text-xl text-gray-700 dark:text-gray-200">
        {blog.meta.title}
      </p>
    </div>
  </Link>
)

BlogCard.propTypes = {
  blog: PropTypes.object.isRequired,
}

export default BlogCard
