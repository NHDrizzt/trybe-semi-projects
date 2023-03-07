const books = require('./data/books')

// Olha esse lint man, nao da nem pra fazer inline... yikes
const formatedBookNames = () => {
  const result = books.map(
    (item) => `${item.name} - ${item.genre} - ${item.author.name}`
  )
  return result
}

// console.log(formatedBookNames());

module.exports = { formatedBookNames }
