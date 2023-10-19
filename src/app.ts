import https from 'node:https'
import fs from 'node:fs'
import { URL } from 'node:url'
import express from 'express'
// import bodyParser from 'body-parser'
import adminRouter from './routes/admin.js'
import shopRouter from './routes/shop.js'
import { get404 } from './controler/error.js'
const options = {
  key: fs.readFileSync(new URL('../localhost-key.pem', import.meta.url)),
  cert: fs.readFileSync(new URL('../localhost.pem', import.meta.url)),
}

const app = express()

app.set('view engine', 'pug')
app.set('views', 'views')
// app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.static(new URL('../public', import.meta.url).pathname))
app.use(express.urlencoded({ extended: false }))
app.use('/admin', adminRouter)
app.use(shopRouter)

app.use(get404)
// const server = http.createServer(app)

// server.listen(3000)
https.createServer(options, app).listen(3000)
