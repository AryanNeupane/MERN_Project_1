
let express =require("express")
const { books } = require("./database/connection")
const app = express()

require("./database/connection")

app.use(express.json())



app.get('/books',async (req, res) => {
  //logic 
  const datas= await books.findAll()
  res.json({
    message:"Books fetched",
    datas
  })
})



app.post("/books",(req,res)=>{
  const {bookName,bookPrice,bookAuthor,bookGenre} = req.body
  //logic
  books.create({
    bookName,
    bookPrice,
    bookAuthor,
    bookGenre
  })
  
  
  res.json({
    message:"books uplaoaded Successfully"
  })
})

app.delete("/books/:id",(req,res)=>{
   res.json({
    message:"Books deleted",
})
})

app.patch("/books/:id",(req,res)=>{
   res.json({
    message:"Books updated",
})
})








app.listen(3000,()=>{
    console.log("backend Started")
})