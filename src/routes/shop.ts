import express from 'express'
import path from 'node:path'
import rootDir from '../utils/path.js'
import { getShop } from '../controler/products.js'
const router = express.Router()
router.get('/', getShop)
export default router
