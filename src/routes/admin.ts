import express from 'express'
import {
  getAddProduct,
  getProducts,
  postAddProduct,
  postEditProduct,
  postDeleteProduct,
  getEditProduct,
} from '../controler/admin.js'

const router = express.Router()

// /admin/add-product => GET
router.get('/add-product', getAddProduct)
router.get('/edit-product/:productId', getEditProduct)

// /admin/products => GET
router.get('/products', getProducts)

// /admin/edit-product => GET
router.post('/edit-product/:productId', postEditProduct)

// /admin/add-product => POST
router.post('/add-product', postAddProduct)
// /admin/delete-product => POST
router.post('/delete-product/:productId', postDeleteProduct)
export default router
