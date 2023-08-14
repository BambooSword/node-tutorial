// import { URL } from 'url'
import http from 'node:http'
import requestHandler from './routes.js'
// console.log(
//   '🚀 ~ file: app.ts:5 ~ import.meta.url:',
//   new URL('', import.meta.url)
// )
// console.log(
//   '🚀 ~ file: app.ts:5 ~ import.meta.url:',
//   new URL('.', import.meta.url)
// )

const server = http.createServer(requestHandler)

server.listen(8080)
