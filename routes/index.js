const express = require('express')
const router = express.Router()
const generateShortUrl = require('../tools/general')

router.get('/', (req, res) => {
  res.render('index')
})

router.post('/', (req, res) => {
  console.log('req', req)
  res.render('success', { url: req.body.url, shortUrl: generateShortUrl(5) })
})

module.exports = router
