import type { RequestHandler } from 'express'
const get404: RequestHandler = (req, res, next) => {
  res.status(404).render('404', { docTitle: 'Not Find' })
}

export { get404 }
