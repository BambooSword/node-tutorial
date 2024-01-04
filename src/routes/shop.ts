import express from 'express'
import path from 'node:path'
import rootDir from '../utils/path.js'
import * as shopController from '../controler/shop.js'
const router = express.Router()

router.get('/', shopController.getIndex)

router.get('/products', shopController.getProducts)

router.get('/products/:productId', shopController.getProduct)

// router.get('/product/delete')

router.get('/cart', shopController.getCart)

router.post('/cart', shopController.postCart)
router.post('/delete-cart-item/:productId', shopController.deleteCartItem)

router.get('/orders', shopController.getOrders)

router.get('/checkout', shopController.getCheckout)
export default router
