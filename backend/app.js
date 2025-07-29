
let express =require("express")
const { books } = require("./database/connection")
const app = express()
const { fetchBooks, addBook, deleBook, updateBook } = require("./controllers/bookController")

require("./database/connection")

app.use(express.json())



app.get('/books',fetchBooks)
app.post("/books",addBook)
app.delete("/books/:id",deleBook)
app.patch("/books/:id",updateBook)








app.listen(3000,()=>{
    console.log("backend Started")
})