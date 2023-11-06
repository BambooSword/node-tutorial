import fs from 'node:fs/promises'
import { URL } from 'node:url'
import Products from './product.js'

const dataFile = new URL('../../data/cart.json', import.meta.url)

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
    console.log('🚀 ~ file: cart.ts:41 ~ Cart ~ addProduct ~ cart:', cart)
  }
}
