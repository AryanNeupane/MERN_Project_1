
let express =require("express")
const app = express()


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


postgresql="postgresql://postgres.rtelxkdpogfollqvnwxb:#Happiness*100@aws-0-ap-south-1.pooler.supabase.com:6543/postgres"






app.listen(3000,()=>{
    console.log("backend Started")
})