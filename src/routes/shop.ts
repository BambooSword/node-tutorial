import express from 'express'
import path from 'node:path'
import rootDir from '../utils/path.js'
import * as shopController from '../controler/shop.js'
const router = express.Router()

router.get('/', shopController.getIndex)

router.get('/products', shopController.getProducts)

router.get('/cart', shopController.getCart)

router.get('/orders', shopController.getOrders)

router.get('/checkout', shopController.getCheckout)
export default router
