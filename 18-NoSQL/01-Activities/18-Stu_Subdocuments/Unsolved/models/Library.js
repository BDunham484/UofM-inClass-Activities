const mongoose = require('mongoose');

// TODO: Define a new schema named `bookSchema` for the subdocument
const bookSchema = new mongoose.Schema({
  name: {
    type: String
  },
  author: {
    type: String
  },
  price: {
    type: Number
  }
});

const librarySchema = new mongoose.Schema({
  name: { type: String, required: true },
  //
  // TODO: Add the `books` subdocument to the parent document as an array
  books: [bookSchema],
  //
  lastAccessed: { type: Date, default: Date.now },
});

// TODO: Create a model named `Library`
const Library = mongoose.model('Library', librarySchema);

// TODO: Create a new instance of the model including the subdocuments
const bookData = [
  {
    name: "The Tommyknockers",
    author: "Stephen King",
    price: 12.99
  },
  {
    name: "1984",
    author: "George Orwell",
    price: 10.99
  },
  {
    name: "American Psycho",
    author: "Bret Easton Ellis",
    price: 14.99
  }
]

Library.create(
  { name: 'Big Ol Book Place', books: bookData }, (err, data) => {
    if (err) {
      console.error(err);
    }
    console.log(data);
  }
)

module.exports = Library;
