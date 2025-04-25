let books = require('../data/booksData');

exports.getAllBooks = (req, res) => {
  res.json(books);
};

exports.getBookById = (req, res) => {
  const book = books.find(b => b.id === parseInt(req.params.id));
  book ? res.json(book) : res.status(404).json({ message: 'Book not found' });
};

exports.createBook = (req, res) => {
  const newBook = {
    id: books.length + 1,
    ...req.body
  };
  books.push(newBook);
  res.status(201).json(newBook);
};

exports.updateBook = (req, res) => {
  const index = books.findIndex(b => b.id === parseInt(req.params.id));
  if (index === -1) return res.status(404).json({ message: 'Book not found' });

  books[index] = { id: books[index].id, ...req.body };
  res.json(books[index]);
};

exports.deleteBook = (req, res) => {
  const index = books.findIndex(b => b.id === parseInt(req.params.id));
  if (index === -1) return res.status(404).json({ message: 'Book not found' });

  const deleted = books.splice(index, 1);
  res.json(deleted[0]);
};
