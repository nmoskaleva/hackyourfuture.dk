export const getApi = () =>
  window.location.hostname === 'hackyourfuture.dk'
    ? 'https://tdla96bnzi.execute-api.eu-central-1.amazonaws.com/production'
    : 'http://localhost:3001'
