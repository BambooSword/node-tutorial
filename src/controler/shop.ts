import type { RequestHandler } from 'express'
import Product from '../models/product.js'
export const getProducts: RequestHandler = async (req, res, next) => {
  const products = await Product.fetchAll()
  res.render('shop/product-list', {
    pageTitle: 'All Products',
    path: '/products',
    products: products,
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
