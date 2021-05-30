const BASE_API_URL =
  process.env.NODE_ENV === 'development'
    ? 'http://localhost:3000/api'
    : 'https://nishant-singh.com/api'

export default {
  incrementViews: (path) => {
    try {
      fetch(`${BASE_API_URL}/views?path=${path}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({}),
      })
    } catch (err) {
      // eslint-disable-next-line
      console.log('error incrementing views: ', err)
    }
  },
  getViews: async (path) => {
    let views = null
    try {
      const data = await fetch(
        `${BASE_API_URL}/views?${path ? `path=${path}` : ''}`,
        {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        }
      ).then((response) => response.json())
      views = data.views
    } catch (err) {
      // eslint-disable-next-line
      console.log('error incrementing views: ', err)
    }
    return views
  },
}
