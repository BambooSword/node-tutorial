// import { URL } from 'url'
import http from 'node:http'

// console.log(
//   '🚀 ~ file: app.ts:5 ~ import.meta.url:',
//   new URL('', import.meta.url)
// )
// console.log(
//   '🚀 ~ file: app.ts:5 ~ import.meta.url:',
//   new URL('.', import.meta.url)
// )
function rqListener(req: http.IncomingMessage, res: http.ServerResponse) {
  console.log('🚀 ~ file: app.ts:13 ~ rqListener ~ req:', req)
}
const server = http.createServer(rqListener)

server.listen(8080)
