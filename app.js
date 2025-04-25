const express = require('express');
const app = express();
const booksRoute = require('./routes/books');

app.use(express.json()); // JSON parser
app.use('/books', booksRoute);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
