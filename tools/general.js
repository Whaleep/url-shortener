// define sample function to randomly return an item in an array (string can also)
function sample (array) {
  const index = Math.floor(Math.random() * array.length)
  return array[index]
}

// define generate short URL according to the specified length
function generateShortUrl (length) {
  const lowerCaseLetters = 'abcdefghijklmnopqrstuvwxyz'
  const upperCaseLetters = lowerCaseLetters.toUpperCase()
  const numbers = '1234567890'

  const collection = lowerCaseLetters + upperCaseLetters + numbers
  let shortUrl = ''

  for (let i = 0; i < length; i++) {
    shortUrl += sample(collection)
  }
  return shortUrl
}

module.exports = generateShortUrl
