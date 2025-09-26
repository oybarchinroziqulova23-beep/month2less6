import express from "express"
import MainRouter from "./routers/index.js"

const app = express()

app.use(express.json())   
app.use("/", MainRouter)

app.listen(3000, () => {
  console.log("Server running on port 3000")
})
