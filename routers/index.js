import { Router } from "express"
import BookRouter from "./book.routes.js"

const MainRouter = Router()

MainRouter.use("/books", BookRouter) 

export default MainRouter
