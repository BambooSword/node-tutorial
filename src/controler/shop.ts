import type { RequestHandler } from 'express'
import Product from '../models/product.js'
import Cart from '../models/cart.js'

export const getProducts: RequestHandler = async (req, res, next) => {
  const products = await Product.fetchAll()
  res.render('shop/product-list', {
    pageTitle: 'All Products',
    path: '/products',
    products: products,
  })
}

export const getProduct: RequestHandler = async (req, res, next) => {
  const productId = req.params.productId
  console.log('🚀 ~ file: shop.ts:14 ~ productId:', productId)
  const product = await Product.findById(productId)

  res.render('shop/product-details', {
    product,
    pageTitle: product.title,
    path: '/products',
  })
}

export const getIndex: RequestHandler = async (req, res, next) => {
  const products = await Product.fetchAll()
  res.render('shop/index', {
    pageTitle: 'Shop',
    path: '/',
    products: products,
  })
}

export const getCart: RequestHandler = (req, res, next) => {
  res.render('shop/cart', {
    pageTitle: 'Your Cart',
    path: '/cart',
  })
}

export const postCart: RequestHandler = async (req, res, next) => {
  const productId = req.body.productId
  const product = await Product.findById(productId)
  console.log('🚀 ~ file: shop.ts:42 ~ productId:', productId)
  Cart.addProduct(productId, product.price)
  res.redirect('/cart')
}
export const getOrders: RequestHandler = (req, res, next) => {
  res.render('shop/orders', {
    pageTitle: 'Your Orders',
    path: '/orders',
  })
}

export const getCheckout: RequestHandler = (req, res, next) => {
  res.render('shop/checkout', {
    pageTitle: 'Checkout',
    path: '/checkout',
  })
}
