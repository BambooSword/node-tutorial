import { open } from 'node:fs/promises'
import type { RequestHandler } from 'express'
import User from '../models/product.js'

const getShop: RequestHandler = async (req, res, next) => {
  const url = new URL('../../views/shop.html', import.meta.url)
  console.log('🚀 ~ file: shop.ts:7 ~ router.get ~ url:', url)
  // res.sendFile(path.join(rootDir, 'views', 'shop.html'))

  const users = await User.fetchAll()
  res.render('shop', { prods: users, docTitle: 'My Shop', path: '/' }) // shop.pug
}
export { getShop }
