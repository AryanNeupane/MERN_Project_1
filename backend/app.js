
let express =require("express")
const app = express()

require("./database/connection")



app.get('/books', (req, res) => {
  //logic 
  res.json({
    message:"Books fetched",
    
  })
})



app.post("/books",(req,res)=>{
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