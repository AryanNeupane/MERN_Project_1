require("dotenv").config(); // <-- Load .env variables at the top

const { Sequelize, DataTypes } = require("sequelize");

 

// Use the connection string from .env
const sequelize = new Sequelize(process.env.DB_URL);

sequelize.authenticate()
  .then(() => {
    console.log("Authenticated and connected");
  })
  .catch((err) => {
    console.log("Err0r: " + err);
  });

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.books=require("./models/books.model")(sequelize,DataTypes)


// yeha kei changes garnu parema tyo force ko thua ma alter: true rakhne

sequelize.sync({ force: false }).then(() => {
  console.log("Database & tables created!");
});
module.exports = db;

