import fs from 'node:fs/promises'
import type { IncomingMessage, ServerResponse } from 'node:http'

const requestHandler = (req: IncomingMessage, res: ServerResponse) => {
  const url = req.url
  const method = req.method

  if (url === '/') {
    res.write(`
    <html>
      <head>
        <title>index</title>
      </head>
      <body>
        <h1>Hello world</h1>
        <form action="/message" method="POST">
          <input type="text" name="message"><button type="submit">SUBMIT</button></input>
        </form>
      </body>
    </html> 
  `)
    return res.end()
  }

  if (url === '/message' && method === 'POST') {
    const body: Uint8Array[] = []
    req.on('data', chunk => {
      console.log('🚀 ~ file: app.ts:38 ~ req.on ~ chunk:', chunk)
      body.push(chunk)
    })
    return req.on('end', () => {
      const parsedBody = Buffer.concat(body).toString()
      console.log('🚀 ~ file: app.ts:43 ~ req.on ~ parsedBody:', parsedBody)
      const msg = parsedBody.split('=')[1]
      fs.writeFile('message.txt', msg).then(_ => {
        res.statusCode = 302
        res.setHeader('Location', '/')
        return res.end()
      })
    })
  }

  res.setHeader('Content-Type', 'text/html')
  res.write(`
  <html>
    <head>
      <title>index</title>
    </head>
    <body>
      <h1>Hello world</h1>
    </body>
  </html> 
`)
  res.end()
}

export default requestHandler
