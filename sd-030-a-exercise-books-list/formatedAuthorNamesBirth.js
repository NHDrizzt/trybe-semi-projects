const books = require('./data/books')

const formatedAuthorNamesBirth = () => {
  const result = books.map(
    (item) => `${item.author.name} - ${item.author.birthYear}`
  )
  return result
}

// console.log(formatedAuthorNamesBirth());

module.exports = { formatedAuthorNamesBirth }
