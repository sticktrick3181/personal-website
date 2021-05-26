import React from 'react'
import { SocialIcon } from 'react-social-icons'
import PropTypes from 'prop-types'

const SocialIconBlock = ({ url }) => (
  <div className="inline-block mr-4">
    <SocialIcon url={url} target="_blank" className="h-10 w-10" />
  </div>
)

SocialIconBlock.propTypes = {
  url: PropTypes.string.isRequired,
}

export default SocialIconBlock
