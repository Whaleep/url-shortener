const express = require('express')
const exphbs = require('express-handlebars')
const app = express()

app.engine('hbs', exphbs({ defaultLayout: 'main', extname: '.hbs' }))
app.set('view engine', 'hbs')

app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res) => {
  res.render('index')
})

app.post('/', (req, res) => {
  res.render('success', { url: req.body.url , shortUrl: 'Here will return a short URL.'})
})

app.use(express.static('public'))

app.listen(3000, () => {
  console.log('The app is running on http://localhost:3000')
})

