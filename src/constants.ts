const API_URL = process.env.NODE_ENV === 'production'
  ? 'https://api-pub.bitfinex.com/v2/'
  : '/api' // on development, we'll use the Webpack's dev server to redirect the request

export { API_URL }
