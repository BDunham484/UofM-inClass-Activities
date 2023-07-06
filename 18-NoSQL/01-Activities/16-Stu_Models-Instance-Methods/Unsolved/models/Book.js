const mongoose = require('mongoose');

// TODO: Define a new schema named `bookSchema`
const bookSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: false
    }
})
// TODO: Create a custom instance method named `getDiscount`
bookSchema.methods.getDiscount = function () {
    this.price = this.price * .5
    console.log(`The price of ${this.name} is now ${this.price}`)
}
// TODO: Create a model named `Book`
const Book = mongoose.model('Book', bookSchema);
// TODO: Create a new instance of the model
const newBook = new Book({
    name: "The Tommyknockers",
    author: "Stephen King",
    price: 12.99
})
// TODO: Call the custom instance method on the instance
newBook.getDiscount();


module.exports = Book;
