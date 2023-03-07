const { books } = require('../data/library')

// Requisito 1
const fantasyOrScienceFiction = () =>
  books.filter(
    (item) => item.genre === 'Fantasia' || item.genre === 'Ficção Científica'
  )

// console.log(fantasyOrScienceFiction());

const oldBooksOrdered = (year) =>
  books
    .filter((item) => year - item.releaseYear > 60)
    .sort((a, b) => a.releaseYear - b.releaseYear)

// console.log(oldBooksOrdered(2020));

const booksByAuthorBirthYear = (birthYear) =>
  books
    .filter((item) => item.author.birthYear === birthYear)
    .map((element) => element.name)

// console.log(booksByAuthorBirthYear(1920));

const fantasyOrScienceFictionAuthors = () =>
  books
    .filter(
      (item) => item.genre === 'Ficção Científica' || item.genre === 'Fantasia'
    )
    .map((item) => item.author.name)
    .sort()

// console.log(fantasyOrScienceFictionAuthors());
const oldBooks = (year) =>
  books.filter((item) => year - item.releaseYear > 60).map((item) => item.name)

// console.log(oldBooks(2022));
const authorWith3DotsOnName = () =>
  books
    .reduce((acc, cur) => {
      const countDots = cur.author.name.split('.').length - 1
      if (countDots >= 3) {
        acc.push(cur.name)
      }
      return acc
    }, [])
    .shift()

console.log(authorWith3DotsOnName())

module.exports = {
  fantasyOrScienceFiction,
  oldBooksOrdered,
  booksByAuthorBirthYear,
  fantasyOrScienceFictionAuthors,
  oldBooks,
  authorWith3DotsOnName
}
