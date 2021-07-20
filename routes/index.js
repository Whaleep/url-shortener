const express = require('express')
const router = express.Router()

const generateShortUrl = require('../tools/general')
const Shorturl = require('../models/shorturl')

router.get('/', (req, res) => {
  res.render('index')
})

router.post('/', async (req, res) => {
  const url = req.body.url.trim().replace(/\/$/, '')
  if (!url) res.redirect('/')

  // check if the URL exist
  let checkUrl = async (url) => {
    try {
      const shorturl = await Shorturl.find({ url }).lean().exec()
      if (shorturl.length === 1) {
        return shorturl[0].id
      } else {
        return false
      }
    } catch (err) {
      return 'error occured'
    }
  }

  // check if the id exist
  let checkId = async (id) => {
    try {
      const findId = await Shorturl.find({ id }).lean().exec()
      return findId.length
    } catch (err) {
      return 'error occured'
    }
  }

  let id = await checkUrl(url)

  if (id) {
    res.render('success', { url, id })
  } else {
    do {
      id = generateShortUrl(5)
    } while (await checkId(id))
    Shorturl.create({ url, id })
      .then(() => {
        return res.render('success', { url, id })
      })
      .catch(error => console.log(error))
  }

})

router.get('/:id', (req, res) => {
  Shorturl.find({ id: req.params.id })
    .lean()
    .then(result => {
      if (result.length === 1) {
        res.redirect(result[0].url)
      } else {
        res.redirect('/')
      }
    })
    .catch(error => console.log(error))
})

module.exports = router
