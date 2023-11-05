// import type { RequestHandler } from 'express'
// import User from '../models/product.js'
// const renderUser: RequestHandler = (req, res, next) => {
//   // res.sendFile(
//   //   new URL('../../views/add-product.html', import.meta.url).pathname
//   // )
//   res.render('add-product', {
//     docTitle: 'Add The Product',
//     path: '/admin/create-user',
//   })
// }

// const createUser: RequestHandler = (req, res, next) => {
//   const body: Uint8Array[] = []
//   console.log('====================================1')
//   console.log(req.body)
//   console.log('====================================1')
//   const user = new User(req.body.username)
//   user.save()
//   res.statusCode = 302
//   res.setHeader('Location', '/')
//   return res.end()
// }
// const getUsers: RequestHandler = async (req, res, next) => {
//   const users = await User.fetchAll()
//   return res.render('shop', { prods: users, docTitle: 'My Shop', path: '/' })
// }
// export { renderUser, createUser, getUsers }
