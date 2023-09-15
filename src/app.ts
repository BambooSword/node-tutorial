import https from 'node:https'
import fs from 'node:fs'
import { URL } from 'node:url'
import express from 'express'
import bodyParser from 'body-parser'
import adminRouter from './routes/admin.js'
import shopRouter from './routes/shop.js'

const options = {
  key: fs.readFileSync(new URL('../localhost-key.pem', import.meta.url)),
  cert: fs.readFileSync(new URL('../localhost.pem', import.meta.url)),
}

const app = express()
app.use(bodyParser.urlencoded({ extended: false }))
// app.use(express.urlencoded({ extended: false }))
app.use('/admin', adminRouter)
app.use(shopRouter)

app.use((req, res, next) => {
  res
    .status(404)
    .sendFile(new URL('../views/404.html', import.meta.url).pathname)
})
// const server = http.createServer(app)

// server.listen(3000)
https.createServer(options, app).listen(3000)
