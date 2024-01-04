import fs from 'node:fs/promises'
import { URL } from 'node:url'
const dataFile = new URL('../../data/users.json', import.meta.url)
export default class User {
  constructor(
    public id: string,
    public title: string,
    public imageUrl: string,
    public description: string,
    public price: string
  ) {}
  async save() {
    let users: User[] = []
    try {
      const file = await fs.readFile(dataFile, { encoding: 'utf-8' })
      users = JSON.parse(file || '[]')
    } catch (error) {
      // Handle file read error
    }

    const existingProductIndex = users.findIndex(
      (item: User) => item.id === this.id
    )

    if (existingProductIndex !== -1) {
      users[existingProductIndex] = this
    } else {
      this.id = Math.random().toString()
      users.push(this)
    }

    try {
      await fs.writeFile(dataFile, JSON.stringify(users))
    } catch (error) {
      // Handle file write error
    }
  }

  static async fetchAll() {
    const users: User[] = await fs
      .readFile(dataFile, {
        encoding: 'utf-8',
      })
      .then(async file => {
        return JSON.parse(file || '[]')
      })
    return users
  }

  static async findById(id: string) {
    const product = await fs
      .readFile(dataFile, { encoding: 'utf-8' })
      .then(file => {
        return JSON.parse(file || '[]').find(
          (item: User) => item.id === id
        ) as User
      })

    return product
  }
  static async deleteById(id: string) {
    const users = await fs
      .readFile(dataFile, { encoding: 'utf-8' })
      .then(file => {
        return JSON.parse(file || '[]')
      })
    const updatedUsers = users.filter((item: User) => item.id !== id)

    fs.writeFile(dataFile, JSON.stringify(updatedUsers))
  }
}
