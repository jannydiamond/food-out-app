import http from 'http'
import express from 'express'
import bodyParser from 'body-parser'
import dotenv from 'dotenv'

import config from './config'
import routes from './routes'

const app = express()

app.server = http.createServer(app)

dotenv.config()

// middleware
// parse application/json
app.use(bodyParser.json({
  limit: config.bodyLimit
}))

// passport config

// api routes
app.use('/api', routes)

app.server.listen(config.port)
console.log(`Started listening on port ${app.server.address().port}`)

export default app
