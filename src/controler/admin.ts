import Product from '../models/product.js'
import type { RequestHandler } from 'express'
import requestHandler from '../routes.js'

const postAddProduct: RequestHandler = (req, res, next) => {
  // const title = req.body.title;
  // const imageUrl = req.body.imageUrl;
  // const price = req.body.price;
  // const descripiton = req.body.description;

  // const product = new Product(title, imageUrl, price, description);

  const product = new Product(
    req.body.title,
    req.body.imageUrl,
    req.body.description,
    req.body.price
  )
  product.save()
  res.redirect('/')
}

const getAddProduct: RequestHandler = (req, res, next) => {
  res.render('admin/add-product', {
    pageTitle: 'Add Product',
    path: '/admin/add-product',
  })
}

const getEditProduct: RequestHandler = (req, res, next) => {
  // fetch the specific product details
  const product = {}
  res.render('admin/edit-product', {
    pageTitle: '',
    path: '/admin/edit-product',
    product: product,
  })
}
const postEditProduct: RequestHandler = (req, res, next) => {}

const getProducts: RequestHandler = async (req, res, next) => {
  const products = await Product.fetchAll()
  res.render('admin/product-list', {
    pageTitle: 'Admin Product',
    path: '/admin/products',
    products: products,
  })
}
export {
  postAddProduct,
  getAddProduct,
  getEditProduct,
  postEditProduct,
  getProducts,
}
