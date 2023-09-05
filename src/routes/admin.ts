import express from 'express'
import fs, { open } from 'node:fs/promises'
import os from 'node:os'
const router = express.Router()

router.get('/', (req, res, next) => {
  res.write(`
    <html>
      <head>
        <title>assignment 001</title>
      </head>
      <body>
        <h1>Hello world</h1>
        <form action="/create-user" method="POST">
          <input type="text" name="username"><button type="submit">SUBMIT</button></input>
        </form>
      </body>
    </html> 
  `)
  return res.end()
})
router.post('/create-user', (req, res, next) => {
  const body: Uint8Array[] = []
  console.log('====================================1')
  console.log(req.body)
  console.log('====================================1')
  return fs.appendFile('users.txt', req.body.username + os.EOL, {}).then(_ => {
    res.statusCode = 302
    res.setHeader('Location', '/')
    return res.end()
  })
})

router.get('/users', (req, res, next) => {
  const users: string[] = []
  return open('users.txt').then(async file => {
    for await (const line of file.readLines()) {
      users.push(line)
    }
    res.setHeader('Content-Type', 'text/html')
    res.write(`
			<html>
				<head>
					<title>user list</title>
				</head>
				<body>
					<ul>
					${users
            .map(user => {
              return `<li>${user}</li>`
            })
            .join('\b')}
					<ul/>
	
				</body>
			</html> 
		`)
    return res.end()
  })
})
export default router
