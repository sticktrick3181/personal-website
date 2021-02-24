import React from 'react'
import PropTypes from 'prop-types'
import PageHead from 'components/PageHead'

const BlogLayout = ({ children, card }) => (
  <div className="prose prose-lg dark:prose-light">
    <PageHead title={card.title} card={card} />
    {children}
  </div>
)

BlogLayout.propTypes = {
  card: PropTypes.object.isRequired,
  children: PropTypes.node.isRequired,
}

export default BlogLayout
