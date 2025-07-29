const { books } = require("./database/connection")


exports.fetchBooks= async (req, res) => {
  //logic 
  const datas= await books.findAll()
  res.json({
    message:"Books fetched",
    datas
  })
}

exports.addBook = async (req, res) => {
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
}

exports.deleBook=(req,res)=>{
   res.json({
    message:"Books deleted",
})
}

exports.updateBook = (req, res) => {
  res.json({
    message: "Books updated",       
    })
}

// module.exports = {
//   fetchBooks,   
//     addBook,
//     deleBook,
//     updateBook
// }