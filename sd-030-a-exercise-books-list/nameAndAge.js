const books = require('./data/books');

const nameAndAge = () => {
  const mapped = books.map((item) => {
    const some = item.releaseYear - item.author.birthYear;
    return { author: item.author.name, age: some };
  });
  return mapped.sort((a, b) => a.age - b.age);
};

// console.log(nameAndAge());
module.exports = { nameAndAge };
