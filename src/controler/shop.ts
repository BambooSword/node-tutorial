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

export const getCart: RequestHandler = async (req, res, next) => {
  res.render('shop/cart', {
    pageTitle: 'Your Cart',
    path: '/cart',
    products: await Cart.getProducts(),
  })
}

export const postCart: RequestHandler = async (req, res, next) => {
  const productId = req.body.productId
  const product = await Product.findById(productId)
  Cart.addProduct(productId, product.price)
  res.redirect('/cart')
}
export const deleteCartItem: RequestHandler = async (req, res, next) => {
  const productId = req.params.productId

  const price: string = req.body.price
  console.log(
    '🚀 ~ file: shop.ts:52 ~ constdeleteCartItem:RequestHandler= ~ price:',
    price
  )

  const product = await Cart.deleteById(productId, price)
  console.log('🚀 ~ file: shop.ts:42 ~ productId:', product)
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
