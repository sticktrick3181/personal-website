const incrementViews = (path) => {
  const BASE_API_URL =
    process.env.NODE_ENV === 'development'
      ? 'http://localhost:3000/api'
      : 'https://nishant-singh.com/api'
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
}

export default incrementViews
