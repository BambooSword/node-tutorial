import express from 'express'
import path from 'node:path'
import { open } from 'node:fs/promises'
import rootDir from '../utils/path.js'
const router = express.Router()
router.get('/', (req, res, next) => {
  const url = new URL('../../views/shop.html', import.meta.url)
  console.log('🚀 ~ file: shop.ts:7 ~ router.get ~ url:', url)
  // res.sendFile(path.join(rootDir, 'views', 'shop.html'))
  const users: string[] = []
  return open('users.txt').then(async file => {
    for await (const line of file.readLines()) {
      users.push(line)
    }
    res.render('shop', { prods: users, docTitle: 'My Shop' }) // shop.pug
  })
})
export default router
