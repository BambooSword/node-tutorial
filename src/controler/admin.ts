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
    Math.random().toString(),
    req.body.title,
    req.body.imageUrl,
    req.body.description,
    req.body.price
  )
  product.save()
  res.redirect('/')
}

const getAddProduct: RequestHandler = (req, res, next) => {
  res.render('admin/edit-product', {
    pageTitle: 'Add Product',
    path: '/admin/add-product',
  })
}

const getEditProduct: RequestHandler = (req, res, next) => {
  // fetch the specific product details
  const product = {}
  const editMode = req.query.editing
  // if (!editMode) {
  //   res.redirect('/')
  // }

  const prodId = req.params.productId
  Product.findById(prodId).then(product => {
    if (!product) {
      return res.redirect('/')
    }
    res.render('admin/edit-product', {
      pageTitle: 'Edit Product',
      path: '/admin/edit-product',
      editing: editMode,
      product: product,
    })
  })
}
const postEditProduct: RequestHandler = (req, res, next) => {
  const prod = {
    id: req.params.productId,
    title: req.body.title,
    imageUrl: req.body.imageUrl,
    description: req.body.description,
    price: req.body.price,
  }
  console.log('🚀 ~ file: admin.ts:60 ~ prod:', prod)
  const product = new Product(
    ...(Object.values(prod) as [string, string, string, string, string])
  )
  product.save()
  res.redirect('/admin/products')
}
const postDeleteProduct: RequestHandler = (req, res, next) => {
  const prodId = req.params.productId
  console.log('🚀 ~ file: admin.ts:54 ~ prodId:', prodId)
  Product.deleteById(prodId).then(() => {
    res.redirect('/admin/products')
  })
}

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
  postDeleteProduct,
}
