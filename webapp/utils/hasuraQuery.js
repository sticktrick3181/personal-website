const logHasuraError = (error) => {
  console.log('error occurred in hasuraQuery: ', error)
}

const HASURA_GRAPHQL_ENDPOINT = 'https://personal-website.hasura.app/v1/graphql'
// eslint-disable-next-line
const HASURA_ADMIN_SECRET = process.env.HASURA_ADMIN_SECRET

const hasuraQuery = (queryString) => {
  // particular format used by hasura
  const requestBodyJson = { query: queryString }
  // create a new promise
  // because hasura resolve promises even on error
  // responses
  const p = new Promise((resolve, reject) => {
    fetch(HASURA_GRAPHQL_ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-hasura-admin-secret': HASURA_ADMIN_SECRET,
      },
      body: JSON.stringify(requestBodyJson),
    })
      .then(
        (response) => response.json(),
        (error) => {
          logHasuraError(error)
          reject(error)
        }
      )
      .then((jsonData) => {
        if (jsonData.errors) {
          logHasuraError(jsonData.errors)
          reject(jsonData.errors)
        } else {
          resolve(jsonData.data)
        }
      })
  })
  return p
}

export default hasuraQuery
