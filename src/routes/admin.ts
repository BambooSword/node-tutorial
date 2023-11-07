import express from 'express'
import {
  getAddProduct,
  getProducts,
  postAddProduct,
  getEditProduct,
} from '../controler/admin.js'

const router = express.Router()

// /admin/add-product => GET
router.get('/add-product', getAddProduct)
router.get('/edit-product/:productId', getEditProduct)

// /admin/products => GET
router.get('/products', getProducts)

// /admin/edit-product => GET
// router.get('/edit-product', adminController.getEditProduct);

// /admin/add-product => POST
router.post('/add-product', postAddProduct)
export default router
