import fs from 'node:fs/promises'
import { URL } from 'node:url'
const dataFile = new URL('../../data/users.json', import.meta.url)
export default class User {
  public id: string
  constructor(
    public title: string,
    public imageUrl: string,
    public description: string,
    public price: string
  ) {
    this.id = Math.random().toString()
  }
  async save() {
    const users = await fs
      .readFile(dataFile, { encoding: 'utf-8' })
      .then(file => {
        return JSON.parse(file || '[]')
      })
    users.push(this)
    fs.writeFile(dataFile, JSON.stringify(users))
  }

  static async fetchAll() {
    const users: { title: string }[] = await fs
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
}
