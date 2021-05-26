import { createClient } from 'contentful'

const CF_SPACE_ID = '7x9gptchgr9g' // ID of a Compose-compatible space to be us$
// eslint-disable-next-line
const CF_DELIVERY_ACCESS_TOKEN = process.env.PERSONAL_WEBSITE_CF_TOKEN // delive$

const client = createClient({
  space: CF_SPACE_ID,
  accessToken: CF_DELIVERY_ACCESS_TOKEN,
})

export default client
