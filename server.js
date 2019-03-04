const express = require('express')
const next = require('next')
var enforce = require('express-sslify');

const port = parseInt(process.env.PORT, 10) || 3000
// NODE_ENV is used for next.js ONLY
// NODE_ENVIRONMENT is used for custom environment checking
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

app.prepare().then(() => {
  const server = express()

  if (process.env.NODE_ENVIRONMENT === 'production') {
    server.use(enforce.HTTPS({ trustProtoHeader: true }));
  }

  server.get('*', (req, res) => {
    return handle(req, res)
  })

  server.listen(port, err => {
    if (err) throw err
    console.log(`> Ready on http://localhost:${port}`)
  })
})
