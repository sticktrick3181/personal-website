import React from 'react'
import PropTypes from 'prop-types'
import Link from 'next/link'
import { motion } from 'framer-motion'
import TimeFromNow from 'components/TimeFromNow'

const BlogCard = ({ blog }) => (
  <Link href={`blog/${blog.slug}`} passHref>
    <motion.div
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.1 }}
      className="p-6 rounded-2xl bg-white dark:bg-gray-700 shadow-md hover:shadow-xl cursor-pointer border-2 border-transparent hover:border-blue-500"
    >
      <p className="text-2xl text-gray-900 dark:text-gray-100">
        {blog.meta.title}
      </p>
      <p className="text-base text-gray-600 dark:text-gray-400">
        <TimeFromNow value={blog.meta.createdOn} />
      </p>
    </motion.div>
  </Link>
)

BlogCard.propTypes = {
  blog: PropTypes.object.isRequired,
}

export default BlogCard
