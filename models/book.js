const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
  bookId: String,
  name: String,
  introduction: String,
  author: String,
  publish_year: Number,
  status: String
})

const Book = new mongoose.model("book", bookSchema);

module.exports = book;