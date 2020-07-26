import React, { useEffect } from 'react'
import WebFont from 'webfontloader'

const LoadFonts = () => {
  useEffect(() => {
    WebFont.load({
      google: {
        families: ['Roboto&display=swap'],
        // make change in theme.typography to match this font
      },
    })
  }, [])

  return <div />
}

export default LoadFonts
