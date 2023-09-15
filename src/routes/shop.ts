import express from 'express'
import path from 'node:path'
import rootDir from '../utils/path.js'
const router = express.Router()
router.get('/', (req, res, next) => {
  const url = new URL('../../views/shop.html', import.meta.url)
  console.log('🚀 ~ file: shop.ts:7 ~ router.get ~ url:', url)
  // path.join()
  res.sendFile(path.join(rootDir, 'views', 'shop.html'))
})
export default router
