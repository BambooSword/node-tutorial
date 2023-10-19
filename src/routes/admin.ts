import express from 'express'

import { URL } from 'node:url'
import { renderUser, createUser, getUsers } from '../controler/user.js'
const router = express.Router()

router.get('/create-user', renderUser)
router.post('/create-user', createUser)

router.get('/users', getUsers)
export default router
