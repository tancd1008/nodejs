import express from "express";
import { createBook, deleteBook, listBook, listBookDetail, updateBook } from "../controllers/books";

const bookRouter = new express.Router();
bookRouter.get('/books',listBook)
bookRouter.get('/books/:id',listBookDetail)
// bookRouter.post('/books/:UserId',requiredSignIn,isAuth,isAdmin, createProduct)
bookRouter.post('/books', createBook)
bookRouter.delete('/books/:id',deleteBook)
bookRouter.patch('/books/:id', updateBook)

export default bookRouter;