import GetAbsoluteURLFromRelativeURL from 'utils/GetAbsoluteURLFromRelativeURL'

const COMMON_IMAGE = GetAbsoluteURLFromRelativeURL('/images/picture-circle.png')

const GetOGImageWithText = (textString) =>
  `https://og-image.nishant-singh.com/${encodeURI(
    textString
  )}.png?theme=dark&md=1&fontSize=100px&images=${COMMON_IMAGE}`

export default GetOGImageWithText
