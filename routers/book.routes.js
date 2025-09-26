import { Router } from "express"
import { createBook, getAllBooks, updateBook, deleteBook } from "../controller/book.controller.js"

const BookRouter = Router()

BookRouter.get("/", getAllBooks)     
BookRouter.post("/", createBook)    
BookRouter.patch("/:id", updateBook)  
BookRouter.delete("/:id", deleteBook)

export default BookRouter
