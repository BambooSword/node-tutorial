import express from 'express'
import { URL } from 'node:url'
const router = express.Router()
router.get('/', (req, res, next) => {
  const url = new URL('../../views/shop.html', import.meta.url)
  res.sendFile(url.pathname)
})
export default router
