import express from 'express'
import next from 'next'
import apiRoutes from './backend/routes'

require('dotenv').config()

const port = parseInt(process.env.PORT, 10)
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

app.prepare().then(() => {
  const server = express()
  server.use('/api', apiRoutes)
  server.get('*', (req, res) => handle(req, res))

  server.listen(port, err => {
    if (err) throw err
    console.log(`> Ready on http://localhost:${port}`)
  })
})
