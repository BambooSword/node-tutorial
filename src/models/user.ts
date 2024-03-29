import fs, { open } from 'node:fs/promises'
import os from 'node:os'
import { URL } from 'node:url'
const dataFile = new URL('../../data/users.json', import.meta.url)
export default class User {
  constructor(public name: string) {}
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
    const users: { name: string }[] = await fs
      .readFile(dataFile, {
        encoding: 'utf-8',
      })
      .then(async file => {
        return JSON.parse(file || '[]')
      })
    return users
  }
}
