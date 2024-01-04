import fs from 'node:fs/promises'
import { URL } from 'node:url'
import Products from './product.js'
import path from 'node:path'

const dataFile = path.join(process.cwd(), 'data/cart.json') // new URL('../../data/cart.json', import.meta.url)
console.log('🚀 ~ file: cart.ts:7 ~ dataFile:', dataFile)

interface ICart {
  products: { id: string; quality: number }[]
  totalPrice: number
}

export default class Cart {
  static async addProduct(id: string, productPrice: string) {
    // get the data
    const cart = await fs
      .readFile(dataFile, {
        encoding: 'utf-8',
      })
      .then(file => {
        return JSON.parse(file) as ICart
      })
      .catch(err => {
        return {
          products: [],
          totalPrice: 0,
        } as ICart
      })
    const { products } = cart
    // is the id in cart
    const one = products.find(item => item.id === id)
    if (one) {
      one.quality += 1
    } else {
      products.push({ id, quality: 1 })
    }
    // add the price
    cart.totalPrice += +productPrice

    // save to the database
    fs.writeFile(dataFile, JSON.stringify(cart))
  }
  static async getProducts() {
    const cart = await fs
      .readFile(dataFile, {
        encoding: 'utf-8',
      })
      .then(file => {
        return JSON.parse(file) as ICart
      })
    const { products } = cart
    const productIds = products.map(item => item.id)
    const productsInCart = await Products.fetchAll()
    return productsInCart.filter(item => productIds.includes(item.id))
  }
  static async deleteById(id: string, productPrice: string) {
    const cart = await fs
      .readFile(dataFile, {
        encoding: 'utf-8',
      })
      .then(file => {
        return JSON.parse(file) as ICart
      })
    const { products } = cart
    const one = products.find(item => item.id === id)
    if (one) {
      // add the price
      cart.totalPrice -= +productPrice * one.quality
      cart.products = cart.products.filter(item => item.id !== id)
      // save to the database
      fs.writeFile(dataFile, JSON.stringify(cart))
    }

    console.log('🚀 ~ file: cart.ts:41 ~ Cart ~ addProduct ~ cart:', cart)
  }
}
