import express from 'express'

const router = express.Router()

router.get('/', (req, res, next) => {
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
})

export default router
