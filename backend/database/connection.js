const {Sequelize,DataTypes}=require("sequelize")



const sequelize = new Sequelize("postgresql://postgres.rtelxkdpogfollqvnwxb:jaishreeram@aws-0-ap-south-1.pooler.supabase.com:6543/postgres"
)



sequelize.authenticate()
.then(()=>{
    console.log("Authenticated and connected")
})
.catch((err)=>{
    console.log("Err0r"+ err)
})


const db={}
db.Sequelize=sequelize
db.sequelize=sequelize

module.exports=db


