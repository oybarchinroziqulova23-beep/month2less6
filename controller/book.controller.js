let books = []

const createBook = (req, res) => {
  const { title, author, year } = req.body

  if (!title || !author || !year) {
    return res.status(400).json({ error: "title, author and year are must be input !" })
  }

  const book = {
    id: String(Date.now()), 
    title,
    author,
    year
  }

  books.push(book)
  res.status(201).json(book)
}

const getAllBooks = (req, res) => {
  res.status(200).json(books)
}

const updateBook = (req, res) => {
  const { id } = req.params
  const foundedBook = books.find((b) => b.id === id)

  if (!foundedBook) {
    return res.status(404).json({ error: "Book is not found" })
  }

  Object.assign(foundedBook, req.body) 
  res.status(200).json({ message: "Successfully updated", book: foundedBook })
}

const deleteBook = (req, res) => {
  const { id } = req.params
  const index = books.findIndex((b) => b.id === id)

  if (index === -1) {
    return res.status(404).json({ error: "Book is not found" })
  }

  books.splice(index, 1)
  res.status(200).json({ message: "Book is deleted" })
}

export { createBook, getAllBooks, updateBook, deleteBook }
